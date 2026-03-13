from PIL import Image
import sys

# Braille patterns (Unicode U+2800 to U+28FF)
BRAILLE_BASE = 0x2800

def image_to_braille(image_path, width=45, height=55):
    """Convert image to Braille patterns with fixed dimensions"""
    img = Image.open(image_path)
    
    # Resize to exact dimensions for the panel
    # Each braille char represents 2x4 pixels
    pixel_width = width * 2
    pixel_height = height * 4
    img = img.resize((pixel_width, pixel_height))
    img = img.convert('L')
    pixels = list(img.getdata())
    
    braille_art = []
    
    for y in range(0, pixel_height, 4):
        row = ''
        for x in range(0, pixel_width, 2):
            # Get 2x4 block of pixels
            dots = 0
            for dy in range(4):
                for dx in range(2):
                    px = x + dx
                    py = y + dy
                    if px < pixel_width and py < pixel_height:
                        pixel = pixels[py * pixel_width + px]
                        # If pixel is dark enough, set the dot
                        if pixel < 140:  # Slightly higher threshold for better contrast
                            dot_index = dy * 2 + dx
                            # Braille dot positions:
                            # 0 3
                            # 1 4
                            # 2 5
                            # 6 7
                            mapping = [0, 3, 1, 4, 2, 5, 6, 7]
                            if dot_index < 8:
                                dots |= (1 << mapping[dot_index])
            
            row += chr(BRAILLE_BASE + dots)
        braille_art.append(row)
    
    return '\n'.join(braille_art)

def main():
    image_path = 'public/pfp.jpg'
    
    print("Converting to Braille (terminal style)...")
    print("=" * 80)
    # Generate larger braille art for the Safari panel
    braille_art = image_to_braille(image_path, width=42, height=50)
    print(braille_art)
    
    # Save to file
    with open('public/pfp_braille.txt', 'w', encoding='utf-8') as f:
        f.write(braille_art)
    
    print(f"\n✓ Saved to public/pfp_braille.txt")
    print(f"  Dimensions: 42 chars wide x 50 lines")

if __name__ == '__main__':
    main()
