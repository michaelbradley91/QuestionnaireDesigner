import * as React from "react";
import { World } from "./world";

export interface HelloProps { compiler: string; framework: string; }

export const Hello = (props: HelloProps) =>
 <h1>Hello from {props.compiler} and {props.framework}!<World/></h1>;