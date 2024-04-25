export interface Props {
  text: string;
}

export default function ImageCaroussel({ text = "text" }: Props) {
  return <div>{text}</div>;
}
