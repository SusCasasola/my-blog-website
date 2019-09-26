const homeRenderingOptions = {
  renderNode: {
    'embedded-asset-block': node => `
          <img src="${node.data.target.fields.file.url}"/>
      `,
  },
};

export default homeRenderingOptions;
