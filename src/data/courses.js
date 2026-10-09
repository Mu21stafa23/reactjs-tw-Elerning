// Sample catalog for the demo. Courses, instructors and figures are made up.

export const subjects = [
  { id: 'web', name: 'Web development', blurb: 'Build pages and interfaces that work on any screen.' },
  { id: 'data', name: 'Data', blurb: 'Clean, question and chart the numbers you already have.' },
  { id: 'design', name: 'Design', blurb: 'Lay out screens people understand at a glance.' },
  { id: 'marketing', name: 'Marketing', blurb: 'Plan and measure campaigns on social platforms.' },
  { id: 'it', name: 'IT support', blurb: 'Keep computers and networks running.' },
]

export const levels = ['Beginner', 'Intermediate']

// A week is [title, [[lesson title, minutes], ...]].
const catalog = [
  {
    slug: 'html-and-css-from-zero',
    title: 'HTML and CSS from zero',
    subject: 'web',
    level: 'Beginner',
    hours: 24,
    featured: true,
    summary:
      'Write your first web pages by hand, then lay them out so they read well on a phone and on a wide screen.',
    outcomes: [
      'Structure a page with headings, lists, links, images and forms',
      'Style text, color and spacing with CSS',
      'Lay out a page with flexbox and grid',
      'Make one layout adapt from phone to desktop',
    ],
    instructor: { name: 'Salma Idris', role: 'Front-end developer' },
    weeks: [
      ['How a web page is put together', [['What the browser does with your file', 14], ['Headings, paragraphs and lists', 22], ['Links and images', 18]]],
      ['Styling with CSS', [['Selectors and the cascade', 24], ['Color, type and spacing', 26], ['The box model', 20]]],
      ['Layout', [['Flexbox for rows and columns', 28], ['Grid for whole pages', 30], ['A navigation bar from scratch', 24]]],
      ['Responsive pages', [['Thinking mobile first', 16], ['Media queries', 22], ['Project: a three-section landing page', 40]]],
    ],
  },
  {
    slug: 'react-for-front-end-developers',
    title: 'React for front-end developers',
    subject: 'web',
    level: 'Intermediate',
    hours: 40,
    featured: false,
    summary:
      'Move from static pages to interfaces made of components, with state, routing and data loaded from an API.',
    outcomes: [
      'Break a screen into components and pass data between them',
      'Keep interface state in the right place',
      'Add pages and links with a router',
      'Load, show and handle errors from remote data',
    ],
    instructor: { name: 'Omar Al-Tayeb', role: 'Senior front-end developer' },
    weeks: [
      ['Thinking in components', [['From markup to components', 20], ['Props and composition', 24], ['Rendering lists', 18]]],
      ['State and events', [['useState in practice', 26], ['Forms that stay in sync', 28], ['Lifting state up', 22]]],
      ['Side effects', [['useEffect without surprises', 30], ['Fetching data', 26], ['Loading and error states', 20]]],
      ['Routing', [['Pages and links', 22], ['Route parameters', 20], ['Search and filters in the URL', 24]]],
      ['Shipping', [['Shared state with context', 26], ['Building for production', 18], ['Project: a course catalog', 45]]],
    ],
  },
  {
    slug: 'arabic-and-english-interfaces',
    title: 'Arabic and English interfaces',
    subject: 'web',
    level: 'Intermediate',
    hours: 16,
    featured: false,
    summary:
      'Build one interface that reads naturally right to left and left to right, without keeping two copies of the layout.',
    outcomes: [
      'Set language and direction correctly for every page',
      'Replace left and right with logical CSS properties',
      'Choose and pair Arabic and Latin typefaces',
      'Handle numbers, dates and mixed-direction text',
    ],
    instructor: { name: 'Salma Idris', role: 'Front-end developer' },
    weeks: [
      ['Direction and language', [['What dir and lang change', 16], ['Logical properties', 24], ['Icons that should and should not flip', 14]]],
      ['Type and content', [['Arabic typefaces on the web', 20], ['Line height and letter spacing', 16], ['Numbers, dates and currency', 22]]],
      ['Putting it together', [['A language switcher', 24], ['Testing both directions', 18], ['Project: a bilingual pricing page', 38]]],
    ],
  },
  {
    slug: 'cleaning-messy-data',
    title: 'Cleaning messy data in spreadsheets',
    subject: 'data',
    level: 'Beginner',
    hours: 15,
    featured: true,
    summary:
      'Turn an export full of duplicates, blanks and mixed formats into a table you can trust and analyze.',
    outcomes: [
      'Spot the common problems in a raw export',
      'Fix dates, numbers and text stored in the wrong format',
      'Find and remove duplicates safely',
      'Document what you changed so others can check it',
    ],
    instructor: { name: 'Huda Babiker', role: 'Data analyst' },
    weeks: [
      ['Knowing your data', [['What tidy data looks like', 16], ['Profiling a new file', 20], ['Keeping the original safe', 10]]],
      ['Fixing values', [['Text: trimming, case and splitting', 24], ['Dates and numbers that are really text', 26], ['Blanks and placeholders', 18]]],
      ['Fixing rows', [['Finding duplicates', 20], ['Checking against a reference list', 22], ['Project: clean a sales export', 36]]],
    ],
  },
  {
    slug: 'data-visualization-people-can-read',
    title: 'Data visualization people can read',
    subject: 'data',
    level: 'Intermediate',
    hours: 22,
    featured: false,
    summary:
      'Choose the right chart for the question, strip out what distracts, and say the finding in the title.',
    outcomes: [
      'Match a chart type to the comparison you are making',
      'Use color to carry meaning, not decoration',
      'Write titles and labels that state the finding',
      'Assemble charts into a one-page dashboard',
    ],
    instructor: { name: 'Huda Babiker', role: 'Data analyst' },
    weeks: [
      ['Choosing a chart', [['Start from the question', 18], ['Comparison, trend, share and relationship', 26], ['When a table is better', 12]]],
      ['Making it clear', [['Removing clutter', 20], ['Color with a job', 22], ['Axes people can trust', 18]]],
      ['Saying something', [['Titles that state the finding', 16], ['Annotations', 18], ['Designing for a small screen', 20]]],
      ['Dashboards', [['Laying out a page of charts', 24], ['Filters and drill-down', 22], ['Project: a monthly sales dashboard', 42]]],
    ],
  },
  {
    slug: 'sql-for-everyday-questions',
    title: 'SQL for everyday questions',
    subject: 'data',
    level: 'Beginner',
    hours: 20,
    featured: false,
    summary:
      'Ask a database the questions you would otherwise answer by scrolling: how many, which ones, and compared with what.',
    outcomes: [
      'Select, filter and sort rows',
      'Summarize with counts, sums and averages',
      'Combine tables with joins',
      'Read someone else’s query and explain what it does',
    ],
    instructor: { name: 'Yousif Hamid', role: 'Database developer' },
    weeks: [
      ['Reading a table', [['Tables, rows and columns', 14], ['SELECT and WHERE', 24], ['Sorting and limiting', 16]]],
      ['Summarizing', [['COUNT, SUM and AVG', 22], ['GROUP BY', 26], ['Filtering groups with HAVING', 18]]],
      ['Combining tables', [['Keys and relationships', 18], ['INNER and LEFT joins', 30], ['Joining three tables', 22]]],
      ['Real questions', [['Dates and time periods', 22], ['Subqueries', 24], ['Project: answer five business questions', 40]]],
    ],
  },
  {
    slug: 'interface-design-basics',
    title: 'Interface design basics',
    subject: 'design',
    level: 'Beginner',
    hours: 18,
    featured: true,
    summary:
      'Learn the handful of rules behind screens that feel obvious: hierarchy, spacing, type and color.',
    outcomes: [
      'Give every screen one clear starting point',
      'Space elements with a consistent scale',
      'Pick two typefaces and a type scale',
      'Check color contrast for readability',
    ],
    instructor: { name: 'Rania Osman', role: 'Product designer' },
    weeks: [
      ['Hierarchy', [['What the eye sees first', 16], ['Size, weight and position', 22], ['Grouping related things', 18]]],
      ['Spacing and layout', [['A spacing scale', 18], ['Grids and alignment', 22], ['White space is not empty', 14]]],
      ['Type and color', [['Choosing typefaces', 22], ['A palette with a purpose', 24], ['Contrast and accessibility', 18]]],
      ['Practice', [['Redesigning a sign-in form', 26], ['Redesigning a settings page', 28], ['Project: a mobile home screen', 40]]],
    ],
  },
  {
    slug: 'advertising-on-social-platforms',
    title: 'Advertising on social platforms',
    subject: 'marketing',
    level: 'Beginner',
    hours: 14,
    featured: false,
    summary:
      'Plan a small paid campaign from goal to report: who it is for, what it says, and how you will know it worked.',
    outcomes: [
      'Turn a business goal into a campaign objective',
      'Describe an audience precisely',
      'Write and test two versions of an ad',
      'Read the numbers that matter and ignore the rest',
    ],
    instructor: { name: 'Mona Khalid', role: 'Digital marketer' },
    weeks: [
      ['Planning', [['Goals and objectives', 16], ['Defining the audience', 22], ['Setting a budget', 14]]],
      ['Creating', [['Writing ad copy', 22], ['Images and short video', 20], ['Testing two versions', 18]]],
      ['Measuring', [['Reach, clicks and conversions', 22], ['Cost per result', 16], ['Project: a one-page campaign report', 34]]],
    ],
  },
  {
    slug: 'computer-networking-fundamentals',
    title: 'Computer networking fundamentals',
    subject: 'it',
    level: 'Beginner',
    hours: 25,
    featured: false,
    summary:
      'Understand what happens between typing an address and seeing a page, and use that to find where a connection breaks.',
    outcomes: [
      'Explain how devices find each other on a network',
      'Read an IP address and a subnet mask',
      'Describe what DNS and DHCP do',
      'Troubleshoot a connection step by step',
    ],
    instructor: { name: 'Yousif Hamid', role: 'Network administrator' },
    weeks: [
      ['The big picture', [['What a network is', 14], ['Layers, in plain words', 24], ['Cables, Wi-Fi and switches', 20]]],
      ['Addresses', [['IP addresses', 24], ['Subnets', 28], ['Routers and gateways', 22]]],
      ['Names and services', [['DNS', 22], ['DHCP', 18], ['Ports and common services', 20]]],
      ['The web', [['What happens when you open a page', 22], ['HTTP and HTTPS', 20], ['Firewalls', 18]]],
      ['Troubleshooting', [['A method for finding faults', 20], ['ping, traceroute and nslookup', 26], ['Project: diagnose three broken setups', 40]]],
    ],
  },
]

