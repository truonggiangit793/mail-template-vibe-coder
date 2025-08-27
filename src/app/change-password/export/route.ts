import { render } from '@react-email/render';
import { NextResponse } from 'next/server';

import ReactMailWrapper from '@/app/_components/ReactMailWrapper';
import ChangePasswordPage from '@/app/change-password/page';

export async function GET() {
  const template = render(ReactMailWrapper({ children: ChangePasswordPage() }));
  return new NextResponse(template)
}
