// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7YxWRrh3dN23tQ7PqjX2hp
// Component: nREGSf5d9U6b

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { DataFetcher } from "@plasmicpkgs/plasmic-query";
import { SideEffect } from "@plasmicpkgs/plasmic-basic-components";
import CategoryItem2 from "../../CategoryItem2"; // plasmic-import: K8RW5DNl8CRn/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 7YxWRrh3dN23tQ7PqjX2hp/projectcss
import sty from "./PlasmicCategoryMenu.module.css"; // plasmic-import: nREGSf5d9U6b/css

createPlasmicElementProxy;

export type PlasmicCategoryMenu__VariantMembers = {};
export type PlasmicCategoryMenu__VariantsArgs = {};
type VariantPropType = keyof PlasmicCategoryMenu__VariantsArgs;
export const PlasmicCategoryMenu__VariantProps = new Array<VariantPropType>();

export type PlasmicCategoryMenu__ArgsType = {
  selectedItem?: any;
  onSelectedItemChange?: (val: string) => void;
  url?: string;
  selectedSubcategory?: any;
  onSelectedSubcategoryChange?: (val: string) => void;
  selectedEvent?: any;
  onSelectedEventChange?: (val: string) => void;
  eventUrl?: string;
};
type ArgPropType = keyof PlasmicCategoryMenu__ArgsType;
export const PlasmicCategoryMenu__ArgProps = new Array<ArgPropType>(
  "selectedItem",
  "onSelectedItemChange",
  "url",
  "selectedSubcategory",
  "onSelectedSubcategoryChange",
  "selectedEvent",
  "onSelectedEventChange",
  "eventUrl"
);

export type PlasmicCategoryMenu__OverridesType = {
  root?: Flex__<"div">;
  httpRestApiFetcher?: Flex__<typeof DataFetcher>;
  sideEffect?: Flex__<typeof SideEffect>;
  link?: Flex__<"a"> & Partial<LinkProps>;
  categoryItem2?: Flex__<typeof CategoryItem2>;
};

