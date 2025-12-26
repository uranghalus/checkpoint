import { FloatingThemeMenu } from "@/components/floating-theme-menu";
import LoginForm from "@/components/login-form";
import { cn } from "@/lib/utils";
import { FileCheck2 } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'CheckPoint - Masuk',
  description: 'Dashboard page',
};
export default function Home() {
  return (
    <div className='relative container grid h-svh flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-4'>
      <div className='lg:p-8'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-2 py-8 sm:w-[480px] sm:p-8'>
          <div className='mb-4 flex items-center justify-center'>
            <div className='flex items-center justify-center p-2.5 bg-primary rounded-lg text-white mr-2'>
              <FileCheck2 className='size-5' />
            </div>
            <h1 className='text-xl font-medium'>CheckPoint</h1>
          </div>
        </div>
        <div className='mx-auto flex w-full max-w-sm flex-col justify-center space-y-2 lg:p-0'>
          <div className='flex flex-col space-y-2 text-start sm:px-4 px-4'>
            <h2 className='text-lg font-semibold tracking-tight'>Sign in</h2>
            <p className='text-muted-foreground text-sm'>
              Masukkan email dan kata sandi Anda di bawah ini <br /> untuk masuk ke akun Anda
            </p>
          </div>

          <LoginForm />
          <p className='text-muted-foreground px-8 text-center text-sm'>
            Dengan mengklik masuk, Anda menyetujui{' '}
            <a
              href='/terms'
              className='hover:text-primary underline underline-offset-4'
            >
              Ketentuan Layanan
            </a>{' '}
            dan{' '}
            <a
              href='/privacy'
              className='hover:text-primary underline underline-offset-4 font-bold'
            >
              Kebijakan Privasi
            </a>
            .
          </p>
        </div>
      </div>

      <div
        className={cn(
          'bg-muted relative h-full overflow-hidden max-lg:hidden',
          '[&>img]:absolute [&>img]:top-[15%] [&>img]:left-20 [&>img]:h-full [&>img]:w-full [&>img]:object-cover [&>img]:object-top-left [&>img]:select-none'
        )}
      >
        <Image
          src={'/images/undraw_dialog-box_4p2h.svg'}
          width={1024}
          height={1151}
          alt='Shadcn-Admin'
        />

      </div>
      <FloatingThemeMenu />
    </div>
  );
}
