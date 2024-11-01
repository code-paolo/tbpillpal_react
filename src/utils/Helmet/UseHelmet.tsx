import { Helmet } from "react-helmet-async";

type HelmetProps = {
  helmetTitle: string;
  helmetContent: string;
};

export function UseHelmet({ helmetTitle, helmetContent }: HelmetProps) {
  return (
    <div>
      <Helmet>
        <title>{helmetTitle}</title>
        <meta name="description" content={helmetContent} />
      </Helmet>
    </div>
  );
}
