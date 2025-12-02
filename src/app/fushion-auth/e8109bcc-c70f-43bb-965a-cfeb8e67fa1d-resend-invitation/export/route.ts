import { render } from '@react-email/render';
import { NextResponse } from 'next/server';

import ReactMailWrapper from '@/app/_components/ReactMailWrapper';

import Page from '../page';

export async function GET() {
  const template = render(ReactMailWrapper({ children: Page() }));
  return new NextResponse(template);
}
