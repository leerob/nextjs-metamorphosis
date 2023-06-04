'use client';

import Navbar from './navbar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || '';
  const settingsUrl = pathname.includes('/new')
    ? '/new/settings/profile'
    : '/settings/profile';
  const displayUrl = pathname.includes('/new')
    ? '/new/settings/display'
    : '/settings/display';

  return (
    <>
      <Navbar />
      <div className="space-y-6 p-10 pb-16">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-slate-500">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>
        <div
          data-orientation="horizontal"
          role="none"
          className="shrink-0 bg-border h-[1px] w-full my-6 bg-gray-200"
        />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <nav className="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
              <Link
                className={classNames(
                  'inline-flex items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background hover:bg-gray-50 h-10 py-2 px-4 justify-start',
                  pathname === settingsUrl &&
                    'bg-slate-200/50 hover:bg-slate-200/50'
                )}
                href={settingsUrl}
              >
                Profile
              </Link>
              <Link
                className="inline-flex items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background hover:bg-gray-50 h-10 py-2 px-4 hover:bg-transparent justify-start"
                href="#"
              >
                Account
              </Link>
              <Link
                className="inline-flex items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background hover:bg-gray-50 h-10 py-2 px-4 hover:bg-transparent justify-start"
                href="#"
              >
                Appearance
              </Link>
              <Link
                className="inline-flex items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background hover:bg-gray-50 h-10 py-2 px-4 hover:bg-transparent justify-start"
                href="#"
              >
                Notifications
              </Link>
              <Link
                className={classNames(
                  'inline-flex items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background hover:bg-gray-50 h-10 py-2 px-4 justify-start',
                  pathname === displayUrl &&
                    'bg-slate-200/50 hover:bg-slate-200/50'
                )}
                href={displayUrl}
              >
                Display
              </Link>
            </nav>
          </aside>
          <div className="flex-1 lg:max-w-2xl">
            <div className="space-y-8 [&_form]:space-y-8">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export function Name() {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        Display Name
      </label>
      <input
        className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        placeholder="Lee Robinson"
        defaultValue="Lee Robinson"
        name="name"
      />
      <p className="text-sm text-slate-500">
        This is your public display name. It can be your real name or a
        pseudonym. You can only change this once every 30 days.
      </p>
    </div>
  );
}

export function Bio() {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        Bio
      </label>
      <textarea
        className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
        placeholder="Tell us a little bit about yourself"
        name="bio"
        defaultValue="I'm the creator of this talk at React Summit, happening... right now."
      />
      <p className="text-sm text-slate-500">
        You can <span>@mention</span> other users and organizations to link to
        them.
      </p>
    </div>
  );
}

export function Button(props: any) {
  return (
    <button
      className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background bg-black text-white hover:bg-black/90 h-10 py-2 px-4"
      {...props}
    />
  );
}
