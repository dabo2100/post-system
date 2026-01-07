export default function Post({ title, content, bgColor, imgUrl }) {
  return (
    <div className={`w-full ${bgColor} shadow rounded-2xl border text-gray-950 p-4`}>
      {imgUrl && <img src={imgUrl} />}
      <h1 className="text-2xl">{title}</h1>
      <p>{content}</p>
      <div className="w-full flex gap-4">
        <button className="btn btn-primary">Like</button>
        <button className="btn btn-succcess">Comment</button>
      </div>
    </div>
  );
}
