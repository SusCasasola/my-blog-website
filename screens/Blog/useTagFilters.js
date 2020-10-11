import React, { useState } from 'react';

import TagsComponent from 'components/Tags';

const tagsToFilter = new Set();

const useTagFilters = allEntries => {
  const [filteredEntries, setFilteredEntries] = useState(allEntries);

  const handleFilter = tag => {
    if (tagsToFilter.has(tag)) {
      tagsToFilter.delete(tag);
    } else {
      tagsToFilter.add(tag);
    }

    setFilteredEntries(
      tagsToFilter.size
        ? allEntries.filter(entry => entry.fields.tags.some(entryTag => tagsToFilter.has(entryTag)))
        : allEntries
    );
  };

  const Tags = () => {
    const tags = [
      {
        id: 'css',
        name: 'CSS',
        onClick: () => handleFilter('CSS'),
        isActive: tagsToFilter.has('CSS'),
      },
      {
        id: 'cms',
        name: 'CMS',
        onClick: () => handleFilter('CMS'),
        isActive: tagsToFilter.has('CMS'),
      },
      {
        id: 'contentful',
        name: 'Contentful',
        onClick: () => handleFilter('Contentful'),
        isActive: tagsToFilter.has('Contentful'),
      },
    ];

    return <TagsComponent tags={tags} />;
  };

  return { filteredEntries, Tags };
};

export default useTagFilters;
