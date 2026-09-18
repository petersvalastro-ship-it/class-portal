// Supplemental reading pages transcribed and organized from the attached
// LaunchPad Middle School Entrepreneurship Student Textbooks.

export type TextbookCaseStudy = {
  name: string;
  subtitle: string;
  body: string[];
  questions: string[];
};

export type TextbookPage = {
  id: string;
  chapterId: string;
  title: string;
  minutes: number;
  bigQuestion: string;
  paragraphs: string[];
  keyIdea: string;
  caseStudy: TextbookCaseStudy;
};

export const TEXTBOOK_PAGES: TextbookPage[] = [
  {
    id: 'p1-1',
    chapterId: 'ch1',
    title: 'Reading 1.A — From Complaint to Opportunity',
    minutes: 5,
    bigQuestion: 'How does an entrepreneur turn everyday friction into value?',
    paragraphs: [
      'Have you ever seen a problem at school and thought, “Someone should really fix that”? That reaction is a useful starting point. Entrepreneurship is not limited to large companies or adults with large budgets. It is a way of seeing everyday situations as opportunities to create value.',
      'An entrepreneur notices a problem, learns who experiences it, explores possible solutions, and takes action. The action may begin with a sketch, a service, a handmade prototype, a survey, or a simple digital mockup. The key is that the idea moves from thought to evidence.',
      'Start by naming the friction point in concrete, observable terms. Ask who experiences it, when it happens, and what happens now. Then turn the complaint into a How Might We question and gather evidence before investing in a solution.',
      'An opportunity is a problem plus a possible path to useful value. Need Validation uses interviews, surveys, observations, or tests to find out whether the problem matters before a major build begins.',
    ],
    keyIdea: 'Notice the friction, ask who experiences it, frame a How Might We question, and test the need with evidence.',
    caseStudy: {
      name: "Moziah Bridges — Mo's Bows",
      subtitle: 'A personal problem becomes an opportunity',
      body: [
        'At age 9, Moziah Bridges wanted stylish bow ties that fit his personality. He learned to sew with help from his grandmother and used scrap fabrics.',
        'He started with a small product, sold locally, and expanded as people showed interest. His venture began with a specific personal frustration and resources already available to him.',
      ],
      questions: [
        'What friction point did Moziah notice?',
        'Which resources did he already have?',
        'How did his small first step create evidence of customer interest?',
      ],
    },
  },
  {
    id: 'p1-2',
    chapterId: 'ch1',
    title: 'Reading 1.B — The Entrepreneurial Mindset',
    minutes: 5,
    bigQuestion: 'Which habits help an entrepreneur move from “I notice” to “I can”?',
    paragraphs: [
      'Four characteristics show up again and again: curiosity, resilience and grit, creative problem solving, and calculated risk-taking. Curiosity pushes an entrepreneur to ask “Why?” and “What if?” Empathy keeps the focus on people rather than on a favorite idea. Resilience matters because the first attempt may not work.',
      'Technical skills—coding, accounting, design, sales, and presentation—matter, but the entrepreneurial mindset affects how those skills are used. The goal is not to avoid mistakes. It is to turn results into learning. A failed prototype can reveal which material, message, feature, or process needs to change.',
      'A strong starting point often sits at the intersection of what you enjoy, what you can do well, and what people need. “How” assumes a solution is possible. “Might” gives permission to explore. “We” keeps the question collaborative.',
      'The middle-school entrepreneur is not waiting for a future title. The mindset shift is from passive observation to small, self-directed action: treating failure as data, taking DIY initiative, putting empathy first, and seeing friction as opportunity.',
    ],
    keyIdea: 'An Entrepreneurial Mindset combines curiosity, empathy, resourcefulness, resilience, and action.',
    caseStudy: {
      name: 'Mikaila Ulmer — Me & the Bees',
      subtitle: 'Curiosity, family resources, and a small test',
      body: [
        'Mikaila Ulmer became curious about honeybees after personal experiences with bee stings. She combined that curiosity with a family lemonade recipe and local honey.',
        'A youth entrepreneurship opportunity gave her a reason to test the idea, and the venture grew from a small start. Like Moziah, she began with something concrete rather than waiting for a giant factory or a perfect plan.',
      ],
      questions: [
        'How did curiosity shape Mikaila’s entrepreneurial path?',
        'What resources were already available to her?',
        'Where do you see Innovation and Value Creation in her venture?',
      ],
    },
  },
  {
    id: 'p2-1',
    chapterId: 'ch2',
    title: 'Reading 2.A — Needs, Wants & Pain Points',
    minutes: 5,
    bigQuestion: 'How can observation reveal an opportunity worth solving?',
    paragraphs: [
      'Every purchase reflects some combination of practical need, personal preference, convenience, identity, emotion, or enjoyment. Needs are connected to basic functioning and safety. Wants can make life easier, more enjoyable, more expressive, or more comfortable.',
      'A basic winter coat and a designer bomber jacket can both be valuable products, but they serve different motivations. Entrepreneurs should understand which motivation matters to the customer rather than assuming every buyer values the same feature.',
      'Entrepreneurs behave like careful observers. They watch routines, notice bottlenecks, and ask what people do when the system is inconvenient. A Pain Point can be financial, related to time or convenience, caused by a frustrating process, or connected to quality.',
      'Suppose students lose school IDs because the plastic clips break. The visible problem is “students lose IDs.” Observation adds detail: the clip fails, replacement takes time, and the same problem repeats. That pattern helps define a more useful opportunity.',
    ],
    keyIdea: 'Observation turns a general complaint into a specific Pain Point connected to a real Need or Want.',
    caseStudy: {
      name: 'Chester Greenwood',
      subtitle: 'Cold ears, bent wire, and soft materials',
      body: [
        'The textbook describes Chester Greenwood solving a winter comfort problem by combining bent wire with soft materials to create earmuffs.',
        'The important lesson is not the complexity of the invention. It is the fit between a specific problem and a practical solution made from accessible materials.',
      ],
      questions: [
        'What specific Pain Point did Greenwood address?',
        'Was the product serving a Need, a Want, or both?',
        'What could he observe to learn whether the solution worked?',
      ],
    },
  },
  {
    id: 'p2-2',
    chapterId: 'ch2',
    title: 'Reading 2.B — Brainstorming with SCAMPER',
    minutes: 6,
    bigQuestion: 'How can one problem lead to many possible solutions?',
    paragraphs: [
      'Great ideas are rarely produced by waiting for inspiration. SCAMPER gives you a repeatable set of moves: Substitute, Combine, Adapt, Modify, Put to another use, Eliminate, and Reverse or Rearrange.',
      'Substitute changes a material or step. Combine joins two functions. Adapt transfers an idea. Modify changes a property. Put to another use repurposes something. Eliminate simplifies. Reverse or rearrange changes the sequence.',
      'A plain shoe box can become a desk organizer by eliminating unused empty space, combining storage with charging, modifying the openings, and rearranging the way items are accessed.',
      'Generate several directions before choosing one. Then compare the ideas by the customer problem they address, the resources required, and the evidence needed to test them cheaply.',
    ],
    keyIdea: 'SCAMPER provides seven structured ways to transform an ordinary object or idea into new possibilities.',
    caseStudy: {
      name: 'Kavita Shukla & Shubham Banerjee',
      subtitle: 'Accessible materials meet meaningful problems',
      body: [
        'The textbook describes Kavita Shukla connecting an observation about spices with the problem of produce spoilage. Her experiments led to spice-infused paper designed to keep food fresh longer.',
        'It also describes Shubham Banerjee responding to the high cost of standard Braille printers by building an early prototype with a LEGO robotics kit and everyday materials. Both founders turned curiosity into experimentation and focused on a real pain point.',
      ],
      questions: [
        'Which SCAMPER moves can you recognize in each solution?',
        'What resources did each founder use?',
        'Which part of each idea could be tested cheaply?',
      ],
    },
  },
  {
    id: 'p3-1',
    chapterId: 'ch3',
    title: 'Reading 3.A — Define the Customer',
    minutes: 5,
    bigQuestion: 'Who exactly are you designing for?',
    paragraphs: [
      'A common beginner mistake is saying, “My product is for everybody.” Different people have different habits, budgets, schedules, and preferences. A Target Audience is specific enough that you can describe the people you want to understand and serve.',
      'Three layers make that audience clearer. Demographics may include age, grade level, or income range. Geographics may include school, neighborhood, city, or climate. Psychographics include hobbies, values, motivations, and habits.',
      'A Customer Persona is a working model, not proof. The textbook’s example, Tech-Savvy Taylor, is a 13-year-old 8th grader who enjoys mobile gaming, short-form video, and personalized gear. Research is still needed to learn whether the assumptions in the persona are accurate.',
      'Specific does not mean tiny. It means clear enough to make decisions about features, messaging, price, and where a customer can find the offering.',
    ],
    keyIdea: 'Use Demographics, Geographics, and Psychographics to describe a Target Audience, then test the Customer Persona with evidence.',
    caseStudy: {
      name: 'The School Snack Cart Pivot',
      subtitle: 'The original customer assumption',
      body: [
        'A group of 7th graders planned a healthy snack business around organic dried kale chips. Their first plan assumed classmates would want the product.',
        'Before buying inventory, they used free samples and short surveys with classmates. By focusing on actual students instead of an imaginary “everyone,” the team learned that its first Customer Persona and product assumption needed to change.',
      ],
      questions: [
        'Who was the snack cart’s Target Audience?',
        'Which audience details would help the team make a better plan?',
        'Why is a persona a starting hypothesis rather than proof?',
      ],
    },
  },
  {
    id: 'p3-2',
    chapterId: 'ch3',
    title: 'Reading 3.B — Research, Competition & Evidence',
    minutes: 6,
    bigQuestion: 'What evidence should change an entrepreneur’s plan?',
    paragraphs: [
      'Before spending money on a product, entrepreneurs need facts. Primary Research creates new information directly from potential customers through surveys, interviews, observations, focus groups, and product tests. A small interview can uncover details that a multiple-choice survey may miss.',
      'Secondary Research uses information that already exists: articles, reports, public data, competitor websites, and existing reviews. Secondary sources should be checked for date, relevance, and fit.',
      'Competition is broader than businesses that look exactly like yours. Direct Competitors offer similar products to the same customer. Indirect Competitors provide different ways to solve the same underlying need.',
      'A Competitive Matrix compares factors that matter to the customer, such as price, convenience, customization, quality, access, and speed. Its purpose is not to copy a competitor but to understand the alternatives customers already have.',
    ],
    keyIdea: 'Combine Primary and Secondary Research, compare Direct and Indirect Competitors, and let patterns—not guesses—shape the offering.',
    caseStudy: {
      name: 'The School Snack Cart Pivot',
      subtitle: 'Free samples and surveys change the plan',
      body: [
        'The team’s research showed that its original assumption was weak: most students disliked the kale chips they tasted, while many preferred baked apple crisps and fruit smoothies.',
        'Because the team tested before spending heavily, it could change the inventory plan before losing money. The case demonstrates why Market Research is more useful than guessing what customers want.',
      ],
      questions: [
        'Which Primary Research methods did the team use?',
        'What evidence caused the pivot?',
        'Which Direct or Indirect Competitors should the team compare next?',
      ],
    },
  },
  {
    id: 'p4-1',
    chapterId: 'ch4',
    title: 'Reading 4.A — Goods, Services & Bootstrapping',
    minutes: 5,
    bigQuestion: 'How can an entrepreneur begin with resources already available?',
    paragraphs: [
      'Entrepreneurial ideas generally fall into two broad categories. Goods are tangible products that can be produced, packaged, stored, and handed to a customer. Services are activities or expertise performed for a customer.',
      'Bootstrapping means using resources you already have: free digital tools, recycled materials, personal skills, community spaces, or small-scale experiments.',
      'The point is not to avoid every expense. It is to avoid spending before you know what needs to be tested. A free tool, borrowed material, or manual first version can reveal whether an idea deserves a larger investment.',
      'Before building, classify the offering as a Good, a Service, or a combination. Then make a resource list and choose the smallest useful test that can be completed with permission and materials already available.',
    ],
    keyIdea: 'Bootstrapping uses available resources to test a Good or Service before committing to unnecessary expense.',
    caseStudy: {
      name: 'Zappos',
      subtitle: 'Testing online shoe demand without a warehouse',
      body: [
        'The textbook describes an early test in which online shoe demand was tested without a giant inventory system.',
        'The founder used photos of shoes from local stores and fulfilled orders from those stores. The early experiment tested a key assumption before a much larger build.',
      ],
      questions: [
        'Which resource did the founder avoid purchasing?',
        'What key assumption did this early test examine?',
        'How does this example demonstrate Bootstrapping?',
      ],
    },
  },
  {
    id: 'p4-2',
    chapterId: 'ch4',
    title: 'Reading 4.B — MVPs & the Iterative Cycle',
    minutes: 6,
    bigQuestion: 'What is the smallest version that can test the most important assumption?',
    paragraphs: [
      'A Minimum Viable Product is not a cheap final product. It is a learning tool: the smallest version that lets you test an important assumption with a real or representative user.',
      'A finished product can hide wrong assumptions for months. A paper version of an app, a cardboard model, a service script, or a landing-page mockup can all function as MVPs. The form matters less than whether the test produces useful evidence.',
      'Iterative design follows a repeatable loop: build, test, learn, repeat. The Prototype should be concrete enough that another person can react to it.',
      'During a User Test, ask what was confusing, what the user expected, which part was useful, and what they would change. Watch what users do, record their Feedback, and use it to decide what to keep or improve in the next Iteration.',
    ],
    keyIdea: 'An MVP tests one important assumption; Iteration turns observed behavior and Feedback into a better next version.',
    caseStudy: {
      name: 'Dropbox',
      subtitle: 'A demonstration video as an MVP',
      body: [
        'The textbook describes a short demonstration video that showed how the software would work before the full system was complete.',
        'The early response helped test interest in the product concept. The demonstration was useful because it answered an important question before the team completed a much larger build.',
      ],
      questions: [
        'Why could a video count as an MVP?',
        'What evidence would show meaningful customer interest?',
        'What should the team build or test in the next Iteration?',
      ],
    },
  },
  {
    id: 'p5-1',
    chapterId: 'ch5',
    title: 'Reading 5.A — Costs, Revenue & Profit',
    minutes: 6,
    bigQuestion: 'How can a business tell whether it is actually making money?',
    paragraphs: [
      'Business money flows become easier to understand when costs are classified. Startup Costs are expenses needed to get moving, such as tools, first equipment, signage, or a domain. Ongoing expenses recur as the venture operates.',
      'A Fixed Cost tends to stay the same over a period, such as a booth fee. A Variable Cost changes as sales or production change, such as packaging or material used per unit.',
      'Profit equals Revenue minus Total Costs. Total Revenue equals Price multiplied by Units Sold. Unit Contribution equals Selling Price minus Variable Cost per Unit.',
      'Revenue is not the same as Profit. A lemonade stand that collects $100 may spend money on cups, lemons, ice, signs, and permits. The entrepreneur must subtract all costs to understand what remains.',
    ],
    keyIdea: 'Classify every cost, calculate Revenue, and subtract Total Costs to find Profit.',
    caseStudy: {
      name: "Alex's Lawn Care",
      subtitle: 'Startup and Variable Costs',
      body: [
        'The textbook gives Alex $120 for a used lawn mower and $15 for safety goggles and gloves: $135 in Startup Costs.',
        'Each lawn uses about $3 in gasoline and $1 in lawn bags: $4 in Variable Cost per lawn. Alex charges $25 per lawn, so Unit Contribution is $25 minus $4, or $21 per lawn before other expenses.',
      ],
      questions: [
        'Which of Alex’s costs are Startup, Fixed, or Variable?',
        'What is Alex’s Revenue after mowing four lawns?',
        'Why is Revenue different from Profit?',
      ],
    },
  },
  {
    id: 'p5-2',
    chapterId: 'ch5',
    title: 'Reading 5.B — Pricing & Break-Even',
    minutes: 6,
    bigQuestion: 'How do price and Unit Contribution determine Break-Even?',
    paragraphs: [
      'Cost-Plus Pricing starts with cost and adds a planned Markup. This helps make sure the price covers known costs. Competitive Pricing looks at comparable offers and their prices. The comparison is useful only when the products, customers, and context are reasonably similar.',
      'Value-Based Pricing considers how much value or convenience the customer believes the offering provides. The same product can feel more or less useful in different contexts. A responsible price decision asks what the offering costs, what alternatives exist, and what value the customer experiences.',
      'The Break-Even Point is where Total Revenue equals Total Costs. A useful approximation is Fixed Costs divided by Unit Contribution. Round up to the next whole sale when a fraction of a sale is not possible.',
      'Stress-test the budget by asking what happens if the price is lower, Variable Cost rises, or sales are lower than expected. Changing price, cost, or contribution changes the financial story.',
    ],
    keyIdea: 'Use all three pricing lenses, then divide Fixed Costs by Unit Contribution to estimate the Break-Even Point.',
    caseStudy: {
      name: "Alex's Lawn Care",
      subtitle: 'Seven lawns to break even',
      body: [
        'Alex has $135 in Startup Costs and earns $21 in Unit Contribution per lawn. Dividing $135 by $21 gives a little more than six.',
        'Because Alex cannot mow part of a lawn, the whole-number Break-Even target is seven lawns. If the price falls or the Variable Cost rises, Alex must calculate the target again.',
      ],
      questions: [
        'Why must Alex round the Break-Even result up?',
        'What happens to Break-Even if the Variable Cost increases?',
        'Which pricing lens would help Alex compare nearby lawn services?',
      ],
    },
  },
  {
    id: 'p6-1',
    chapterId: 'ch6',
    title: 'Reading 6.A — The 4 Ps, Brand & Channels',
    minutes: 6,
    bigQuestion: 'How do customers understand and recognize a venture?',
    paragraphs: [
      'Marketing begins after the product is not enough. Customers need to understand what the offering is, what it costs, where they can get it, and why they should notice it. The 4 Ps organize those decisions: Product, Price, Place, and Promotion.',
      'A brand is more than a logo. It is the collection of expectations and associations people connect with a venture. Brand Identity is the system used to make those associations consistent through a name, tagline, visual identity, and Brand Voice.',
      'Student entrepreneurs often start with low-cost Marketing Channels: word of mouth, approved flyers and posters, demonstrations, school announcements, or digital teasers with permission. Choose channels based on where the Target Audience actually pays attention.',
      'Trust matters. Do not exaggerate claims, use someone else’s work without permission, or collect private information casually. Protect customer privacy and follow school and platform rules.',
    ],
    keyIdea: 'Connect the 4 Ps to a consistent Brand Identity, then choose ethical Marketing Channels that reach the Target Audience.',
    caseStudy: {
      name: 'Brand Matrix',
      subtitle: 'A textbook application case',
      body: [
        'The textbook asks students to create a name, a one-line promise, a visual direction, and three words that describe a venture’s Brand Voice.',
        'A classmate then explains the impression those choices create. A playful student venture may use playful language, while a safety-focused venture may need a calmer, clearer voice. The parts should work together and the brand promise should be specific enough to believe.',
      ],
      questions: [
        'How should the venture’s Product affect its Brand Voice?',
        'Which Marketing Channel best fits the Target Audience?',
        'Why must a brand promise be specific enough to believe?',
      ],
    },
  },
  {
    id: 'p6-2',
    chapterId: 'ch6',
    title: 'Reading 6.B — Storytelling, Pitching & Q&A',
    minutes: 6,
    bigQuestion: 'How can a short pitch make the problem, evidence, and next step clear?',
    paragraphs: [
      'Facts inform people, but a clear story helps them understand why the venture matters. The textbook uses a four-part Elevator Pitch structure: Hook, Problem, Solution, and Call to Action.',
      'The Hook opens with a question, surprising observation, or concise statement that earns attention. Then name who is affected, explain why current options are not working well, and introduce the solution. Evidence from customers makes the story more credible.',
      'End with the next step you need: materials, feedback, a pilot user, permission, a small budget, or another concrete action. The Pitch Deck should support the speaker with one central idea, one visual, and a short takeaway rather than becoming a wall of text.',
      'Rehearse pacing, eye contact, posture, volume, and transitions. When you do not know a Q&A answer, do not guess. Use Acknowledge plus Action: thank the questioner, state what you know, name the gap, and explain what you will research or test.',
    ],
    keyIdea: 'Build the pitch around Hook, Problem, Solution, evidence, and a clear Call to Action; answer questions honestly with Acknowledge plus Action.',
    caseStudy: {
      name: 'LaunchPad Pitch Competition',
      subtitle: 'The textbook’s final chapter challenge',
      body: [
        'The textbook asks students to write a 60-second pitch using Hook, Problem, Solution, and Call to Action, practice with a timer, and present to a partner or the class.',
        'The review checklist asks whether the audience can explain the problem and solution, whether customer evidence is included, whether delivery is practiced, and whether the pitch ends with a clear next step. Peer feedback should address clarity, evidence, and one suggestion for the next version.',
      ],
      questions: [
        'What makes a Hook connect directly to the problem?',
        'Which customer evidence makes the solution more credible?',
        'What specific Call to Action will end your pitch?',
      ],
    },
  },
];

export const PAGES_BY_CHAPTER: Record<string, TextbookPage[]> = TEXTBOOK_PAGES.reduce(
  (acc, page) => {
    (acc[page.chapterId] ||= []).push(page);
    return acc;
  },
  {} as Record<string, TextbookPage[]>,
);