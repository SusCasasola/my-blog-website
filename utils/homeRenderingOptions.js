const homeRenderingOptions = {
  renderNode: {
    'embedded-asset-block': (node) => {
      return `
          <img src="${node.data.target.fields.file.url}"/>
      `;
    }
  }
};

export default homeRenderingOptions;