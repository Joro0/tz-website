type Props = {
  images: string[];
  alt: string;
};

function GalleryImages({ images, alt }: Props) {
  return (
    <>
      {images.map((img) => (
        <img
          key={img}
          src={img}
          alt={alt}
          loading="lazy"
          className="w-[85%] aspect-[9/10] object-cover shadow snap-start rounded-xl md:w-4/9 lg:w-[50%] xl:w-[40%]"
        />
      ))}
    </>
  );
}

export default GalleryImages;
