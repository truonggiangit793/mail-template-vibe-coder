import { render } from '@react-email/render';
import { NextResponse } from 'next/server';

import Page from '@/app/change-password/page';
import ReactMailWrapper from '@/app/components/ReactMailWrapper';

export async function GET() {
  const template = render(ReactMailWrapper({ children: Page() }));
  return new NextResponse(template)
}
