'use client';

import { Config, Puck } from '@measured/puck';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import '@measured/puck/puck.css';

const config: Config = {
  components: {
    HeadingBlock: {
      fields: {
        children: {
          type: 'text',
        },
      },
      render: ({ children }) => {
        return <h1>{children}</h1>;
      },
    },
  },
};

// Describe the initial data
const initialData = {};

// Save the data to your database
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const save = (data: any) => {
  console.log('🚀 ~ save ~ data:', data);
};

export default function EditorPage() {
  return <Puck config={config} data={initialData} onPublish={save} />;
}
