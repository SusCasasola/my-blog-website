const renderComponentByEntryType = (entryType, nodeInput) => {
  const mapEntryTypes = {
    githubHist: node => {
      const { githubHistId } = node.data.target.fields;
      return `
      <script src="https://gist.github.com/SusCasasola/${githubHistId}.js"></script>
      `;
    },
    codepen: node => {
      const { penId } = node.data.target.fields;
      const penTitle = node.data.target.fields.title;
      return `
        <p class="codepen" data-height="265" data-theme-id="0" data-default-tab="html,result" data-user="SusCasasola" data-slug-hash="${penId}" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="${penTitle}">
          <span>See the Pen <a href="https://codepen.io/SusCasasola/pen/${penId}/">
          ${penTitle}</a> by Sussie Casasola (<a href="https://codepen.io/SusCasasola">@SusCasasola</a>)
          on <a href="https://codepen.io">CodePen</a>.</span>
        </p>
        <script async src="https://static.codepen.io/assets/embed/ei.js"></script>
      `;
    },
  };
  return mapEntryTypes[entryType](nodeInput);
};

const articleRenderingOptions = {
  renderNode: {
    'embedded-asset-block': node => {
      const figureImageUrl = node.data.target.fields.file.url;
      const figureDescription = node.data.target.fields.description;
      const renderFigureDescription = () => {
        if (figureDescription) {
          return `
            <figcaption>
              ${figureDescription}
            </figcaption>
          `;
        }
        return '';
      };
      return `
        <figure>
          <img src="${figureImageUrl}" alt="${node.data.target.fields.file.description}"/>
          ${renderFigureDescription()}
        </figure>
      `;
    },
    'embedded-entry-block': node => {
      const entryType = node.data.target.sys.contentType.sys.id;
      return renderComponentByEntryType(entryType, node);
    },
  },
};

export default articleRenderingOptions;
