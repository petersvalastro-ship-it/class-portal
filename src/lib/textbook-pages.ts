// Full textbook reading pages that go beyond the LaunchPad chapter outlines:
// longer readings, worked examples and case studies written for grades 6-8.

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
    title: 'Reading 1.A — Value Is Something You Create',
    minutes: 6,
    bigQuestion: 'What does an entrepreneur actually make?',
    paragraphs: [
      'People often say entrepreneurs make money. That is only half true. Money is what happens after an entrepreneur makes something else first: value. Value is the difference between how a person feels before they use your product or service and how they feel after. If a customer is less frustrated, less bored, safer, faster, or prouder afterwards, you created value. If nothing changed for them, no amount of advertising will fix the idea.',
      'That is why entrepreneurship starts with paying attention rather than with inventing. Look at the last week of your own life. Where did you wait longer than you should have? What did you or a friend complain about twice? What did an adult in your building do the slow way because nobody had built the fast way yet? Each of those moments is a clue. Entrepreneurs collect clues before they collect materials.',
      'A second habit separates people who talk about ideas from people who launch them: shrinking the first step. Ask what the smallest honest version of the idea would be. A student who wants to run a school snack business does not need a store; they need one product, five customers, and permission. A student who wants to design shirts does not need an order of two hundred; they need one printed sample and ten opinions. Small first steps produce real information, and real information is worth more than a perfect plan.',
      'Finally, entrepreneurs treat being wrong as data instead of as failure. If nobody buys, that is not a verdict about you. It is a message: wrong customer, wrong price, wrong place, or wrong problem. Change one thing and test again. This loop — notice, build small, learn, change — is the entire job.',
    ],
    keyIdea: 'Entrepreneurs create value first and revenue second. Notice a real problem, build the smallest honest version, and let evidence tell you what to change.',
    caseStudy: {
      name: 'Mikaila Ulmer',
      subtitle: 'Me & the Bees Lemonade',
      body: [
        'Mikaila Ulmer was four years old when she was stung by bees twice in one week. Instead of avoiding bees forever, she got curious and started reading about them. She learned that honeybee populations were shrinking and that bees pollinate a huge share of the food people eat.',
        'Around the same time, a youth business contest gave her a reason to actually build something, and her great-grandmother mailed the family an old flaxseed lemonade recipe. Mikaila combined the three pieces she already had: a recipe, local honey instead of plain sugar, and a cause she genuinely cared about. Her first customers were neighbors at a stand, not a supermarket chain.',
        'Because the product had a clear story, buyers remembered it. She donated part of every sale to bee conservation, kept improving the recipe and packaging, and years later the drink was stocked by national grocery stores. The order mattered: curiosity, then a tiny test, then growth.',
      ],
      questions: [
        'What value did customers get beyond a cold drink?',
        'Name the three resources Mikaila already had access to before she started.',
        'What would have been lost if she had waited until the recipe was perfect?',
      ],
    },
  },
  {
    id: 'p1-2',
    chapterId: 'ch1',
    title: 'Reading 1.B — Risk, Resilience and the Fear of Looking Silly',
    minutes: 5,
    bigQuestion: 'How do entrepreneurs take risks without being reckless?',
    paragraphs: [
      'Every venture involves risk, but successful founders take calculated risks. A calculated risk has three features: you know roughly what you could lose, you know what you would learn, and you can survive the worst case. Spending $20 on materials to test a product is calculated. Spending $400 of borrowed money on inventory nobody has asked for is a gamble.',
      'The risk students fear most is usually not financial at all — it is social. Nobody wants to pitch an idea and hear silence. Professional entrepreneurs feel that too; they just build habits that make it survivable. They test with a friendly audience first, they ask for one specific piece of feedback instead of a general opinion, and they separate the idea from themselves. "This version did not work" is a sentence a founder can say out loud without shrinking.',
      'Resilience is a practice, not a personality trait. It looks like keeping a simple log: what I tried, what happened, what I will change. After five entries you stop reacting emotionally to each result and start seeing patterns. That is when a student stops being a person with an idea and becomes an entrepreneur.',
    ],
    keyIdea: 'Take risks you can afford and learn from. Track what happens so setbacks become information instead of embarrassment.',
    caseStudy: {
      name: 'Moziah Bridges',
      subtitle: "Mo's Bows",
      body: [
        'Moziah Bridges was nine and could not find bow ties he actually liked — the ones in stores felt boring to him. His grandmother taught him to sew, and his first products were made from scrap fabric found at home. His risk was small: a few hours of work and material that cost almost nothing.',
        'He sold locally, listened to what people picked up and what they ignored, and adjusted his patterns and colors. When he later pitched on national television, he did not receive the investment he asked for, but he did receive mentorship. He treated that as a result to learn from rather than a rejection.',
        'By high school he was filling orders for major retailers and had built a scholarship fund from part of his profits.',
      ],
      questions: [
        'What made his very first attempt a calculated risk instead of a gamble?',
        'How did he respond to being told no on national television?',
        'What could you test this week for under $20?',
      ],
    },
  },
  {
    id: 'p2-1',
    chapterId: 'ch2',
    title: 'Reading 2.A — Finding the Problem Under the Problem',
    minutes: 6,
    bigQuestion: 'Why do good solutions fail?',
    paragraphs: [
      'Most failed products solve a symptom instead of a cause. A symptom is what you see; a cause is why it keeps happening. If the cafeteria line is slow, the symptom is the line. The cause might be one payment station, a menu that requires long questions, or a schedule that sends four grades at once. Buying a faster cash register only helps if the register was truly the cause.',
      'The 5 Whys tool digs downward. Start with the symptom and ask why, using the previous answer each time. Students throw away half their lunch. Why? They do not like the vegetable. Why? It is cold by the time they eat. Why? It is served twenty minutes before their lunch period. Why? Because one kitchen serves five periods. Now you have a real target: timing, not taste. Stop asking why when the answer describes a system rather than blaming a person.',
      'Once you understand the cause, convert it into a How Might We question. "How might we serve vegetables closer to when each grade eats?" is open enough for many solutions but narrow enough to act on. Compare that with "How might we make lunch better?" — too vague to build anything.',
      'Then generate widely before you judge. In a first round, quantity beats quality: no criticism, build on each other, write down the strange options too. Judgment comes later, using criteria such as cost, time, permission needed, and how many people benefit.',
    ],
    keyIdea: 'Dig from symptom to cause with the 5 Whys, reframe the cause as a How Might We question, then brainstorm widely before judging.',
    caseStudy: {
      name: 'The Locker Jam',
      subtitle: 'A middle school design team',
      body: [
        'A seventh-grade team noticed classmates arriving late to third period. Their first idea was a poster campaign telling people to hurry — a symptom fix. Instead they observed the hallway for three days and counted.',
        'The 5 Whys revealed the cause: students in one wing had lockers on the opposite side of the building from their next class, so they carried everything or ran. The team reframed it: "How might we cut down the number of locker trips students need?"',
        'They tested a shared shelf of loaner supplies in two classrooms and a simple two-trip locker schedule taped inside locker doors. Lateness in the tested classes dropped, and the change cost nothing except permission and a laminated card.',
      ],
      questions: [
        'Why would the poster campaign probably have failed?',
        'What did the team gain by counting for three days first?',
        'Write a How Might We question for a problem in your own school.',
      ],
    },
  },
  {
    id: 'p2-2',
    chapterId: 'ch2',
    title: 'Reading 2.B — Needs, Wants and the Honest Test',
    minutes: 5,
    bigQuestion: 'Is your idea something people need, want, or only tolerate?',
    paragraphs: [
      'A need is something a person must have to function: food, safety, transportation to school, a working calculator on test day. A want is something that improves life but is optional: a specific flavor, a certain brand, a nicer design. Both can build a business. Needs usually sell steadily at fair prices, while wants can sell at higher prices when the experience or identity feels worth it.',
      'The mistake is assuming. Founders fall in love with an idea and then ask questions that guarantee the answer they want: "Wouldn\'t it be cool if I sold custom stickers?" Almost everyone says yes to a hypothetical. Better questions look backwards at behavior: "When did you last buy a sticker, and what did you pay?" Past behavior predicts future purchases far better than enthusiasm does.',
      'The most honest test is the smallest real transaction. Take pre-orders. Ask for a deposit. Put a sign-up sheet on the wall. A person who writes their name down is telling you something a survey never will. Enthusiasm is free; commitment costs something.',
    ],
    keyIdea: 'Separate needs from wants, then verify demand with past behavior and small real commitments instead of hypothetical questions.',
    caseStudy: {
      name: 'Two Sticker Stands',
      subtitle: 'Same product, different research',
      body: [
        'Two students each planned to sell custom vinyl stickers at a school market. Jordan surveyed twenty classmates with the question "Would you buy a cool sticker?" Eighteen said yes, so Jordan printed 150 stickers of designs Jordan liked.',
        'Priya asked a different question: "What sticker have you actually bought or asked for this year, and what did you pay?" Nine classmates had bought nothing. Six had paid $2 to $3 for team and club designs. Priya took eleven pre-orders at $3 for club logos, collected the money, and printed only what was ordered plus twenty extras.',
        'Priya sold out and reinvested profit into a second run. Jordan sold 34 stickers and was left holding the rest. The product was identical; the research was not.',
      ],
      questions: [
        'Which question produced usable information, and why?',
        'What did the pre-orders prove that a survey could not?',
        'How would you redesign Jordan\'s research before printing anything?',
      ],
    },
  },
  {
    id: 'p3-1',
    chapterId: 'ch3',
    title: 'Reading 3.A — Knowing Your Customer on Purpose',
    minutes: 6,
    bigQuestion: 'Who exactly is this for?',
    paragraphs: [
      '"Everyone" is not a target market. When a venture aims at everyone, its message becomes so general that nobody feels spoken to. A target market is a specific group described by details you can act on: age or grade, where they are, what they already do, what they can spend, and what frustrates them.',
      'Primary research is information you gather yourself: surveys, interviews, observation, and small tests. Secondary research is information someone else gathered: articles, public data, company pages, and reports. Strong projects use both. Secondary research tells you the general landscape quickly; primary research tells you what is true here, in this building, for these people.',
      'Interviews work best when they stay in the past and in specifics. Ask "walk me through the last time you..." rather than "would you like...". Watch for the moment the person sighs or says "it\'s annoying, but" — that is a pain point worth designing for. Five careful interviews usually teach more than fifty rushed survey clicks.',
      'Then map the competition honestly. A competitive matrix lists the real alternatives — including doing nothing, which is your biggest competitor — and compares them on factors customers actually care about: price, convenience, speed, customization, and trust. Your differentiation is the column where you can honestly win and the customer honestly cares.',
    ],
    keyIdea: 'Define a specific customer, combine primary and secondary research, and find a difference that customers actually value.',
    caseStudy: {
      name: 'The Snack Cart Pivot',
      subtitle: 'Research changed the business',
      body: [
        'A student club launched a snack cart selling candy after school. Sales were fine for a week and then dropped. Instead of adding more candy, the club interviewed twelve customers and observed who walked past without stopping.',
        'Two facts emerged. Athletes leaving practice wanted something filling and were rushing to buses. And a nearby vending machine already sold the same candy for less. The club had been competing on the one factor it could not win.',
        'They pivoted: pre-bagged granola-and-fruit packs, priced at $2, sold at the gym exit during the fifteen minutes after practice. Revenue tripled, and waste fell because they bagged to the previous week\'s demand.',
      ],
      questions: [
        'Which competitor had the club ignored at first?',
        'What two research methods produced the pivot?',
        'Which of the 4 Ps did the club change?',
      ],
    },
  },
  {
    id: 'p3-2',
    chapterId: 'ch3',
    title: 'Reading 3.B — Reading Data Without Fooling Yourself',
    minutes: 5,
    bigQuestion: 'How do you avoid finding only the answer you wanted?',
    paragraphs: [
      'Bias is the tilt in research that pushes results toward what you hoped to hear. Leading questions cause it: "Don\'t you think this design is better?" So does a friendly sample — asking only your friends, who want to encourage you. So does ignoring the responses that disagree with your plan.',
      'Guard against it with three habits. First, write your questions before you know your favorite answer, and keep them neutral. Second, include people outside your circle, including a few who are likely to say no. Third, record every response, then look for the pattern instead of the highlight. One glowing comment is a quote; eight matching comments are a finding.',
      'Sample size matters, but honesty matters more. Twelve neutral interviews with recorded answers beat a hundred survey clicks from a question that told people what to say. When you present results, say how many people you asked and how you found them. That is what makes your evidence believable to a teacher, a judge, or an investor.',
    ],
    keyIdea: 'Neutral questions, a mixed sample, and full records turn opinions into evidence you can trust and defend.',
    caseStudy: {
      name: 'The Tutoring Survey',
      subtitle: 'When 92% approval meant nothing',
      body: [
        'A student venture offering $10 math tutoring surveyed classmates: "Would you like affordable help with math?" 92% said yes, so the team scheduled eight sessions a week.',
        'Two students showed up. A follow-up round with neutral questions found the truth: most classmates already had free help from a teacher during advisory, and the paid sessions conflicted with sports.',
        'The team rebuilt around what the data actually said: a Saturday-morning small-group session for two grades, promoted the week before tests, at $5 per student in groups of four. Attendance filled, and the price per student dropped while the hourly earnings rose.',
      ],
      questions: [
        'What made the original question biased?',
        'What free alternative had the team overlooked?',
        'Rewrite the survey question in a neutral form.',
      ],
    },
  },
  {
    id: 'p4-1',
    chapterId: 'ch4',
    title: 'Reading 4.A — Build the Smallest Thing That Teaches You Something',
    minutes: 6,
    bigQuestion: 'What is the least you can build to learn the most?',
    paragraphs: [
      'A minimum viable product, or MVP, is the simplest version of an idea that a real person can try and react to. It is not a cheap product; it is a focused one. The MVP exists to answer a specific question, so before building, write the question: Will students pay $3? Do people prefer scent A or B? Will teachers actually use the sign-out sheet?',
      'Prototypes come in levels. A sketch or paper mock-up costs minutes and tests whether the idea is understandable. A physical or handmade sample tests whether it works. A small pilot — five customers, one week — tests whether people will use and pay for it. Move up a level only when the previous level gives you a yes.',
      'The iterative cycle is build, test, learn, improve, repeat. Each loop should change exactly one meaningful thing so you know what caused the difference. Change the price and the packaging at the same time and you learn nothing about either.',
      'Judge the test by evidence, not by compliments. Watch what people do: do they hesitate, misuse it, ask a question the design should have answered, or reach for their money? Write the observation down immediately. Version two should be traceable to a specific thing you saw.',
    ],
    keyIdea: 'Write the question first, build the cheapest thing that answers it, change one variable per round, and record behavior rather than praise.',
    caseStudy: {
      name: 'Three Paper Prototypes',
      subtitle: 'A homeroom supply-share test',
      body: [
        'A team wanted an app that let students borrow supplies. Instead of coding, they tested with paper: a laminated card with three borrow rules taped inside the classroom door and a clipboard sign-out sheet.',
        'Round one failed — nobody signed out anything. Observation showed the clipboard hung behind the door where nobody looked. Round two moved it beside the pencil bin; usage jumped to nine sign-outs in a week, but four items were never returned.',
        'Round three added one change: writing the borrower\'s class period next to the item. Returns reached 100%. Only then did the team argue that an app was worth building, and by that point they knew exactly which three fields it needed.',
      ],
      questions: [
        'What did each round cost, and what did each round teach?',
        'Why was changing one thing per round important?',
        'How did the paper test make the future app better?',
      ],
    },
  },
  {
    id: 'p4-2',
    chapterId: 'ch4',
    title: 'Reading 4.B — Bootstrapping: Doing More With Almost Nothing',
    minutes: 5,
    bigQuestion: 'How do you start when you have no money?',
    paragraphs: [
      'Bootstrapping means growing a venture using the resources you already have and the revenue it earns, rather than outside money. For student entrepreneurs it is usually the only realistic path — and it has an advantage: because every dollar is scarce, you are forced to test before you spend.',
      'Start with a resource inventory. List what you own or can borrow: tools at home, a family member\'s skill, school equipment you may use with permission, free design software, your own time, and classmates willing to trade help. Then list what a first run truly requires. The gap between the two lists is your startup cost, and it is often smaller than students assume.',
      'Reinvestment turns a small start into a real business. Sell a first batch, cover your costs, then put most of the profit into the next batch instead of spending it. Ten sales become twenty; twenty become fifty. Growth funded by customers means you never owe anyone.',
      'Bootstrapping has limits worth naming: you grow slower, you cannot accept an order larger than your capacity, and your own time is a real cost even when nobody bills you for it. Track hours as well as dollars, so you know whether the venture is genuinely worth running.',
    ],
    keyIdea: 'Inventory what you already have, spend only what a test requires, and reinvest early profit so customers fund your growth.',
    caseStudy: {
      name: 'The $18 Sticker Launch',
      subtitle: 'Reinvestment in three rounds',
      body: [
        'Alex wanted to sell custom vinyl stickers but had $18. A full startup list — cutting machine, laptop, design software — came to hundreds of dollars. So Alex separated owned resources from purchases: the family already had a printer and a laptop, and free design software existed online. Only sticker paper and a cutting blade had to be bought.',
        'Round one: $18 of paper produced 30 stickers, sold at $3 to pre-order customers, earning $90. Round two reinvested $45 into better weatherproof paper and kept $45. Round three funded a small heat press purchased used.',
        'Nine weeks later Alex had equipment worth far more than the original $18 and had never borrowed a cent. The rule Alex followed: never buy a tool until customer demand had already paid for it.',
      ],
      questions: [
        'What was the difference between Alex\'s resource list and purchase list?',
        'Why did Alex hold back part of the profit each round?',
        'What is the risk of buying equipment before demand exists?',
      ],
    },
  },
  {
    id: 'p5-1',
    chapterId: 'ch5',
    title: 'Reading 5.A — The Math That Decides Everything',
    minutes: 7,
    bigQuestion: 'How many do you have to sell before you actually earn anything?',
    paragraphs: [
      'Three formulas carry most of business math. Revenue = Price x Units Sold. Profit = Revenue - Total Costs. Unit Contribution = Selling Price - Variable Cost per Unit. Learn those and you can evaluate almost any student venture in five minutes.',
      'Costs come in two kinds. Fixed costs stay the same no matter how much you sell: a cutting machine, a table fee, a one-time permit. Variable costs rise with each unit: material, packaging, and the small extras per sale. Confusing the two is the most common error in student budgets, and it makes break-even impossible to calculate.',
      'Break-even is the number of sales where money in equals money out. Break-Even Units = Fixed Costs / Unit Contribution. Suppose your startup cost is $135, you price at $25, and each unit costs $4 in materials. Unit contribution is $21. $135 / $21 = 6.43, and since you cannot sell part of a unit, you must round up: 7 sales to break even. Sale eight is your first real profit.',
      'Then stress test the plan, because reality rarely matches the first estimate. What happens if you must drop the price to $20? Contribution falls to $16 and break-even rises to 9. What if material cost rises to $6? Contribution falls to $19 and break-even rises to 8. Running those three what-ifs before you spend is what separates a plan from a hope.',
      'One more habit: pay yourself on paper. Estimate the hours a batch takes and divide your profit by those hours. A venture that earns $40 profit for twenty hours of work may still be a great learning project, but you should know that before you scale it.',
    ],
    keyIdea: 'Separate fixed from variable costs, compute unit contribution, divide fixed costs by it to find break-even, then stress test price, cost and demand.',
    caseStudy: {
      name: "Alex's Lawn Care",
      subtitle: 'A summer of unit economics',
      body: [
        'Alex charged $25 per lawn. Gas and trimmer line cost about $4 per lawn — variable. A used mower and a blade cost $135 for the season — fixed. Unit contribution was $21, so break-even was 7 lawns, reached in week two.',
        'By lawn 20, revenue was $500, variable costs $80, fixed costs $135, and profit $285. Then a neighbor asked for a discount to $20. Alex ran the math instead of guessing: contribution would fall to $16, and the break-even for a second mower would jump from 7 lawns to 9.',
        'Alex offered a different deal — the same $25 price with a free edge trim for customers who booked four weeks at once. Revenue per customer rose, no price was cut, and Alex tracked hours too: 20 lawns at 45 minutes each meant roughly $19 per hour of work.',
      ],
      questions: [
        'Recalculate break-even if the mower had cost $189.',
        'Why was the bundled offer better than the discount?',
        'What would happen to profit if gas rose to $7 per lawn?',
      ],
    },
  },
  {
    id: 'p5-2',
    chapterId: 'ch5',
    title: 'Reading 5.B — Three Ways to Choose a Price',
    minutes: 5,
    bigQuestion: 'Where does the right price come from?',
    paragraphs: [
      'Cost-plus pricing starts with what a unit costs you and adds a markup. It is simple and safe: you cannot lose money per unit. Its weakness is that it ignores the customer entirely — you might charge $6 for something people would happily pay $12 for, or $12 for something they value at $4.',
      'Competitive pricing looks at the real alternatives. If comparable stickers sell for $3 at the school market, that number anchors what feels reasonable. This keeps you in the range buyers expect, but copying a competitor\'s price also copies their assumptions, and a bigger seller may have costs you cannot match.',
      'Value-based pricing starts from what the outcome is worth to the customer. A pet-sitting service that lets a family travel without worry delivers more value than the hours suggest. To charge on value you must be able to explain the benefit clearly, and you need evidence — a testimonial, a before-and-after, a guarantee.',
      'Most strong student ventures triangulate: calculate the cost floor, check the competitive range, then position within that range based on the value they can prove. And remember that price signals quality. A price far below everyone else does not just cut your profit; it tells buyers your work may be worth less.',
    ],
    keyIdea: 'Use cost to set your floor, competitors to set your range, and provable value to choose your exact price inside that range.',
    caseStudy: {
      name: 'The Custom Cake Pop Test',
      subtitle: 'Same product, three prices',
      body: [
        'Nia\'s cake pops cost $0.60 each in materials. Cost-plus at 100% markup suggested $1.20. Comparable treats at the school market sold for $1.50 to $2.00.',
        'Nia ran a three-week test. Week one at $1.25: 40 sold, profit $26. Week two at $2.00 in plain bags: 31 sold, profit $43. Week three at $2.50 with custom colors matching the buyer\'s team or club and a printed name tag: 34 sold, profit $65.',
        'The customization cost $0.15 more per pop but changed what buyers thought they were getting — a personalized gift instead of a snack. The highest price produced both the highest profit and the second-highest volume.',
      ],
      questions: [
        'Why did raising the price not reduce sales much in week three?',
        'Calculate unit contribution for each of the three weeks.',
        'What evidence would you show a customer to justify $2.50?',
      ],
    },
  },
  {
    id: 'p6-1',
    chapterId: 'ch6',
    title: 'Reading 6.A — Marketing Is Being Understood',
    minutes: 6,
    bigQuestion: 'Why do good products stay invisible?',
    paragraphs: [
      'Marketing is not tricking people; it is making sure the right people understand what you offer, in the place where they are already paying attention. Most student ventures do not fail from lack of quality. They fail because nobody knew the venture existed, or because the message was so general that no one recognized themselves in it.',
      'The 4 Ps keep the decisions organized and connected. Product is what you sell and which features matter. Price is what the customer pays. Place is where they can get it. Promotion is how they hear about it. Change one and the others shift: raising the price raises expectations for the product, and choosing a new place changes which promotion reaches anyone.',
      'A brand makes understanding faster. It is the set of expectations attached to your name — built from a consistent name, a one-line promise, a look, and a voice. Consistency is what turns a one-time buyer into someone who recognizes you next month. Your promise should be specific enough to be believable: "stickers that survive a water bottle in a backpack" beats "high quality stickers".',
      'Choose channels by where your audience already is, not by what is easiest for you. Then market ethically: no exaggerated claims, no using someone else\'s art or photos without permission, no collecting private information, and always inside your school\'s rules. A message that earns attention dishonestly costs you the trust that repeat customers are made of.',
    ],
    keyIdea: 'Connect the 4 Ps, promise something specific, stay consistent, and reach people where they already are — honestly.',
    caseStudy: {
      name: 'Two Club Fundraisers',
      subtitle: 'Same cause, different message',
      body: [
        'Two clubs raised money the same week. Club A posted "Support our club! Buy a bracelet, $5." Club B posted "$5 buys one bracelet — and one week of art supplies for the after-school program. 60 bracelets funds the whole semester," with a photo of the supply shelf and a running count updated daily.',
        'Club A sold 22 bracelets. Club B sold 71 and had to reorder. The product and price were identical.',
        'Club B had done three things: made the value specific, made progress visible so buying felt like joining something, and posted where students actually looked — the daily announcement screen and a hallway poster near the cafeteria line rather than a group chat few students read.',
      ],
      questions: [
        'Which of the 4 Ps did Club B change?',
        'Why did showing a running count increase sales?',
        'Write a specific value promise for your own venture.',
      ],
    },
  },
  {
    id: 'p6-2',
    chapterId: 'ch6',
    title: 'Reading 6.B — The Pitch: Sixty Seconds That Do Real Work',
    minutes: 5,
    bigQuestion: 'What has to happen in the first ten seconds?',
    paragraphs: [
      'A pitch is not a summary of everything you did. It is a short argument built to leave one clear idea and one clear request in the listener\'s mind. The four-part structure keeps it honest: Hook, Problem, Solution, Call to Action.',
      'The hook earns attention in one sentence — a surprising number, a question the audience recognizes, or a concrete image. Then the problem: name who is affected and why current options fall short. Numbers from your own research make this land: "eleven of the fifteen students I interviewed said..." is far stronger than "everybody hates...".',
      'The solution explains what you built and how it works, briefly, followed by your evidence: the test you ran and what happened. Then the call to action states exactly what you need next — materials, permission, five pilot users, feedback, or a small budget. A pitch without a specific ask usually ends in polite nodding and nothing else.',
      'Delivery is practice, not talent. Rehearse with a timer, breathe at the punctuation, look at faces rather than slides, and let each slide hold one idea, one visual, and a short takeaway. For questions you cannot answer, use Acknowledge plus Action: thank the questioner, say what you know, name the gap honestly, and state how you will find out. Judges trust that answer far more than a guess.',
    ],
    keyIdea: 'Hook, problem, solution with evidence, and a specific ask — rehearsed with a timer and answered honestly.',
    caseStudy: {
      name: 'The Water Bottle Pitch',
      subtitle: 'Two versions, one week apart',
      body: [
        'Version one opened with "Our company is called HydroHall and we are a student business that sells refill reminders." The judges\' eyes glazed. There was no ask at the end, only "thank you for listening."',
        'Version two opened with "Last Tuesday I counted 41 empty plastic bottles in one hallway trash can — in one day." Then the problem: the refill station is on the second floor and most students do not know it exists. Then the solution and evidence: a $6 sign and a locker-door sticker in two hallways cut trash-can bottles by half over five days.',
        'The ask was specific: permission to place eight signs and $50 for stickers. The team got both, plus an offer of help from a custodian who had counted the same problem for years.',
      ],
      questions: [
        'What made the second hook stronger?',
        'Identify the evidence sentence in version two.',
        'Write a specific call to action for your own pitch.',
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
