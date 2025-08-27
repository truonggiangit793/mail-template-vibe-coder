import { render } from '@react-email/render';
import { NextResponse } from 'next/server';

import ReactMailWrapper from '@/app/_components/ReactMailWrapper';
import MyTemplatePage from '@/app/my-template/page';

export async function GET() {
  const template = render(ReactMailWrapper({ children: MyTemplatePage() }));
  return new NextResponse(template);
}
