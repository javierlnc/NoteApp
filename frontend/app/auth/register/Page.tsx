import Image from "next/image";
export default function Page() {
  return (
    <div className="flex min-h-full flex-1 flex-col px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          src="/icon-notes.svg"
          alt="Notes logo"
          width={50}
          height={50}
          className="object-contain mx-auto"
        />
        <h2 className="mt-10 text-center text-2xl font-bold tracking-thight text-gray-800">
            Sign up for your account
        </h2>
      </div>

      <div></div>
    </div>
  );
}
