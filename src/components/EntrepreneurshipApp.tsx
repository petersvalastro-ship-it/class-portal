// @ts-nocheck
import SyllabusPage from './SyllabusPage';
import CaseStudiesPage from './CaseStudiesPage';
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  BookOpen, Calculator, Rocket, Trophy, Volume2, Sparkles, 
  CheckCircle2, XCircle, ArrowLeft, ArrowRight, HelpCircle, RefreshCw, 
  Search, Award, Layers, DollarSign, TrendingUp, PieChart, 
  Eye, Type, Sun, Moon, VolumeX, ShieldAlert, Play, Check,
  Target, Briefcase, Plus, Trash2, ChevronRight, Zap, Menu, X,
  ExternalLink, Users, Mail, Presentation, Clock, MapPin, Cloud, CloudRain,
  CloudSnow, CloudLightning, CloudFog, Cloudy, Thermometer, Wind, Quote, Calendar, MessageSquareText, ClipboardList, Puzzle, Lightbulb,
  GraduationCap, LogIn, LogOut, UserCircle, Copy, History
} from 'lucide-react';
import neiaHero from '../assets/neia-hero-new.jpeg.asset.json';
import pietroPhoto from '../assets/pietro-valastro.jpg.asset.json';
import neiaLogo from '../assets/neia-logo.png.asset.json';
import mikailaUlmerPhoto from '../assets/entrepreneurs/mikaila-ulmer.jpg.asset.json';
import moziahBridgesPhoto from '../assets/entrepreneurs/moziah-bridges.jpg.asset.json';
import benPasternakPhoto from '../assets/entrepreneurs/ben-pasternak.jpg.asset.json';
import alinaMorsePhoto from '../assets/entrepreneurs/alina-morse.jpg.asset.json';
import gabbyGoodwinPhoto from '../assets/entrepreneurs/gabby-goodwin.png.asset.json';
import coryNievesPhoto from '../assets/entrepreneurs/cory-nieves.jpg.asset.json';
import asiaNewsonPhoto from '../assets/entrepreneurs/asia-newson.jpg.asset.json';
import fraserDohertyPhoto from '../assets/entrepreneurs/fraser-doherty.jpg.asset.json';
import saraBlakelyPhoto from '../assets/entrepreneurs/sara-blakely.jpg.asset.json';
import yvonChouinardPhoto from '../assets/entrepreneurs/yvon-chouinard.jpg.asset.json';
import melaniePerkinsPhoto from '../assets/entrepreneurs/melanie-perkins.jpg.asset.json';
import madamCjWalkerPhoto from '../assets/entrepreneurs/madam-cj-walker.jpg.asset.json';
import daymondJohnPhoto from '../assets/entrepreneurs/daymond-john.jpg.asset.json';
import janKoumPhoto from '../assets/entrepreneurs/jan-koum.jpg.asset.json';
import reshmaSaujaniPhoto from '../assets/entrepreneurs/reshma-saujani.jpg.asset.json';
import hamdiUlukayaPhoto from '../assets/entrepreneurs/hamdi-ulukaya.jpg.asset.json';
import jessicaMatthewsPhoto from '../assets/entrepreneurs/jessica-matthews.jpg.asset.json';
import tristanWalkerPhoto from '../assets/entrepreneurs/tristan-walker.jpg.asset.json';
import leilaJanahPhoto from '../assets/entrepreneurs/leila-janah.jpg.asset.json';
import brianCheskyPhoto from '../assets/entrepreneurs/brian-chesky.jpg.asset.json';
import arlanHamiltonPhoto from '../assets/entrepreneurs/arlan-hamilton.jpg.asset.json';
import maiaChakaPhoto from '../assets/entrepreneurs/maia-chaka.jpg.asset.json';
import tobiLutkePhoto from '../assets/entrepreneurs/tobi-lutke.jpg.asset.json';
import katrinaLakePhoto from '../assets/entrepreneurs/katrina-lake.jpg.asset.json';
import freddieFiggersPhoto from '../assets/entrepreneurs/freddie-figgers.jpg.asset.json';
import comingSoonPhoto from '../assets/coming-soon.jpg.asset.json';
import LaunchpadTextbook from './LaunchpadTextbook';
import { useStudentAuth } from '@/hooks/useStudentAuth';
import { useHubProgress } from '@/hooks/useHubProgress';
import StudentProfileView from './StudentProfileView';
import MasteryPortal from './MasteryPortal';
import { useMastery } from '@/hooks/useMastery';
import TeacherDashboard from './TeacherDashboard';
import { useIsTeacher } from '@/hooks/useIsTeacher';
import { StudentAccountModal } from './StudentAccountModal';
import { ALL_LAUNCHPAD_SECTION_IDS } from '@/lib/launchpad-content';


function GoogleClassroomLogo({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path fill="#FFC107" d="M6 8h36v32H6z" />
      <path fill="#0F9D58" d="M10 12h28v24H10z" />
      <circle cx="24" cy="21" r="5" fill="#FFFFFF" />
      <path fill="#FFFFFF" d="M14 33c.5-5.2 4.2-8 10-8s9.5 2.8 10 8H14z" />
      <path fill="#57BB8A" d="M11 35h26v3H11z" />
    </svg>
  );
}

function FigmaLogo({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 38 57" className={className} aria-hidden="true">
      <path fill="#F24E1E" d="M19 0H9.5a9.5 9.5 0 0 0 0 19H19V0z" />
      <path fill="#FF7262" d="M19 0h9.5a9.5 9.5 0 1 1 0 19H19V0z" />
      <path fill="#A259FF" d="M19 19H9.5a9.5 9.5 0 0 0 0 19H19V19z" />
      <circle cx="28.5" cy="28.5" r="9.5" fill="#1ABCFE" />
      <path fill="#0ACF83" d="M19 38H9.5a9.5 9.5 0 1 0 9.5 9.5V38z" />
    </svg>
  );
}

import canvaLogoAsset from "@/assets/canva-logo.jpeg.asset.json";

function CanvaLogo({ className = "w-8 h-8" }) {
  return (
    <img
      src={canvaLogoAsset.url}
      alt="Canva"
      className={className}
      style={{ objectFit: "contain" }}
    />
  );
}


