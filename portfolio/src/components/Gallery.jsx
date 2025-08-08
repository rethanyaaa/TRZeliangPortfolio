import React, { useState } from "react";
import "./Gallery.css";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Sample gallery data - replace with actual images
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Public Event Meeting",
      category: "events",
      title: "Community Town Hall Meeting",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Infrastructure Development",
      category: "projects",
      title: "Road Infrastructure Project",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Educational Initiative",
      category: "projects",
      title: "Educational Development Program",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Healthcare Facility",
      category: "projects",
      title: "Healthcare Center Inauguration",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Political Campaign",
      category: "events",
      title: "Campaign Rally",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Agricultural Development",
      category: "projects",
      title: "Agricultural Support Program",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Team Meeting",
      category: "meetings",
      title: "Policy Planning Session",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Youth Program",
      category: "events",
      title: "Youth Empowerment Initiative",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Environmental Project",
      category: "projects",
      title: "Environmental Conservation Project",
    },
  ];

  const [activeFilter, setActiveFilter] = useState("all");

  const filteredImages =
    activeFilter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  const openLightbox = (image) => {
    setSelectedImage(image);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const nextImage = () => {
    const currentIndex = filteredImages.findIndex(
      (img) => img.id === selectedImage.id
    );
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = filteredImages.findIndex(
      (img) => img.id === selectedImage.id
    );
    const prevIndex =
      currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    setSelectedImage(filteredImages[prevIndex]);
  };

  const handleKeyDown = (e) => {
    if (!lightboxOpen) return;

    switch (e.key) {
      case "Escape":
        closeLightbox();
        break;
      case "ArrowRight":
        nextImage();
        break;
      case "ArrowLeft":
        prevImage();
        break;
      default:
        break;
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxOpen, selectedImage]);

  return (
    <div className="gallery-section">
      <div className="gallery-container">
        <div className="gallery-header">
          <h2 className="gallery-title">Gallery</h2>
          <p className="gallery-subtitle">
            High-resolution images showcasing public events, meetings, and
            developmental projects
          </p>
        </div>

        <div className="gallery-filters">
          <button
            className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
            onClick={() => setActiveFilter("all")}
          >
            All
          </button>
          <button
            className={`filter-btn ${
              activeFilter === "events" ? "active" : ""
            }`}
            onClick={() => setActiveFilter("events")}
          >
            Events
          </button>
          <button
            className={`filter-btn ${
              activeFilter === "meetings" ? "active" : ""
            }`}
            onClick={() => setActiveFilter("meetings")}
          >
            Meetings
          </button>
          <button
            className={`filter-btn ${
              activeFilter === "projects" ? "active" : ""
            }`}
            onClick={() => setActiveFilter("projects")}
          >
            Projects
          </button>
        </div>

        <div className="masonry-grid">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => openLightbox(image)}
            >
              <div className="image-container">
                <img src={image.src} alt={image.alt} loading="lazy" />
                <div className="image-overlay">
                  <div className="image-info">
                    <h3>{image.title}</h3>
                    <p>{image.alt}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="lightbox-close" onClick={closeLightbox}>
              ×
            </button>
            <button className="lightbox-nav lightbox-prev" onClick={prevImage}>
              ‹
            </button>
            <button className="lightbox-nav lightbox-next" onClick={nextImage}>
              ›
            </button>

            <div className="lightbox-image-container">
              <img
                src={selectedImage.src.replace("w=800", "w=1200")}
                alt={selectedImage.alt}
                className="lightbox-image"
              />
            </div>

            <div className="lightbox-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
