import * as React from 'react';
import { PlasmicCanvasHost, registerComponent } from '@plasmicapp/react-web/lib/host';

import Login from '../components/Login';


registerComponent(Login, {
  name: 'Login',  // Name of the component as it appears in Plasmic Studio
  props: {
    email: 'string',
    password: 'string',
  },
  importPath: './components/Login',
});


export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}
