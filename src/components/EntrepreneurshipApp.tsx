// @ts-nocheck
import React, { useState, useEffect, useMemo } from 'react';
import { 
  BookOpen, Calculator, Rocket, Trophy, Volume2, Sparkles, 
  CheckCircle2, XCircle, ArrowRight, HelpCircle, RefreshCw, 
  Search, Award, Layers, DollarSign, TrendingUp, PieChart, 
  Eye, Type, Sun, Moon, VolumeX, ShieldAlert, Play, Check,
  Target, Briefcase, Plus, Trash2, ChevronRight, Zap
} from 'lucide-react';

const GLOSSARY_DATA = [
  {
    id: 'entrepreneur',
    term: 'Entrepreneur',
    category: 'Entrepreneurship',
    definition: 'A person who identifies a problem or opportunity, takes a risk, and creates a new business or solution to solve it.',
    example: 'Starting a custom sneaker cleaning service to help classmates keep their shoes looking brand new.',
    icon: '💡'
  },
  {
    id: 'entrepreneurial-mindset',
    term: 'Entrepreneurial Mindset',
    category: 'Entrepreneurial Mindset',
    definition: 'A way of thinking that helps you see opportunities in problems, learn from mistakes, take initiative, and adapt when things don\'t go as planned.',
    example: 'Viewing a failed lemonade recipe as a chance to test a new, delicious flavor combination.',
    icon: '🧠'
  },
  {
    id: 'innovation',
    term: 'Innovation',
    category: 'Entrepreneurial Mindset',
    definition: 'The process of introducing new ideas, original methods, or improved products to create better value or solve a problem.',
    example: 'Designing a waterless shoe cleaner spray that cleans twice as fast without using tap water.',
    icon: '⚡'
  },
  {
    id: 'innovate',
    term: 'Innovate',
    category: 'Entrepreneurial Mindset',
    definition: 'To create new ways of doing things, develop original products, or improve existing solutions to better serve customers.',
    example: 'Adding a QR code booking system to a lawn-mowing business to make scheduling instant.',
    icon: '🚀'
  },
  {
    id: 'resilience',
    term: 'Resilience',
    category: 'Entrepreneurial Mindset',
    definition: 'The ability to bounce back from setbacks, failures, or unexpected challenges in business.',
    example: 'When bad weather ruins an outdoor pop-up stand, shifting sales online instead of giving up.',
    icon: '🛡️'
  },
  {
    id: 'pivot',
    term: 'Pivot',
    category: 'Entrepreneurial Mindset',
    definition: 'To strategically change your business model, direction, or product when something isn\'t working as expected.',
    example: 'Switching from selling hot cocoa to selling iced lemonade when summer weather arrives.',
    icon: '🔄'
  },
  {
    id: 'calculated-risk',
    term: 'Calculated Risk',
    category: 'Entrepreneurial Mindset',
    definition: 'A carefully considered decision to try something new where potential rewards outweigh possible losses.',
    example: 'Buying $20 worth of sticker supplies after surveying 30 classmates who promised to buy them.',
    icon: '🎯'
  },
  {
    id: 'initiative',
    term: 'Initiative',
    category: 'Entrepreneurial Mindset',
    definition: 'Taking independent action and self-direction to solve a problem without waiting to be told what to do.',
    example: 'Creating marketing flyers for your tutoring service before your first customer even asks.',
    icon: '🔥'
  },
  {
    id: 'assets',
    term: 'Assets',
    category: 'Financial Literacy',
    definition: 'Anything of value that you own that can be converted into cash.',
    example: 'A smartphone, a bike, a high-end sneaker cleaning kit, or money in a savings account.',
    icon: '💰'
  },
  {
    id: 'liabilities',
    term: 'Liabilities',
    category: 'Financial Literacy',
    definition: 'Financial debts or obligations that you owe to someone else.',
    example: 'Owing your friend $10 for lunch or a loan from your older sibling/parents.',
    icon: '💳'
  },
  {
    id: 'net-worth',
    term: 'Net Worth',
    category: 'Financial Literacy',
    definition: 'The total measure of your financial health: Assets minus Liabilities = Net Worth.',
    example: 'If you own a $200 bike but owe $50, your Net Worth is $150.',
    formula: 'Net Worth = Assets - Liabilities',
    icon: '📊'
  },
  {
    id: 'compound-interest',
    term: 'Compound Interest',
    category: 'Financial Literacy',
    definition: 'Interest calculated on both the original principal and the accumulated interest from previous periods.',
    example: 'Saving $100 that earns 5% interest ($105), then earning interest on that new $105 the next year.',
    icon: '📈'
  },
  {
    id: 'credit-score',
    term: 'Credit Score',
    category: 'Financial Literacy',
    definition: 'A three-digit number (300-850) that rates how reliable you are at repaying borrowed money.',
    example: 'A high credit score helps adults qualify for lower interest rates when buying a car or home.',
    icon: '🛡️'
  },
  {
    id: 'principal',
    term: 'Principal',
    category: 'Financial Literacy',
    definition: 'The original sum of money lent, invested, or saved before interest is added.',
    example: 'The exact $50 you first deposit into a new high-yield savings account.',
    icon: '💵'
  },
  {
    id: 'liquidity',
    term: 'Liquidity',
    category: 'Financial Literacy',
    definition: 'How quickly and easily an asset can be converted into physical cash without losing value.',
    example: 'Cash in your wallet is 100% liquid; a collectible basketball card takes time to sell for cash.',
    icon: '💧'
  },
  {
    id: 'revenue',
    term: 'Revenue',
    category: 'Entrepreneurship',
    definition: 'The total income earned from selling goods or providing services before any expenses are subtracted.',
    example: 'Cleaning 10 pairs of sneakers at $15 each equals $150 in total Revenue.',
    formula: 'Revenue = Price × Quantity Sold',
    icon: '🛒'
  },
  {
    id: 'expenses',
    term: 'Expenses',
    category: 'Entrepreneurship',
    definition: 'The costs incurred by a business or person to operate and earn revenue.',
    example: 'Buying cleaning solutions, microfiber cloths, or paying for shop rent.',
    icon: '🧾'
  },
  {
    id: 'profit',
    term: 'Profit (Net Profit)',
    category: 'Entrepreneurship',
    definition: 'The financial gain remaining after subtracting all operational expenses from total revenue.',
    example: 'If Revenue is $150 and Expenses are $20, your Profit is $130.',
    formula: 'Profit = Revenue - Expenses',
    icon: '💎'
  },
  {
    id: 'fixed-costs',
    term: 'Fixed Costs',
    category: 'Entrepreneurship',
    definition: 'Expenses that stay the same regardless of how many products or services you produce or sell.',
    example: 'Monthly rent for a kiosk, website domain fees, or a flat permit fee.',
    icon: '📌'
  },
  {
    id: 'variable-costs',
    term: 'Variable Costs',
    category: 'Entrepreneurship',
    definition: 'Costs that increase or decrease directly in proportion to your business production volume.',
    example: 'Lemons and sugar for a lemonade stand, or shoe cleaner solution per sneaker cleaned.',
    icon: '🔄'
  },
  {
    id: 'roi',
    term: 'ROI (Return on Investment)',
    category: 'Entrepreneurship',
    definition: 'A ratio that measures the profitability or efficiency of an investment compared to its cost.',
    example: 'Investing $100 in equipment that earns $150 net profit gives a 150% ROI.',
    formula: 'ROI = (Net Profit / Cost of Investment) × 100',
    icon: '🚀'
  },
  {
    id: 'break-even',
    term: 'Break-Even Point',
    category: 'Entrepreneurship',
    definition: 'The exact stage at which total revenue equals total expenses, resulting in zero net loss or gain.',
    example: 'If fixed setup costs are $50 and you make $5 profit per item, you break even after selling 10 items.',
    formula: 'Total Revenue = Total Expenses',
    icon: '⚖️'
  }
];

