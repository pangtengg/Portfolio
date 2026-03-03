export default async function handler(req, res) {
  const query = `
  {
    user(login: "pangtengg") {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
            }
          }
        }
      }
    }
  }
  `;

  try {
    const r = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    const data = await r.json();

    // Cache for 60s on the CDN, allow stale while revalidating for 30s
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=30');
    return res.status(200).json(data);
  } catch (err) {
    console.error('api/github error', err);
    return res.status(500).json({ error: 'Failed to fetch GitHub data' });
  }
}
