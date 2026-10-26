import abPdf from '@/assets/assumption-buster-student-guide.pdf.asset.json';
import abHtml from '@/content/assumption-buster.html?raw';
import rebusHtml from '@/content/rebus-studio.html?raw';
import interviewHtml from '@/content/customer-interview-lab.html?raw';
import rebusPdf from '@/assets/rebus-studio-student-guide.pdf.asset.json';
import interviewPdf from '@/assets/customer-interview-lab-student-guide.pdf.asset.json';
import fridayHtml from '@/content/friday-learning-loop.html?raw';
import fridayPdf from '@/assets/friday-learning-loop-student-guide.pdf.asset.json';
import foundersHtml from '@/content/founders-of-learning.html?raw';
import foundersPdf from '@/assets/founders-of-learning-student-guide.pdf.asset.json';

// Weeks shown on the Assignments page and in the teacher's Assignment Inbox (newest first).
export const ASSIGNMENT_WEEKS = [
  { id: 'oct26', label: 'This Week', dates: 'Monday, October 26 – Friday, October 30, 2026', current: true },
  { id: 'oct19', label: 'Last Week', dates: 'Monday, October 19 – Friday, October 23, 2026', current: false },
] as const;

export const ASSIGNMENT_DOCS = {
  'founders-of-learning': { week: 'oct26', title: 'Founders of Learning: Build, Teach, Improve', html: foundersHtml, pdfUrl: foundersPdf.url, pdfName: 'Founders-of-Learning-Planning-Guide.pdf' },
  'assumption-buster': { week: 'oct19', title: 'Assumption Buster', html: abHtml, pdfUrl: abPdf.url, pdfName: 'Assumption-Buster-Student-Guide.pdf' },
  'rebus-studio': { week: 'oct19', title: 'Entrepreneurial Rebus Studio', html: rebusHtml, pdfUrl: rebusPdf.url, pdfName: 'Rebus-Studio-Student-Guide.pdf' },
  'customer-interview-lab': { week: 'oct19', title: 'Customer Interview Lab', html: interviewHtml, pdfUrl: interviewPdf.url, pdfName: 'Customer-Interview-Lab-Student-Guide.pdf' },
  'friday-learning-loop': { week: 'oct19', title: 'Friday Learning Loop: Week in Four Frames', html: fridayHtml, pdfUrl: fridayPdf.url, pdfName: 'Friday-Learning-Loop-Student-Guide.pdf' },
} as const;

export type AssignmentKey = keyof typeof ASSIGNMENT_DOCS;
