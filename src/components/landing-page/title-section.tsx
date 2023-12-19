import React from 'react';

interface TitleSectionProps {
  title: string;
  subheading?: string;
  pill?: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({
  title,
  subheading,
  pill,
}) => {
  return (
    <React.Fragment>
      <section
        className={`flex
          flex-col
          gap-4
          justify-center
          items-start
          md:items-center
          ${
            subheading || pill ? '' : 'pl-4'
          }  // Add left padding if no subheading and pill
        `}
      >
        {pill && (
          <article
            className="rounded-full
            p-[1px] dark:text-washed-purple-500
            text-sm
            dark:bg-gradient-to-r
            dark:from-brand-primaryBlue
            dark:to-brand-primaryPurple
          "
          >
            <div
              className="rounded-full 
              px-3
              py-1
              dark:bg-black"
            >
              {pill}
            </div>
          </article>
        )}
        {subheading ? (
          <>
            <h2
              className={`text-left
                text-8xl
                sm:text-5xl
                sm:max-w-[1000px]
                md:text-center
                font-semibold
              `}
            >
              {title}
            </h2>
            <p
              className="dark:text-washed-purple-700 sm:max-w-[700px]
              md:text-center
            "
            >
              {subheading}
            </p>
          </>
        ) : (
          <h2
            className="text-left 
              text-3xl
              sm:text-5xl
              sm:max-w-[800px]
              md:text-center
              font-semibold
            "
          >
            {title}
          </h2>
        )}
      </section>
    </React.Fragment>
  );
};

export default TitleSection;
