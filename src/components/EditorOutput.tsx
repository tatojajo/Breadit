import dynamic from "next/dynamic";
import Image from "next/image";
import { FC } from "react";
const Output = dynamic(
  async () => (await import("editorjs-react-renderer")).default,
  { ssr: false }
);

interface EditorOutputProps {
  content: any;
}

const style = {
  paragraph: {
    fontSize: "0.875",
    lineHeight: "1,25rem",
  },
};

const renderers = {
  image: CustomImageRenderer,
  code: CustomCodeRenderer,
};

const EditorOutput: FC<EditorOutputProps> = ({ content }) => {
  return (
    // @ts-expect-error
    <Output
      data={content}
      style={style}
      className="text-sm"
      renderer={renderers}
    />
  );
};

function CustomCodeRenderer({ data }: any) {
  return (
    <div className="bg-grey-800 rounded-md p-4">
      <code className="text-grey-100 text-sm">{data.code}</code>
    </div>
  );
}

function CustomImageRenderer({ data }: any) {
  const src = data.file.url;
  return (
    <div className="relative w-full min-h-[15rem]">
      <Image alt="Image" className="object-contain" fill src={src} />
    </div>
  );
}

export default EditorOutput;
