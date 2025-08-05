import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/">
      <Image width={56} height={20} src="/h3c-logo.png" alt="logo" />
    </Link>
  );
}
