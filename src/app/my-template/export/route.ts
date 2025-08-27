import { render } from '@react-email/render';
import { NextResponse } from 'next/server';

import ReactMailWrapper from '@/app/components/ReactMailWrapper';
import Page from '@/app/my-template/page';

export async function GET() {
  const template = render(ReactMailWrapper({ children: Page() }));
  return new NextResponse(template)
}
