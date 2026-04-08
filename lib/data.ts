export const projects = [
  {
    slug: "securecore-api",
    title: "SecureCore API",
    tag: "Security",
    year: "2025",
    tagline: "Zero-trust authentication layer for distributed microservices.",
    context:
      "A fintech client needed to unify authentication across 14 independently deployed services without introducing a single point of failure.",
    constraint:
      "No downtime during migration. Each service had its own legacy auth mechanism. The team had 8 weeks.",
    approach:
      "Designed a token-based zero-trust gateway using JWT with short-lived tokens, asymmetric key rotation, and per-service scope enforcement. Built in Node.js on top of a Redis cluster for token state.",
    outcome:
      "Reduced auth-related incidents by 94% in the first quarter post-deployment. Migration completed in 6 weeks with zero downtime.",
  },
  {
    slug: "resilience-engine",
    title: "Resilience Engine",
    tag: "Systems",
    year: "2025",
    tagline: "Fault-tolerant event streaming at 40k messages per second.",
    context:
      "A logistics platform was losing order events during peak load, causing downstream sync failures and customer-facing errors.",
    constraint:
      "The existing Kafka setup couldn't be replaced — only extended. Budget for new infrastructure was limited.",
    approach:
      "Introduced a dead-letter queue architecture with exponential backoff, idempotency keys at the consumer layer, and a replay service for failed events. Added partition-level health monitoring.",
    outcome:
      "Event loss dropped to zero over 3 months of production operation. Peak throughput increased 3x without additional broker nodes.",
  },
  {
    slug: "datavault",
    title: "DataVault",
    tag: "Infrastructure",
    year: "2024",
    tagline: "Encrypted data pipeline with compliance-first architecture.",
    context:
      "A healthcare startup needed to move patient data between cloud regions while maintaining POPIA and GDPR compliance across jurisdictions.",
    constraint:
      "Data could not be decrypted in transit or at rest in any region outside the originating zone. Audit trails were legally required.",
    approach:
      "Built an envelope encryption pipeline using AWS KMS with regional key policies. All data transformations occurred in-memory within isolated Lambda execution environments. Full audit logging via CloudTrail.",
    outcome:
      "Passed external compliance audit on first attempt. Pipeline now handles 2M+ records per day with full encryption and audit coverage.",
  },
  {
    slug: "orion-dashboard",
    title: "Orion Dashboard",
    tag: "Cloud",
    year: "2024",
    tagline: "Real-time observability platform for cloud infrastructure.",
    context:
      "An engineering team of 30 had no unified visibility into their distributed AWS infrastructure — incidents were discovered by customers, not engineers.",
    constraint:
      "Must aggregate metrics from 6 different AWS services in under 500ms. Budget was tight, so managed observability tools were off the table.",
    approach:
      "Built a custom Next.js dashboard backed by a lightweight Go aggregation service pulling from CloudWatch, ALB logs, and RDS Performance Insights. WebSockets for real-time updates.",
    outcome:
      "Mean time to detection dropped from 22 minutes to under 90 seconds. The team detected and resolved 3 major incidents internally before any customer impact in the first month.",
  },
];

export const capabilities = [
  { num: "01", label: "Distributed Systems" },
  { num: "02", label: "Cloud Infrastructure" },
  { num: "03", label: "Security Principles" },
  { num: "04", label: "Performance Optimisation" },
];

export const tools = [
  "Node.js",
  "TypeScript",
  "Docker",
  "Kubernetes",
  "AWS",
  "PostgreSQL",
  "Redis",
  "Terraform",
  "Next.js",
  "Go",
];

export const collaborations = [
  {
    title: "Systems Design",
    desc: "Designing resilient, scalable architectures built to perform at production scale without becoming a liability.",
  },
  {
    title: "Software Engineering",
    desc: "Building performant, production-grade systems with a focus on long-term maintainability and security.",
  },
  {
    title: "Technical Strategy",
    desc: "Aligning engineering decisions with business outcomes — cutting through complexity to reach clarity.",
  },
];
