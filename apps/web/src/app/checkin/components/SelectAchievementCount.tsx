import { MenuItem, Select } from '@material-ui/core';
import React from 'react';
import { useContext, useState } from 'react';
import { CreateCheckinContext } from '../context/CreateCheckinContext';

export const SelectAchievementCount = ({ id, value }) => {
  const [v, setValue] = useState(value ?? 1);
  const { achievementCounts, setSelectedAchievementCountById } =
    useContext(CreateCheckinContext);

  const handleChange = (event) => {
    const count = event.target.value;
    setValue(count);
    const newAchievementCounts = new Map(achievementCounts.get);
    newAchievementCounts.set(id, count);
    achievementCounts.set(newAchievementCounts);
    setSelectedAchievementCountById(id, count);
  };

  return (
    <Select style={{ flex: 1 }} value={v} onChange={handleChange}>
      {Array.from(Array(10).keys()).map((_, i) => (
        <MenuItem key={i + 1} value={i + 1}>
          {i + 1}
        </MenuItem>
      ))}
    </Select>
  );
};
