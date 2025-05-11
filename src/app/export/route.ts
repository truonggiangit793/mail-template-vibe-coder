import { render } from '@react-email/render';
import { NextResponse } from 'next/server';

import ReactMailContent from '@/app/components/ReactMailContent';
import ReactMailWrapper from '@/app/components/ReactMailWrapper';

export async function GET() {
  const template = render(ReactMailWrapper({ children: ReactMailContent() }));
  console.log('🚀 ~ GET ~ template:', template);
  return NextResponse.json({ templateString: template });
}
