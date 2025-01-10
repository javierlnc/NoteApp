import Image from "next/image";
export default function Page() {
  return (
    <div className="flex min-h-full flex-1 flex-col px-6 py-12 lg:px-8">
      <div>
        <Image
          src="/icon-notes.svg"
          alt="Notes logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <h2></h2>
      </div>

      <div></div>
    </div>
  );
}
