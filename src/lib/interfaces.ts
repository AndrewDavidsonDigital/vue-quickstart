import type { Component } from "vue";

export interface IRoute {
  path: string;
  name: string;
  title?: string,
  component: Component;
}
