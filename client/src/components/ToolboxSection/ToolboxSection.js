import "./ToolboxSection.scss";

const ToolboxSection = ({
  toolboxRef,
  categories,
  selectedCategory,
  isAnimating,
  icons,
  handleCategoryChange,
}) => {
  return (
    <div className="toolbox-container__content">
      <h2
        className="process-container__heading toolbox-container__heading"
        ref={toolboxRef}
      >
        My Toolbox.
      </h2>
      <hr className="process-container__divider toolbox-container__divider" />
      <p className="process-container__text process-container__body toolbox-container__text">
        A list of my most used frameworks, applications, and methodologies that
        I follow.
      </p>
      <div className="toolbox-list">
        <div className="toolbox-list__container">
          <nav className="toolbox-list__titles" role="navigation">
            <ul className="toolbox-list__list">
              {Object.keys(categories).map((category) => (
                <li
                  key={category}
                  className={`toolbox-list__item ${
                    selectedCategory === category ? "active" : ""
                  }`}
                  onClick={() => handleCategoryChange(category)}
                  tabIndex={0}
                >
                  {category}
                </li>
              ))}
            </ul>
          </nav>
          <hr className="toolbox-list__divider" />
          <div
            className={`toolbox-list__icons ${
              isAnimating ? "slide-out" : "slide-in"
            }`}
          >
            <ul className="toolbox-list__icon-list">
              {icons.map((tool) => (
                <li key={tool.name} className="toolbox-list__icon-item">
                  <img
                    className="toolbox-list__icon-item--img"
                    src={tool.logo}
                    alt={tool.name}
                  />
                  <p className="toolbox-list__icon-item--name">{tool.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolboxSection;
