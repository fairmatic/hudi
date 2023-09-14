"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[59089],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),h=o,g=c["".concat(s,".").concat(h)]||c[h]||p[h]||a;return n?i.createElement(g,r(r({ref:t},u),{},{components:n})):i.createElement(g,r({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,r[1]=l;for(var d=2;d<a;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},46846:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=n(87462),o=(n(67294),n(3905));const a={title:"Google BigQuery",keywords:["hudi","gcp","bigquery"],summary:"Introduce BigQuery integration in Hudi."},r=void 0,l={unversionedId:"gcp_bigquery",id:"gcp_bigquery",title:"Google BigQuery",description:"Hudi tables can be queried from Google Cloud BigQuery as external tables. As of",source:"@site/docs/gcp_bigquery.md",sourceDirName:".",slug:"/gcp_bigquery",permalink:"/docs/next/gcp_bigquery",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/docs/gcp_bigquery.md",tags:[],version:"current",frontMatter:{title:"Google BigQuery",keywords:["hudi","gcp","bigquery"],summary:"Introduce BigQuery integration in Hudi."},sidebar:"docs",previous:{title:"Hive Metastore",permalink:"/docs/next/syncing_metastore"},next:{title:"Bootstrapping",permalink:"/docs/next/migration_guide"}},s=[{value:"Sync Modes",id:"sync-modes",children:[{value:"Manifest File",id:"manifest-file",children:[{value:"Benefits of using the new manifest approach:",id:"benefits-of-using-the-new-manifest-approach",children:[],level:4}],level:3},{value:"View Over Files (Legacy)",id:"view-over-files-legacy",children:[],level:3}],level:2},{value:"Configurations",id:"configurations",children:[{value:"Partition Handling",id:"partition-handling",children:[],level:3}],level:2},{value:"Example",id:"example",children:[],level:2}],d={toc:s},u="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Hudi tables can be queried from ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery"},"Google Cloud BigQuery")," as external tables. As of\nnow, the Hudi-BigQuery integration only works for hive-style partitioned Copy-On-Write and Read-Optimized Merge-On-Read tables."),(0,o.kt)("h2",{id:"sync-modes"},"Sync Modes"),(0,o.kt)("h3",{id:"manifest-file"},"Manifest File"),(0,o.kt)("p",null,"As of version 0.14.0, the ",(0,o.kt)("inlineCode",{parentName:"p"},"BigQuerySyncTool")," supports syncing table to BigQuery using ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/blog/products/data-analytics/bigquery-manifest-file-support-for-open-table-format-queries"},"manifests"),". On the first run, the tool will create a manifest file representing the current base files in the table and a table in BigQuery based on the provided configurations. The tool produces a new manifest file on each subsequent run and will update the schema of the table in BigQuery if the schema changes in your Hudi table."),(0,o.kt)("h4",{id:"benefits-of-using-the-new-manifest-approach"},"Benefits of using the new manifest approach:"),(0,o.kt)("ol",null,(0,o.kt)("li",null,"Only the files in the manifest can be scanned leading to less cost and better performance for your queries"),(0,o.kt)("li",null,"The schema is now synced from the Hudi commit metadata allowing for proper schema evolution"),(0,o.kt)("li",null,"Lists no longer have unnecessary nesting when querying in BigQuery as list inference is enabled by default"),(0,o.kt)("li",null,"Partition column no longer needs to be dropped from the files due to new schema handling improvements")),(0,o.kt)("p",null,"To enable this feature, set ",(0,o.kt)("inlineCode",{parentName:"p"},"hoodie.gcp.bigquery.sync.use_bq_manifest_file")," to true."),(0,o.kt)("h3",{id:"view-over-files-legacy"},"View Over Files (Legacy)"),(0,o.kt)("p",null,"This is the current default behavior to preserve compatibility as users upgrade to 0.14.0 and beyond.",(0,o.kt)("br",{parentName:"p"}),"\n","After run, the sync tool will create 2 tables and 1 view in the target dataset in BigQuery. The tables and the view\nshare the same name prefix, which is taken from the Hudi table name. Query the view for the same results as querying the\nCopy-on-Write Hudi table.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"NOTE:")," The view can scan all of the parquet files under your table's base path so it is recommended to upgrade to the manifest based approach for improved cost and performance."),(0,o.kt)("h2",{id:"configurations"},"Configurations"),(0,o.kt)("p",null,"Hudi uses ",(0,o.kt)("inlineCode",{parentName:"p"},"org.apache.hudi.gcp.bigquery.BigQuerySyncTool")," to sync tables. It works with ",(0,o.kt)("inlineCode",{parentName:"p"},"HoodieStreamer")," via\nsetting sync tool class. A few BigQuery-specific configurations are required."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Config"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"hoodie.gcp.bigquery.sync.project_id")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The target Google Cloud project")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"hoodie.gcp.bigquery.sync.dataset_name")),(0,o.kt)("td",{parentName:"tr",align:"left"},"BigQuery dataset name; create before running the sync tool")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"hoodie.gcp.bigquery.sync.dataset_location")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Region info of the dataset; same as the GCS bucket that stores the Hudi table")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"hoodie.gcp.bigquery.sync.source_uri")),(0,o.kt)("td",{parentName:"tr",align:"left"},"A wildcard path pattern pointing to the first level partition; partition key can be specified or auto-inferred. Only required for partitioned tables")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"hoodie.gcp.bigquery.sync.source_uri_prefix")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The common prefix of the ",(0,o.kt)("inlineCode",{parentName:"td"},"source_uri"),", usually it's the path to the Hudi table, trailing slash does not matter.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"hoodie.gcp.bigquery.sync.base_path")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The usual basepath config for Hudi table.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"hoodie.gcp.bigquery.sync.use_bq_manifest_file")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Set to true to enable the manifest based sync")))),(0,o.kt)("p",null,"Refer to ",(0,o.kt)("inlineCode",{parentName:"p"},"org.apache.hudi.gcp.bigquery.BigQuerySyncConfig")," for the complete configuration list."),(0,o.kt)("h3",{id:"partition-handling"},"Partition Handling"),(0,o.kt)("p",null,"In addition to the BigQuery-specific configs, you will need to use hive style partitioning for partition pruning in BigQuery. On top of that, the value in partition path will be the value returned for that field in your query. For example if you partition on a time-millis field, ",(0,o.kt)("inlineCode",{parentName:"p"},"time"),", with an output format of ",(0,o.kt)("inlineCode",{parentName:"p"},"time=yyyy-MM-dd"),", the query will return ",(0,o.kt)("inlineCode",{parentName:"p"},"time")," values with day level granularity instead of the original milliseconds so keep this in mind while setting up your tables."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"hoodie.datasource.write.hive_style_partitioning = 'true'\n")),(0,o.kt)("p",null,"For the view based sync you must also specify the following configurations:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"hoodie.datasource.write.drop.partition.columns  = 'true'\nhoodie.partition.metafile.use.base.format       = 'true'\n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Below shows an example for running ",(0,o.kt)("inlineCode",{parentName:"p"},"BigQuerySyncTool")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"HoodieStreamer"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"spark-submit --master yarn \\\n--packages com.google.cloud:google-cloud-bigquery:2.10.4 \\\n--jars /opt/hudi-gcp-bundle-0.13.0.jar \\\n--class org.apache.hudi.utilities.streamer.HoodieStreamer \\\n/opt/hudi-utilities-bundle_2.12-0.13.0.jar \\\n--target-base-path gs://my-hoodie-table/path \\\n--target-table mytable \\\n--table-type COPY_ON_WRITE \\\n--base-file-format PARQUET \\\n# ... other Hudi Streamer options\n--enable-sync \\\n--sync-tool-classes org.apache.hudi.gcp.bigquery.BigQuerySyncTool \\\n--hoodie-conf hoodie.streamer.source.dfs.root=gs://my-source-data/path \\\n--hoodie-conf hoodie.gcp.bigquery.sync.project_id=hudi-bq \\\n--hoodie-conf hoodie.gcp.bigquery.sync.dataset_name=rxusandbox \\\n--hoodie-conf hoodie.gcp.bigquery.sync.dataset_location=asia-southeast1 \\\n--hoodie-conf hoodie.gcp.bigquery.sync.table_name=mytable \\\n--hoodie-conf hoodie.gcp.bigquery.sync.base_path=gs://rxusandbox/testcases/stocks/data/target/${NOW} \\\n--hoodie-conf hoodie.gcp.bigquery.sync.partition_fields=year,month,day \\\n--hoodie-conf hoodie.gcp.bigquery.sync.source_uri=gs://my-hoodie-table/path/year=* \\\n--hoodie-conf hoodie.gcp.bigquery.sync.source_uri_prefix=gs://my-hoodie-table/path/ \\\n--hoodie-conf hoodie.gcp.bigquery.sync.use_file_listing_from_metadata=true \\\n--hoodie-conf hoodie.gcp.bigquery.sync.assume_date_partitioning=false \\\n--hoodie-conf hoodie.datasource.hive_sync.mode=jdbc \\\n--hoodie-conf hoodie.datasource.hive_sync.jdbcurl=jdbc:hive2://localhost:10000 \\\n--hoodie-conf hoodie.datasource.hive_sync.skip_ro_suffix=true \\\n--hoodie-conf hoodie.datasource.hive_sync.ignore_exceptions=false \\\n--hoodie-conf hoodie.datasource.hive_sync.database=mydataset \\\n--hoodie-conf hoodie.datasource.hive_sync.table=mytable \\\n--hoodie-conf hoodie.datasource.write.recordkey.field=mykey \\\n--hoodie-conf hoodie.datasource.write.partitionpath.field=year,month,day \\\n--hoodie-conf hoodie.datasource.write.precombine.field=ts \\\n--hoodie-conf hoodie.datasource.write.keygenerator.type=COMPLEX \\\n--hoodie-conf hoodie.datasource.write.hive_style_partitioning=true \\\n--hoodie-conf hoodie.datasource.write.drop.partition.columns=true \\\n--hoodie-conf hoodie.partition.metafile.use.base.format=true \\\n--hoodie-conf hoodie.metadata.enable=true \\\n")))}c.isMDXComponent=!0}}]);