export type BlogSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  content: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "first-home-buyer-tips-2024",
    title: "5 Tips for First-Home Buyers in 2024",
    excerpt:
      "Navigating the property market as a first-time buyer can be daunting. Here are our top strategies to help you secure your dream home.",
    date: "Oct 12, 2024",
    author: "Sarah Jenkins",
    category: "Home Buying",
    readTime: "5 min read",
    content: [
      {
        heading: "Start with a clear budget",
        paragraphs: [
          "Before you browse listings, define a purchase budget that includes stamp duty, conveyancing, inspections, and a contingency buffer.",
          "Aim for a deposit that keeps your loan-to-value ratio competitive to reduce LMI costs.",
        ],
      },
      {
        heading: "Get pre-approval early",
        paragraphs: [
          "Pre-approval strengthens your position when making offers and keeps your search focused on realistic price ranges.",
        ],
        list: [
          "Review your credit score and tidy any outstanding debts.",
          "Prepare recent payslips, bank statements, and identification documents.",
          "Compare lenders for incentives and turnaround times.",
        ],
      },
      {
        heading: "Lean on expert guidance",
        paragraphs: [
          "A broker can translate policy differences between lenders and surface products that fit your goals, whether that is flexibility or certainty.",
        ],
      },
    ],
  },
  {
    slug: "fixed-vs-variable-rates",
    title: "Understanding Fixed vs. Variable Rates",
    excerpt:
      "Should you lock in your rate or go variable? We break down the pros and cons of each to help you make an informed decision.",
    date: "Oct 05, 2024",
    author: "Michael Chen",
    category: "Finance Guides",
    readTime: "7 min read",
    content: [
      {
        heading: "When a fixed rate helps",
        paragraphs: [
          "Fixed rates offer repayment certainty, which can be helpful for budgeting and first-year cash flow planning.",
        ],
        list: [
          "Useful during renovation periods when costs are higher.",
          "Provides stability if you expect rates to rise.",
          "Check break fees before locking in.",
        ],
      },
      {
        heading: "Where variable shines",
        paragraphs: [
          "Variable loans typically include offset accounts and redraw, giving you flexibility to reduce interest with surplus cash.",
        ],
        list: [
          "Benefit if rates fall while you hold the loan.",
          "Often easier to make extra repayments without penalties.",
        ],
      },
      {
        heading: "Consider a split strategy",
        paragraphs: [
          "Splitting part fixed and part variable can balance certainty with flexibility. A broker can model scenarios based on your goals.",
        ],
      },
    ],
  },
  {
    slug: "improve-borrowing-power",
    title: "How to Improve Your Borrowing Power",
    excerpt:
      "Want to increase your loan approval chances? Discover practical steps you can take today to boost your borrowing capacity.",
    date: "Sep 28, 2024",
    author: "Sarah Jenkins",
    category: "Credit Tips",
    readTime: "6 min read",
    content: [
      {
        heading: "Tidy your expenses",
        paragraphs: [
          "Lenders review your living expenses closely. Trim discretionary spending 3 months before applying to present stronger affordability.",
        ],
      },
      {
        heading: "Reduce unsecured debt",
        paragraphs: [
          "Paying down credit cards and personal loans lowers your liabilities and can lift your borrowing power.",
        ],
        list: [
          "Lower credit limits if you do not need them.",
          "Consolidate small debts to simplify repayments.",
        ],
      },
      {
        heading: "Document stable income",
        paragraphs: [
          "Keep payslips and employment letters handy. If self-employed, ensure BAS and tax returns are up to date.",
        ],
      },
    ],
  },
  {
    slug: "benefits-of-refinancing",
    title: "The Benefits of Refinancing Your Home Loan",
    excerpt:
      "Refinancing isn't just about lower rates. Learn how it can help you access equity for renovations or investments.",
    date: "Sep 15, 2024",
    author: "David Wilson",
    category: "Refinancing",
    readTime: "4 min read",
    content: [
      {
        heading: "Unlock better pricing",
        paragraphs: [
          "Switching lenders or negotiating with your current lender can secure sharper rates, reducing monthly repayments.",
        ],
      },
      {
        heading: "Use equity strategically",
        paragraphs: [
          "If your property has grown in value, refinancing can access funds for upgrades or investments without separate personal loans.",
        ],
      },
      {
        heading: "Check the total cost",
        paragraphs: [
          "Account for discharge fees, new application fees, and valuation costs. A broker can compare offers and highlight break-even timelines.",
        ],
      },
    ],
  },
];

export const getPostBySlug = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);

