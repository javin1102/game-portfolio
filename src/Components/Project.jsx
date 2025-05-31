export const Project = ({
    src,
    alt,
    bgColor,
    title,
    overview,
    contributions,
    url,
    onClick,
}) => {
    if (bgColor == null) bgColor = "bg-gray";
    let cursorType = onClick ? "cursor-pointer" : "cursor-default";
    return (
        <div
            className={`text-white ${bgColor} box-content p-8 rounded-lg flex flex-col items-center w-fit justify-self-center h-fit ${cursorType}`}
            onClick={onClick}>
            <h2 className="font-bold text-center mb-4 text-base">{title}</h2>
            <img src={src} alt={alt} className=" object-contain rounded-lg" />
            <h2 className=" font-bold text-sm text-center mt-4">
                Game Overview
            </h2>
            <p className="text-xs mt-2 w-72 leading-6 flex flex-col items-center text-center">
                {overview}
            </p>
            <h2 className=" font-bold text-sm text-center mt-8">
                My Contributions
            </h2>
            <ul className="text-xs list-disc mt-2 leading-6 flex flex-col w-full ">
                {contributions.map((c, i) => (
                    <li key={i}>{c}</li>
                ))}
            </ul>
            {url ? (
                <a className="underline" target="blank" href={url}>
                    Play Store &rarr;{" "}
                </a>
            ) : (
                ""
            )}
        </div>
    );
};

export const ProjectsLayout = ({ children }) => {
    return (
        <div className="grid  grid-cols-16 justify-center gap-16 md:gap-4 px-16 mt-12">
            {children}
        </div>
    );
};
