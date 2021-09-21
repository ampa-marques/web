import { ReactNode } from "react";

export default function Card({
  title,
  image,
  by,
  schedule,
  children,
  link,
  linkTitle,
  matricula,
}: {
  title: string;
  image: string;
  by: string;
  schedule: string;
  link?: string;
  linkTitle?: string;
  matricula?: string;
  children: ReactNode;
}) {
  return (
    <div className="my-2 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <article className="overflow-hidden rounded-lg shadow-lg text-left">
        <a href={link ?? "#"}>
          <img
            alt={title}
            className="block h-40 w-full object-cover"
            src={image}
          />
        </a>

        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
          <div className="text-lg">
            <a
              className="no-underline hover:underline text-black"
              href={link ?? "#"}
            >
              {title}
            </a>
          </div>
          <div className="text-grey-darker text-sm">{by}</div>
        </header>
        <div className="text-left px-2 md:px-4">{children}</div>
        <div className="text-left px-2 md:px-4">
          {matricula !== undefined && <b>{matricula}</b>}
          {matricula === undefined && (
            <span>
              Matrícula 25€, <b>¡socios del AMPA Gratis!</b>
            </span>
          )}
        </div>
        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
          <a
            className="flex items-center no-underline hover:underline text-black"
            href={link ?? "#"}
          >
            {/* <img
              alt="Placeholder"
              className="block rounded-full mr-2"
              src="https://picsum.photos/32/32/?random"
            /> */}
            <div className="text-sm">{schedule}</div>
          </a>
          {link && (
            <a
              className="no-underline bg-green-600 text-white px-2 py-1 rounded hover:bg-green-500 hover:text-white cursor-pointer"
              href={link}
            >
              {linkTitle ?? "Inscripción"}
            </a>
          )}
          {!link && <span>aún no disponible</span>}
        </footer>
      </article>
    </div>
  );
}