const PRACTICE_SCENARIOS = [
  {
    id: 1,
    title: "Scenario 1: Calculating Alex's Net Worth",
    story: "Alex is reviewing his personal finances. He owns a high-end sneaker cleaning kit worth $120 and has $80 in his savings account. However, he owes his older sister $30 for helping him design his business logo.",
    question: "What is Alex's current Net Worth?",
    type: "number",
    correctAnswer: 170,
    unit: "$",
    hint: "Formula: Net Worth = Total Assets - Total Liabilities. First, add Alex's sneaker kit ($120) and savings ($80) to get Total Assets.",
    explanation: "Total Assets = $120 (Kit) + $80 (Savings) = $200. Total Liabilities = $30 (Owed to sister). Net Worth = $200 - $30 = $170."
  },
  {
    id: 2,
    title: "Scenario 2: Revenue vs. Profit in Action",
    story: "Last Saturday, Alex cleaned 10 pairs of sneakers charging $15 per pair. To complete these jobs, he spent $12 on specialty cleaning solution and $8 on new microfiber cloths.",
    question: "Calculate Alex's Net Profit for the day.",
    type: "number",
    correctAnswer: 130,
    unit: "$",
    hint: "First find Total Revenue (10 pairs × $15). Then subtract Total Expenses ($12 + $8).",
    explanation: "Revenue = 10 × $15 = $150. Expenses = $12 + $8 = $20. Profit = Revenue - Expenses = $150 - $20 = $130!"
  },
  {
    id: 3,
    title: "Scenario 3: ROI Equipment Purchase",
    story: "Alex decides to upgrade his business. He purchases an electric brush kit for $50. Over the next month, this tool allows him to take on extra jobs and earn an additional $120 in Net Profit.",
    question: "What is Alex's Return on Investment (ROI) percentage on this tool?",
    type: "number",
    correctAnswer: 240,
    unit: "%",
    hint: "Formula: ROI = (Net Profit / Cost of Investment) × 100",
    explanation: "ROI = ($120 Profit / $50 Investment) × 100 = 2.4 × 100 = 240%!"
  }
];

const SORTING_GAME_ITEMS = [
  { name: 'Lemonade Pitchers (Reusable)', correctCategory: 'Fixed' },
  { name: 'Fresh Lemons & Sugar', correctCategory: 'Variable' },
  { name: 'City Business Permit ($15 flat fee)', correctCategory: 'Fixed' },
  { name: 'Paper Cups & Straws', correctCategory: 'Variable' },
  { name: 'Wooden Stand Poster / Banner', correctCategory: 'Fixed' },
  { name: 'Ice Bags bought daily based on sales', correctCategory: 'Variable' }
];

