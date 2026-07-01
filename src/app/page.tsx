import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>

      <Image
        src="/images/backgrounds/background.jpeg"
        alt="background"
        width={1500}
        height={1182}
      />
    </div>
  );
}