export const courses = catalog.map((course) => {
  const weeks = course.weeks.map(([title, lessons], weekIndex) => ({
    number: weekIndex + 1,
    title,
    lessons: lessons.map(([lessonTitle, minutes], lessonIndex) => ({
      id: `${weekIndex + 1}.${lessonIndex + 1}`,
      title: lessonTitle,
      minutes,
    })),
  }))
  const lessons = weeks.flatMap((week) => week.lessons)
  return {
    ...course,
    weeks,
    lessons,
    lessonCount: lessons.length,
    videoMinutes: lessons.reduce((total, lesson) => total + lesson.minutes, 0),
  }
})

export function getCourse(slug) {
  return courses.find((course) => course.slug === slug)
}

export function getSubject(id) {
  return subjects.find((subject) => subject.id === id)
}

export const totals = {
  courses: courses.length,
  lessons: courses.reduce((total, course) => total + course.lessonCount, 0),
  hours: courses.reduce((total, course) => total + course.hours, 0),
}

// Cover colors per subject, as complete class names so Tailwind keeps them.
export const subjectStyle = {
  web: { cover: 'bg-cobalt text-white', bar: 'bg-cobalt' },
  data: { cover: 'bg-marker text-ink', bar: 'bg-marker' },
  design: { cover: 'bg-ink text-white dark:bg-white dark:text-ink', bar: 'bg-ink dark:bg-white' },
  marketing: { cover: 'bg-coral text-ink', bar: 'bg-coral' },
  it: { cover: 'bg-pine text-white', bar: 'bg-pine' },
}