export interface DefaultCategoryMenuProps {
  selectedItem?: any;
  onSelectedItemChange?: (val: string) => void;
  url?: string;
  selectedSubcategory?: any;
  onSelectedSubcategoryChange?: (val: string) => void;
  selectedEvent?: any;
  onSelectedEventChange?: (val: string) => void;
  eventUrl?: string;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCategoryMenu__RenderFunc(props: {
  variants: PlasmicCategoryMenu__VariantsArgs;
  args: PlasmicCategoryMenu__ArgsType;
  overrides: PlasmicCategoryMenu__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "selectedItem",
        type: "writable",
        variableType: "object",

        valueProp: "selectedItem",
        onChangeProp: "onSelectedItemChange"
      },
      {
        path: "selectedSubcategory",
        type: "writable",
        variableType: "object",

        valueProp: "selectedSubcategory",
        onChangeProp: "onSelectedSubcategoryChange"
      },
      {
        path: "selectedEvent",
        type: "writable",
        variableType: "object",

        valueProp: "selectedEvent",
        onChangeProp: "onSelectedEventChange"
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root
      )}
    >
      <DataFetcher
        data-plasmic-name={"httpRestApiFetcher"}
        data-plasmic-override={overrides.httpRestApiFetcher}
        className={classNames("__wab_instance", sty.httpRestApiFetcher)}
        dataName={"categoryCall"}
        errorDisplay={null}
        errorName={"catCallError"}
        headers={{
          "Content-Type": "application/json",
          apikey:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJucmZkeHRzZHZteGhqc29xb2lkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE4MjQyNTcsImV4cCI6MjAzNzQwMDI1N30.N-1_fY2KLrl9sxmeM8z3bRc-b0ksQ0C4IWQpugCs65I"
        }}
        loadingDisplay={null}
        method={"GET"}
        noLayout={true}
        queryKey={"category"}
        url={"https://rnrfdxtsdvmxhjsoqoid.supabase.co/rest/v1/category"}
      >
        <DataCtxReader__>
          {$ctx => (
            <SideEffect
              data-plasmic-name={"sideEffect"}
              data-plasmic-override={overrides.sideEffect}
              className={classNames("__wab_instance", sty.sideEffect)}
              onMount={async () => {
                const $steps = {};

                $steps["runCode"] = true
                  ? (() => {
                      const actionArgs = {
                        customFunction: async () => {
                          return (() => {
                            return (async () => {
                              try {
                                const cacheExpiration = 24 * 60 * 60 * 1000;
                                const currentTime = new Date().getTime();
                                const cachedData = JSON.parse(
                                  localStorage.getItem("queryCache")
                                );
                                const cacheTimestamp =
                                  localStorage.getItem("cacheTimestamp");
                                const isCacheExpired =
                                  !cacheTimestamp ||
                                  currentTime - cacheTimestamp >
                                    cacheExpiration;
                                const isCacheEmpty =
                                  !cachedData ||
                                  !cachedData.category ||
                                  cachedData.category.length === 0;
                                if (isCacheExpired || isCacheEmpty) {
                                  const categoryData = $ctx.categoryCall;
                                  if (categoryData) {
                                    const sortedCategoryData =
                                      categoryData.sort((a, b) =>
                                        a.id > b.id ? 1 : -1
                                      );
                                    const queryCacheData = {
                                      category: sortedCategoryData
                                    };
                                    localStorage.setItem(
                                      "queryCache",
                                      JSON.stringify(queryCacheData)
                                    );
                                    localStorage.setItem(
                                      "cacheTimestamp",
                                      currentTime.toString()
                                    );
                                  }
                                }
                              } catch (error) {
                                console.error("Error:", error);
                              }
                            })();
                          })();
                        }
                      };
                      return (({ customFunction }) => {
                        return customFunction();
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["runCode"] != null &&
                  typeof $steps["runCode"] === "object" &&
                  typeof $steps["runCode"].then === "function"
                ) {
                  $steps["runCode"] = await $steps["runCode"];
                }
              }}
            />
          )}
        </DataCtxReader__>
      </DataFetcher>
      {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
        (() => {
          try {
            return [
              "Sport a volný čas",
              "Kultura a akce",
              "Pro děti",
              "Služby a vzdělávání",
              "Relax a zdraví",
              "Městské aktivity"
            ];
          } catch (e) {
            if (
              e instanceof TypeError ||
              e?.plasmicType === "PlasmicUndefinedDataError"
            ) {
              return [];
            }
            throw e;
          }
        })()
      ).map((__plasmic_item_0, __plasmic_idx_0) => {
        const currentItem = __plasmic_item_0;
        const currentIndex = __plasmic_idx_0;
        return (
          <PlasmicLink__
            data-plasmic-name={"link"}
            data-plasmic-override={overrides.link}
            className={classNames(projectcss.all, projectcss.a, sty.link)}
            component={Link}
            key={currentIndex}
            onClick={async event => {
              const $steps = {};

              $steps["updateSelectedItem"] = true
                ? (() => {
                    const actionArgs = {
                      variable: {
                        objRoot: $state,
                        variablePath: ["selectedItem"]
                      },
                      operation: 0,
                      value: JSON.parse(
                        localStorage.getItem("queryCache")
                      ).category.find(item => item.name === currentItem)
                    };
                    return (({ variable, value, startIndex, deleteCount }) => {
                      if (!variable) {
                        return;
                      }
                      const { objRoot, variablePath } = variable;

                      $stateSet(objRoot, variablePath, value);
                      return value;
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["updateSelectedItem"] != null &&
                typeof $steps["updateSelectedItem"] === "object" &&
                typeof $steps["updateSelectedItem"].then === "function"
              ) {
                $steps["updateSelectedItem"] = await $steps[
                  "updateSelectedItem"
                ];
              }

              $steps["goToCategory"] = true
                ? (() => {
                    const actionArgs = {
                      destination: `/${(() => {
                        try {
                          return JSON.parse(
                            localStorage.getItem("queryCache")
                          ).category.find(item => item.name === currentItem)
                            .webURL;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return undefined;
                          }
                          throw e;
                        }
                      })()}`
                    };
                    return (({ destination }) => {
                      if (
                        typeof destination === "string" &&
                        destination.startsWith("#")
                      ) {
                        document
                          .getElementById(destination.substr(1))
                          .scrollIntoView({ behavior: "smooth" });
                      } else {
                        __nextRouter?.push(destination);
                      }
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["goToCategory"] != null &&
                typeof $steps["goToCategory"] === "object" &&
                typeof $steps["goToCategory"].then === "function"
              ) {
                $steps["goToCategory"] = await $steps["goToCategory"];
              }
            }}
            platform={"nextjs"}
          >
            <CategoryItem2
              data-plasmic-name={"categoryItem2"}
              data-plasmic-override={overrides.categoryItem2}
              className={classNames("__wab_instance", sty.categoryItem2)}
              color={(() => {
                try {
                  return JSON.parse(
                    localStorage.getItem("queryCache")
                  ).category.find(item => item.name === currentItem).color;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "#222222";
                  }
                  throw e;
                }
              })()}
              isSelected={(() => {
                try {
                  return $state.selectedItem.name === currentItem;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return false;
                  }
                  throw e;
                }
              })()}
              name={(() => {
                try {
                  return currentItem;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return undefined;
                  }
                  throw e;
                }
              })()}
            />
          </PlasmicLink__>
        );
      })}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "httpRestApiFetcher", "sideEffect", "link", "categoryItem2"],
  httpRestApiFetcher: ["httpRestApiFetcher", "sideEffect"],
  sideEffect: ["sideEffect"],
  link: ["link", "categoryItem2"],
  categoryItem2: ["categoryItem2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  httpRestApiFetcher: typeof DataFetcher;
  sideEffect: typeof SideEffect;
  link: "a";
  categoryItem2: typeof CategoryItem2;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCategoryMenu__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCategoryMenu__VariantsArgs;
    args?: PlasmicCategoryMenu__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCategoryMenu__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCategoryMenu__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicCategoryMenu__ArgProps,
          internalVariantPropNames: PlasmicCategoryMenu__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCategoryMenu__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCategoryMenu";
  } else {
    func.displayName = `PlasmicCategoryMenu.${nodeName}`;
  }
  return func;
}

export const PlasmicCategoryMenu = Object.assign(
  // Top-level PlasmicCategoryMenu renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    httpRestApiFetcher: makeNodeComponent("httpRestApiFetcher"),
    sideEffect: makeNodeComponent("sideEffect"),
    link: makeNodeComponent("link"),
    categoryItem2: makeNodeComponent("categoryItem2"),

    // Metadata about props expected for PlasmicCategoryMenu
    internalVariantProps: PlasmicCategoryMenu__VariantProps,
    internalArgProps: PlasmicCategoryMenu__ArgProps
  }
);

export default PlasmicCategoryMenu;
/* prettier-ignore-end */