// Quote of the day — rotates daily (indexed by day of year)
const DAILY_QUOTES = [
  { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
  { text: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
  { text: "Success is not final; failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
  { text: "Don't be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
  { text: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas Edison" },
  { text: "The biggest risk is not taking any risk.", author: "Mark Zuckerberg" },
  { text: "Whether you think you can or you think you can't, you're right.", author: "Henry Ford" },
  { text: "Every problem is a gift — without problems we would not grow.", author: "Tony Robbins" },
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "Chase the vision, not the money; the money will end up following you.", author: "Tony Hsieh" },
  { text: "Your most unhappy customers are your greatest source of learning.", author: "Bill Gates" },
  { text: "It's fine to celebrate success, but it is more important to heed the lessons of failure.", author: "Bill Gates" },
  { text: "If you really look closely, most overnight successes took a long time.", author: "Steve Jobs" },
  { text: "The only place where success comes before work is in the dictionary.", author: "Vidal Sassoon" },
  { text: "A goal without a plan is just a wish.", author: "Antoine de Saint-Exupéry" },
  { text: "Fall seven times and stand up eight.", author: "Japanese Proverb" },
  { text: "Everything you've ever wanted is on the other side of fear.", author: "George Addair" },
  { text: "Ideas are easy. Implementation is hard.", author: "Guy Kawasaki" },
  { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
  { text: "Risk more than others think is safe. Dream more than others think is practical.", author: "Howard Schultz" },
  { text: "If you're not embarrassed by the first version of your product, you've launched too late.", author: "Reid Hoffman" },
  { text: "Make every detail perfect and limit the number of details to perfect.", author: "Jack Dorsey" },
  { text: "The entrepreneur always searches for change, responds to it, and exploits it as an opportunity.", author: "Peter Drucker" },
  { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
  { text: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
  { text: "The harder I work, the luckier I get.", author: "Samuel Goldwyn" },
  { text: "What would you do if you weren't afraid?", author: "Sheryl Sandberg" },
  { text: "Done is better than perfect.", author: "Sheryl Sandberg" },
  { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
];

const DAY_MS = 24 * 60 * 60 * 1000;

function getDayOfYear(date) {
  return Math.floor((date - new Date(date.getFullYear(), 0, 0)) / DAY_MS);
}

function getDailyQuote(date) {
  const dayOfYear = getDayOfYear(date);
  return DAILY_QUOTES[dayOfYear % DAILY_QUOTES.length];
}

function formatQuoteDate(date) {
  return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
}

// Live date/time clock + Marlborough, MA weather (Open-Meteo, no API key needed)
function weatherCodeInfo(code) {
  if (code === 0) return { label: 'Clear sky', Icon: Sun };
  if (code === 1) return { label: 'Mostly clear', Icon: Sun };
  if (code === 2) return { label: 'Partly cloudy', Icon: Cloudy };
  if (code === 3) return { label: 'Overcast', Icon: Cloud };
  if (code === 45 || code === 48) return { label: 'Foggy', Icon: CloudFog };
  if ([51, 53, 55, 56, 57].includes(code)) return { label: 'Drizzle', Icon: CloudRain };
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return { label: 'Rain', Icon: CloudRain };
  if ([71, 73, 75, 77, 85, 86].includes(code)) return { label: 'Snow', Icon: CloudSnow };
  if ([95, 96, 99].includes(code)) return { label: 'Thunderstorms', Icon: CloudLightning };
  return { label: 'Changing skies', Icon: Cloud };
}

function LiveDateTimeWeather({ highContrast }) {
  const [now, setNow] = useState(null);
  const [weather, setWeather] = useState(null);
  const [showQuoteHistory, setShowQuoteHistory] = useState(false);
  const [quoteCopied, setQuoteCopied] = useState(false);

  useEffect(() => {
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    let cancelled = false;
    const load = () => {
      fetch('https://api.open-meteo.com/v1/forecast?latitude=42.3459&longitude=-71.5523&current=temperature_2m,weather_code,wind_speed_10m&temperature_unit=fahrenheit&wind_speed_unit=mph')
        .then((r) => r.json())
        .then((d) => { if (!cancelled && d && d.current) setWeather(d.current); })
        .catch(() => {});
    };
    load();
    const t = setInterval(load, 10 * 60 * 1000); // refresh every 10 minutes
    return () => { cancelled = true; clearInterval(t); };
  }, []);

  const dayOfWeek = now ? now.toLocaleDateString('en-US', { weekday: 'long' }) : '';
  const fullDate = now ? now.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'Today';
  const time = now ? now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', second: '2-digit' }) : '--:--:--';
  const info = weather ? weatherCodeInfo(weather.weather_code) : null;
  const WIcon = info ? info.Icon : Cloud;

  const quote = now ? getDailyQuote(now) : DAILY_QUOTES[0];
  const quoteHistory = now
    ? [1, 2, 3].map((offset) => {
        const date = new Date(now);
        date.setDate(date.getDate() - offset);
        return { date, quote: getDailyQuote(date) };
      })
    : [];

  const copyQuote = async (item = quote) => {
    const text = `“${item.text}” — ${item.author}`;
    const copyWithTextarea = () => {
      if (typeof document === 'undefined') return false;
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'absolute';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.select();
      const copied = document.execCommand('copy');
      document.body.removeChild(textarea);
      return copied;
    };
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else if (typeof document !== 'undefined') {
        copyWithTextarea();
      }
      setQuoteCopied(true);
      window.setTimeout(() => setQuoteCopied(false), 1600);
    } catch {
      const copied = copyWithTextarea();
      setQuoteCopied(copied);
      if (copied) window.setTimeout(() => setQuoteCopied(false), 1600);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 items-stretch">
      <div className={`rounded-2xl shadow-xs px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 shrink-0 ${
        highContrast ? 'bg-zinc-900 border-2 border-white' : 'bg-white border border-[#414042]/15'
      }`}>
        <div className="flex items-center gap-3">
          <Clock className={`w-6 h-6 shrink-0 ${highContrast ? 'text-yellow-300' : 'text-[#C51C63]'}`} />
          <div>
            <p className={`text-lg font-black leading-tight ${highContrast ? 'text-white' : 'text-[#414042]'}`}>
              {dayOfWeek ? `${dayOfWeek}, ${fullDate}` : fullDate}
            </p>
            <p className={`text-sm font-semibold tabular-nums ${highContrast ? 'text-yellow-300' : 'text-[#E94928]'}`} aria-live="off">
              {time}
            </p>
          </div>
        </div>
        <div className={`hidden sm:block w-px self-stretch ${highContrast ? 'bg-white/40' : 'bg-[#414042]/15'}`} />
        <div className="flex items-center gap-3">
          <WIcon className={`w-7 h-7 shrink-0 ${highContrast ? 'text-yellow-300' : 'text-[#EFA835]'}`} />
          <div>
            <p className={`text-sm font-bold flex items-center gap-1.5 ${highContrast ? 'text-white' : 'text-[#414042]'}`}>
              <MapPin className="w-3.5 h-3.5" /> Marlborough, MA
            </p>
            {weather ? (
              <p className={`text-sm font-medium ${highContrast ? 'text-zinc-200' : 'text-[#414042]/70'}`}>
                {Math.round(weather.temperature_2m)}°F · {info.label} · Wind {Math.round(weather.wind_speed_10m)} mph
              </p>
            ) : (
              <p className={`text-sm font-medium ${highContrast ? 'text-zinc-200' : 'text-[#414042]/60'}`}>Loading weather…</p>
            )}
          </div>
        </div>
      </div>
      <div className={`rounded-2xl shadow-xs px-5 py-4 flex flex-col gap-3 flex-1 min-w-0 ${
        highContrast ? 'bg-zinc-900 border-2 border-yellow-300' : 'bg-[#C51C63]'
      }`}>
        <div className="flex items-start gap-4">
          <Quote className={`w-7 h-7 shrink-0 mt-1 ${highContrast ? 'text-yellow-300' : 'text-white/80'}`} />
          <div className="min-w-0 flex-1">
            <p className={`text-sm font-bold uppercase tracking-wider ${highContrast ? 'text-yellow-300' : 'text-white/70'}`}>
              Quote of the Day
            </p>
            <button
              type="button"
              onClick={() => copyQuote(quote)}
              className={`mt-1 block text-left text-base font-semibold leading-snug transition rounded-lg -mx-2 px-2 py-1 ${
                highContrast ? 'text-white hover:bg-yellow-400/15' : 'text-white hover:bg-white/10'
              }`}
            >
              “{quote.text}” <span className={`font-medium ${highContrast ? 'text-yellow-300' : 'text-white/80'}`}>— {quote.author}</span>
            </button>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => setShowQuoteHistory((prev) => !prev)}
              aria-expanded={showQuoteHistory}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-bold transition ${
                highContrast ? 'bg-yellow-400 text-black hover:bg-yellow-300' : 'bg-white/15 text-white hover:bg-white/25'
              }`}
            >
              <History className="w-3.5 h-3.5" /> Prior quotes
            </button>
            <button
              type="button"
              onClick={() => copyQuote(quote)}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-bold transition ${
                highContrast ? 'border border-yellow-300 text-yellow-300 hover:bg-yellow-400/15' : 'border border-white/30 text-white hover:bg-white/15'
              }`}
            >
              {quoteCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {quoteCopied ? 'Copied' : 'Copy'}
            </button>
          </div>
        </div>
        {showQuoteHistory && quoteHistory.length > 0 && (
          <div className={`grid gap-2 border-t pt-3 ${highContrast ? 'border-yellow-300/40' : 'border-white/25'}`}>
            {quoteHistory.map((item) => (
              <button
                key={item.date.toISOString()}
                type="button"
                onClick={() => copyQuote(item.quote)}
                className={`rounded-xl px-3 py-2 text-left text-sm transition ${
                  highContrast ? 'bg-black/40 hover:bg-yellow-400/15' : 'bg-white/10 hover:bg-white/15'
                }`}
              >
                <span className={`block text-xs font-bold uppercase tracking-wide ${highContrast ? 'text-yellow-300' : 'text-white/70'}`}>
                  {formatQuoteDate(item.date)}
                </span>
                <span className="block font-semibold text-white">
                  “{item.quote.text}” <span className={highContrast ? 'text-yellow-300' : 'text-white/75'}>— {item.quote.author}</span>
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}


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
  { name: 'Vinyl Cutting Machine for the sticker studio', correctCategory: 'Fixed', why: 'Bought once — the cost stays the same whether you sell 1 sticker or 500.' },
  { name: 'Sheets of vinyl used for each sticker order', correctCategory: 'Variable', why: 'More orders means more vinyl, so this cost rises with sales.' },
  { name: 'Monthly design software subscription ($12)', correctCategory: 'Fixed', why: 'You pay the same $12 every month no matter how much you sell.' },
  { name: 'Shipping mailers and postage per package', correctCategory: 'Variable', why: 'Every shipped order adds another mailer and stamp.' },
  { name: 'Craft-fair booth fee ($25 flat)', correctCategory: 'Fixed', why: 'The booth costs $25 whether you sell out or sell nothing.' },
  { name: 'Ink and laminate used per sticker sheet', correctCategory: 'Variable', why: 'Supplies are consumed in proportion to units produced.' },
  { name: 'Printed banner for the sales table', correctCategory: 'Fixed', why: 'One-time signage cost that does not change with volume.' },
  { name: 'Marketplace fee charged on each sale', correctCategory: 'Variable', why: 'The platform takes a cut on every single order.' }
];

const ENTREPRENEURS_DATA = [
  { id: 1, name: 'Mikaila Ulmer', categoryTags: ['Young Founder', 'Female Entrepreneur', 'Food & Beverage'], ageGroup: 'Young', gender: 'Female', photoUrl: '', initials: 'MU', accent: 'bg-[#EFA835]', currentTitle: 'Founder & CEO, Me & the Bees Lemonade', whereTheyStarted: 'At age four, Mikaila used her great-grandmother’s flaxseed lemonade recipe and a fascination with bees to enter a children’s business competition.', mostKnownFor: 'Building Me & the Bees Lemonade into a nationally distributed brand while supporting bee conservation.', overview: 'Mikaila turned an early product idea into a mission-driven company. Her story shows how curiosity, family knowledge, and a social purpose can grow together.' },
  { id: 2, name: 'Moziah Bridges', categoryTags: ['Young Founder', 'Male Entrepreneur', 'Fashion'], ageGroup: 'Young', gender: 'Male', photoUrl: '', initials: 'MB', accent: 'bg-[#C51C63]', currentTitle: "Founder, Mo's Bows", whereTheyStarted: 'Moziah began hand-sewing bow ties at age nine after learning from his grandmother and noticing a gap in colorful children’s accessories.', mostKnownFor: "Launching Mo's Bows and securing major retail and sports partnerships.", overview: 'He grew from a home sewing table to a recognized fashion business by combining a distinct personal style with persistence and strong storytelling.' },
  { id: 3, name: 'Ben Pasternak', categoryTags: ['Young Founder', 'Male Entrepreneur', 'Technology'], ageGroup: 'Young', gender: 'Male', photoUrl: '', initials: 'BP', accent: 'bg-[#E94928]', currentTitle: 'Technology Entrepreneur, SIMULATE / NUGGS', whereTheyStarted: 'Ben built a simple mobile game while bored in a high-school science class in Sydney, then watched it rise in app-store rankings.', mostKnownFor: 'Co-founding technology ventures and the plant-based food company SIMULATE.', overview: 'Ben moved from app development into consumer food, demonstrating how entrepreneurial skills can transfer across very different industries.' },
  { id: 4, name: 'Alina Morse', categoryTags: ['Young Founder', 'Female Entrepreneur', 'Consumer Goods'], ageGroup: 'Young', gender: 'Female', photoUrl: '', initials: 'AM', accent: 'bg-[#414042]', currentTitle: 'Founder & CEO, Zolli Candy', whereTheyStarted: 'At age seven, Alina wondered why candy could not be better for teeth and began testing recipes with her family.', mostKnownFor: 'Creating sugar-free Zollipops and building a widely sold better-for-you candy brand.', overview: 'Her willingness to question an everyday product led to years of testing, retail growth, and a company with an educational mission.' },
  { id: 5, name: 'Gabby Goodwin', categoryTags: ['Young Founder', 'Female Entrepreneur', 'Beauty'], ageGroup: 'Young', gender: 'Female', photoUrl: '', initials: 'GG', accent: 'bg-[#C51C63]', currentTitle: 'Co-founder, GaBBY Bows', whereTheyStarted: 'Gabby and her mother solved the recurring problem of hair barrettes slipping out by designing a double-face, double-snap bow.', mostKnownFor: 'Patenting and selling GaBBY Bows while teaching other young entrepreneurs.', overview: 'Gabby turned a personal frustration into an inventive product, learning product design, intellectual property, and customer service at a young age.' },
  { id: 6, name: 'Cory Nieves', categoryTags: ['Young Founder', 'Male Entrepreneur', 'Food & Beverage'], ageGroup: 'Young', gender: 'Male', photoUrl: '', initials: 'CN', accent: 'bg-[#EFA835]', currentTitle: 'Founder, Mr. Cory’s Cookies', whereTheyStarted: 'Cory first sold hot cocoa to help his mother buy a car, then shifted to cookies after customers asked for a product they could take home.', mostKnownFor: 'Growing Mr. Cory’s Cookies from a neighborhood stand into a premium cookie company.', overview: 'His early pivot from drinks to packaged treats highlights listening to customers and adapting an idea when a stronger opportunity appears.' },
  { id: 7, name: 'Asia Newson', categoryTags: ['Young Founder', 'Female Entrepreneur', 'Retail'], ageGroup: 'Young', gender: 'Female', photoUrl: '', initials: 'AN', accent: 'bg-[#E94928]', currentTitle: 'Founder, Super Business Girl', whereTheyStarted: 'Asia learned candle-making from her father and began selling handmade candles door to door in Detroit.', mostKnownFor: 'Building Super Business Girl and encouraging youth entrepreneurship.', overview: 'Asia used direct selling to understand customers, improve her confidence, and develop a brand focused on both products and youth empowerment.' },
  { id: 8, name: 'Fraser Doherty', categoryTags: ['Young Founder', 'Male Entrepreneur', 'Food & Beverage'], ageGroup: 'Young', gender: 'Male', photoUrl: '', initials: 'FD', accent: 'bg-[#414042]', currentTitle: 'Founder, SuperJam', whereTheyStarted: 'Fraser learned to make jam from his grandmother in Scotland and started selling his own recipes as a teenager.', mostKnownFor: 'Creating SuperJam and winning national supermarket distribution.', overview: 'He scaled a family recipe by simplifying ingredients, refining packaging, and convincing large retailers that his product deserved shelf space.' },
  { id: 9, name: 'Sara Blakely', categoryTags: ['Adult Founder', 'Female Entrepreneur', 'Fashion'], ageGroup: 'Adult', gender: 'Female', photoUrl: '', initials: 'SB', accent: 'bg-[#C51C63]', currentTitle: 'Founder, Spanx', whereTheyStarted: 'Sara invested $5,000 of personal savings earned selling fax machines and developed her first prototype by cutting the feet off pantyhose.', mostKnownFor: 'Inventing Spanx and building a global shapewear company.', overview: 'She researched patents, pitched manufacturers herself, and used creative demonstrations to turn a simple wardrobe problem into a major brand.' },
  { id: 10, name: 'Yvon Chouinard', categoryTags: ['Adult Founder', 'Male Entrepreneur', 'Outdoor Industry'], ageGroup: 'Adult', gender: 'Male', photoUrl: '', initials: 'YC', accent: 'bg-[#EFA835]', currentTitle: 'Founder, Patagonia', whereTheyStarted: 'Yvon began forging reusable climbing pitons in a backyard workshop and selling them from his car to fellow climbers.', mostKnownFor: 'Building Patagonia around durable products and environmental responsibility.', overview: 'His company connected product quality to a clear set of values, proving that business choices can reflect long-term environmental commitments.' },
  { id: 11, name: 'Reshma Saujani', categoryTags: ['Adult Founder', 'Female Entrepreneur', 'Social Impact'], ageGroup: 'Adult', gender: 'Female', photoUrl: '', initials: 'RS', accent: 'bg-[#EFA835]', currentTitle: 'Founder, Girls Who Code', whereTheyStarted: 'While running for public office, Reshma visited classrooms and noticed almost no girls in computer science, which sparked the idea for a movement to close the tech gender gap.', mostKnownFor: 'Founding Girls Who Code and growing a global movement to teach millions of girls to program.', overview: 'She turned a moment of noticing an injustice into a nonprofit that built clubs, programs, and a supportive community, proving that spotting a problem others overlooked can become a powerful mission.' },
  { id: 12, name: 'Madam C. J. Walker', categoryTags: ['Historic Founder', 'Female Entrepreneur', 'Beauty'], ageGroup: 'Adult', gender: 'Female', photoUrl: '', initials: 'CW', accent: 'bg-[#414042]', currentTitle: 'Founder, Madam C. J. Walker Manufacturing Company', whereTheyStarted: 'After experiencing hair loss, Walker experimented with treatments and sold products directly while training other women as sales agents.', mostKnownFor: 'Building a pioneering Black hair-care company and creating economic opportunities for women.', overview: 'She paired product innovation with a powerful direct-sales network, philanthropy, and education at a time when opportunities were severely limited.' },
  { id: 13, name: 'Daymond John', categoryTags: ['Adult Founder', 'Male Entrepreneur', 'Fashion'], ageGroup: 'Adult', gender: 'Male', photoUrl: '', initials: 'DJ', accent: 'bg-[#C51C63]', currentTitle: 'Founder, FUBU', whereTheyStarted: 'Daymond sewed hats in his mother’s Queens home and sold them on neighborhood streets before expanding into apparel.', mostKnownFor: 'Building FUBU into a global streetwear brand and investing on Shark Tank.', overview: 'He used cultural insight, grassroots marketing, and resourcefulness to build demand before traditional retailers recognized the opportunity.' },
  { id: 14, name: 'Jan Koum', categoryTags: ['Adult Founder', 'Male Entrepreneur', 'Technology'], ageGroup: 'Adult', gender: 'Male', photoUrl: '', initials: 'JK', accent: 'bg-[#E94928]', currentTitle: 'Co-founder, WhatsApp', whereTheyStarted: 'After immigrating to the United States and teaching himself computer networking, Jan developed the idea for a simple status and messaging app.', mostKnownFor: 'Co-founding WhatsApp, a globally used private messaging service.', overview: 'His focus on a clear, reliable product with minimal advertising helped WhatsApp grow through user trust and straightforward design.' },
  { id: 15, name: 'Melanie Perkins', categoryTags: ['Adult Founder', 'Female Entrepreneur', 'Technology'], ageGroup: 'Adult', gender: 'Female', photoUrl: '', initials: 'MP', accent: 'bg-[#E94928]', currentTitle: 'Co-founder & CEO, Canva', whereTheyStarted: 'While teaching design software, Melanie saw students struggle with complex tools and first built an easier school yearbook platform.', mostKnownFor: 'Co-founding Canva and making visual design accessible to millions.', overview: 'After many investor rejections, she kept refining the vision for browser-based design and assembled a team capable of scaling it globally.' },
  { id: 16, name: 'Hamdi Ulukaya', categoryTags: ['Adult Founder', 'Male Entrepreneur', 'Food & Beverage'], ageGroup: 'Adult', gender: 'Male', photoUrl: '', initials: 'HU', accent: 'bg-[#414042]', currentTitle: 'Founder & CEO, Chobani', whereTheyStarted: 'Hamdi bought a closed yogurt factory in upstate New York with a small-business loan and rehired several former workers.', mostKnownFor: 'Growing Chobani into a major yogurt brand.', overview: 'He revived an overlooked factory by improving the product, investing in employees, and introducing Greek yogurt to a broad U.S. market.' },
  { id: 17, name: 'Jessica O. Matthews', categoryTags: ['Adult Founder', 'Female Entrepreneur', 'Clean Technology'], ageGroup: 'Adult', gender: 'Female', photoUrl: '', initials: 'JM', accent: 'bg-[#C51C63]', currentTitle: 'Founder & CEO, Uncharted Power', whereTheyStarted: 'Jessica helped invent an energy-generating soccer ball after observing unreliable electricity during a family visit to Nigeria.', mostKnownFor: 'Developing infrastructure technology that explores new ways to generate and distribute power.', overview: 'Her work combines engineering, community needs, and infrastructure thinking to address energy access through inventive systems.' },
  { id: 18, name: 'Tristan Walker', categoryTags: ['Adult Founder', 'Male Entrepreneur', 'Beauty'], ageGroup: 'Adult', gender: 'Male', photoUrl: '', initials: 'TW', accent: 'bg-[#E94928]', currentTitle: 'Founder, Walker & Company Brands', whereTheyStarted: 'Tristan recognized that many shaving products did not serve people with coarse or curly hair and built a brand around that unmet need.', mostKnownFor: 'Creating Bevel and health-and-beauty products for underserved consumers.', overview: 'He used a sharply defined customer problem to develop specialized products and challenge gaps in the mainstream personal-care market.' },
  { id: 19, name: 'Leila Janah', categoryTags: ['Social Entrepreneur', 'Female Entrepreneur', 'Technology'], ageGroup: 'Adult', gender: 'Female', photoUrl: '', initials: 'LJ', accent: 'bg-[#EFA835]', currentTitle: 'Founder, Samasource', whereTheyStarted: 'Leila saw that digital work could be divided into tasks and connected to skilled people in communities with limited job access.', mostKnownFor: 'Building Samasource to provide digital training and dignified work.', overview: 'She demonstrated how a technology-services business could measure success through both strong operations and improved economic opportunity.' },
  { id: 20, name: 'Brian Chesky', categoryTags: ['Adult Founder', 'Male Entrepreneur', 'Hospitality'], ageGroup: 'Adult', gender: 'Male', photoUrl: '', initials: 'BC', accent: 'bg-[#414042]', currentTitle: 'Co-founder & CEO, Airbnb', whereTheyStarted: 'Brian and a roommate rented air mattresses in their San Francisco apartment when hotels were full during a conference.', mostKnownFor: 'Co-founding Airbnb and creating a global home-sharing marketplace.', overview: 'The founders tested a tiny solution to an immediate need, then improved trust, photos, payments, and host tools to scale the marketplace.' },
  { id: 21, name: 'Arlan Hamilton', categoryTags: ['Adult Founder', 'Non-binary Entrepreneur', 'Venture Capital'], ageGroup: 'Adult', gender: 'Non-binary', photoUrl: '', initials: 'AH', accent: 'bg-[#C51C63]', currentTitle: 'Founder, Backstage Capital', whereTheyStarted: 'Arlan learned venture investing independently and began building a fund while experiencing housing insecurity.', mostKnownFor: 'Investing in founders historically overlooked by venture capital.', overview: 'By identifying bias as both a problem and an opportunity, Arlan built a fund focused on talent that conventional networks often missed.' },
  { id: 22, name: 'Maia Chaka', categoryTags: ['Innovator', 'Female Leader', 'Sports'], ageGroup: 'Adult', gender: 'Female', photoUrl: '', initials: 'MC', accent: 'bg-[#E94928]', currentTitle: 'Founder, Make Meaningful Change', whereTheyStarted: 'Maia combined her background in education and officiating to create programs that help young people develop confidence and leadership skills.', mostKnownFor: 'Breaking barriers in professional football officiating and mentoring youth.', overview: 'Her entrepreneurial approach uses personal expertise and public visibility to create programs with measurable community impact.' },
  { id: 23, name: 'Tobi Lütke', categoryTags: ['Adult Founder', 'Male Entrepreneur', 'E-commerce'], ageGroup: 'Adult', gender: 'Male', photoUrl: '', initials: 'TL', accent: 'bg-[#EFA835]', currentTitle: 'Co-founder & CEO, Shopify', whereTheyStarted: 'Tobi tried to sell snowboards online, found the available store software frustrating, and programmed a better system himself.', mostKnownFor: 'Building Shopify, a commerce platform used by businesses worldwide.', overview: 'A tool created to solve his own retail problem became more valuable than the original store, leading the team to pivot into software.' },
  { id: 24, name: 'Katrina Lake', categoryTags: ['Adult Founder', 'Female Entrepreneur', 'Retail Technology'], ageGroup: 'Adult', gender: 'Female', photoUrl: '', initials: 'KL', accent: 'bg-[#414042]', currentTitle: 'Founder, Stitch Fix', whereTheyStarted: 'Katrina tested personalized clothing deliveries from her apartment while studying how data could improve the shopping experience.', mostKnownFor: 'Founding Stitch Fix and combining human stylists with recommendation technology.', overview: 'She blended personal service, logistics, and data science to create a new retail model centered on convenience and individual taste.' },
  { id: 25, name: 'Freddie Figgers', categoryTags: ['Young Founder', 'Male Entrepreneur', 'Telecommunications'], ageGroup: 'Young', gender: 'Male', photoUrl: '', initials: 'FF', accent: 'bg-[#C51C63]', currentTitle: 'Founder & CEO, Figgers Communication', whereTheyStarted: 'Freddie repaired discarded computers as a child and began providing technical services before launching telecommunications products.', mostKnownFor: 'Building an independent telecommunications and technology company.', overview: 'His path from repairing old machines to creating connected products demonstrates self-teaching, persistence, and solving practical customer needs.' }
];

const ENTREPRENEUR_PHOTOS = {
  1: mikailaUlmerPhoto.url,
  2: moziahBridgesPhoto.url,
  3: benPasternakPhoto.url,
  4: alinaMorsePhoto.url,
  5: gabbyGoodwinPhoto.url,
  6: coryNievesPhoto.url,
  7: asiaNewsonPhoto.url,
  8: fraserDohertyPhoto.url,
  9: saraBlakelyPhoto.url,
  10: yvonChouinardPhoto.url,
  11: reshmaSaujaniPhoto.url,
  12: madamCjWalkerPhoto.url,
  13: daymondJohnPhoto.url,
  14: janKoumPhoto.url,
  15: melaniePerkinsPhoto.url,
  16: hamdiUlukayaPhoto.url,
  17: jessicaMatthewsPhoto.url,
  18: tristanWalkerPhoto.url,
  19: leilaJanahPhoto.url,
  20: brianCheskyPhoto.url,
  21: arlanHamiltonPhoto.url,
  22: maiaChakaPhoto.url,
  23: tobiLutkePhoto.url,
  24: katrinaLakePhoto.url,
  25: freddieFiggersPhoto.url,
};



export default function EntrepreneurshipApp({ initialTab = 'dashboard' }: { initialTab?: string } = {}) {
  // Navigation & UI state
  const [activeTab, setActiveTab] = useState(initialTab);
  useEffect(() => { if (typeof window === 'undefined') return; const p = window.location.pathname; const map = { casestudies: '/learning/case-studies', syllabus: '/learning/syllabus' }; const target = map[activeTab] || '/'; if ((map[activeTab] || Object.values(map).includes(p)) && p !== target) window.history.replaceState(null, '', target); }, [activeTab]);
  const [textbookTarget, setTextbookTarget] = useState<string | null>(null);
  const [resourcesMenuOpen, setResourcesMenuOpen] = useState(false);
  const [classToolsMenuOpen, setClassToolsMenuOpen] = useState(false);
  const [learningMenuOpen, setLearningMenuOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [showcaseOpen, setShowcaseOpen] = useState(false);
  const [currentEntrepreneurIndex, setCurrentEntrepreneurIndex] = useState(0);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  // Student sign-in + saved LaunchPad progress
  const auth = useStudentAuth();
  
  // Universal Design for Learning (UDL) Accessibility Settings
  const [dyslexicFont, setDyslexicFont] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [textSize, setTextSize] = useState('normal');
  const [speechSynthesisActive, setSpeechSynthesisActive] = useState(false);
  const [currentSpeakingId, setCurrentSpeakingId] = useState(null);
  const mainContentRef = useRef(null);

  // Gamification & Progress State (saved on this device, and to the student's account when signed in)
  const hub = useHubProgress(auth.user?.id, {
    displayName: auth.displayName,
    email: auth.user?.email ?? null,
  });
  const isTeacher = useIsTeacher(auth.user?.id);
  const mastery = useMastery(auth.user?.id, { onEarnXp: (amount) => hub.setXp((current) => current + amount) });
  const { xp, setXp, completedScenarios, setCompletedScenarios, masteredTerms, setMasteredTerms, goals, setGoals } = hub;

  // Friendly reminder to sign in so work is saved to the account
  const [showSignInReminder, setShowSignInReminder] = useState(false);
  const [showAccountModal, setShowAccountModal] = useState(false);
  const [reminderDismissed, setReminderDismissed] = useState(false);
  const activityCount = xp + masteredTerms.length + Object.keys(completedScenarios).length;
  useEffect(() => {
    if (auth.authLoading || auth.user || reminderDismissed) return;
    if (activityCount > 0) setShowSignInReminder(true);
  }, [activityCount, auth.authLoading, auth.user, reminderDismissed]);
  useEffect(() => {
    if (auth.user) setShowSignInReminder(false);
  }, [auth.user]);


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



  const showPreviousEntrepreneur = () => {
    setCurrentEntrepreneurIndex((current) => (current - 1 + ENTREPRENEURS_DATA.length) % ENTREPRENEURS_DATA.length);
  };

  const showNextEntrepreneur = () => {
    setCurrentEntrepreneurIndex((current) => (current + 1) % ENTREPRENEURS_DATA.length);
  };

  useEffect(() => {
    if (!showcaseOpen) return undefined;
    const handleShowcaseKeyboard = (event) => {
      if (event.key === 'ArrowLeft') showPreviousEntrepreneur();
      if (event.key === 'ArrowRight') showNextEntrepreneur();
      if (event.key === 'Escape') setShowcaseOpen(false);
    };
    window.addEventListener('keydown', handleShowcaseKeyboard);
    return () => window.removeEventListener('keydown', handleShowcaseKeyboard);
  }, [showcaseOpen]);

  useEffect(() => {
    if (activeTab === 'dashboard') return;
    const frame = window.requestAnimationFrame(() => {
      mainContentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [activeTab]);

  const getTextSizeClass = () => {
    if (textSize === 'large') return 'text-lg';
    if (textSize === 'xl') return 'text-xl';
    return 'text-base';
  };

  return (
    <div className={`min-h-screen overflow-x-clip transition-colors duration-200 ${
      highContrast 
        ? 'bg-black text-white font-bold' 
        : 'bg-white text-[#414042]'
    } ${dyslexicFont ? 'font-mono' : 'font-sans'}`}>
      
      {/* HEADER */}
      <header className={`sticky top-0 z-50 px-4 py-2.5 text-xs md:text-sm shadow-xs transition-colors duration-200 ${
        highContrast 
          ? 'bg-black text-white border-b-2 border-yellow-400' 
          : 'border-b border-white/10 bg-[#414042] text-white shadow-lg'
      }`}>
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className="flex items-center gap-2.5 font-bold text-left group hover:opacity-85 transition cursor-pointer focus:outline-none"
            title="Go to Dashboard & Roadmap"
          >
            <div className="p-1 rounded-full transition bg-white group-hover:bg-white/90">
              <img
                src={neiaLogo.url}
                alt="New England Innovation Academy logo"
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className={`text-sm md:text-base tracking-wide font-extrabold transition ${
              highContrast ? 'text-white' : 'text-white group-hover:text-[#EFA835]'
            }`}>
              NEIA Entrepreneur Hub
            </span>
          </button>

          {/* UDL Accessibility Controls */}
          <div className={`flex items-center gap-2 p-1 rounded-xl border ${
            highContrast ? 'bg-zinc-900 border-2 border-white text-white' : 'bg-white/10 border-white/20 text-white'
          }`}>
            <span className={`text-xs hidden lg:inline pl-1 font-semibold ${highContrast ? 'text-yellow-300' : 'text-white/70'}`}>Accessibility:</span>
            
            <button 
              onClick={() => setHighContrast(!highContrast)}
              className={`p-1.5 rounded-lg text-xs flex items-center gap-1 transition ${
                highContrast ? 'bg-yellow-400 text-black font-extrabold border-2 border-white' : 'hover:bg-white/15 text-white'
              }`}
              title="Toggle High Contrast Mode"
            >
              {highContrast ? <Sun className="w-4 h-4 text-black" /> : <Moon className="w-4 h-4 text-[#EFA835]" />}
              <span className="hidden sm:inline">Contrast</span>
            </button>

            <button 
              onClick={() => setDyslexicFont(!dyslexicFont)}
              className={`p-1.5 rounded-lg text-xs flex items-center gap-1 transition ${
                dyslexicFont 
                  ? highContrast ? 'bg-yellow-400 text-black font-extrabold' : 'bg-[#C51C63] text-white font-bold' 
                  : highContrast ? 'text-white hover:bg-zinc-800' : 'hover:bg-white/15 text-white'
              }`}
              title="Toggle Readable Font"
            >
              <Type className={`w-4 h-4 ${highContrast ? 'text-yellow-300' : 'text-[#EFA835]'}`} />
              <span className="hidden sm:inline">Font</span>
            </button>

            <div className={`flex items-center border-l pl-1 ${highContrast ? 'border-white/40' : 'border-white/20'}`}>
              <button 
                onClick={() => setTextSize(textSize === 'normal' ? 'large' : textSize === 'large' ? 'xl' : 'normal')}
                className={`px-2 py-1 text-xs font-bold ${highContrast ? 'text-yellow-300 hover:text-white' : 'text-white hover:text-[#EFA835]'}`}
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

          {/* Account and progress */}
          <div className="flex items-center gap-3">
            {auth.user ? (
              <>
              <button
                onClick={() => setActiveTab('profile')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full font-bold text-xs shadow-xs border transition ${
                  highContrast
                    ? 'bg-zinc-900 border-2 border-yellow-400 text-yellow-300 hover:bg-zinc-800'
                    : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                }`}
                title="My Profile"
              >
                <UserCircle className="w-4 h-4" />
                <span className="hidden sm:inline">My Profile</span>
              </button>
              <button
                onClick={auth.signOut}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full font-bold text-xs shadow-xs border transition ${
                  highContrast
                    ? 'bg-zinc-900 border-2 border-yellow-400 text-yellow-300 hover:bg-zinc-800'
                    : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                }`}
                title={`Signed in as ${auth.displayName} — sign out`}
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Sign Out</span>
              </button>
              </>
            ) : (

              <button
                onClick={() => setShowAccountModal(true)}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full font-bold text-xs shadow-xs border transition ${
                  highContrast
                    ? 'bg-zinc-900 border-2 border-yellow-400 text-yellow-300 hover:bg-zinc-800'
                    : 'bg-white text-[#414042] border-white hover:bg-white/90'
                }`}
                title="Create a Student Account or sign in to save your progress"
              >
                <LogIn className="w-4 h-4" />
                <span className="hidden sm:inline">Student Account</span>
              </button>
            )}
            <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full font-bold text-xs shadow-xs border ${
              highContrast ? 'bg-zinc-900 border-2 border-yellow-400 text-yellow-300' : 'bg-white/10 border-white/20 text-white'
            }`}>
              <Trophy className="w-4 h-4 text-[#EFA835]" />
              <span>{xp} XP</span>
            </div>
          </div>
        </div>
      </header>

      {/* PRIMARY NAVIGATION */}
      <nav className={`px-4 transition-colors duration-200 ${
        highContrast ? 'bg-black border-b-2 border-yellow-400' : 'border-b border-[#414042]/10 bg-white'
      }`}>
        <div className="max-w-7xl mx-auto">
          {/* MOBILE NAVIGATION */}
          <div className="md:hidden flex items-center justify-between py-2.5">
            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition ${
                highContrast
                  ? 'bg-yellow-400 text-black font-extrabold border-2 border-white'
                  : 'bg-[#C51C63] text-white font-bold shadow-sm'
              }`}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileNavOpen}
            >
              {mobileNavOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              <span>{mobileNavOpen ? 'Close' : 'Menu'}</span>
            </button>
            <span className={`max-w-[62%] truncate text-xs font-bold ${highContrast ? 'text-yellow-300' : 'text-[#414042]'}`}>
              {[
                { id: 'dashboard', label: 'Dashboard' },
                { id: 'profile', label: 'My Profile' },
                { id: 'teacher', label: 'Teacher Dashboard' },


                { id: 'schedule', label: 'Class Tools · Schedule' },
                { id: 'whiteboard', label: 'Class Tools · Whiteboard' },
                { id: 'brainstarts', label: 'Class Tools · Brain Starts' },
                { id: 'entryticket', label: 'Class Tools · Entry Ticket' },
                { id: 'feedback', label: 'Class Tools · Exit Ticket' },
                { id: 'textbook', label: 'Learning · Textbook' },
                { id: 'mastery', label: 'Learning · Mastery & Assessments' },
                { id: 'casestudies', label: 'Learning · Case Studies' },
                { id: 'syllabus', label: 'Learning · Syllabus' },
                { id: 'entrepreneurs', label: 'Learning · Entrepreneurs' },
                { id: 'glossary', label: 'Resources · Glossary' },
                { id: 'calculators', label: 'Resources · Math Lab' },
                { id: 'practice', label: 'Resources · Scenarios' },
                { id: 'simulator', label: 'Resources · Pitch Builder' },
              ].find((item) => item.id === activeTab)?.label || 'Menu'}
            </span>
          </div>

          {mobileNavOpen && (
            <div className="md:hidden flex flex-col gap-1.5 pb-3 animate-in fade-in slide-in-from-top-2 duration-200">
              <button
                onClick={() => { setActiveTab('dashboard'); setMobileNavOpen(false); }}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition w-full text-left ${
                  activeTab === 'dashboard'
                    ? highContrast ? 'bg-yellow-400 text-black font-extrabold' : 'bg-[#C51C63] text-white font-bold'
                    : highContrast ? 'text-white hover:bg-zinc-800' : 'text-[#414042] hover:bg-[#414042]/5'
                }`}
              >
                <Rocket className="w-4 h-4" /> Dashboard
              </button>
              {auth.user && (
                <button
                  onClick={() => { setActiveTab('profile'); setMobileNavOpen(false); }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition w-full text-left ${
                    activeTab === 'profile'
                      ? highContrast ? 'bg-yellow-400 text-black font-extrabold' : 'bg-[#C51C63] text-white font-bold'
                      : highContrast ? 'text-white hover:bg-zinc-800' : 'text-[#414042] hover:bg-[#414042]/5'
                  }`}
                >
                  <UserCircle className="w-4 h-4" /> My Profile
                </button>
              )}
              {isTeacher && (
                <button
                  onClick={() => { setActiveTab('teacher'); setMobileNavOpen(false); }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition w-full text-left ${
                    activeTab === 'teacher'
                      ? highContrast ? 'bg-yellow-400 text-black font-extrabold' : 'bg-[#C51C63] text-white font-bold'
                      : highContrast ? 'text-white hover:bg-zinc-800' : 'text-[#414042] hover:bg-[#414042]/5'
                  }`}
                >
                  <Users className="w-4 h-4" /> Teacher Dashboard
                </button>
              )}



              {[
                {
                  label: 'Class Tools', icon: Calendar, open: classToolsMenuOpen,
                  setOpen: setClassToolsMenuOpen,
                  ids: ['schedule','whiteboard','brainstarts','entryticket','feedback'],
                  items: [
                    { id: 'schedule', label: 'Class Schedule', icon: Calendar },
                    { id: 'whiteboard', label: 'Class Whiteboard', icon: Presentation },
                    { id: 'brainstarts', label: 'Brain Starts', icon: Puzzle },
                    { id: 'entryticket', label: 'Entry Ticket', icon: ClipboardList },
                    { id: 'feedback', label: 'Exit Ticket', icon: MessageSquareText },
                  ],
                },
                {
                  label: 'Learning', icon: GraduationCap, open: learningMenuOpen,
                  setOpen: setLearningMenuOpen,
                  ids: ['textbook','mastery','casestudies','syllabus','entrepreneurs'],
                  items: [
                    { id: 'textbook', label: 'LaunchPad Textbook', icon: GraduationCap },
                    { id: 'mastery', label: 'Mastery & Assessments', icon: Trophy },
                    { id: 'casestudies', label: 'Case Studies', icon: BookOpen },
                    { id: 'syllabus', label: 'Syllabus', icon: ClipboardList },
                    { id: 'entrepreneurs', label: 'Entrepreneurs', icon: Users },
                  ],
                },
                {
                  label: 'Resources', icon: Layers, open: resourcesMenuOpen,
                  setOpen: setResourcesMenuOpen,
                  ids: ['glossary','calculators','practice','simulator'],
                  items: [
                    { id: 'glossary', label: 'Glossary & Cards', icon: BookOpen },
                    { id: 'calculators', label: 'Formula & Math Lab', icon: Calculator },
                    { id: 'practice', label: 'Interactive Scenarios', icon: Target },
                    { id: 'simulator', label: 'Venture Pitch Builder', icon: Briefcase },
                  ],
                },
              ].map((group) => {
                const GroupIcon = group.icon;
                const groupActive = group.ids.includes(activeTab);
                return (
                  <div key={group.label}>
                    <button
                      onClick={() => group.setOpen(!group.open)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition w-full text-left ${
                        groupActive || group.open
                          ? highContrast ? 'bg-yellow-400 text-black font-extrabold' : 'bg-[#C51C63]/10 text-[#C51C63] font-bold'
                          : highContrast ? 'text-white hover:bg-zinc-800' : 'text-[#414042] hover:bg-[#414042]/5'
                      }`}
                      aria-expanded={group.open}
                    >
                      <GroupIcon className="w-4 h-4" />
                      {group.label}
                      <ChevronRight className={`w-4 h-4 ml-auto transition-transform ${group.open ? 'rotate-90' : ''}`} />
                    </button>
                    {group.open && (
                      <div className={`ml-5 mt-1 pl-3 border-l ${highContrast ? 'border-yellow-400' : 'border-[#414042]/15'}`}>
                        {group.items.map((item) => {
                          const ItemIcon = item.icon;
                          return (
                            <button
                              key={item.id}
                              onClick={() => { setActiveTab(item.id); setMobileNavOpen(false); group.setOpen(false); }}
                              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition w-full text-left ${
                                activeTab === item.id
                                  ? highContrast ? 'bg-yellow-400 text-black font-extrabold' : 'text-[#C51C63] font-bold bg-[#C51C63]/10'
                                  : highContrast ? 'text-white hover:bg-zinc-800' : 'text-[#414042] hover:bg-[#414042]/5'
                              }`}
                            >
                              <ItemIcon className="w-4 h-4" /> {item.label}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center gap-1 py-2">
            <button
              onClick={() => { setActiveTab('dashboard'); setClassToolsMenuOpen(false); setLearningMenuOpen(false); setResourcesMenuOpen(false); }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition whitespace-nowrap ${
                activeTab === 'dashboard'
                  ? highContrast ? 'bg-yellow-400 text-black font-extrabold' : 'bg-[#C51C63] text-white font-bold shadow-sm'
                  : highContrast ? 'text-white hover:bg-zinc-800' : 'text-[#414042] hover:bg-[#414042]/5'
              }`}
            >
              <Rocket className="w-4 h-4" /> Dashboard
            </button>
            {auth.user && (
              <button
                onClick={() => { setActiveTab('profile'); setClassToolsMenuOpen(false); setLearningMenuOpen(false); setResourcesMenuOpen(false); }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition whitespace-nowrap ${
                  activeTab === 'profile'
                    ? highContrast ? 'bg-yellow-400 text-black font-extrabold' : 'bg-[#C51C63] text-white font-bold shadow-sm'
                    : highContrast ? 'text-white hover:bg-zinc-800' : 'text-[#414042] hover:bg-[#414042]/5'
                }`}
              >
                <UserCircle className="w-4 h-4" /> My Profile
              </button>
            )}
            {isTeacher && (
              <button
                onClick={() => { setActiveTab('teacher'); setClassToolsMenuOpen(false); setLearningMenuOpen(false); setResourcesMenuOpen(false); }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition whitespace-nowrap ${
                  activeTab === 'teacher'
                    ? highContrast ? 'bg-yellow-400 text-black font-extrabold' : 'bg-[#C51C63] text-white font-bold shadow-sm'
                    : highContrast ? 'text-white hover:bg-zinc-800' : 'text-[#414042] hover:bg-[#414042]/5'
                }`}
              >
                <Users className="w-4 h-4" /> Teacher Dashboard
              </button>
            )}

            {[
              {
                label: 'Class Tools', icon: Calendar, open: classToolsMenuOpen,
                setOpen: setClassToolsMenuOpen,
                closeOthers: () => { setLearningMenuOpen(false); setResourcesMenuOpen(false); },
                ids: ['schedule','whiteboard','brainstarts','entryticket','feedback'],
                items: [
                  { id: 'schedule', label: 'Class Schedule', icon: Calendar },
                  { id: 'whiteboard', label: 'Class Whiteboard', icon: Presentation },
                  { id: 'brainstarts', label: 'Brain Starts', icon: Puzzle },
                  { id: 'entryticket', label: 'Entry Ticket', icon: ClipboardList },
                  { id: 'feedback', label: 'Exit Ticket', icon: MessageSquareText },
                ],
              },
              {
                label: 'Learning', icon: GraduationCap, open: learningMenuOpen,
                setOpen: setLearningMenuOpen,
                closeOthers: () => { setClassToolsMenuOpen(false); setResourcesMenuOpen(false); },
                ids: ['textbook','mastery','casestudies','syllabus','entrepreneurs'],
                items: [
                  { id: 'textbook', label: 'LaunchPad Textbook', icon: GraduationCap },
                  { id: 'mastery', label: 'Mastery & Assessments', icon: Trophy },
                  { id: 'casestudies', label: 'Case Studies', icon: BookOpen },
                  { id: 'syllabus', label: 'Syllabus', icon: ClipboardList },
                  { id: 'entrepreneurs', label: 'Entrepreneurs', icon: Users },
                ],
              },
              {
                label: 'Resources', icon: Layers, open: resourcesMenuOpen,
                setOpen: setResourcesMenuOpen,
                closeOthers: () => { setClassToolsMenuOpen(false); setLearningMenuOpen(false); },
                ids: ['glossary','calculators','practice','simulator'],
                items: [
                  { id: 'glossary', label: 'Glossary & Cards', icon: BookOpen },
                  { id: 'calculators', label: 'Formula & Math Lab', icon: Calculator },
                  { id: 'practice', label: 'Interactive Scenarios', icon: Target },
                  { id: 'simulator', label: 'Venture Pitch Builder', icon: Briefcase },
                ],
              },
            ].map((group) => {
              const GroupIcon = group.icon;
              const groupActive = group.ids.includes(activeTab);
              return (
                <div className="relative" key={group.label}>
                  <button
                    onClick={() => { group.closeOthers(); group.setOpen(!group.open); }}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition whitespace-nowrap ${
                      groupActive || group.open
                        ? highContrast ? 'bg-yellow-400 text-black font-extrabold' : 'bg-[#C51C63]/10 text-[#C51C63] font-bold'
                        : highContrast ? 'text-white hover:bg-zinc-800' : 'text-[#414042] hover:bg-[#414042]/5'
                    }`}
                    aria-expanded={group.open}
                    aria-haspopup="true"
                  >
                    <GroupIcon className="w-4 h-4" /> {group.label}
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform ${group.open ? 'rotate-90' : ''}`} />
                  </button>
                  {group.open && (
                    <>
                      <button
                        tabIndex={-1}
                        aria-hidden="true"
                        className="fixed inset-0 z-40 cursor-default"
                        onClick={() => group.setOpen(false)}
                      />
                      <div className={`absolute left-0 mt-2 w-64 rounded-lg shadow-lg overflow-hidden z-50 ${
                        highContrast ? 'bg-zinc-900 border-2 border-yellow-400' : 'bg-white border border-[#414042]/15'
                      }`}>
                        {group.items.map((item) => {
                          const ItemIcon = item.icon;
                          return (
                            <button
                              key={item.id}
                              onClick={() => { setActiveTab(item.id); group.setOpen(false); }}
                              className={`flex items-center gap-3 px-4 py-3 w-full text-left text-sm font-semibold transition ${
                                activeTab === item.id
                                  ? highContrast ? 'bg-yellow-400 text-black font-extrabold' : 'bg-[#C51C63]/10 text-[#C51C63]'
                                  : highContrast ? 'text-white hover:bg-zinc-800' : 'text-[#414042] hover:bg-[#414042]/5'
                              }`}
                            >
                              <ItemIcon className="w-4 h-4" /> {item.label}
                            </button>
                          );
                        })}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT AREA */}
      <main ref={mainContentRef} className={`max-w-7xl mx-auto scroll-mt-20 p-4 sm:p-6 lg:p-8 ${getTextSizeClass()}`}>
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

        {activeTab === 'entrepreneurs' && (
          <div className="space-y-6">
            <div>
              <h2 className={`text-2xl font-bold flex items-center gap-2 ${highContrast ? 'text-yellow-300' : 'text-[#414042]'}`}>
                <Users className={highContrast ? 'text-yellow-300' : 'text-[#C51C63]'} />
                Entrepreneur Profiles
              </h2>
              <p className={`mt-1 text-sm ${highContrast ? 'text-white' : 'text-[#414042]/70'}`}>
                Meet 25 diverse founders — from young inventors to global CEOs. Click any profile to open their full story.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {ENTREPRENEURS_DATA.map((person, index) => (
                <button
                  key={person.id}
                  type="button"
                  onClick={() => { setCurrentEntrepreneurIndex(index); setShowcaseOpen(true); }}
                  className={`group flex flex-col items-center text-center p-4 rounded-2xl border transition-all duration-200 hover:-translate-y-1 hover:shadow-xl ${
                    highContrast
                      ? 'bg-zinc-900 border-2 border-white hover:border-yellow-400'
                      : 'bg-white border-[#414042]/15 hover:border-[#C51C63] shadow-sm'
                  }`}
                  aria-label={`Open profile of ${person.name}`}
                >
                  <div className={`w-20 h-20 rounded-full overflow-hidden flex items-center justify-center text-white text-xl font-black shadow-md ring-4 ${highContrast ? 'ring-yellow-400' : 'ring-[#414042]/5 group-hover:ring-[#C51C63]/20'} ${person.accent}`}>
                    {ENTREPRENEUR_PHOTOS[person.id] ? (
                      <img
                        src={ENTREPRENEUR_PHOTOS[person.id]}
                        alt={`Portrait of ${person.name}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <span aria-label={`${person.name} initials`}>{person.initials}</span>
                    )}
                  </div>
                  <h3 className={`mt-3 font-black text-sm leading-tight ${highContrast ? 'text-white' : 'text-[#414042]'}`}>
                    {person.name}
                  </h3>
                  <p className={`mt-1 text-xs leading-snug ${highContrast ? 'text-yellow-300' : 'text-[#414042]/60'}`}>
                    {person.currentTitle}
                  </p>
                  <span className={`mt-2 px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    highContrast ? 'bg-yellow-400 text-black' : 'bg-[#C51C63]/10 text-[#C51C63]'
                  }`}>
                    {person.categoryTags[0]}
                  </span>
                </button>
              ))}
            </div>

            <div className="mt-8">
              <h3 className={`text-xl font-bold mb-3 ${highContrast ? 'text-yellow-300' : 'text-[#414042]'}`}>
                Coming Soon
              </h3>
              <div className={`rounded-2xl overflow-hidden border shadow-lg ${highContrast ? 'border-yellow-400' : 'border-[#414042]/15'}`}>
                <img
                  src={comingSoonPhoto.url}
                  alt="Coming soon — students collaborating in the entrepreneurship classroom"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'schedule' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div>
                <h2 className={`text-2xl font-bold flex items-center gap-2 ${highContrast ? 'text-yellow-300' : 'text-[#414042]'}`}>
                  <Calendar className={highContrast ? 'text-yellow-300' : 'text-[#C51C63]'} />
                  Class Schedule
                </h2>
                <p className={`mt-1 text-sm ${highContrast ? 'text-white' : 'text-[#414042]/70'}`}>
                  Our shared MS Entrepreneurship Google Calendar — class sessions, deadlines, and events all in one place.
                </p>
              </div>
              <a
                href="https://calendar.google.com/calendar/embed?src=c_classroom7d094986%40group.calendar.google.com&ctz=America%2FNew_York"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition ${
                  highContrast
                    ? 'bg-yellow-400 text-black font-extrabold border-2 border-white'
                    : 'bg-[#C51C63] text-white font-bold shadow-md shadow-[#C51C63]/20 hover:bg-[#C51C63]/90'
                }`}
              >
                <ExternalLink className="w-4 h-4" />
                Open in Google Calendar
              </a>
            </div>
            <div className={`rounded-2xl overflow-hidden shadow-lg border ${highContrast ? 'border-yellow-400 bg-zinc-900' : 'border-[#414042]/15 bg-white'}`}>
              <iframe
                title="MS Entrepreneurship Class Calendar"
                src="https://calendar.google.com/calendar/embed?src=c_classroom7d094986%40group.calendar.google.com&ctz=America%2FNew_York"
                style={{ border: 0 }}
                width="100%"
                height="600"
                frameBorder="0"
                scrolling="no"
                className="w-full"
              />
            </div>
          </div>
        )}

        {activeTab === 'whiteboard' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div>
                <h2 className={`text-2xl font-bold flex items-center gap-2 ${highContrast ? 'text-yellow-300' : 'text-[#414042]'}`}>
                  <Presentation className={highContrast ? 'text-yellow-300' : 'text-[#C51C63]'} />
                  Class Whiteboard
                </h2>
                <p className={`mt-1 text-sm ${highContrast ? 'text-white' : 'text-[#414042]/70'}`}>
                  Our shared MS Entrepreneurship Figma board — explore, comment, and collaborate live.
                </p>
              </div>
              <a
                href="https://www.figma.com/board/BMhyieAhM2wh7Yyo331rVJ/MS-ENTREPRENEURSHIP"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition ${
                  highContrast
                    ? 'bg-yellow-400 text-black font-extrabold border-2 border-white'
                    : 'bg-[#C51C63] text-white font-bold shadow-md shadow-[#C51C63]/20 hover:bg-[#C51C63]/90'
                }`}
              >
                <ExternalLink className="w-4 h-4" />
                Open in Figma
              </a>
            </div>
            <div className="flex justify-center">
              <iframe
                title="MS Entrepreneurship Figma Whiteboard"
                style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                className="w-full max-w-5xl rounded-xl shadow-lg"
                height="700"
                src="https://embed.figma.com/board/BMhyieAhM2wh7Yyo331rVJ/MS-ENTREPRENEURSHIP?node-id=0-1&embed-host=share"
                allowFullScreen
              />
            </div>
          </div>
        )}

        {activeTab === 'casestudies' && <CaseStudiesPage highContrast={highContrast} />}
        {activeTab === 'syllabus' && <SyllabusPage highContrast={highContrast} />}
        {activeTab === 'brainstarts' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div>
                <h2 className={`text-2xl font-bold flex items-center gap-2 ${highContrast ? 'text-yellow-300' : 'text-[#414042]'}`}>
                  <Puzzle className={highContrast ? 'text-yellow-300' : 'text-[#C51C63]'} />
                  Brain Starts
                </h2>
                <p className={`mt-1 text-sm ${highContrast ? 'text-white' : 'text-[#414042]/70'}`}>
                  Warm up your entrepreneur brain — start with the rebus picture puzzles, then try this week's crossword.
                </p>

              </div>
              <a
                href="https://ellieandray.my.canva.site/brain-start-ms-entrepreneurship-crossword"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition ${
                  highContrast
                    ? 'bg-yellow-400 text-black font-extrabold border-2 border-white'
                    : 'bg-[#C51C63] text-white font-bold shadow-md shadow-[#C51C63]/20 hover:bg-[#C51C63]/90'
                }`}
              >
                <ExternalLink className="w-4 h-4" />
                Open in Canva
              </a>
            </div>
            <div className="flex justify-center">
              <div className={`w-full max-w-2xl rounded-2xl p-8 text-center ${highContrast ? 'bg-zinc-900 border-2 border-yellow-400' : 'bg-white border border-[#414042]/15 shadow-lg'}`}>
                <div className={`mx-auto mb-5 w-16 h-16 rounded-2xl flex items-center justify-center ${highContrast ? 'bg-yellow-400 text-black' : 'bg-[#EFA835]/15 text-[#E94928]'}`}>
                  <Lightbulb className="w-8 h-8" />
                </div>
                <h3 className={`text-xl font-bold mb-2 ${highContrast ? 'text-yellow-300' : 'text-[#414042]'}`}>Brain Starts Rebus Puzzle</h3>
                <p className={`text-sm mb-6 ${highContrast ? 'text-yellow-200' : 'text-[#414042]/70'}`}>
                  Picture puzzles that spell out entrepreneurship words and phrases. Opens in a new tab on Canva.
                </p>
                <a
                  href="https://ellieandray.my.canva.site/brain-start-rebus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition ${
                    highContrast
                      ? 'bg-yellow-400 text-black font-extrabold border-2 border-white'
                      : 'bg-[#E94928] text-white font-bold shadow-md shadow-[#E94928]/20 hover:bg-[#E94928]/90'
                  }`}
                >
                  <ExternalLink className="w-4 h-4" />
                  Open the rebus puzzle
                </a>
              </div>
            </div>
            <div className="flex justify-center">

              <div className={`w-full max-w-2xl rounded-2xl p-8 text-center ${highContrast ? 'bg-zinc-900 border-2 border-yellow-400' : 'bg-white border border-[#414042]/15 shadow-lg'}`}>
                <div className={`mx-auto mb-5 w-16 h-16 rounded-2xl flex items-center justify-center ${highContrast ? 'bg-yellow-400 text-black' : 'bg-[#C51C63]/10 text-[#C51C63]'}`}>
                  <Puzzle className="w-8 h-8" />
                </div>
                <h3 className={`text-xl font-bold mb-2 ${highContrast ? 'text-yellow-300' : 'text-[#414042]'}`}>Brain Starts Crossword</h3>
                <p className={`text-sm mb-6 ${highContrast ? 'text-yellow-200' : 'text-[#414042]/70'}`}>
                  This week's warm-up puzzle opens in a new tab on Canva. Solve the clues using the entrepreneurship terms you've been learning.
                </p>
                <a
                  href="https://ellieandray.my.canva.site/brain-start-ms-entrepreneurship-crossword"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition ${
                    highContrast
                      ? 'bg-yellow-400 text-black font-extrabold border-2 border-white'
                      : 'bg-[#C51C63] text-white font-bold shadow-md shadow-[#C51C63]/20 hover:bg-[#C51C63]/90'
                  }`}
                >
                  <ExternalLink className="w-4 h-4" />
                  Open the crossword
                </a>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'entryticket' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div>
                <h2 className={`text-2xl font-bold flex items-center gap-2 ${highContrast ? 'text-yellow-300' : 'text-[#414042]'}`}>
                  <ClipboardList className={highContrast ? 'text-yellow-300' : 'text-[#414042]'} />
                  Entry Ticket
                </h2>
                <p className={`mt-1 text-sm ${highContrast ? 'text-white' : 'text-[#414042]/70'}`}>
                  Complete this entry ticket to kick off today's class — your responses help set the stage.
                </p>
              </div>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScTYZB2ok_ljADSXSKC8YkydIjnceC5k6X6k39DAOCuQN8TBQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition ${
                  highContrast
                    ? 'bg-yellow-400 text-black font-extrabold border-2 border-white'
                    : 'bg-[#414042] text-white font-bold shadow-md shadow-[#414042]/20 hover:bg-[#414042]/90'
                }`}
              >
                <ExternalLink className="w-4 h-4" />
                Open in Google Forms
              </a>
            </div>
            <div className={`rounded-2xl overflow-hidden shadow-lg border ${highContrast ? 'border-yellow-400 bg-zinc-900' : 'border-[#414042]/15 bg-white'}`}>
              <iframe
                title="MS Entrepreneurship Entry Ticket"
                src="https://docs.google.com/forms/d/e/1FAIpQLScTYZB2ok_ljADSXSKC8YkydIjnceC5k6X6k39DAOCuQN8TBQ/viewform?embedded=true"
                width="100%"
                height="3613"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                className="w-full"
              >
                Loading…
              </iframe>
            </div>
          </div>
        )}

        {activeTab === 'profile' && auth.user && (
          <StudentProfileView
            displayName={auth.displayName}
            email={auth.user.email}
            xp={xp}
            masteredCount={masteredTerms.length}
            totalTerms={GLOSSARY_DATA.length}
            scenariosCount={Object.keys(completedScenarios).length}
            totalScenarios={PRACTICE_SCENARIOS.length}
            sectionsDone={Object.values(auth.progress || {}).filter((entry) => entry?.completed).length}
            totalSections={ALL_LAUNCHPAD_SECTION_IDS.length}
            goals={goals}
            setGoals={setGoals}
            cloudSaving={hub.cloudSaving}
            highContrast={highContrast}
            setActiveTab={setActiveTab}
            userId={auth.user.id}
            completedSectionIds={Object.entries(auth.progress || {})
              .filter(([, entry]) => entry?.completed)
              .map(([id]) => id)}
            sectionProgress={auth.progress || {}}
            onOpenSection={(sectionId) => {
              setTextbookTarget(sectionId);
              setActiveTab('textbook');
            }}
          />
        )}

        {activeTab === 'teacher' && isTeacher && (
          <TeacherDashboard
            highContrast={highContrast}
            totalScenarios={PRACTICE_SCENARIOS.length}
            totalTerms={GLOSSARY_DATA.length}
          />
        )}

        {activeTab === 'textbook' && (

          <LaunchpadTextbook
            highContrast={highContrast}
            speakText={speakText}
            auth={auth}
            onEarnXp={(amount) => setXp((current) => current + amount)}
            targetSectionId={textbookTarget}
            onSectionOpen={(sectionId) => mastery.setActiveNode(sectionId)}
            onSectionComplete={(sectionId, hasEvidence) =>
              mastery.awardXp('section_complete', sectionId, { hasEvidence })
            }
          />
        )}

        {activeTab === 'mastery' && (
          <MasteryPortal
            displayName={auth.displayName || 'there'}
            xp={xp}
            progress={auth.progress || {}}
            highContrast={highContrast}
            mastery={mastery}
            signedIn={Boolean(auth.user)}
            onOpenSection={(sectionId) => {
              setTextbookTarget(sectionId);
              setActiveTab('textbook');
            }}
          />
        )}

        {activeTab === 'feedback' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div>
                <h2 className={`text-2xl font-bold flex items-center gap-2 ${highContrast ? 'text-yellow-300' : 'text-[#414042]'}`}>
                  <MessageSquareText className={highContrast ? 'text-yellow-300' : 'text-[#C51C63]'} />
                  Exit Ticket
                </h2>
                <p className={`mt-1 text-sm ${highContrast ? 'text-white' : 'text-[#414042]/70'}`}>
                  Complete the exit ticket before you leave — your responses help shape this class.
                </p>
              </div>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfO5PEET5KrqsldB0ZoBqSE8U20yJalbSRe2DpJCi6SpD4Xbw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition ${
                  highContrast
                    ? 'bg-yellow-400 text-black font-extrabold border-2 border-white'
                    : 'bg-[#C51C63] text-white font-bold shadow-md shadow-[#C51C63]/20 hover:bg-[#C51C63]/90'
                }`}
              >
                <ExternalLink className="w-4 h-4" />
                Open in Google Forms
              </a>
            </div>
            <div className={`rounded-2xl overflow-hidden shadow-lg border ${highContrast ? 'border-yellow-400 bg-zinc-900' : 'border-[#414042]/15 bg-white'}`}>
              <iframe
                title="MS Entrepreneurship Exit Ticket"
                src="https://docs.google.com/forms/d/e/1FAIpQLSfO5PEET5KrqsldB0ZoBqSE8U20yJalbSRe2DpJCi6SpD4Xbw/viewform?embedded=true"
                width="100%"
                height="1156"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                className="w-full"
              >
                Loading…
              </iframe>
            </div>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className={`mt-12 border-t ${highContrast ? 'border-yellow-400 bg-zinc-900 text-white' : 'border-[#414042]/15 bg-[#414042] text-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <img src={neiaLogo.url} alt="NEIA" className="w-7 h-7 object-contain" />
              <span className="font-bold text-sm">NEIA Entrepreneur Hub</span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <button
                onClick={() => setShowTermsModal(true)}
                className="hover:underline underline-offset-4 transition"
              >
                Terms of Use
              </button>
              <button
                onClick={() => setShowPrivacyModal(true)}
                className="hover:underline underline-offset-4 transition"
              >
                Privacy Policy
              </button>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-white/60">
            © {new Date().getFullYear()} New England Innovation Academy · Entrepreneurship Hub. For educational use only.
          </p>
        </div>
      </footer>

      {/* TERMS OF USE MODAL */}
      {showTermsModal && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="terms-modal-title"
          onClick={() => setShowTermsModal(false)}
        >
          <div className={`absolute inset-0 ${highContrast ? 'bg-black/80' : 'bg-black/60'}`} />
          <div
            className={`relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl shadow-2xl ${highContrast ? 'bg-zinc-900 border-2 border-yellow-400 text-white' : 'bg-white border border-[#414042]/15 text-[#414042]'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`sticky top-0 flex items-center justify-between px-6 py-4 border-b ${highContrast ? 'bg-zinc-900 border-yellow-400' : 'bg-[#414042] text-white border-[#414042]/15'}`}>
              <h2 id="terms-modal-title" className="text-xl font-bold flex items-center gap-2">
                <ShieldAlert className={highContrast ? 'text-yellow-300' : 'text-white'} />
                Terms of Use
              </h2>
              <button
                onClick={() => setShowTermsModal(false)}
                className={`rounded-lg p-1.5 transition ${highContrast ? 'hover:bg-yellow-400/20' : 'hover:bg-white/20'}`}
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="px-6 py-5 space-y-4 text-sm leading-relaxed">
              <p className={`text-xs ${highContrast ? 'text-yellow-300' : 'text-[#414042]/60'}`}>Last updated: September 21, 2026</p>
              <section>
                <h3 className="font-bold text-base mb-2">1. Acceptance of Terms</h3>
                <p>By accessing and using the NEIA Entrepreneur Hub ("the Hub"), you agree to these Terms of Use. If you do not agree with any part of these terms, please do not use the Hub. The Hub is provided as an educational resource for students of New England Innovation Academy (NEIA).</p>
              </section>
              <section>
                <h3 className="font-bold text-base mb-2">2. Educational Purpose</h3>
                <p>The Hub is designed to support middle school entrepreneurship education. All content—including the LaunchPad digital textbook, calculators, scenarios, glossary terms, entrepreneur profiles, quote feature, class tools, gradebook, and venture pitch builder—is provided for learning and practice purposes. Information presented here should not be taken as professional financial, legal, or business advice.</p>
              </section>
              <section>
                <h3 className="font-bold text-base mb-2">3. Student Accounts and Saved Progress</h3>
                <p>Signing in is optional, and there are two ways to do it: a Student Account made from your first name, last initial, grade, and a password you choose, or your own NEIA school Google account—never someone else's. Choose a password only you know, and never share it. Signing in lets the Hub save your XP, glossary progress, completed scenarios, textbook sections, notes, gradebook results, teacher-approved grade overrides, and learning goals to your account so they follow you between devices. Your teacher can view this coursework progress, rename an inappropriate or incorrect display name, reset a forgotten Student Account password, and remove a student account from the class roster when needed. Keep your account secure, sign out on shared computers, and do not enter sensitive personal information in notes or goals. Accounts and saved progress may be reset or removed at the end of the course or at your teacher's discretion.</p>
              </section>
              <section>

                <h3 className="font-bold text-base mb-2">4. User Conduct</h3>
                <p>Students are expected to use the Hub respectfully and responsibly. You agree to:</p>
                <ul className="list-disc pl-6 space-y-1 mt-1">
                  <li>Use the Hub only for class-related learning activities.</li>
                  <li>Not attempt to disrupt, damage, or gain unauthorized access to the Hub or its content.</li>
                  <li>Respect the intellectual property of others, including the entrepreneurs and organizations featured.</li>
                  <li>Submit your own work when completing entry tickets, exit tickets, textbook work, and practice activities.</li>
                  <li>Use Student Account names that accurately and respectfully identify you to your teacher.</li>
                </ul>
              </section>
              <section>
                <h3 className="font-bold text-base mb-2">5. Intellectual Property</h3>
                <p>All Hub content—including text, design, code, entrepreneur profiles, and images—is owned by NEIA or used with permission and attribution. Entrepreneur photos are sourced from public records and are used for educational, non-commercial purposes under fair use. You may not copy, redistribute, or republish Hub content without permission from your teacher.</p>
              </section>
              <section>
                <h3 className="font-bold text-base mb-2">6. External Links</h3>
                <p>The Hub contains links to external services including Google Classroom, Google Forms, Figma, Canva, Google Calendar, weather data, and optional Google sign-in. NEIA does not control these external services and is not responsible for their content, privacy practices, or availability. Use of external services is subject to their own terms and policies.</p>
              </section>
              <section>
                <h3 className="font-bold text-base mb-2">7. No Warranties</h3>
                <p>The Hub is provided "as is" without warranties of any kind. While every effort is made to ensure accuracy, NEIA does not guarantee that the information is error-free, complete, or current. Calculators and tools are simplified for educational purposes and may not reflect real-world complexity.</p>
              </section>
              <section>
                <h3 className="font-bold text-base mb-2">8. Limitation of Liability</h3>
                <p>NEIA and its staff are not liable for any damages arising from the use of the Hub. The Hub is a supplementary educational tool and does not replace classroom instruction or professional guidance.</p>
              </section>
              <section>
                <h3 className="font-bold text-base mb-2">9. Changes to These Terms</h3>
                <p>These Terms of Use may be updated at any time. Continued use of the Hub after changes constitutes acceptance of the revised terms.</p>
              </section>
              <section>
                <h3 className="font-bold text-base mb-2">10. Contact</h3>
                <p>Questions about these Terms of Use? Contact Mr. Pietro Valastro at <a href="mailto:pietro.valastro@neiacademy.org" className={`underline ${highContrast ? 'text-yellow-300' : 'text-[#C51C63]'}`}>pietro.valastro@neiacademy.org</a>.</p>
              </section>
            </div>
          </div>
        </div>
      )}

      {/* PRIVACY POLICY MODAL */}
      {showPrivacyModal && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="privacy-modal-title"
          onClick={() => setShowPrivacyModal(false)}
        >
          <div className={`absolute inset-0 ${highContrast ? 'bg-black/80' : 'bg-black/60'}`} />
          <div
            className={`relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl shadow-2xl ${highContrast ? 'bg-zinc-900 border-2 border-yellow-400 text-white' : 'bg-white border border-[#414042]/15 text-[#414042]'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`sticky top-0 flex items-center justify-between px-6 py-4 border-b ${highContrast ? 'bg-zinc-900 border-yellow-400' : 'bg-[#414042] text-white border-[#414042]/15'}`}>
              <h2 id="privacy-modal-title" className="text-xl font-bold flex items-center gap-2">
                <ShieldAlert className={highContrast ? 'text-yellow-300' : 'text-white'} />
                Privacy Policy
              </h2>
              <button
                onClick={() => setShowPrivacyModal(false)}
                className={`rounded-lg p-1.5 transition ${highContrast ? 'hover:bg-yellow-400/20' : 'hover:bg-white/20'}`}
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="px-6 py-5 space-y-4 text-sm leading-relaxed">
              <p className={`text-xs ${highContrast ? 'text-yellow-300' : 'text-[#414042]/60'}`}>Last updated: September 21, 2026</p>
              <section>
                <h3 className="font-bold text-base mb-2">1. Information We Collect</h3>
                <p>You can use most of the NEIA Entrepreneur Hub without signing in. If you create a Student Account, we store only your first name, last initial, and grade level as your display name—no email address is required—plus a securely encrypted version of the password you choose, which no one can read, including your teacher. Your teacher may reset the password if you forget it, but cannot view your old password. If you choose to sign in with your school Google account instead, we receive only your name, email address, and account ID from Google so we can save your work to your account. We never receive or store your Google password. Once signed in, the Hub stores your learning progress—XP points, mastered glossary terms, completed scenarios, completed textbook sections, section notes, gradebook calculations, teacher grade overrides, and learning goals—in a secure database record tied to your account. If you do not sign in, that same progress is kept only in your browser on that device.</p>
              </section>
              <section>
                <h3 className="font-bold text-base mb-2">2. Exit Ticket Submissions</h3>
                <p>When you complete an Entry Ticket or Exit Ticket, your responses are submitted through Google Forms, which is governed by Google's privacy policy and NEIA's Google Workspace for Education settings. Your teacher reviews these submissions. Please do not include sensitive personal information beyond what is asked in the form.</p>
              </section>
              <section>
                <h3 className="font-bold text-base mb-2">3. Cookies, Local Storage, and Sign-In Sessions</h3>
                <p>The Hub uses your browser's local storage to remember your progress (XP, mastered terms, completed scenarios, notes, goals, and quote preferences) and, when you sign in, to keep you signed in securely. Local data stays on your device and is cleared if you clear your browser data. No advertising or tracking cookies are used. Copying a quote uses your browser clipboard only after you click or tap the quote or Copy button.</p>
              </section>
              <section>
                <h3 className="font-bold text-base mb-2">4. Weather Data</h3>
                <p>The live weather widget retrieves current conditions for Marlborough, MA from the Open-Meteo API. This request sends only geographic coordinates—not personal information—to the weather service.</p>
              </section>
              <section>
                <h3 className="font-bold text-base mb-2">5. Third-Party Services</h3>
                <p>The Hub links to or embeds several third-party services, each with their own privacy policies:</p>
                <ul className="list-disc pl-6 space-y-1 mt-1">
                  <li><strong>Google Classroom, Google Calendar, Google Forms, and optional Google sign-in</strong> — governed by Google's Privacy Policy and NEIA's Google Workspace for Education settings.</li>
                  <li><strong>Figma</strong> — governed by Figma's Privacy Policy.</li>
                  <li><strong>Canva</strong> — governed by Canva's Privacy Policy.</li>
                  <li><strong>Open-Meteo</strong> — weather data provider; see Open-Meteo's privacy practices.</li>
                </ul>
                <p className="mt-2">NEIA does not control how these services handle your data. Please review their privacy policies before using them.</p>
              </section>
              <section>
                <h3 className="font-bold text-base mb-2">6. Entrepreneur Images</h3>
                <p>Photographs of featured entrepreneurs are sourced from publicly available materials and are used for educational, non-commercial purposes. No personal data about these individuals is collected or stored by the Hub.</p>
              </section>
              <section>
                <h3 className="font-bold text-base mb-2">7. Data Security</h3>
                <p>Saved progress for signed-in students is stored on a managed cloud database with security rules that allow each student to read and write only their own record. The teacher dashboard is limited to the teacher account and is used to review class progress, gradebook results, student notes, and account support actions such as renaming a student, resetting a forgotten Student Account password, or removing a student account. Google sign-in is handled by Google, so the Hub never sees or stores Google passwords. Student Account passwords are stored in encrypted form and cannot be read by the teacher. No system is perfectly secure, and external services you access through the Hub have their own security measures.</p>
              </section>
              <section>
                <h3 className="font-bold text-base mb-2">8. Children's Privacy</h3>
                <p>The Hub is designed for middle school students. NEIA takes student privacy seriously and works to comply with applicable student privacy laws, including FERPA. The only student information stored by the Hub is the sign-in details described above and your own coursework progress; it is used solely for teaching and learning in this class, is visible to your teacher, and is never sold, advertised against, or shared with outside parties. Students may use a limited Student Account with no email address or may use NEIA's Google Workspace for Education accounts, which are managed under NEIA's institutional agreements.</p>
              </section>
              <section>
                <h3 className="font-bold text-base mb-2">9. Your Choices</h3>
                <p>Signing in is optional—you may use the Hub without an account. You can sign out at any time, and you can clear locally stored progress by clearing your browser's site data for this website. To have your saved account record and progress deleted, email your teacher at the address below. You may also choose not to submit Entry or Exit Tickets, in which case no information is shared through that channel.</p>
              </section>
              <section>
                <h3 className="font-bold text-base mb-2">10. Changes to This Policy</h3>
                <p>This Privacy Policy may be updated at any time. Continued use of the Hub after changes constitutes acceptance of the revised policy.</p>
              </section>
              <section>
                <h3 className="font-bold text-base mb-2">11. Contact</h3>
                <p>Questions about this Privacy Policy? Contact Mr. Pietro Valastro at <a href="mailto:pietro.valastro@neiacademy.org" className={`underline ${highContrast ? 'text-yellow-300' : 'text-[#C51C63]'}`}>pietro.valastro@neiacademy.org</a>.</p>
              </section>
            </div>
          </div>
        </div>
      )}

      {/* FRIENDLY SIGN-IN REMINDER */}
      {showSignInReminder && !auth.user && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="signin-reminder-title"
        >
          <div className={`absolute inset-0 ${highContrast ? 'bg-black/80' : 'bg-black/50'}`} onClick={() => { setShowSignInReminder(false); setReminderDismissed(true); }} />
          <div className={`relative w-full max-w-md rounded-2xl shadow-2xl p-6 ${
            highContrast ? 'bg-zinc-900 border-2 border-yellow-400 text-white' : 'bg-white border border-[#414042]/15 text-[#414042]'
          }`}>
            <div className="flex items-start gap-3">
              <Sparkles className={`w-8 h-8 shrink-0 ${highContrast ? 'text-yellow-300' : 'text-[#EFA835]'}`} />
              <div>
                <h2 id="signin-reminder-title" className="text-lg font-black">Nice work — want to keep it?</h2>
                <p className={`mt-2 text-sm leading-relaxed ${highContrast ? 'text-yellow-200' : 'text-[#414042]/80'}`}>
                  Make a Student Account with your first name, last initial and grade — or use your school Google account — and your XP, glossary terms, scenarios, notes, and learning goals will follow you to any device. Without signing in, your work only stays in this browser.
                </p>
              </div>
            </div>
            <div className="mt-5 flex flex-col sm:flex-row gap-2">
              <button
                onClick={() => { setShowSignInReminder(false); setShowAccountModal(true); }}
                className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold transition ${
                  highContrast ? 'bg-yellow-400 text-black' : 'bg-[#C51C63] text-white hover:bg-[#C51C63]/90'
                }`}
              >
                <LogIn className="w-4 h-4" /> Sign in to save
              </button>
              <button
                onClick={() => { setShowSignInReminder(false); setReminderDismissed(true); }}
                className={`flex-1 inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-semibold border transition ${
                  highContrast ? 'border-yellow-400 text-yellow-300 hover:bg-zinc-800' : 'border-[#414042]/20 text-[#414042] hover:bg-[#414042]/5'
                }`}
              >
                Maybe later
              </button>
            </div>
          </div>
        </div>
      )}

      <StudentAccountModal
        open={showAccountModal && !auth.user}
        onClose={() => setShowAccountModal(false)}
        highContrast={highContrast}
        onGoogle={auth.signIn}
        onCreate={auth.createStudentAccount}
        onSignIn={auth.signInStudent}
      />

      <EntrepreneurShowcase

        isOpen={showcaseOpen}
        onToggle={() => setShowcaseOpen((open) => !open)}
        onClose={() => setShowcaseOpen(false)}
        profile={ENTREPRENEURS_DATA[currentEntrepreneurIndex]}
        currentIndex={currentEntrepreneurIndex}
        totalProfiles={ENTREPRENEURS_DATA.length}
        onPrevious={showPreviousEntrepreneur}
        onNext={showNextEntrepreneur}
        highContrast={highContrast}
      />
    </div>
  );
}

function EntrepreneurShowcase({ isOpen, onToggle, onClose, profile, currentIndex, totalProfiles, onPrevious, onNext, highContrast }) {
  const [photoFailed, setPhotoFailed] = useState(false);

  useEffect(() => {
    setPhotoFailed(false);
  }, [profile.id]);

  const photoUrl = ENTREPRENEUR_PHOTOS[profile.id];

  return (
    <aside className="fixed bottom-6 right-6 z-[70] flex flex-col items-end gap-3" aria-label="Entrepreneur showcase">
      {isOpen && (
        <section
          role="dialog"
          aria-modal="false"
          aria-labelledby="entrepreneur-name"
          className={`w-[min(360px,calc(100vw-2rem))] max-h-[520px] overflow-y-auto rounded-2xl border shadow-2xl ring-1 ring-black/5 animate-in fade-in slide-in-from-bottom-3 duration-200 ${
            highContrast ? 'bg-black text-white border-2 border-yellow-400' : 'bg-[#414042] text-white border-white/20'
          }`}
        >
          <div className={`sticky top-0 z-10 flex items-start gap-3 p-4 border-b ${highContrast ? 'bg-black border-white' : 'bg-[#414042] border-white/10'}`}>
            <div className={`w-16 h-16 shrink-0 rounded-full overflow-hidden flex items-center justify-center text-white text-lg font-black shadow-md ring-2 ${highContrast ? 'ring-yellow-400' : 'ring-white/80'} ${profile.accent}`}>
              {photoUrl && !photoFailed ? (
                <img
                  src={photoUrl}
                  alt={`Portrait of ${profile.name}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={() => setPhotoFailed(true)}
                />
              ) : (
                <span aria-label={`${profile.name} initials`}>{profile.initials}</span>
              )}
            </div>
            <div className="min-w-0 flex-1">
              <h2 id="entrepreneur-name" className={`font-black text-lg leading-tight ${highContrast ? 'text-white' : 'text-white'}`}>{profile.name}</h2>
              <p className={`text-xs mt-1 leading-snug ${highContrast ? 'text-yellow-300' : 'text-white/70'}`}>{profile.currentTitle}</p>
            </div>
            <button type="button" onClick={onClose} aria-label="Close entrepreneur showcase" title="Close" className={`w-9 h-9 shrink-0 rounded-full flex items-center justify-center transition ${highContrast ? 'hover:bg-yellow-400 hover:text-black' : 'hover:bg-white/15'}`}>
              <X className="w-5 h-5" />
            </button>
          </div>

          <div key={profile.id} className="p-4 space-y-4 animate-in fade-in slide-in-from-right-2 duration-200">
            <div className="flex flex-wrap gap-1.5">
              {profile.categoryTags.map((tag) => (
                <span key={tag} className={`px-2 py-1 rounded-full text-[10px] font-bold border ${highContrast ? 'border-yellow-400 text-yellow-300' : 'border-[#EFA835]/40 bg-[#EFA835]/15 text-[#EFA835]'}`}>{tag}</span>
              ))}
            </div>
            <div className={`p-3 rounded-xl border-l-4 ${highContrast ? 'bg-zinc-900 border-yellow-400' : 'bg-white/5 border-[#EFA835]'}`}>
              <h3 className={`text-xs font-black uppercase ${highContrast ? 'text-yellow-300' : 'text-[#EFA835]'}`}>Where They Started</h3>
              <p className="text-sm leading-relaxed mt-1 text-white/90">{profile.whereTheyStarted}</p>
            </div>
            <div>
              <h3 className={`text-xs font-black uppercase ${highContrast ? 'text-yellow-300' : 'text-[#E94928]'}`}>Most Known For</h3>
              <p className="text-sm font-bold leading-relaxed mt-1 text-white">{profile.mostKnownFor}</p>
            </div>
            <div>
              <h3 className={`text-xs font-black uppercase ${highContrast ? 'text-yellow-300' : 'text-[#C51C63]'}`}>Life & Career</h3>
              <p className={`text-sm leading-relaxed mt-1 ${highContrast ? 'text-zinc-100' : 'text-white/80'}`}>{profile.overview}</p>
            </div>
          </div>

          <div className={`sticky bottom-0 flex items-center justify-between gap-3 p-3 border-t ${highContrast ? 'bg-black border-white' : 'bg-[#414042] border-white/10'}`}>
            <button type="button" onClick={onPrevious} aria-label="Previous entrepreneur" title="Previous entrepreneur" className={`w-10 h-10 rounded-full flex items-center justify-center transition active:scale-95 ${highContrast ? 'bg-yellow-400 text-black hover:bg-yellow-300' : 'bg-[#C51C63] text-white hover:bg-[#E94928]'}`}>
              <ArrowLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-black tabular-nums text-white">{currentIndex + 1} of {totalProfiles}</span>
            <button type="button" onClick={onNext} aria-label="Next entrepreneur" title="Next entrepreneur" className={`w-10 h-10 rounded-full flex items-center justify-center transition active:scale-95 ${highContrast ? 'bg-yellow-400 text-black hover:bg-yellow-300' : 'bg-[#C51C63] text-white hover:bg-[#E94928]'}`}>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>
      )}

      <button
        type="button"
        onClick={onToggle}
        aria-label={isOpen ? 'Close entrepreneur showcase' : 'Open entrepreneur showcase'}
        aria-expanded={isOpen}
        title={isOpen ? 'Close entrepreneur showcase' : 'Meet an entrepreneur'}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-xl transition-transform duration-200 hover:scale-110 active:scale-95 ${
          highContrast ? 'bg-yellow-400 text-black border-2 border-white' : 'bg-[#C51C63] text-white border-4 border-white'
        }`}
      >
        {isOpen ? <X className="w-7 h-7" /> : <Sparkles className="w-7 h-7" />}
      </button>
    </aside>
  );
}

function DashboardView({ setActiveTab, xp, masteredCount, scenariosCount, speakText, highContrast }) {
  const [confetti, setConfetti] = useState<number[]>([]);
  const confettiTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const triggerConfetti = () => {
    const pieces = Array.from({ length: 60 }, (_, i) => i);
    setConfetti(pieces);
    if (confettiTimer.current) clearTimeout(confettiTimer.current);
    confettiTimer.current = setTimeout(() => setConfetti([]), 4500);
  };

  useEffect(() => {
    return () => { if (confettiTimer.current) clearTimeout(confettiTimer.current); };
  }, []);

  return (
    <div className="animate-fadeIn">
      {/* STICKY HERO BANNER — pinned while content scrolls up over it */}
      <div className="sticky top-0 z-0">
        <div className={`relative w-screen left-1/2 -translate-x-1/2 overflow-hidden shadow-xs ${
          highContrast ? 'bg-zinc-900' : 'bg-[#414042]'
        }`}>
        {/* Hero background image (NEIA campus) */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${neiaHero.url})` }}
        />
        {/* Legibility overlay — strong on the left behind the text, fading right so the green campus shows through */}
        <div
          aria-hidden="true"
          className={`absolute inset-0 ${highContrast ? 'bg-zinc-900/85' : 'bg-gradient-to-r from-white/95 via-white/60 to-white/15'}`}
        />
        {/* White glittering confetti — falls from top on headline click */}
        {confetti.length > 0 && (
          <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[60] overflow-hidden">
            {confetti.map((i) => {
              const left = Math.random() * 100;
              const delay = Math.random() * 1.2;
              const duration = 3 + Math.random() * 2;
              const size = 6 + Math.random() * 8;
              const drift = (Math.random() - 0.5) * 120;
              const isStar = Math.random() > 0.6;
              return (
                <span
                  key={i}
                  className="confetti-piece absolute top-0 block"
                  style={{
                    left: `${left}%`,
                    width: `${size}px`,
                    height: `${size}px`,
                    animationDelay: `${delay}s`,
                    animationDuration: `${duration}s`,
                    // @ts-ignore custom property for drift
                    ['--drift']: `${drift}px`,
                    background: isStar ? 'transparent' : 'rgba(255,255,255,0.95)',
                    boxShadow: isStar ? 'none' : '0 0 6px rgba(255,255,255,0.8)',
                    borderRadius: isStar ? '0' : '50%',
                  }}
                >
                  {isStar && (
                    <Sparkles className="text-white" style={{ width: `${size}px`, height: `${size}px`, filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.9))' }} />
                  )}
                </span>
              );
            })}
          </div>
        )}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="relative">
            <h1
              onClick={triggerConfetti}
              className={`hero-glow cursor-pointer text-4xl sm:text-6xl md:text-7xl font-black tracking-tight drop-shadow-lg leading-tight transition-all duration-500 ${highContrast ? 'text-white' : 'text-[#414042]'}`}>
              Activate Your <span className={highContrast ? 'text-yellow-300 underline' : 'text-[#C51C63]'}>Entrepreneurial Mindset</span>
            </h1>
          </div>
        </div>
      </div>
      </div>

      {/* Scrollable content layer — rises over the pinned hero */}
      <div className="relative z-10 -mt-6 sm:-mt-10 space-y-8 px-0">
      {/* LIVE DATE / TIME / WEATHER */}
      <LiveDateTimeWeather highContrast={highContrast} />

      {/* TEACHER INTRODUCTION */}
      <div className={`rounded-2xl overflow-hidden shadow-xs ${highContrast ? 'bg-zinc-900 border-2 border-white' : 'bg-[#444446] border border-[#414042]/15'}`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 items-stretch">
          {/* Photo — aligned to the top of the container, on a white background */}
          <div className="relative md:col-span-1 flex flex-col items-center justify-start bg-[#444446] p-6 gap-4">
            <img
              src={pietroPhoto.url}
              alt="Mr. Pietro Valastro, Entrepreneurship teacher"
              className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-full border-4 border-[#EFA835]/30 shadow-lg"
            />
            <a
              href="mailto:pietro.valastro@neiacademy.org"
              className={`w-full max-w-[16rem] px-4 py-2 rounded-xl flex items-center justify-center gap-2 transition font-semibold shadow-xs ${highContrast ? 'bg-zinc-800 text-white border-2 border-white hover:bg-zinc-700' : 'bg-[#C51C63] hover:bg-[#C51C63]/90 text-white border border-[#C51C63]'}`}
            >
              <Mail className="w-4 h-4" /> Email
            </a>
          </div>
          {/* Introduction text */}
          <div className={`md:col-span-2 p-6 sm:p-8 space-y-4 ${highContrast ? 'text-white' : 'text-white'}`}>
            <div className="flex items-center gap-2">
              <span className={`text-2xl`}>👋</span>
              <h2 className={`text-2xl font-black tracking-tight ${highContrast ? 'text-white' : 'text-white'}`}>
                Welcome!
              </h2>
            </div>
            <div className={`space-y-3 leading-relaxed text-sm sm:text-base ${highContrast ? 'text-zinc-100' : 'text-white/90'}`}>
              <p>
                I am your Entrepreneurship teacher, <strong className={highContrast ? 'text-yellow-300' : 'text-[#C51C63]'}>Mr. Pietro Valastro</strong>, and I am thrilled to embark on this journey with you. This year, we aren't just studying business. We are actively building, sharpening, and applying our entrepreneurial mindsets.
              </p>
              <p>
                Over the coming months, you will learn to think like a problem harvester and an opportunity seeker. We will reset our approach to goal setting, cultivate resilience, and fundamentally redefine how we view failure. After all, are we truly failing if we are experimenting, learning, and trying again?
              </p>
              <p>
                True impact happens when learning moves past theory and transforms into action. My goal is to help you take what you learn in this room, combine it with your unique passions, and turn it into tangible results.
              </p>
              <p>
                I am glad you are here, and I am in your corner every step of the way.
              </p>
              <p className={`text-lg sm:text-xl font-black pt-2 ${highContrast ? 'text-yellow-300' : 'text-[#C51C63]'}`}>
                Ready. Set. Innovate.
              </p>
            </div>
            <button
              onClick={() => speakText("Welcome! I am your Entrepreneurship teacher, Mr. Pietro Valastro, and I am thrilled to embark on this journey with you. This year, we aren't just studying business. We are actively building, sharpening, and applying our entrepreneurial mindsets. Over the coming months, you will learn to think like a problem harvester and an opportunity seeker. We will reset our approach to goal setting, cultivate resilience, and fundamentally redefine how we view failure. After all, are we truly failing if we are experimenting, learning, and trying again? True impact happens when learning moves past theory and transforms into action. My goal is to help you take what you learn in this room, combine it with your unique passions, and turn it into tangible results. I am glad you are here, and I am in your corner every step of the way. Ready. Set. Innovate.")}
              className={`mt-2 px-4 py-2 rounded-xl flex items-center gap-2 transition font-semibold shadow-xs ${highContrast ? 'bg-zinc-800 text-white border-2 border-white hover:bg-zinc-700' : 'bg-white/10 hover:bg-white/20 text-white border border-white/30'}`}
            >
              <Volume2 className={`w-4 h-4 ${highContrast ? 'text-yellow-300' : 'text-[#E94928]'}`} /> Read Aloud
            </button>
          </div>
        </div>
      </div>

      {/* ENTREPRENEURSHIP AT NEIA — program definition */}
      <div
        className={`rounded-2xl shadow-md p-6 sm:p-8 border ${
          highContrast
            ? 'bg-zinc-900 border-2 border-white'
            : 'bg-[#C51C63] border-[#C51C63]'
        }`}
      >
        <div className="flex items-center gap-3">
          <Quote
            className={`w-7 h-7 sm:w-9 sm:h-9 shrink-0 ${highContrast ? 'text-yellow-300' : 'text-[#EFA835]'}`}
            aria-hidden="true"
          />
          <h2
            className={`${highContrast ? 'title-glow-hc' : 'title-glow'} text-2xl sm:text-4xl font-black uppercase tracking-tight ${
              highContrast ? 'text-yellow-300' : 'text-white'
            }`}
          >
            Entrepreneurship At NEIA
          </h2>
        </div>
        <p
          className={`mt-4 text-lg sm:text-2xl font-bold leading-snug ${
            highContrast ? 'text-white' : 'text-white'
          }`}
        >
          “Entrepreneurship is the process of providing leadership and gathering resources to create
          feasible, scalable, and sustainable solutions that create greater economic and social
          value.”
        </p>
      </div>

      {/* JOIN THE CLASS — Links to Google Classroom and Figma */}
      <div className={`rounded-2xl shadow-xs p-6 sm:p-8 ${highContrast ? 'bg-zinc-900 border-2 border-white' : 'bg-white border border-[#414042]/15'}`}>
        <div className="flex items-center gap-2 mb-4">
          <Users className={`w-6 h-6 ${highContrast ? 'text-yellow-300' : 'text-[#414042]'}`} />
          <h2 className={`text-xl font-black tracking-tight ${highContrast ? 'text-white' : 'text-[#414042]'}`}>
            Join the Class
          </h2>
        </div>
        <p className={`mb-5 text-sm sm:text-base ${highContrast ? 'text-zinc-100' : 'text-[#414042]/85'}`}>
          Connect to our class platforms below to access assignments, resources, and collaborative work.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="https://classroom.google.com/c/ODc3MTU4Mzk3NzUy?cjc=u6pzu57n"
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center gap-4 p-4 rounded-xl transition shadow-xs ${
              highContrast
                ? 'bg-zinc-800 text-white border-2 border-white hover:bg-zinc-700'
                : 'bg-[#EFA835]/10 hover:bg-[#EFA835]/20 text-[#414042] border border-[#414042]/20'
            }`}
          >
            <div className={`w-12 h-12 shrink-0 rounded-lg flex items-center justify-center ${highContrast ? 'bg-white' : 'bg-white shadow-sm'}`}>
              <GoogleClassroomLogo className="w-9 h-9" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-bold text-sm sm:text-base">MS Entrepreneurship Google Classroom</div>
              <div className={`text-xs truncate ${highContrast ? 'text-yellow-300' : 'text-[#414042]/70'}`}>
                classroom.google.com
              </div>
            </div>
            <ExternalLink className={`w-5 h-5 shrink-0 ${highContrast ? 'text-yellow-300' : 'text-[#414042]/60 group-hover:text-[#414042]'}`} />
          </a>
          <a
            href="https://www.figma.com/board/BMhyieAhM2wh7Yyo331rVJ/MS-ENTREPRENEURSHIP"
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center gap-4 p-4 rounded-xl transition shadow-xs ${
              highContrast
                ? 'bg-zinc-800 text-white border-2 border-white hover:bg-zinc-700'
                : 'bg-[#C51C63]/10 hover:bg-[#C51C63]/20 text-[#414042] border border-[#414042]/20'
            }`}
          >
            <div className={`w-12 h-12 shrink-0 rounded-lg flex items-center justify-center ${highContrast ? 'bg-white' : 'bg-white shadow-sm'}`}>
              <FigmaLogo className="w-7 h-10" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-bold text-sm sm:text-base">MS Entrepreneurship Class Figma</div>
              <div className={`text-xs truncate ${highContrast ? 'text-yellow-300' : 'text-[#414042]/70'}`}>
                figma.com
              </div>
            </div>
            <ExternalLink className={`w-5 h-5 shrink-0 ${highContrast ? 'text-yellow-300' : 'text-[#414042]/60 group-hover:text-[#414042]'}`} />
          </a>
          <a
            href="https://www.canva.com/brand/join?token=3pfBvqosyj-JikSAxzW0pg&brandingVariant=edu&invitationDestinationType=group"
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center gap-4 p-4 rounded-xl transition shadow-xs ${
              highContrast
                ? 'bg-zinc-800 text-white border-2 border-white hover:bg-zinc-700'
                : 'bg-[#7D2AE7]/10 hover:bg-[#7D2AE7]/20 text-[#414042] border border-[#414042]/20'
            }`}
          >
            <div className={`w-12 h-12 shrink-0 rounded-lg flex items-center justify-center ${highContrast ? 'bg-white' : 'bg-white shadow-sm'}`}>
              <CanvaLogo className="w-8 h-8" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-bold text-sm sm:text-base">MS Entrepreneurship Class Canva</div>
              <div className={`text-xs truncate ${highContrast ? 'text-yellow-300' : 'text-[#414042]/70'}`}>
                canva.com
              </div>
            </div>
            <ExternalLink className={`w-5 h-5 shrink-0 ${highContrast ? 'text-yellow-300' : 'text-[#414042]/60 group-hover:text-[#414042]'}`} />
          </a>
        </div>
      </div>
      {/* CURRICULUM ROADMAP GRID */}
      <div className="space-y-4">
        <h2 className={`text-xl font-bold flex items-center gap-2 ${highContrast ? 'text-white' : 'text-[#414042]'}`}>
          <Layers className={`w-5 h-5 ${highContrast ? 'text-yellow-300' : 'text-[#C51C63]'}`} /> Resource Roadmap
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              tab: 'glossary',
              title: '1. Essential Glossary',
              desc: 'Master Assets, Liabilities, Compound Interest, Fixed vs Variable Costs.',
              icon: BookOpen,
               borderColor: 'border-[#C51C63]',
               bgColor: 'bg-[#C51C63]',
               btnColor: 'bg-white/15 hover:bg-white/25 text-white border border-white/30',
               iconColor: 'text-white'
            },
            {
              tab: 'calculators',
              title: '2. Math & Formula Lab',
              desc: 'Interactive visual tools for Net Worth, Net Profit, ROI, and Break-Even.',
              icon: Calculator,
               borderColor: 'border-[#E94928]',
               bgColor: 'bg-[#E94928]',
               btnColor: 'bg-white/15 hover:bg-white/25 text-white border border-white/30',
               iconColor: 'text-white'
            },
            {
              tab: 'practice',
              title: '3. Real-World Practice',
              desc: 'Solve Alex’s Sneaker Cleaning and Lemonade Stand math scenarios.',
              icon: Target,
               borderColor: 'border-[#EFA835]',
               bgColor: 'bg-[#EFA835]',
               btnColor: 'bg-white/15 hover:bg-white/25 text-white border border-white/40',
               iconColor: 'text-white'
            },
            {
              tab: 'simulator',
              title: '4. Business Pitch Builder',
              desc: 'Design your micro-business, project earnings, and download your pitch card.',
              icon: Briefcase,
               borderColor: 'border-[#414042]',
               bgColor: 'bg-[#414042]',
               btnColor: 'bg-white/15 hover:bg-white/25 text-white border border-white/30',
               iconColor: 'text-white'
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
                   <div className="w-fit">
                    <Icon className={`w-6 h-6 ${highContrast ? 'text-yellow-300' : item.iconColor}`} />
                  </div>
                   <h3 className={`font-bold text-lg ${highContrast ? 'text-yellow-300' : 'text-white'}`}>{item.title}</h3>
                   <p className={`text-xs leading-relaxed ${highContrast ? 'text-white font-medium' : 'text-white/90'}`}>{item.desc}</p>
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
  const categoryColor = {
    All: 'bg-[#414042] border-[#414042] text-white',
    'Financial Literacy': 'bg-[#EFA835] border-[#EFA835] text-white',
    Entrepreneurship: 'bg-[#E94928] border-[#E94928] text-white',
    'Entrepreneurial Mindset': 'bg-[#C51C63] border-[#C51C63] text-white',
  };

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
                       : `${categoryColor[cat]} border` 
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
                         <span className={`text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full font-mono font-bold border ${
                           highContrast ? 'bg-yellow-400 text-black border-white' : categoryColor[item.category]
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

      {/* CALCULATOR 3: ROI % */}
      {activeCalc === 'roi' && (
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-2xl border shadow-xs ${
          highContrast ? 'bg-zinc-900 border-2 border-white text-white' : 'bg-white border-[#414042]/15'
        }`}>
          <div className="space-y-4">
            <div className={`p-3 rounded-xl text-xs font-mono font-bold border ${
              highContrast ? 'bg-black text-yellow-300 border-yellow-400' : 'bg-[#C51C63]/10 border-[#C51C63]/30 text-[#C51C63]'
            }`}>
              Formula: ROI = (Net Profit ÷ Cost of Investment) × 100
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold flex justify-between">
                <span>Cost of Investment ($)</span>
                <span className={highContrast ? 'text-red-400 font-mono' : 'text-[#E94928] font-mono'}>${investmentCost}</span>
              </label>
              <input type="range" min="1" max="500" step="1" value={investmentCost} onChange={(e) => setInvestmentCost(Number(e.target.value))} className="w-full accent-red-500 cursor-pointer" />
              <p className={`text-[11px] ${highContrast ? 'text-zinc-300' : 'text-[#414042]/60'}`}>What you spent on equipment, supplies, or ads</p>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold flex justify-between">
                <span>Net Profit Gained ($)</span>
                <span className={highContrast ? 'text-yellow-300 font-mono' : 'text-[#C51C63] font-mono'}>${netProfitGained}</span>
              </label>
              <input type="range" min="0" max="1000" step="5" value={netProfitGained} onChange={(e) => setNetProfitGained(Number(e.target.value))} className="w-full accent-yellow-400 cursor-pointer" />
              <p className={`text-[11px] ${highContrast ? 'text-zinc-300' : 'text-[#414042]/60'}`}>Money earned back after covering costs</p>
            </div>
          </div>

          <div className={`p-6 rounded-2xl border flex flex-col justify-center items-center text-center space-y-4 ${
            highContrast ? 'bg-black border-2 border-yellow-400 text-white' : 'bg-[#414042]/5 border-[#414042]/10'
          }`}>
            <div className="w-full text-right">
              <button
                onClick={() => speakText(`Your Return on Investment is ${computedROI} percent. Net profit of ${netProfitGained} dollars divided by an investment of ${investmentCost} dollars, times one hundred.`)}
                className={`p-1.5 ${highContrast ? 'text-yellow-300 hover:text-white' : 'text-[#414042]/60 hover:text-[#C51C63]'}`}
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>

            <div>
              <span className={`text-xs uppercase font-mono tracking-wider font-semibold ${highContrast ? 'text-yellow-300' : 'text-[#414042]/70'}`}>Return on Investment</span>
              <div className={`text-4xl sm:text-5xl font-black mt-1 ${highContrast ? 'text-yellow-300' : Number(computedROI) >= 100 ? 'text-[#C51C63]' : 'text-[#EFA835]'}`}>
                {computedROI}%
              </div>
            </div>

            <div className={`w-full text-xs font-mono font-semibold space-y-2 ${highContrast ? 'text-white' : 'text-[#414042]'}`}>
              <div className="flex justify-between">
                <span>Invested: ${investmentCost}</span>
                <span>Returned: ${netProfitGained}</span>
              </div>
              <div className="w-full h-4 bg-zinc-800 rounded-full overflow-hidden border border-white">
                <div style={{ width: `${Math.min(100, Number(computedROI) / 5)}%` }} className="bg-yellow-400 h-full"></div>
              </div>
              <p className={`text-[11px] font-sans ${highContrast ? 'text-zinc-300' : 'text-[#414042]/60'}`}>
                {Number(computedROI) >= 100
                  ? 'Great! You more than doubled your money.'
                  : 'Under 100% means you earned back less than you invested.'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CALCULATOR 4: BREAK-EVEN */}
      {activeCalc === 'break-even' && (
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-2xl border shadow-xs ${
          highContrast ? 'bg-zinc-900 border-2 border-white text-white' : 'bg-white border-[#414042]/15'
        }`}>
          <div className="space-y-4">
            <div className={`p-3 rounded-xl text-xs font-mono font-bold border ${
              highContrast ? 'bg-black text-yellow-300 border-yellow-400' : 'bg-[#E94928]/10 border-[#E94928]/30 text-[#E94928]'
            }`}>
              Formula: Break-Even Units = Fixed Costs ÷ (Price - Variable Cost)
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold flex justify-between">
                <span>Fixed Costs ($)</span>
                <span className={highContrast ? 'text-red-400 font-mono' : 'text-[#E94928] font-mono'}>${fixedCosts}</span>
              </label>
              <input type="range" min="0" max="500" step="5" value={fixedCosts} onChange={(e) => setFixedCosts(Number(e.target.value))} className="w-full accent-red-500 cursor-pointer" />
              <p className={`text-[11px] ${highContrast ? 'text-zinc-300' : 'text-[#414042]/60'}`}>Costs that stay the same: booth fee, equipment, signage</p>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold flex justify-between">
                <span>Price per Unit ($)</span>
                <span className={highContrast ? 'text-yellow-300 font-mono' : 'text-[#C51C63] font-mono'}>${pricePerUnit}</span>
              </label>
              <input type="range" min="1" max="100" value={pricePerUnit} onChange={(e) => setPricePerUnit(Number(e.target.value))} className="w-full accent-yellow-400 cursor-pointer" />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold flex justify-between">
                <span>Variable Cost per Unit ($)</span>
                <span className={highContrast ? 'text-red-400 font-mono' : 'text-[#E94928] font-mono'}>${variableCostPerUnit}</span>
              </label>
              <input type="range" min="0" max="100" value={variableCostPerUnit} onChange={(e) => setVariableCostPerUnit(Number(e.target.value))} className="w-full accent-red-500 cursor-pointer" />
              <p className={`text-[11px] ${highContrast ? 'text-zinc-300' : 'text-[#414042]/60'}`}>Ingredients or materials used for each single sale</p>
            </div>
          </div>

          <div className={`p-6 rounded-2xl border flex flex-col justify-center items-center text-center space-y-4 ${
            highContrast ? 'bg-black border-2 border-yellow-400 text-white' : 'bg-[#414042]/5 border-[#414042]/10'
          }`}>
            <div className="w-full text-right">
              <button
                onClick={() => speakText(
                  marginPerUnit > 0
                    ? `You break even after selling ${breakEvenUnits} units. Each unit earns ${marginPerUnit} dollars of contribution margin.`
                    : 'Your price must be higher than your variable cost, or you can never break even.'
                )}
                className={`p-1.5 ${highContrast ? 'text-yellow-300 hover:text-white' : 'text-[#414042]/60 hover:text-[#C51C63]'}`}
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>

            <div>
              <span className={`text-xs uppercase font-mono tracking-wider font-semibold ${highContrast ? 'text-yellow-300' : 'text-[#414042]/70'}`}>Units Needed to Break Even</span>
              <div className={`text-4xl sm:text-5xl font-black mt-1 ${highContrast ? 'text-yellow-300' : marginPerUnit > 0 ? 'text-[#C51C63]' : 'text-[#E94928]'}`}>
                {breakEvenUnits}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 w-full">
              <div className={`p-3 rounded-xl border shadow-xs ${highContrast ? 'bg-zinc-900 border-white text-white' : 'bg-white border-[#414042]/15'}`}>
                <div className={`text-[10px] font-mono uppercase font-semibold ${highContrast ? 'text-yellow-300' : 'text-[#414042]/60'}`}>Margin / Unit</div>
                <div className={`text-2xl font-bold ${highContrast ? 'text-white' : 'text-[#EFA835]'}`}>${marginPerUnit}</div>
              </div>
              <div className={`p-3 rounded-xl border shadow-xs ${highContrast ? 'bg-zinc-900 border-white text-white' : 'bg-white border-[#414042]/15'}`}>
                <div className={`text-[10px] font-mono uppercase font-semibold ${highContrast ? 'text-red-400' : 'text-[#414042]/60'}`}>Sales at Break-Even</div>
                <div className={`text-2xl font-bold ${highContrast ? 'text-red-400' : 'text-[#E94928]'}`}>
                  {marginPerUnit > 0 ? `$${Number(breakEvenUnits) * pricePerUnit}` : 'N/A'}
                </div>
              </div>
            </div>

            <p className={`text-[11px] ${highContrast ? 'text-zinc-300' : 'text-[#414042]/60'}`}>
              {marginPerUnit > 0
                ? `Every sale past unit ${breakEvenUnits} is pure profit.`
                : 'Raise your price above the variable cost to make breaking even possible.'}
            </p>
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
            Solve math word problems and practice your knowledge.
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
            Cost Sorting Challenge 🏷️
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

      {/* COST SORTING CHALLENGE */}
      {activeTab === 'sorting' && (
        <div className="space-y-4">
          <div className={`p-5 rounded-2xl border shadow-xs ${
            highContrast ? 'bg-zinc-900 border-2 border-white text-white' : 'bg-white border-[#414042]/15'
          }`}>
            <h3 className={`font-black text-lg ${highContrast ? 'text-yellow-300' : 'text-[#414042]'}`}>
              Scenario: Alex launches "Apex Sticker Lab" 🏷️
            </h3>
            <p className={`text-xs mt-1 leading-relaxed ${highContrast ? 'text-zinc-200' : 'text-[#414042]/70'}`}>
              Alex designs custom vinyl stickers and sells them online and at school craft fairs.
              Before setting a price, Alex must split every cost into <strong>Fixed</strong> (stays the same no matter
              how many stickers sell) or <strong>Variable</strong> (grows with each sticker sold). Sort all
              {' '}{sortingItems.length} costs correctly to earn 40 XP.
            </p>
            <button
              onClick={() => speakText("Sort each of Alex's sticker business costs into Fixed costs, which stay the same, or Variable costs, which grow with every sticker sold.")}
              className={`mt-2 text-xs font-bold inline-flex items-center gap-1 ${highContrast ? 'text-yellow-300' : 'text-[#C51C63]'}`}
            >
              <Volume2 className="w-4 h-4" /> Read directions aloud
            </button>
          </div>

          <div className="space-y-3">
            {sortingItems.map((item, idx) => {
              const choice = userCategories[idx];
              const graded = sortingScore !== null;
              const isRight = choice === item.correctCategory;
              return (
                <div
                  key={item.name}
                  className={`p-4 rounded-2xl border shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                    highContrast
                      ? 'bg-zinc-900 border-2 border-white text-white'
                      : graded
                        ? isRight ? 'bg-[#EFA835]/15 border-[#EFA835]' : 'bg-[#E94928]/10 border-[#E94928]/40'
                        : 'bg-white border-[#414042]/15'
                  }`}
                >
                  <div>
                    <div className={`text-sm font-bold ${highContrast ? 'text-white' : 'text-[#414042]'}`}>{item.name}</div>
                    {graded && (
                      <div className={`text-[11px] mt-1 ${highContrast ? 'text-zinc-300' : 'text-[#414042]/70'}`}>
                        {isRight ? '✅ Correct — ' : `❌ This is a ${item.correctCategory} cost — `}{item.why}
                      </div>
                    )}
                  </div>

                  <div className={`flex gap-1 p-1 rounded-xl border shrink-0 ${
                    highContrast ? 'bg-black border-white' : 'bg-[#414042]/10 border-[#414042]/15'
                  }`}>
                    {['Fixed', 'Variable'].map(cat => (
                      <button
                        key={cat}
                        onClick={() => {
                          setUserCategories({ ...userCategories, [idx]: cat });
                          setSortingScore(null);
                        }}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                          choice === cat
                            ? highContrast ? 'bg-yellow-400 text-black font-extrabold' : 'bg-[#C51C63] text-white'
                            : highContrast ? 'text-white' : 'text-[#414042] hover:text-[#C51C63]'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={checkSortingGame}
              disabled={Object.keys(userCategories).length < sortingItems.length}
              className={`font-bold px-5 py-2.5 rounded-xl text-xs transition shadow-xs disabled:opacity-40 disabled:cursor-not-allowed ${
                highContrast ? 'bg-yellow-400 text-black border-2 border-white font-extrabold' : 'bg-[#C51C63] hover:bg-[#a81452] text-white'
              }`}
            >
              Check My Sorting
            </button>
            <button
              onClick={() => { setUserCategories({}); setSortingScore(null); }}
              className={`font-semibold px-4 py-2.5 rounded-xl text-xs border transition ${
                highContrast ? 'bg-zinc-800 text-white border-white' : 'bg-white text-[#414042] border-[#414042]/20 hover:bg-[#414042]/5'
              }`}
            >
              Reset
            </button>
            {sortingScore !== null && (
              <span className={`text-sm font-black ${
                highContrast ? 'text-yellow-300' : sortingScore === sortingItems.length ? 'text-[#C51C63]' : 'text-[#E94928]'
              }`}>
                {sortingScore} / {sortingItems.length} correct
                {sortingScore === sortingItems.length ? ' 🎉 +40 XP!' : ' — review the red cards and try again.'}
              </span>
            )}
          </div>
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

            {bizCategory === 'Other' && (
              <div className="pt-2 space-y-1">
                <label className={`text-xs font-semibold ${highContrast ? 'text-white' : 'text-[#414042]'}`}>
                  Write your own industry / service type
                </label>
                <input
                  type="text"
                  value={customCategory}
                  onChange={(e) => setCustomCategory(e.target.value)}
                  placeholder="e.g. Handmade Jewelry, Lawn Care, Photo Editing..."
                  className={`w-full px-3 py-2 rounded-xl text-sm focus:outline-none shadow-xs ${
                    highContrast
                      ? 'bg-black text-white border-2 border-yellow-400 font-bold placeholder:text-zinc-500'
                      : 'bg-[#414042]/5 border border-[#C51C63]/40 text-[#414042] focus:border-[#C51C63] placeholder:text-[#414042]/40'
                  }`}
                />
                <p className={`text-[11px] ${highContrast ? 'text-zinc-300' : 'text-[#414042]/60'}`}>
                  This name is used in your elevator pitch and pitch deck card.
                </p>
              </div>
            )}
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