export default function EntrepreneurshipApp() {
  // Navigation & UI state
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Universal Design for Learning (UDL) Accessibility Settings
  const [dyslexicFont, setDyslexicFont] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [textSize, setTextSize] = useState('normal');
  const [speechSynthesisActive, setSpeechSynthesisActive] = useState(false);
  const [currentSpeakingId, setCurrentSpeakingId] = useState(null);

  // Gamification & Progress State
  const [xp, setXp] = useState(120);
  const [completedScenarios, setCompletedScenarios] = useState({});
  const [masteredTerms, setMasteredTerms] = useState([]);

  // Speech Helper
  const speakText = (text, id = null) => {
    if ('speechSynthesis' in window) {
      if (speechSynthesisActive && (currentSpeakingId === id || (id === null && currentSpeakingId === 'global'))) {
        stopSpeech();
        return;
      }
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.95;
      utterance.onend = () => {
        setSpeechSynthesisActive(false);
        setCurrentSpeakingId(null);
      };
      utterance.onerror = () => {
        setSpeechSynthesisActive(false);
        setCurrentSpeakingId(null);
      };
      window.speechSynthesis.speak(utterance);
      setSpeechSynthesisActive(true);
      setCurrentSpeakingId(id || 'global');
    }
  };

  const stopSpeech = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setSpeechSynthesisActive(false);
      setCurrentSpeakingId(null);
    }
  };

  const getTextSizeClass = () => {
    if (textSize === 'large') return 'text-lg';
    if (textSize === 'xl') return 'text-xl';
    return 'text-base';
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      highContrast 
        ? 'bg-black text-white font-bold' 
        : 'bg-white text-[#414042]'
    } ${dyslexicFont ? 'font-mono' : 'font-sans'}`}>
      
      {/* HEADER */}
      <header className={`sticky top-0 z-50 px-4 py-2.5 text-xs md:text-sm shadow-xs transition-colors duration-200 ${
        highContrast 
          ? 'bg-black text-white border-b-2 border-yellow-400' 
          : 'border-b border-[#414042]/15 bg-white/95 backdrop-blur-md'
      }`}>
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className="flex items-center gap-2.5 font-bold text-left group hover:opacity-85 transition cursor-pointer focus:outline-none"
            title="Go to Dashboard & Roadmap"
          >
            <div className={`p-1.5 rounded-xl transition ${
              highContrast ? 'bg-yellow-400 text-black' : 'bg-[#E94928]/10 text-[#E94928] group-hover:bg-[#E94928]/20'
            }`}>
              <Zap className="w-5 h-5 animate-pulse" />
            </div>
            <span className={`text-sm md:text-base tracking-wide font-extrabold transition ${
              highContrast ? 'text-white' : 'text-[#414042] group-hover:text-[#C51C63]'
            }`}>
              Entrepreneurship Resource & Knowledge Practice Hub
            </span>
          </button>

          {/* UDL Accessibility Controls */}
          <div className={`flex items-center gap-2 p-1 rounded-xl border ${
            highContrast ? 'bg-zinc-900 border-2 border-white text-white' : 'bg-[#414042]/5 border-[#414042]/10'
          }`}>
            <span className={`text-xs hidden lg:inline pl-1 font-semibold ${highContrast ? 'text-yellow-300' : 'text-[#414042]/70'}`}>Accessibility:</span>
            
            <button 
              onClick={() => setHighContrast(!highContrast)}
              className={`p-1.5 rounded-lg text-xs flex items-center gap-1 transition ${
                highContrast ? 'bg-yellow-400 text-black font-extrabold border-2 border-white' : 'hover:bg-[#414042]/10 text-[#414042]'
              }`}
              title="Toggle High Contrast Mode"
            >
              {highContrast ? <Sun className="w-4 h-4 text-black" /> : <Moon className="w-4 h-4 text-[#C51C63]" />}
              <span className="hidden sm:inline">Contrast</span>
            </button>

            <button 
              onClick={() => setDyslexicFont(!dyslexicFont)}
              className={`p-1.5 rounded-lg text-xs flex items-center gap-1 transition ${
                dyslexicFont 
                  ? highContrast ? 'bg-yellow-400 text-black font-extrabold' : 'bg-[#C51C63] text-white font-bold' 
                  : highContrast ? 'text-white hover:bg-zinc-800' : 'hover:bg-[#414042]/10 text-[#414042]'
              }`}
              title="Toggle Readable Font"
            >
              <Type className={`w-4 h-4 ${highContrast ? 'text-yellow-300' : 'text-[#E94928]'}`} />
              <span className="hidden sm:inline">Font</span>
            </button>

            <div className={`flex items-center border-l pl-1 ${highContrast ? 'border-white/40' : 'border-[#414042]/20'}`}>
              <button 
                onClick={() => setTextSize(textSize === 'normal' ? 'large' : textSize === 'large' ? 'xl' : 'normal')}
                className={`px-2 py-1 text-xs font-bold ${highContrast ? 'text-yellow-300 hover:text-white' : 'text-[#414042] hover:text-[#C51C63]'}`}
                title="Change Text Size"
              >
                A{textSize === 'large' ? '+' : textSize === 'xl' ? '++' : ''}
              </button>
            </div>

            {speechSynthesisActive && (
              <button 
                onClick={stopSpeech}
                className={`px-2 py-1 rounded text-xs flex items-center gap-1 font-semibold border ${
                  highContrast ? 'bg-red-600 text-white border-white' : 'bg-[#E94928]/15 text-[#E94928] hover:bg-[#E94928]/25 border-[#E94928]/30'
                }`}
              >
                <VolumeX className="w-3.5 h-3.5" /> Stop Audio
              </button>
            )}
          </div>

          {/* Gamification Badge */}
          <div className="flex items-center gap-3">
            <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full font-bold text-xs shadow-xs border ${
              highContrast ? 'bg-zinc-900 border-2 border-yellow-400 text-yellow-300' : 'bg-[#EFA835]/15 border-[#EFA835]/40 text-[#414042]'
            }`}>
              <Trophy className="w-4 h-4 text-[#EFA835]" />
              <span>{xp} XP</span>
            </div>
          </div>
        </div>
      </header>

      {/* NAVIGATION TABS */}
      <nav className={`px-4 transition-colors duration-200 ${
        highContrast ? 'bg-black border-b-2 border-yellow-400' : 'border-b border-[#414042]/10 bg-white'
      }`}>
        <div className="max-w-7xl mx-auto flex space-x-1 sm:space-x-2 overflow-x-auto py-2.5 scrollbar-none">
          {[
            { id: 'dashboard', label: 'Dashboard & Roadmap', icon: Rocket },
            { id: 'glossary', label: 'Glossary & Cards', icon: BookOpen },
            { id: 'calculators', label: 'Formula & Math Lab', icon: Calculator },
            { id: 'practice', label: 'Interactive Scenarios', icon: Target },
            { id: 'simulator', label: 'Venture Pitch Builder', icon: Briefcase },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
                  isActive 
                    ? highContrast 
                      ? 'bg-yellow-400 text-black font-extrabold border-2 border-white' 
                      : 'bg-[#C51C63] text-white font-bold shadow-md shadow-[#C51C63]/20' 
                    : highContrast
                      ? 'text-white hover:bg-zinc-800 border-2 border-transparent hover:border-yellow-400 font-bold'
                      : 'text-[#414042] hover:bg-[#414042]/5 hover:text-[#C51C63]'
                }`}
              >
                <Icon className={`w-4 h-4 ${
                  isActive 
                    ? highContrast ? 'text-black' : 'text-white' 
                    : highContrast ? 'text-yellow-300' : 'text-[#E94928]'
                }`} />
                {tab.label}
              </button>
            );
          })}
        </div>
      </nav>

      {/* MAIN CONTENT AREA */}
      <main className={`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 ${getTextSizeClass()}`}>
        {activeTab === 'dashboard' && (
          <DashboardView 
            setActiveTab={setActiveTab} 
            xp={xp} 
            masteredCount={masteredTerms.length} 
            scenariosCount={Object.keys(completedScenarios).length}
            speakText={speakText}
            highContrast={highContrast}
          />
        )}

        {activeTab === 'glossary' && (
          <GlossaryView 
            masteredTerms={masteredTerms} 
            setMasteredTerms={setMasteredTerms}
            setXp={setXp}
            speakText={speakText}
            stopSpeech={stopSpeech}
            currentSpeakingId={currentSpeakingId}
            speechSynthesisActive={speechSynthesisActive}
            highContrast={highContrast}
          />
        )}

        {activeTab === 'calculators' && (
          <CalculatorsView speakText={speakText} highContrast={highContrast} />
        )}

        {activeTab === 'practice' && (
          <PracticeView 
            completedScenarios={completedScenarios} 
            setCompletedScenarios={setCompletedScenarios}
            setXp={setXp}
            speakText={speakText}
            highContrast={highContrast}
          />
        )}

        {activeTab === 'simulator' && (
          <VentureSimulatorView setXp={setXp} highContrast={highContrast} speakText={speakText} />
        )}
      </main>
    </div>
  );
}

function DashboardView({ setActiveTab, xp, masteredCount, scenariosCount, speakText, highContrast }) {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* HERO BANNER */}
      <div className={`relative overflow-hidden rounded-3xl p-6 sm:p-10 shadow-xs ${
        highContrast 
          ? 'bg-zinc-900 border-2 border-yellow-400 text-white' 
          : 'bg-gradient-to-br from-[#EFA835]/10 via-white to-[#C51C63]/10 border border-[#414042]/15'
      }`}>
        <div className="max-w-2xl space-y-4">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold border ${
            highContrast 
              ? 'bg-yellow-400 text-black border-white' 
              : 'bg-[#E94928]/10 border-[#E94928]/30 text-[#E94928]'
          }`}>
            <Sparkles className={`w-3.5 h-3.5 ${highContrast ? 'text-black' : 'text-[#EFA835]'}`} /> Middle School Financial Literacy & Entrepreneurship
          </div>
          <h1 className={`text-3xl sm:text-5xl font-black tracking-tight ${highContrast ? 'text-white' : 'text-[#414042]'}`}>
            Master the Language of <span className={highContrast ? 'text-yellow-300 underline' : 'text-[#C51C63]'}>Money & Business</span>
          </h1>
          <p className={`leading-relaxed ${highContrast ? 'text-zinc-100 font-medium' : 'text-[#414042]/80'}`}>
            Welcome to your interactive practice hub! Learn essential money skills, calculate net worth, analyze business costs, and pitch your own venture—aligned with 7th & 8th grade business standards.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <button 
              onClick={() => setActiveTab('practice')}
              className={`font-bold px-5 py-3 rounded-xl flex items-center gap-2 shadow-md transition transform active:scale-95 ${
                highContrast 
                  ? 'bg-yellow-400 hover:bg-yellow-300 text-black font-extrabold border-2 border-white' 
                  : 'bg-[#C51C63] hover:bg-[#a81452] text-white shadow-[#C51C63]/20'
              }`}
            >
              Start Practice Challenges <ArrowRight className={`w-4 h-4 ${highContrast ? 'text-black' : 'text-[#EFA835]'}`} />
            </button>
            <button 
              onClick={() => speakText("Welcome to your interactive entrepreneurship practice hub. Use this platform to explore financial terms, solve real business math scenarios, and build your own business pitch.")}
              className={`px-4 py-3 rounded-xl flex items-center gap-2 transition font-semibold shadow-xs ${
                highContrast 
                  ? 'bg-zinc-800 text-white border-2 border-white hover:bg-zinc-700' 
                  : 'bg-white hover:bg-[#414042]/5 text-[#414042] border border-[#414042]/20'
              }`}
            >
              <Volume2 className={`w-4 h-4 ${highContrast ? 'text-yellow-300' : 'text-[#E94928]'}`} /> Read Overview
            </button>
          </div>
        </div>
      </div>

      {/* QUICK STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className={`p-5 rounded-2xl flex items-center gap-4 shadow-xs ${
          highContrast ? 'bg-zinc-900 border-2 border-white text-white' : 'bg-white border border-[#414042]/15'
        }`}>
          <div className={`p-3 rounded-xl border ${
            highContrast ? 'bg-yellow-400 text-black border-white' : 'bg-[#EFA835]/15 text-[#EFA835] border-[#EFA835]/30'
          }`}>
            <Trophy className="w-7 h-7" />
          </div>
          <div>
            <div className={`text-2xl font-black ${highContrast ? 'text-white' : 'text-[#414042]'}`}>{xp}</div>
            <div className={`text-xs font-medium ${highContrast ? 'text-yellow-300' : 'text-[#414042]/70'}`}>Total Experience Points</div>
          </div>
        </div>

        <div className={`p-5 rounded-2xl flex items-center gap-4 shadow-xs ${
          highContrast ? 'bg-zinc-900 border-2 border-white text-white' : 'bg-white border border-[#414042]/15'
        }`}>
          <div className={`p-3 rounded-xl border ${
            highContrast ? 'bg-yellow-400 text-black border-white' : 'bg-[#C51C63]/10 text-[#C51C63] border-[#C51C63]/20'
          }`}>
            <BookOpen className="w-7 h-7" />
          </div>
          <div>
            <div className={`text-2xl font-black ${highContrast ? 'text-white' : 'text-[#414042]'}`}>{masteredCount} / {GLOSSARY_DATA.length}</div>
            <div className={`text-xs font-medium ${highContrast ? 'text-yellow-300' : 'text-[#414042]/70'}`}>Glossary Terms Mastered</div>
          </div>
        </div>

        <div className={`p-5 rounded-2xl flex items-center gap-4 shadow-xs ${
          highContrast ? 'bg-zinc-900 border-2 border-white text-white' : 'bg-white border border-[#414042]/15'
        }`}>
          <div className={`p-3 rounded-xl border ${
            highContrast ? 'bg-yellow-400 text-black border-white' : 'bg-[#E94928]/10 text-[#E94928] border-[#E94928]/20'
          }`}>
            <Target className="w-7 h-7" />
          </div>
          <div>
            <div className={`text-2xl font-black ${highContrast ? 'text-white' : 'text-[#414042]'}`}>{scenariosCount} / {PRACTICE_SCENARIOS.length}</div>
            <div className={`text-xs font-medium ${highContrast ? 'text-yellow-300' : 'text-[#414042]/70'}`}>Scenarios Solved</div>
          </div>
        </div>
      </div>

      {/* CURRICULUM ROADMAP GRID */}
      <div className="space-y-4">
        <h2 className={`text-xl font-bold flex items-center gap-2 ${highContrast ? 'text-white' : 'text-[#414042]'}`}>
          <Layers className={`w-5 h-5 ${highContrast ? 'text-yellow-300' : 'text-[#C51C63]'}`} /> Curriculum Roadmap
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              tab: 'glossary',
              title: '1. Essential Glossary',
              desc: 'Master Assets, Liabilities, Compound Interest, Fixed vs Variable Costs.',
              icon: BookOpen,
              borderColor: 'border-[#C51C63]/30',
              bgColor: 'bg-[#C51C63]/5',
              btnColor: 'bg-[#C51C63] hover:bg-[#a81452] text-white',
              iconColor: 'text-[#C51C63]'
            },
            {
              tab: 'calculators',
              title: '2. Math & Formula Lab',
              desc: 'Interactive visual tools for Net Worth, Net Profit, ROI, and Break-Even.',
              icon: Calculator,
              borderColor: 'border-[#E94928]/30',
              bgColor: 'bg-[#E94928]/5',
              btnColor: 'bg-[#E94928] hover:bg-[#d43a1b] text-white',
              iconColor: 'text-[#E94928]'
            },
            {
              tab: 'practice',
              title: '3. Real-World Practice',
              desc: 'Solve Alex’s Sneaker Cleaning and Lemonade Stand math scenarios.',
              icon: Target,
              borderColor: 'border-[#EFA835]/40',
              bgColor: 'bg-[#EFA835]/10',
              btnColor: 'bg-[#EFA835] hover:bg-[#d9962b] text-[#414042] font-extrabold',
              iconColor: 'text-[#EFA835]'
            },
            {
              tab: 'simulator',
              title: '4. Business Pitch Builder',
              desc: 'Design your micro-business, project earnings, and download your pitch card.',
              icon: Briefcase,
              borderColor: 'border-[#414042]/30',
              bgColor: 'bg-[#414042]/5',
              btnColor: 'bg-[#414042] hover:bg-[#2b2a2c] text-white',
              iconColor: 'text-[#414042]'
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className={`p-6 rounded-2xl flex flex-col justify-between space-y-4 shadow-xs ${
                  highContrast 
                    ? 'bg-zinc-900 border-2 border-yellow-400 text-white' 
                    : `${item.bgColor} ${item.borderColor} border`
                }`}
              >
                <div className="space-y-2">
                  <div className={`p-3 w-fit rounded-xl border shadow-xs ${
                    highContrast ? 'bg-black border-white text-yellow-300' : 'bg-white border-[#414042]/15'
                  }`}>
                    <Icon className={`w-6 h-6 ${highContrast ? 'text-yellow-300' : item.iconColor}`} />
                  </div>
                  <h3 className={`font-bold text-lg ${highContrast ? 'text-yellow-300' : 'text-[#414042]'}`}>{item.title}</h3>
                  <p className={`text-xs leading-relaxed ${highContrast ? 'text-white font-medium' : 'text-[#414042]/75'}`}>{item.desc}</p>
                </div>
                <button 
                  onClick={() => setActiveTab(item.tab)}
                  className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition ${
                    highContrast 
                      ? 'bg-yellow-400 text-black hover:bg-yellow-300 font-extrabold border-2 border-white' 
                      : item.btnColor
                  }`}
                >
                  Explore Module <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function GlossaryView({ masteredTerms, setMasteredTerms, setXp, speakText, stopSpeech, currentSpeakingId, speechSynthesisActive, highContrast }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [studyMode, setStudyMode] = useState('list');
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const categories = ['All', 'Financial Literacy', 'Entrepreneurship', 'Entrepreneurial Mindset'];

  const filteredTerms = useMemo(() => {
    return GLOSSARY_DATA.filter(item => {
      const matchesSearch = item.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            item.definition.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCat = activeCategory === 'All' || item.category === activeCategory;
      return matchesSearch && matchesCat;
    });
  }, [searchTerm, activeCategory]);

  const toggleMastered = (id) => {
    if (masteredTerms.includes(id)) {
      setMasteredTerms(masteredTerms.filter(item => item !== id));
      setXp(prev => Math.max(0, prev - 15));
    } else {
      setMasteredTerms([...masteredTerms, id]);
      setXp(prev => prev + 15);
    }
  };

  return (
    <div className="space-y-6">
      {/* HEADER & CONTROLS */}
      <div className={`p-6 rounded-2xl border flex flex-col md:flex-row justify-between items-start md:items-center gap-4 ${
        highContrast ? 'bg-zinc-900 border-2 border-yellow-400 text-white' : 'bg-[#414042]/5 border-[#414042]/10'
      }`}>
        <div>
          <h2 className={`text-2xl font-black flex items-center gap-2 ${highContrast ? 'text-white' : 'text-[#414042]'}`}>
            <BookOpen className={`w-6 h-6 ${highContrast ? 'text-yellow-300' : 'text-[#C51C63]'}`} /> Entrepreneur's Essential Glossary
          </h2>
          <p className={`text-xs mt-1 ${highContrast ? 'text-zinc-200' : 'text-[#414042]/70'}`}>
            Build your financial vocabulary. Tap the audio button to play or stop reading at any time!
          </p>
        </div>

        {/* View Toggle */}
        <div className={`flex p-1 rounded-xl border ${
          highContrast ? 'bg-black border-white' : 'bg-[#414042]/10 border-[#414042]/15'
        }`}>
          <button 
            onClick={() => { setStudyMode('list'); stopSpeech(); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              studyMode === 'list' 
                ? highContrast ? 'bg-yellow-400 text-black font-extrabold' : 'bg-[#C51C63] text-white' 
                : highContrast ? 'text-white' : 'text-[#414042]'
            }`}
          >
            Dictionary List
          </button>
          <button 
            onClick={() => { setStudyMode('flashcards'); setCurrentCardIndex(0); setIsFlipped(false); stopSpeech(); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              studyMode === 'flashcards' 
                ? highContrast ? 'bg-yellow-400 text-black font-extrabold' : 'bg-[#C51C63] text-white' 
                : highContrast ? 'text-white' : 'text-[#414042]'
            }`}
          >
            Flashcard Mode 🃏
          </button>
        </div>
      </div>

      {/* SEARCH BAR & CATEGORY FILTERS */}
      {studyMode === 'list' && (
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className={`w-4 h-4 absolute left-3 top-3.5 ${highContrast ? 'text-yellow-300' : 'text-[#414042]/40'}`} />
            <input 
              type="text" 
              placeholder="Search terms like Assets, Liabilities, Profit..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-9 pr-4 py-2.5 rounded-xl text-sm focus:outline-none shadow-xs ${
                highContrast 
                  ? 'bg-zinc-900 text-white border-2 border-white focus:border-yellow-400 placeholder-zinc-400 font-bold' 
                  : 'bg-white border border-[#414042]/20 text-[#414042] placeholder-[#414042]/40 focus:border-[#C51C63]'
              }`}
            />
          </div>
          <div className="flex gap-1 overflow-x-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                  activeCategory === cat 
                    ? highContrast 
                      ? 'bg-yellow-400 text-black border-2 border-white font-extrabold' 
                      : 'bg-[#414042] text-white border border-[#414042]' 
                    : highContrast 
                      ? 'bg-zinc-900 text-white border-2 border-white hover:border-yellow-400' 
                      : 'bg-white text-[#414042] border border-[#414042]/20 hover:border-[#C51C63]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* DICTIONARY LIST */}
      {studyMode === 'list' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredTerms.map((item) => {
            const isMastered = masteredTerms.includes(item.id);
            const isSpeakingThis = speechSynthesisActive && currentSpeakingId === item.id;
            return (
              <div 
                key={item.id} 
                className={`p-5 rounded-2xl border transition flex flex-col justify-between space-y-3 shadow-xs ${
                  highContrast 
                    ? 'bg-zinc-900 border-2 border-yellow-400 text-white' 
                    : isMastered 
                      ? 'bg-[#EFA835]/10 border-[#EFA835]' 
                      : 'bg-white border-[#414042]/15 hover:border-[#C51C63]/50'
                }`}
              >
                <div>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2.5">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <h3 className={`font-bold text-lg ${highContrast ? 'text-yellow-300 font-black' : 'text-[#414042]'}`}>{item.term}</h3>
                        <span className={`text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full font-mono font-bold ${
                          highContrast ? 'bg-yellow-400 text-black border border-white' : 'bg-[#E94928]/10 text-[#E94928]'
                        }`}>
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <button 
                      onClick={() => {
                        if (isSpeakingThis) {
                          stopSpeech();
                        } else {
                          speakText(`${item.term}. Definition: ${item.definition}. Real-world Example: ${item.example}`, item.id);
                        }
                      }}
                      className={`p-2 rounded-xl border transition flex items-center gap-1.5 ${
                        highContrast
                          ? 'bg-zinc-800 text-white border-2 border-white hover:bg-zinc-700'
                          : isSpeakingThis 
                            ? 'bg-[#E94928] text-white border-[#E94928] animate-pulse font-bold' 
                            : 'bg-[#414042]/5 hover:bg-[#C51C63]/10 text-[#C51C63] border-[#414042]/15'
                      }`}
                      title={isSpeakingThis ? "Stop audio" : "Read aloud"}
                    >
                      {isSpeakingThis ? (
                        <>
                          <VolumeX className="w-4 h-4" />
                          <span className="text-xs">Stop</span>
                        </>
                      ) : (
                        <Volume2 className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  <p className={`text-sm mt-3 leading-relaxed ${highContrast ? 'text-white font-medium' : 'text-[#414042]'}`}>
                    {item.definition}
                  </p>

                  {item.formula && (
                    <div className={`mt-2 text-xs font-mono px-3 py-1.5 rounded-lg w-fit font-bold border ${
                      highContrast ? 'bg-black text-yellow-300 border-yellow-400' : 'bg-[#E94928]/10 text-[#E94928] border-[#E94928]/30'
                    }`}>
                      📐 {item.formula}
                    </div>
                  )}

                  <div className={`mt-3 p-3 rounded-xl border text-xs ${
                    highContrast ? 'bg-black text-white border-white' : 'bg-[#414042]/5 border-[#414042]/10 text-[#414042]/90'
                  }`}>
                    <strong className={highContrast ? 'text-yellow-300' : 'text-[#E94928]'}>Real-World Example:</strong> {item.example}
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <button 
                    onClick={() => toggleMastered(item.id)}
                    className={`text-xs font-bold px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 transition ${
                      highContrast 
                        ? isMastered 
                          ? 'bg-yellow-400 text-black font-extrabold border-2 border-white' 
                          : 'bg-zinc-800 text-white border-2 border-white hover:bg-yellow-400 hover:text-black'
                        : isMastered 
                          ? 'bg-[#EFA835] text-[#414042] border border-[#EFA835]' 
                          : 'bg-[#414042]/10 text-[#414042] hover:bg-[#C51C63] hover:text-white border border-[#414042]/15'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {isMastered ? 'Mastered (+15 XP)' : 'Mark as Learned'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* FLASHCARD INTERACTIVE MODE */}
      {studyMode === 'flashcards' && filteredTerms.length > 0 && (
        <div className="max-w-xl mx-auto space-y-6">
          <div className={`text-center text-xs font-mono ${highContrast ? 'text-yellow-300 font-bold' : 'text-[#414042]/70'}`}>
            Card {currentCardIndex + 1} of {filteredTerms.length}
          </div>

          <div 
            onClick={() => setIsFlipped(!isFlipped)}
            className={`cursor-pointer min-h-[280px] rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-md transition relative ${
              highContrast 
                ? 'bg-zinc-900 border-4 border-yellow-400 text-white' 
                : 'bg-white border-2 border-[#C51C63] hover:border-[#E94928]'
            }`}
          >
            <span className={`absolute top-4 right-4 text-xs px-2.5 py-1 rounded-full font-mono font-semibold border ${
              highContrast ? 'bg-black text-yellow-300 border-yellow-400' : 'bg-[#414042]/5 text-[#414042] border-[#414042]/15'
            }`}>
              Click to Flip 🔄
            </span>

            {/* Read Aloud Button for Front and Back sides */}
            {(() => {
              const currentCard = filteredTerms[currentCardIndex];
              const sideId = !isFlipped ? `flash-front-${currentCard.id}` : `flash-back-${currentCard.id}`;
              const isSpeakingSide = speechSynthesisActive && currentSpeakingId === sideId;
              
              const frontText = `${currentCard.term}. Category: ${currentCard.category}`;
              const backText = `Definition: ${currentCard.definition}. ${currentCard.formula ? 'Formula: ' + currentCard.formula + '.' : ''} Example: ${currentCard.example}`;
              
              return (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (isSpeakingSide) {
                      stopSpeech();
                    } else {
                      speakText(!isFlipped ? frontText : backText, sideId);
                    }
                  }}
                  className={`absolute top-4 left-4 p-2 rounded-xl border text-xs flex items-center gap-1.5 transition z-10 ${
                    highContrast
                      ? 'bg-zinc-800 text-white border-2 border-white hover:bg-zinc-700'
                      : isSpeakingSide 
                        ? 'bg-[#E94928] text-white border-[#E94928] animate-pulse font-bold' 
                        : 'bg-[#414042]/5 hover:bg-[#C51C63]/10 text-[#C51C63] border-[#414042]/15'
                  }`}
                  title={isSpeakingSide ? "Stop audio" : !isFlipped ? "Read front of card" : "Read back of card"}
                >
                  {isSpeakingSide ? (
                    <>
                      <VolumeX className="w-4 h-4" />
                      <span className="font-semibold">Stop</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-4 h-4" />
                      <span className="font-semibold">{!isFlipped ? "Read Term" : "Read Definition"}</span>
                    </>
                  )}
                </button>
              );
            })()}

            {!isFlipped ? (
              <div className="space-y-3 pt-4">
                <span className="text-5xl">{filteredTerms[currentCardIndex].icon}</span>
                <h3 className={`text-2xl font-extrabold ${highContrast ? 'text-white' : 'text-[#414042]'}`}>{filteredTerms[currentCardIndex].term}</h3>
                <p className={`text-xs font-mono uppercase tracking-wider font-bold ${highContrast ? 'text-yellow-300' : 'text-[#C51C63]'}`}>{filteredTerms[currentCardIndex].category}</p>
              </div>
            ) : (
              <div className="space-y-4 animate-fadeIn pt-4">
                <p className={`text-base font-medium leading-relaxed ${highContrast ? 'text-white' : 'text-[#414042]'}`}>
                  "{filteredTerms[currentCardIndex].definition}"
                </p>
                {filteredTerms[currentCardIndex].formula && (
                  <div className={`text-xs font-mono px-3 py-1.5 rounded-lg border font-bold ${
                    highContrast ? 'bg-black text-yellow-300 border-white' : 'text-[#E94928] bg-[#E94928]/10 border-[#E94928]/30'
                  }`}>
                    {filteredTerms[currentCardIndex].formula}
                  </div>
                )}
                <div className={`text-xs p-3 rounded-xl border ${
                  highContrast ? 'bg-black text-white border-yellow-400' : 'text-[#414042] bg-[#EFA835]/15 border-[#EFA835]/40'
                }`}>
                  Example: {filteredTerms[currentCardIndex].example}
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-between gap-3">
            <button 
              disabled={currentCardIndex === 0}
              onClick={() => { setCurrentCardIndex(prev => prev - 1); setIsFlipped(false); stopSpeech(); }}
              className={`px-4 py-2 rounded-xl text-xs font-bold ${
                highContrast 
                  ? 'bg-zinc-800 hover:bg-zinc-700 text-white disabled:opacity-40 border-2 border-white' 
                  : 'bg-[#414042]/10 hover:bg-[#414042]/20 disabled:opacity-40 text-[#414042]'
              }`}
            >
              Previous Card
            </button>

            <button 
              disabled={currentCardIndex === filteredTerms.length - 1}
              onClick={() => { setCurrentCardIndex(prev => prev + 1); setIsFlipped(false); stopSpeech(); }}
              className={`px-4 py-2 rounded-xl text-xs font-bold ${
                highContrast 
                  ? 'bg-yellow-400 hover:bg-yellow-300 text-black font-extrabold border-2 border-white disabled:opacity-40' 
                  : 'bg-[#C51C63] hover:bg-[#a81452] text-white'
              }`}
            >
              Next Card
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function CalculatorsView({ speakText, highContrast }) {
  const [activeCalc, setActiveCalc] = useState('net-worth');

  // Calculator State Variables
  const [assets, setAssets] = useState(200);
  const [liabilities, setLiabilities] = useState(30);

  const [unitPrice, setUnitPrice] = useState(15);
  const [quantity, setQuantity] = useState(10);
  const [calcExpenses, setCalcExpenses] = useState(20);

  const [investmentCost, setInvestmentCost] = useState(50);
  const [netProfitGained, setNetProfitGained] = useState(120);

  const [fixedCosts, setFixedCosts] = useState(60);
  const [pricePerUnit, setPricePerUnit] = useState(10);
  const [variableCostPerUnit, setVariableCostPerUnit] = useState(4);

  // Computed Values
  const computedNetWorth = assets - liabilities;
  const computedRevenue = unitPrice * quantity;
  const computedProfit = computedRevenue - calcExpenses;
  const computedROI = investmentCost > 0 ? ((netProfitGained / investmentCost) * 100).toFixed(1) : 0;
  
  const marginPerUnit = pricePerUnit - variableCostPerUnit;
  const breakEvenUnits = marginPerUnit > 0 ? Math.ceil(fixedCosts / marginPerUnit) : 'N/A';

  return (
    <div className="space-y-6">
      <div className={`p-6 rounded-2xl border flex flex-col md:flex-row justify-between items-start md:items-center gap-4 ${
        highContrast ? 'bg-zinc-900 border-2 border-yellow-400 text-white' : 'bg-[#414042]/5 border-[#414042]/10'
      }`}>
        <div>
          <h2 className={`text-2xl font-black flex items-center gap-2 ${highContrast ? 'text-white' : 'text-[#414042]'}`}>
            <Calculator className={`w-6 h-6 ${highContrast ? 'text-yellow-300' : 'text-[#E94928]'}`} /> Interactive Financial Formula Lab
          </h2>
          <p className={`text-xs mt-1 ${highContrast ? 'text-zinc-200' : 'text-[#414042]/70'}`}>
            Adjust the slider values to see how assets, expenses, prices, and ROI dynamically recalculate!
          </p>
        </div>

        {/* Tab Selection */}
        <div className={`flex flex-wrap gap-1 p-1 rounded-xl border ${
          highContrast ? 'bg-black border-white' : 'bg-[#414042]/10 border-[#414042]/15'
        }`}>
          {[
            { id: 'net-worth', label: 'Net Worth' },
            { id: 'profit', label: 'Profit' },
            { id: 'roi', label: 'ROI %' },
            { id: 'break-even', label: 'Break-Even' }
          ].map(c => (
            <button
              key={c.id}
              onClick={() => setActiveCalc(c.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                activeCalc === c.id 
                  ? highContrast ? 'bg-yellow-400 text-black font-extrabold' : 'bg-[#C51C63] text-white' 
                  : highContrast ? 'text-white' : 'text-[#414042] hover:text-[#C51C63]'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* CALCULATOR 1: NET WORTH */}
      {activeCalc === 'net-worth' && (
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-2xl border shadow-xs ${
          highContrast ? 'bg-zinc-900 border-2 border-white text-white' : 'bg-white border-[#414042]/15'
        }`}>
          <div className="space-y-5">
            <div className={`p-3 rounded-xl text-xs font-mono font-bold border ${
              highContrast ? 'bg-black text-yellow-300 border-yellow-400' : 'bg-[#C51C63]/10 border-[#C51C63]/30 text-[#C51C63]'
            }`}>
              Formula: Net Worth = Assets - Liabilities
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold flex justify-between">
                <span>Total Assets ($)</span>
                <span className={highContrast ? 'text-yellow-300 font-mono' : 'text-[#C51C63] font-mono'}>${assets}</span>
              </label>
              <input 
                type="range" min="0" max="1000" step="10" 
                value={assets} 
                onChange={(e) => setAssets(Number(e.target.value))}
                className="w-full accent-yellow-400 cursor-pointer"
              />
              <p className={`text-[11px] ${highContrast ? 'text-zinc-300' : 'text-[#414042]/60'}`}>Sneakers, equipment, savings account balance</p>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold flex justify-between">
                <span>Total Liabilities ($)</span>
                <span className={highContrast ? 'text-red-400 font-mono' : 'text-[#E94928] font-mono'}>${liabilities}</span>
              </label>
              <input 
                type="range" min="0" max="500" step="5" 
                value={liabilities} 
                onChange={(e) => setLiabilities(Number(e.target.value))}
                className="w-full accent-red-500 cursor-pointer"
              />
              <p className={`text-[11px] ${highContrast ? 'text-zinc-300' : 'text-[#414042]/60'}`}>Money owed to friends, parents, or debts</p>
            </div>
          </div>

          <div className={`p-6 rounded-2xl border flex flex-col justify-between items-center text-center space-y-4 ${
            highContrast ? 'bg-black border-2 border-yellow-400 text-white' : 'bg-[#414042]/5 border-[#414042]/10'
          }`}>
            <div className="w-full text-right">
              <button 
                onClick={() => speakText(`Your Net Worth is ${computedNetWorth} dollars. Assets of ${assets} minus Liabilities of ${liabilities}.`)}
                className={`p-1.5 ${highContrast ? 'text-yellow-300 hover:text-white' : 'text-[#414042]/60 hover:text-[#C51C63]'}`}
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>

            <div>
              <span className={`text-xs uppercase font-mono tracking-wider font-semibold ${highContrast ? 'text-yellow-300' : 'text-[#414042]/70'}`}>Calculated Net Worth</span>
              <div className={`text-4xl sm:text-5xl font-black mt-1 ${highContrast ? 'text-yellow-300' : computedNetWorth >= 0 ? 'text-[#C51C63]' : 'text-[#E94928]'}`}>
                ${computedNetWorth}
              </div>
            </div>

            <div className="w-full space-y-2">
              <div className={`flex justify-between text-xs font-mono font-semibold ${highContrast ? 'text-white' : 'text-[#414042]'}`}>
                <span>Assets: ${assets}</span>
                <span>Liabilities: ${liabilities}</span>
              </div>
              <div className="w-full h-4 bg-zinc-800 rounded-full overflow-hidden flex border border-white">
                <div style={{ width: `${Math.min(100, (assets / (assets + liabilities || 1)) * 100)}%` }} className="bg-yellow-400 h-full"></div>
                <div style={{ width: `${Math.min(100, (liabilities / (assets + liabilities || 1)) * 100)}%` }} className="bg-red-500 h-full"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CALCULATOR 2: REVENUE vs PROFIT */}
      {activeCalc === 'profit' && (
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-2xl border shadow-xs ${
          highContrast ? 'bg-zinc-900 border-2 border-white text-white' : 'bg-white border-[#414042]/15'
        }`}>
          <div className="space-y-4">
            <div className={`p-3 rounded-xl text-xs font-mono font-bold border ${
              highContrast ? 'bg-black text-yellow-300 border-yellow-400' : 'bg-[#E94928]/10 border-[#E94928]/30 text-[#E94928]'
            }`}>
              Formula: Revenue = Price × Quantity | Profit = Revenue - Expenses
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold flex justify-between">
                <span>Price per Service/Item ($)</span>
                <span className={highContrast ? 'text-yellow-300 font-mono' : 'text-[#C51C63] font-mono'}>${unitPrice}</span>
              </label>
              <input type="range" min="1" max="100" value={unitPrice} onChange={(e) => setUnitPrice(Number(e.target.value))} className="w-full accent-yellow-400 cursor-pointer" />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold flex justify-between">
                <span>Quantity Sold</span>
                <span className={highContrast ? 'text-yellow-300 font-mono' : 'text-[#C51C63] font-mono'}>{quantity} units</span>
              </label>
              <input type="range" min="1" max="50" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} className="w-full accent-yellow-400 cursor-pointer" />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold flex justify-between">
                <span>Total Operational Expenses ($)</span>
                <span className={highContrast ? 'text-red-400 font-mono' : 'text-[#E94928] font-mono'}>${calcExpenses}</span>
              </label>
              <input type="range" min="0" max="300" value={calcExpenses} onChange={(e) => setCalcExpenses(Number(e.target.value))} className="w-full accent-red-500 cursor-pointer" />
            </div>
          </div>

          <div className={`p-6 rounded-2xl border flex flex-col justify-center items-center text-center space-y-4 ${
            highContrast ? 'bg-black border-2 border-yellow-400 text-white' : 'bg-[#414042]/5 border-[#414042]/10'
          }`}>
            <div className="grid grid-cols-2 gap-4 w-full">
              <div className={`p-3 rounded-xl border shadow-xs ${highContrast ? 'bg-zinc-900 border-white text-white' : 'bg-white border-[#414042]/15'}`}>
                <div className={`text-[10px] font-mono uppercase font-semibold ${highContrast ? 'text-yellow-300' : 'text-[#414042]/60'}`}>Total Revenue</div>
                <div className={`text-2xl font-bold ${highContrast ? 'text-white' : 'text-[#EFA835]'}`}>${computedRevenue}</div>
              </div>
              <div className={`p-3 rounded-xl border shadow-xs ${highContrast ? 'bg-zinc-900 border-white text-white' : 'bg-white border-[#414042]/15'}`}>
                <div className={`text-[10px] font-mono uppercase font-semibold ${highContrast ? 'text-red-400' : 'text-[#414042]/60'}`}>Total Expenses</div>
                <div className={`text-2xl font-bold ${highContrast ? 'text-red-400' : 'text-[#E94928]'}`}>${calcExpenses}</div>
              </div>
            </div>

            <div className="pt-2">
              <span className={`text-xs uppercase font-mono tracking-wider font-semibold ${highContrast ? 'text-yellow-300' : 'text-[#414042]/70'}`}>Final Net Profit</span>
              <div className={`text-4xl font-black ${highContrast ? 'text-yellow-300' : computedProfit >= 0 ? 'text-[#C51C63]' : 'text-[#E94928]'}`}>
                ${computedProfit}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function PracticeView({ completedScenarios, setCompletedScenarios, setXp, speakText, highContrast }) {
  const [activeTab, setActiveTab] = useState('scenarios');
  const [userAnswers, setUserAnswers] = useState({});
  const [showHints, setShowHints] = useState({});
  const [feedback, setFeedback] = useState({});

  const [sortingItems, setSortingItems] = useState(SORTING_GAME_ITEMS);
  const [userCategories, setUserCategories] = useState({});
  const [sortingScore, setSortingScore] = useState(null);

  const handleScenarioSubmit = (scenarioId, correctAnswer) => {
    const val = Number(userAnswers[scenarioId]);
    if (val === correctAnswer) {
      setFeedback({ ...feedback, [scenarioId]: { correct: true, msg: '🎉 Spot on! Perfect calculation.' } });
      if (!completedScenarios[scenarioId]) {
        setCompletedScenarios({ ...completedScenarios, [scenarioId]: true });
        setXp(prev => prev + 50);
      }
    } else {
      setFeedback({ ...feedback, [scenarioId]: { correct: false, msg: '❌ Not quite. Review the hint and formula!' } });
    }
  };

  const checkSortingGame = () => {
    let score = 0;
    SORTING_GAME_ITEMS.forEach((item, idx) => {
      if (userCategories[idx] === item.correctCategory) {
        score++;
      }
    });
    setSortingScore(score);
    if (score === SORTING_GAME_ITEMS.length) {
      setXp(prev => prev + 40);
    }
  };

  return (
    <div className="space-y-6">
      {/* HEADER & NAV */}
      <div className={`p-6 rounded-2xl border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 ${
        highContrast ? 'bg-zinc-900 border-2 border-yellow-400 text-white' : 'bg-[#414042]/5 border-[#414042]/10'
      }`}>
        <div>
          <h2 className={`text-2xl font-black flex items-center gap-2 ${highContrast ? 'text-white' : 'text-[#414042]'}`}>
            <Target className={`w-6 h-6 ${highContrast ? 'text-yellow-300' : 'text-[#C51C63]'}`} /> Interactive Practice Hub
          </h2>
          <p className={`text-xs mt-1 ${highContrast ? 'text-zinc-200' : 'text-[#414042]/70'}`}>
            Solve math word problems directly from the curriculum and test your business knowledge.
          </p>
        </div>

        <div className={`flex p-1 rounded-xl border ${highContrast ? 'bg-black border-white' : 'bg-[#414042]/10 border-[#414042]/15'}`}>
          <button 
            onClick={() => setActiveTab('scenarios')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              activeTab === 'scenarios' 
                ? highContrast ? 'bg-yellow-400 text-black font-extrabold' : 'bg-[#C51C63] text-white' 
                : highContrast ? 'text-white' : 'text-[#414042]'
            }`}
          >
            Alex's Business Math
          </button>
          <button 
            onClick={() => setActiveTab('sorting')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              activeTab === 'sorting' 
                ? highContrast ? 'bg-yellow-400 text-black font-extrabold' : 'bg-[#C51C63] text-white' 
                : highContrast ? 'text-white' : 'text-[#414042]'
            }`}
          >
            Cost Sorting Challenge 🍋
          </button>
        </div>
      </div>

      {/* SCENARIO PROBLEMS */}
      {activeTab === 'scenarios' && (
        <div className="space-y-6">
          {PRACTICE_SCENARIOS.map((sc) => {
            const isDone = completedScenarios[sc.id];
            const fb = feedback[sc.id];

            return (
              <div 
                key={sc.id}
                className={`p-6 rounded-2xl border transition space-y-4 shadow-xs ${
                  highContrast 
                    ? 'bg-zinc-900 border-2 border-yellow-400 text-white' 
                    : isDone 
                      ? 'bg-[#EFA835]/10 border-[#EFA835]' 
                      : 'bg-white border-[#414042]/15'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <span className={`text-[10px] uppercase font-mono tracking-wider px-2.5 py-1 rounded-full font-bold border ${
                      highContrast ? 'bg-yellow-400 text-black border-white' : 'text-[#E94928] bg-[#E94928]/10 border-[#E94928]/30'
                    }`}>
                      Practice Problem #{sc.id}
                    </span>
                    <h3 className={`text-xl font-bold pt-1 ${highContrast ? 'text-yellow-300' : 'text-[#414042]'}`}>{sc.title}</h3>
                  </div>

                  <button 
                    onClick={() => speakText(`${sc.title}. ${sc.story} ${sc.question}`)}
                    className={`p-2 rounded-xl border ${
                      highContrast ? 'bg-zinc-800 text-white border-white hover:bg-zinc-700' : 'bg-[#414042]/5 hover:bg-[#C51C63]/10 text-[#C51C63] border-[#414042]/15'
                    }`}
                    title="Read aloud"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>

                <p className={`text-sm leading-relaxed p-4 rounded-xl border ${
                  highContrast ? 'bg-black text-white border-white font-medium' : 'bg-[#414042]/5 text-[#414042] border-[#414042]/10'
                }`}>
                  {sc.story}
                </p>

                <div className={`font-bold text-sm ${highContrast ? 'text-yellow-300' : 'text-[#C51C63]'}`}>
                  ❓ {sc.question}
                </div>

                {/* ANSWER INPUT */}
                <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                  <div className="relative flex-1">
                    <span className={`absolute left-3 top-2.5 font-mono text-sm ${highContrast ? 'text-yellow-300' : 'text-[#414042]/50'}`}>{sc.unit}</span>
                    <input 
                      type="number"
                      placeholder="Enter answer"
                      value={userAnswers[sc.id] || ''}
                      onChange={(e) => setUserAnswers({ ...userAnswers, [sc.id]: e.target.value })}
                      className={`w-full pl-8 pr-4 py-2 rounded-xl font-mono text-sm focus:outline-none shadow-xs ${
                        highContrast 
                          ? 'bg-black text-white border-2 border-white focus:border-yellow-400 font-bold' 
                          : 'bg-white border border-[#414042]/20 text-[#414042] focus:border-[#C51C63]'
                      }`}
                    />
                  </div>

                  <button 
                    onClick={() => handleScenarioSubmit(sc.id, sc.correctAnswer)}
                    className={`font-bold px-5 py-2 rounded-xl text-xs flex items-center justify-center gap-1.5 transition shadow-xs ${
                      highContrast ? 'bg-yellow-400 text-black hover:bg-yellow-300 font-extrabold border-2 border-white' : 'bg-[#C51C63] hover:bg-[#a81452] text-white'
                    }`}
                  >
                    Check Answer
                  </button>

                  <button 
                    onClick={() => setShowHints({ ...showHints, [sc.id]: !showHints[sc.id] })}
                    className={`font-semibold px-4 py-2 rounded-xl text-xs flex items-center justify-center gap-1 transition shadow-xs border ${
                      highContrast ? 'bg-zinc-800 text-white border-white hover:bg-zinc-700' : 'bg-white hover:bg-[#414042]/5 text-[#414042] border-[#414042]/20'
                    }`}
                  >
                    <HelpCircle className={`w-4 h-4 ${highContrast ? 'text-yellow-300' : 'text-[#EFA835]'}`} />
                    {showHints[sc.id] ? 'Hide Hint' : 'Need Hint?'}
                  </button>
                </div>

                {/* HINT */}
                {showHints[sc.id] && (
                  <div className={`p-3 rounded-xl text-xs font-medium animate-fadeIn border ${
                    highContrast ? 'bg-black border-2 border-yellow-400 text-yellow-300' : 'bg-[#EFA835]/15 border-[#EFA835]/40 text-[#414042]'
                  }`}>
                    💡 <strong>Hint:</strong> {sc.hint}
                  </div>
                )}

                {/* FEEDBACK */}
                {fb && (
                  <div className={`p-4 rounded-xl border text-xs leading-relaxed ${
                    highContrast
                      ? 'bg-black border-2 border-white text-white'
                      : fb.correct 
                        ? 'bg-[#EFA835]/20 border-[#EFA835] text-[#414042]' 
                        : 'bg-[#E94928]/15 border-[#E94928]/30 text-[#E94928]'
                  }`}>
                    <div className="font-bold text-sm mb-1">{fb.msg}</div>
                    <div><strong>Step-by-Step Breakdown:</strong> {sc.explanation}</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function VentureSimulatorView({ setXp, highContrast, speakText }) {
  const [bizName, setBizName] = useState('Apex Sticker Lab');
  const [bizCategory, setBizCategory] = useState('Custom Stickers & Merch');
  const [customCategory, setCustomCategory] = useState('');
  const [unitPrice, setUnitSellPrice] = useState(5);
  const [varCost, setVarCost] = useState(1.50);
  const [fixedExpenses, setFixedExpenses] = useState(35);
  const [targetSales, setTargetSales] = useState(30);

  // Elevator Pitch Generator State
  const [targetAudience, setTargetAudience] = useState('busy classmates & student clubs');
  const [problemSolved, setProblemSolved] = useState('finding affordable, durable custom stickers for water bottles and laptops');
  const [uniqueSolution, setUniqueSolution] = useState('weatherproof custom vinyl stickers with a 48-hour delivery turn-around');
  const [callToAction, setCallToAction] = useState('Order your custom 5-pack today and get 10% off your first run!');
  const [pitchTone, setPitchTone] = useState('energetic');
  const [copied, setCopied] = useState(false);

  // Computed
  const profitMargin = unitPrice - varCost;
  const breakEvenTarget = profitMargin > 0 ? Math.ceil(fixedExpenses / profitMargin) : 0;
  const projectedRevenue = unitPrice * targetSales;
  const projectedExpenses = fixedExpenses + (varCost * targetSales);
  const projectedProfit = projectedRevenue - projectedExpenses;

  const displayCategory = bizCategory === 'Other' ? (customCategory || 'Custom Industry') : bizCategory;

  const buildPitch = () => {
    const audience = targetAudience || 'our local community';
    const problem = problemSolved || 'finding reliable local services';
    const solution = uniqueSolution || 'top-quality service with exceptional care';
    const cta = callToAction || 'Contact us today to get started!';
    const name = bizName || 'our business';
    const priceStr = `$${unitPrice}`;

    if (pitchTone === 'energetic') {
      return `Did you know that ${audience} constantly deal with ${problem}? That's where ${name} comes in! In the ${displayCategory} space, we offer ${solution} for just ${priceStr} per order. Unlike generic options, we deliver fast and personal results. ${cta}`;
    } else if (pitchTone === 'professional') {
      return `For ${audience} seeking a better way to address ${problem}, ${name} provides an innovative solution. As a specialized provider in ${displayCategory}, we deliver ${solution} priced competitively at ${priceStr}. Our commitment is efficiency and quality. ${cta}`;
    } else {
      return `Imagine being part of ${audience} and feeling frustrated by ${problem}. We started ${name} to solve that exact issue! By providing ${solution} at only ${priceStr}, we give our customers a stress-free experience they can trust. Don't wait—${cta}`;
    }
  };

  const currentPitchText = buildPitch();

  const handleCopyPitch = () => {
    navigator.clipboard.writeText(currentPitchText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className={`p-6 rounded-2xl border ${
        highContrast ? 'bg-zinc-900 border-2 border-yellow-400 text-white' : 'bg-[#414042]/5 border-[#414042]/10'
      }`}>
        <h2 className={`text-2xl font-black flex items-center gap-2 ${highContrast ? 'text-white' : 'text-[#414042]'}`}>
          <Briefcase className={`w-6 h-6 ${highContrast ? 'text-yellow-300' : 'text-[#C51C63]'}`} /> Micro-Venture Pitch & Financial Builder
        </h2>
        <p className={`text-xs mt-1 ${highContrast ? 'text-zinc-200' : 'text-[#414042]/70'}`}>
          Apply your business literacy! Calculate costs, draft a captivating 30-second elevator pitch, and generate your complete pitch deck card.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* INPUT SETUP FORM */}
        <div className={`p-6 rounded-2xl border shadow-xs space-y-5 ${
          highContrast ? 'bg-zinc-900 border-2 border-white text-white' : 'bg-white border-[#414042]/15'
        }`}>
          <h3 className={`font-bold text-lg border-b pb-2 ${highContrast ? 'text-yellow-300 border-white' : 'text-[#414042] border-[#414042]/10'}`}>1. Venture Financial Setup</h3>

          <div className="space-y-1">
            <label className={`text-xs font-semibold ${highContrast ? 'text-white' : 'text-[#414042]'}`}>Business Name</label>
            <input 
              type="text" 
              value={bizName} 
              onChange={(e) => setBizName(e.target.value)}
              className={`w-full px-3 py-2 rounded-xl text-sm focus:outline-none shadow-xs ${
                highContrast 
                  ? 'bg-black text-white border-2 border-white focus:border-yellow-400 font-bold' 
                  : 'bg-[#414042]/5 border border-[#414042]/20 text-[#414042] focus:border-[#C51C63]'
              }`}
            />
          </div>

          <div className="space-y-1">
            <label className={`text-xs font-semibold ${highContrast ? 'text-white' : 'text-[#414042]'}`}>Industry / Service Type</label>
            <select 
              value={bizCategory}
              onChange={(e) => setBizCategory(e.target.value)}
              className={`w-full px-3 py-2 rounded-xl text-sm focus:outline-none shadow-xs ${
                highContrast 
                  ? 'bg-black text-white border-2 border-white focus:border-yellow-400 font-bold' 
                  : 'bg-[#414042]/5 border border-[#414042]/20 text-[#414042] focus:border-[#C51C63]'
              }`}
            >
              <option value="Custom Stickers & Merch">Custom Stickers & Merch</option>
              <option value="Sneaker Cleaning & Care">Sneaker Cleaning & Care</option>
              <option value="Dog Walking & Pet Sitting">Dog Walking & Pet Sitting</option>
              <option value="Tech Help & Coding Tutoring">Tech Help & Coding Tutoring</option>
              <option value="Baked Goods & Refreshments">Baked Goods & Refreshments</option>
              <option value="Other">Other (Write Your Own...)</option>
            </select>
          </div>

          {/* Form fields continued... */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            <div>
              <label className={`text-xs font-semibold ${highContrast ? 'text-white' : 'text-[#414042]'}`}>Price per Unit ($)</label>
              <input 
                type="number" step="0.5" 
                value={unitPrice} 
                onChange={(e) => setUnitSellPrice(Number(e.target.value))}
                className={`w-full px-3 py-2 rounded-xl text-sm font-mono shadow-xs ${
                  highContrast ? 'bg-black text-white border-2 border-white' : 'bg-[#414042]/5 border border-[#414042]/20 text-[#414042]'
                }`}
              />
            </div>
            <div>
              <label className={`text-xs font-semibold ${highContrast ? 'text-white' : 'text-[#414042]'}`}>Variable Cost/Unit ($)</label>
              <input 
                type="number" step="0.25" 
                value={varCost} 
                onChange={(e) => setVarCost(Number(e.target.value))}
                className={`w-full px-3 py-2 rounded-xl text-sm font-mono shadow-xs ${
                  highContrast ? 'bg-black text-white border-2 border-white' : 'bg-[#414042]/5 border border-[#414042]/20 text-[#414042]'
                }`}
              />
            </div>
          </div>
        </div>

        {/* LIVE EXECUTIVE PITCH CARD & ELEVATOR PITCH PREVIEW */}
        <div className="space-y-6">
          {/* Pitch Card */}
          <div className={`p-6 rounded-2xl flex flex-col justify-between space-y-6 relative overflow-hidden shadow-xl ${
            highContrast ? 'bg-black border-4 border-yellow-400 text-white' : 'bg-[#414042] border-2 border-[#EFA835]/40 text-white'
          }`}>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <span className={`text-[10px] uppercase font-mono tracking-widest px-2.5 py-1 rounded-full font-bold border ${
                    highContrast ? 'bg-yellow-400 text-black border-white' : 'text-[#EFA835] bg-[#EFA835]/20 border-[#EFA835]/40'
                  }`}>
                    Executive Business Pitch
                  </span>
                  <h3 className="text-2xl font-black text-white mt-2.5">{bizName || 'My Venture'}</h3>
                  <p className="text-xs text-stone-300">{displayCategory}</p>
                </div>
                <Sparkles className="w-8 h-8 text-[#EFA835]" />
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-zinc-900 p-3 rounded-xl border border-white/20">
                  <div className="text-[10px] text-yellow-300 font-mono">BREAK-EVEN TARGET</div>
                  <div className="text-xl font-bold text-white">{breakEvenTarget} units</div>
                </div>
                <div className="bg-zinc-900 p-3 rounded-xl border border-white/20">
                  <div className="text-[10px] text-yellow-300 font-mono">PROFIT MARGIN / UNIT</div>
                  <div className="text-xl font-bold text-white">${profitMargin.toFixed(2)}</div>
                </div>
              </div>
            </div>

            <button 
              onClick={() => {
                setXp(prev => prev + 50);
                alert(`🎉 Pitch Deck Saved! You earned 50 XP for completing your business setup.`);
              }}
              className={`w-full py-3 font-black rounded-xl text-xs flex items-center justify-center gap-2 transition shadow-lg ${
                highContrast 
                  ? 'bg-yellow-400 hover:bg-yellow-300 text-black font-extrabold border-2 border-white' 
                  : 'bg-[#EFA835] hover:bg-[#d9962b] text-[#414042]'
              }`}
            >
              <Trophy className="w-4 h-4" /> Save Pitch Card & Earn XP (+50 XP)
            </button>
          </div>

          {/* Dynamic Elevator Pitch Box */}
          <div className={`p-6 rounded-2xl border shadow-xs space-y-4 ${
            highContrast ? 'bg-zinc-900 border-2 border-yellow-400 text-white' : 'bg-white border-[#414042]/15'
          }`}>
            <h3 className={`font-bold text-lg flex items-center gap-2 ${highContrast ? 'text-white' : 'text-[#414042]'}`}>
              🎙️ Generated Elevator Pitch
            </h3>

            <div className={`p-4 rounded-xl border text-sm leading-relaxed ${
              highContrast ? 'bg-black text-yellow-300 border-2 border-white font-medium' : 'bg-[#E94928]/5 text-[#414042] border-[#E94928]/20'
            }`}>
              "{currentPitchText}"
            </div>

            <div className="flex flex-wrap justify-between items-center gap-2 pt-1">
              <button 
                onClick={() => speakText(currentPitchText, 'elevator_pitch')}
                className={`font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-2 transition shadow-xs ${
                  highContrast ? 'bg-yellow-400 text-black hover:bg-yellow-300 font-extrabold border-2 border-white' : 'bg-[#C51C63] hover:bg-[#a81452] text-white'
                }`}
              >
                <Volume2 className="w-4 h-4" /> Practice Pitch Aloud
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}