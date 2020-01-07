import React from "react";
import { withKnobs, select, boolean } from "@storybook/addon-knobs";

import { Avatar } from "./Avatar";

export default {
  title: "Design System|Avatar",

  parameters: {
    component: Avatar
  }
};

export const standard = () => (
  <Avatar
    size="large"
    username="Dileep S Arjun"
    src="https://avatars1.githubusercontent.com/u/5743582"
  />
);

export const sizes = () => (
  <div>
    <Avatar
      size="large"
      username="Dileep S Arjun"
      src="https://avatars1.githubusercontent.com/u/5743582"
    />
    <Avatar
      size="medium"
      username="Dileep S Arjun"
      src="https://avatars1.githubusercontent.com/u/5743582"
    />
    <Avatar
      size="small"
      username="Dileep S Arjun"
      src="https://avatars1.githubusercontent.com/u/5743582"
    />
    <Avatar
      size="tiny"
      username="Dileep S Arjun"
      src="https://avatars1.githubusercontent.com/u/5743582"
    />
  </div>
);

export const initials = () => (
  <div>
    <Avatar username="Dileep S Arjun" />
    <Avatar username="Dominic Nguyen" />
    <Avatar username="Kyle Suss" />
    <Avatar username="Michael Shilman" />
  </div>
);

export const loading = () => (
  <div>
    <Avatar size="large" loading />
    <Avatar size="medium" loading />
    <Avatar size="small" loading />
    <Avatar size="tiny" loading />
  </div>
);

export const large = () => (
  <div>
    <Avatar loading size="large" />
    <Avatar size="large" username="Dileep S Arjun" />
    <Avatar
      size="large"
      username="Dileep S Arjun"
      src="https://avatars1.githubusercontent.com/u/5743582"
    />
  </div>
);

export const knobs = () => (
  <Avatar
    loading={boolean("Loading")}
    size={select("Size", ["tiny", "small", "medium", "large"])}
    username="DSA"
    src="https://avatars1.githubusercontent.com/u/5743582"
  />
);

knobs.story = {
  decorators: [withKnobs]
};
