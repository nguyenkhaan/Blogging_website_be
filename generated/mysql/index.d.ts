
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Blogs
 * 
 */
export type Blogs = $Result.DefaultSelection<Prisma.$BlogsPayload>
/**
 * Model TopBlogs
 * 
 */
export type TopBlogs = $Result.DefaultSelection<Prisma.$TopBlogsPayload>
/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Blogs
 * const blogs = await prisma.blogs.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Blogs
   * const blogs = await prisma.blogs.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.blogs`: Exposes CRUD operations for the **Blogs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blogs
    * const blogs = await prisma.blogs.findMany()
    * ```
    */
  get blogs(): Prisma.BlogsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.topBlogs`: Exposes CRUD operations for the **TopBlogs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TopBlogs
    * const topBlogs = await prisma.topBlogs.findMany()
    * ```
    */
  get topBlogs(): Prisma.TopBlogsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Blogs: 'Blogs',
    TopBlogs: 'TopBlogs',
    Users: 'Users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "blogs" | "topBlogs" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Blogs: {
        payload: Prisma.$BlogsPayload<ExtArgs>
        fields: Prisma.BlogsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogsPayload>
          }
          findFirst: {
            args: Prisma.BlogsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogsPayload>
          }
          findMany: {
            args: Prisma.BlogsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogsPayload>[]
          }
          create: {
            args: Prisma.BlogsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogsPayload>
          }
          createMany: {
            args: Prisma.BlogsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BlogsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogsPayload>
          }
          update: {
            args: Prisma.BlogsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogsPayload>
          }
          deleteMany: {
            args: Prisma.BlogsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BlogsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogsPayload>
          }
          aggregate: {
            args: Prisma.BlogsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogs>
          }
          groupBy: {
            args: Prisma.BlogsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogsGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogsCountArgs<ExtArgs>
            result: $Utils.Optional<BlogsCountAggregateOutputType> | number
          }
        }
      }
      TopBlogs: {
        payload: Prisma.$TopBlogsPayload<ExtArgs>
        fields: Prisma.TopBlogsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TopBlogsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopBlogsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TopBlogsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopBlogsPayload>
          }
          findFirst: {
            args: Prisma.TopBlogsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopBlogsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TopBlogsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopBlogsPayload>
          }
          findMany: {
            args: Prisma.TopBlogsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopBlogsPayload>[]
          }
          create: {
            args: Prisma.TopBlogsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopBlogsPayload>
          }
          createMany: {
            args: Prisma.TopBlogsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TopBlogsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopBlogsPayload>
          }
          update: {
            args: Prisma.TopBlogsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopBlogsPayload>
          }
          deleteMany: {
            args: Prisma.TopBlogsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TopBlogsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TopBlogsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopBlogsPayload>
          }
          aggregate: {
            args: Prisma.TopBlogsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTopBlogs>
          }
          groupBy: {
            args: Prisma.TopBlogsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TopBlogsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TopBlogsCountArgs<ExtArgs>
            result: $Utils.Optional<TopBlogsCountAggregateOutputType> | number
          }
        }
      }
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    blogs?: BlogsOmit
    topBlogs?: TopBlogsOmit
    users?: UsersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    Blogs: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Blogs?: boolean | UsersCountOutputTypeCountBlogsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountBlogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Blogs
   */

  export type AggregateBlogs = {
    _count: BlogsCountAggregateOutputType | null
    _avg: BlogsAvgAggregateOutputType | null
    _sum: BlogsSumAggregateOutputType | null
    _min: BlogsMinAggregateOutputType | null
    _max: BlogsMaxAggregateOutputType | null
  }

  export type BlogsAvgAggregateOutputType = {
    score: number | null
    views: number | null
    watchs: number | null
  }

  export type BlogsSumAggregateOutputType = {
    score: number | null
    views: number | null
    watchs: number | null
  }

  export type BlogsMinAggregateOutputType = {
    blogID: string | null
    title: string | null
    banner: string | null
    content: string | null
    score: number | null
    views: number | null
    userID: string | null
    createdAt: Date | null
    watchs: number | null
    updatedAt: Date | null
  }

  export type BlogsMaxAggregateOutputType = {
    blogID: string | null
    title: string | null
    banner: string | null
    content: string | null
    score: number | null
    views: number | null
    userID: string | null
    createdAt: Date | null
    watchs: number | null
    updatedAt: Date | null
  }

  export type BlogsCountAggregateOutputType = {
    blogID: number
    title: number
    banner: number
    content: number
    score: number
    views: number
    userID: number
    createdAt: number
    watchs: number
    updatedAt: number
    _all: number
  }


  export type BlogsAvgAggregateInputType = {
    score?: true
    views?: true
    watchs?: true
  }

  export type BlogsSumAggregateInputType = {
    score?: true
    views?: true
    watchs?: true
  }

  export type BlogsMinAggregateInputType = {
    blogID?: true
    title?: true
    banner?: true
    content?: true
    score?: true
    views?: true
    userID?: true
    createdAt?: true
    watchs?: true
    updatedAt?: true
  }

  export type BlogsMaxAggregateInputType = {
    blogID?: true
    title?: true
    banner?: true
    content?: true
    score?: true
    views?: true
    userID?: true
    createdAt?: true
    watchs?: true
    updatedAt?: true
  }

  export type BlogsCountAggregateInputType = {
    blogID?: true
    title?: true
    banner?: true
    content?: true
    score?: true
    views?: true
    userID?: true
    createdAt?: true
    watchs?: true
    updatedAt?: true
    _all?: true
  }

  export type BlogsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blogs to aggregate.
     */
    where?: BlogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogsOrderByWithRelationInput | BlogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Blogs
    **/
    _count?: true | BlogsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlogsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlogsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogsMaxAggregateInputType
  }

  export type GetBlogsAggregateType<T extends BlogsAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogs[P]>
      : GetScalarType<T[P], AggregateBlogs[P]>
  }




  export type BlogsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogsWhereInput
    orderBy?: BlogsOrderByWithAggregationInput | BlogsOrderByWithAggregationInput[]
    by: BlogsScalarFieldEnum[] | BlogsScalarFieldEnum
    having?: BlogsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogsCountAggregateInputType | true
    _avg?: BlogsAvgAggregateInputType
    _sum?: BlogsSumAggregateInputType
    _min?: BlogsMinAggregateInputType
    _max?: BlogsMaxAggregateInputType
  }

  export type BlogsGroupByOutputType = {
    blogID: string
    title: string
    banner: string | null
    content: string
    score: number
    views: number
    userID: string
    createdAt: Date
    watchs: number
    updatedAt: Date
    _count: BlogsCountAggregateOutputType | null
    _avg: BlogsAvgAggregateOutputType | null
    _sum: BlogsSumAggregateOutputType | null
    _min: BlogsMinAggregateOutputType | null
    _max: BlogsMaxAggregateOutputType | null
  }

  type GetBlogsGroupByPayload<T extends BlogsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogsGroupByOutputType[P]>
            : GetScalarType<T[P], BlogsGroupByOutputType[P]>
        }
      >
    >


  export type BlogsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    blogID?: boolean
    title?: boolean
    banner?: boolean
    content?: boolean
    score?: boolean
    views?: boolean
    userID?: boolean
    createdAt?: boolean
    watchs?: boolean
    updatedAt?: boolean
    author?: boolean | UsersDefaultArgs<ExtArgs>
    TopBlogs?: boolean | Blogs$TopBlogsArgs<ExtArgs>
  }, ExtArgs["result"]["blogs"]>



  export type BlogsSelectScalar = {
    blogID?: boolean
    title?: boolean
    banner?: boolean
    content?: boolean
    score?: boolean
    views?: boolean
    userID?: boolean
    createdAt?: boolean
    watchs?: boolean
    updatedAt?: boolean
  }

  export type BlogsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"blogID" | "title" | "banner" | "content" | "score" | "views" | "userID" | "createdAt" | "watchs" | "updatedAt", ExtArgs["result"]["blogs"]>
  export type BlogsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UsersDefaultArgs<ExtArgs>
    TopBlogs?: boolean | Blogs$TopBlogsArgs<ExtArgs>
  }

  export type $BlogsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Blogs"
    objects: {
      author: Prisma.$UsersPayload<ExtArgs>
      TopBlogs: Prisma.$TopBlogsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      blogID: string
      title: string
      banner: string | null
      content: string
      score: number
      views: number
      userID: string
      createdAt: Date
      watchs: number
      updatedAt: Date
    }, ExtArgs["result"]["blogs"]>
    composites: {}
  }

  type BlogsGetPayload<S extends boolean | null | undefined | BlogsDefaultArgs> = $Result.GetResult<Prisma.$BlogsPayload, S>

  type BlogsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogsCountAggregateInputType | true
    }

  export interface BlogsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Blogs'], meta: { name: 'Blogs' } }
    /**
     * Find zero or one Blogs that matches the filter.
     * @param {BlogsFindUniqueArgs} args - Arguments to find a Blogs
     * @example
     * // Get one Blogs
     * const blogs = await prisma.blogs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogsFindUniqueArgs>(args: SelectSubset<T, BlogsFindUniqueArgs<ExtArgs>>): Prisma__BlogsClient<$Result.GetResult<Prisma.$BlogsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Blogs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogsFindUniqueOrThrowArgs} args - Arguments to find a Blogs
     * @example
     * // Get one Blogs
     * const blogs = await prisma.blogs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogsFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogsClient<$Result.GetResult<Prisma.$BlogsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogsFindFirstArgs} args - Arguments to find a Blogs
     * @example
     * // Get one Blogs
     * const blogs = await prisma.blogs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogsFindFirstArgs>(args?: SelectSubset<T, BlogsFindFirstArgs<ExtArgs>>): Prisma__BlogsClient<$Result.GetResult<Prisma.$BlogsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blogs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogsFindFirstOrThrowArgs} args - Arguments to find a Blogs
     * @example
     * // Get one Blogs
     * const blogs = await prisma.blogs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogsFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogsFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogsClient<$Result.GetResult<Prisma.$BlogsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Blogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blogs
     * const blogs = await prisma.blogs.findMany()
     * 
     * // Get first 10 Blogs
     * const blogs = await prisma.blogs.findMany({ take: 10 })
     * 
     * // Only select the `blogID`
     * const blogsWithBlogIDOnly = await prisma.blogs.findMany({ select: { blogID: true } })
     * 
     */
    findMany<T extends BlogsFindManyArgs>(args?: SelectSubset<T, BlogsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Blogs.
     * @param {BlogsCreateArgs} args - Arguments to create a Blogs.
     * @example
     * // Create one Blogs
     * const Blogs = await prisma.blogs.create({
     *   data: {
     *     // ... data to create a Blogs
     *   }
     * })
     * 
     */
    create<T extends BlogsCreateArgs>(args: SelectSubset<T, BlogsCreateArgs<ExtArgs>>): Prisma__BlogsClient<$Result.GetResult<Prisma.$BlogsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Blogs.
     * @param {BlogsCreateManyArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blogs = await prisma.blogs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogsCreateManyArgs>(args?: SelectSubset<T, BlogsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Blogs.
     * @param {BlogsDeleteArgs} args - Arguments to delete one Blogs.
     * @example
     * // Delete one Blogs
     * const Blogs = await prisma.blogs.delete({
     *   where: {
     *     // ... filter to delete one Blogs
     *   }
     * })
     * 
     */
    delete<T extends BlogsDeleteArgs>(args: SelectSubset<T, BlogsDeleteArgs<ExtArgs>>): Prisma__BlogsClient<$Result.GetResult<Prisma.$BlogsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Blogs.
     * @param {BlogsUpdateArgs} args - Arguments to update one Blogs.
     * @example
     * // Update one Blogs
     * const blogs = await prisma.blogs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogsUpdateArgs>(args: SelectSubset<T, BlogsUpdateArgs<ExtArgs>>): Prisma__BlogsClient<$Result.GetResult<Prisma.$BlogsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Blogs.
     * @param {BlogsDeleteManyArgs} args - Arguments to filter Blogs to delete.
     * @example
     * // Delete a few Blogs
     * const { count } = await prisma.blogs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogsDeleteManyArgs>(args?: SelectSubset<T, BlogsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blogs
     * const blogs = await prisma.blogs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogsUpdateManyArgs>(args: SelectSubset<T, BlogsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Blogs.
     * @param {BlogsUpsertArgs} args - Arguments to update or create a Blogs.
     * @example
     * // Update or create a Blogs
     * const blogs = await prisma.blogs.upsert({
     *   create: {
     *     // ... data to create a Blogs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blogs we want to update
     *   }
     * })
     */
    upsert<T extends BlogsUpsertArgs>(args: SelectSubset<T, BlogsUpsertArgs<ExtArgs>>): Prisma__BlogsClient<$Result.GetResult<Prisma.$BlogsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogsCountArgs} args - Arguments to filter Blogs to count.
     * @example
     * // Count the number of Blogs
     * const count = await prisma.blogs.count({
     *   where: {
     *     // ... the filter for the Blogs we want to count
     *   }
     * })
    **/
    count<T extends BlogsCountArgs>(
      args?: Subset<T, BlogsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogsAggregateArgs>(args: Subset<T, BlogsAggregateArgs>): Prisma.PrismaPromise<GetBlogsAggregateType<T>>

    /**
     * Group by Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlogsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogsGroupByArgs['orderBy'] }
        : { orderBy?: BlogsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlogsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Blogs model
   */
  readonly fields: BlogsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Blogs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    TopBlogs<T extends Blogs$TopBlogsArgs<ExtArgs> = {}>(args?: Subset<T, Blogs$TopBlogsArgs<ExtArgs>>): Prisma__TopBlogsClient<$Result.GetResult<Prisma.$TopBlogsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Blogs model
   */
  interface BlogsFieldRefs {
    readonly blogID: FieldRef<"Blogs", 'String'>
    readonly title: FieldRef<"Blogs", 'String'>
    readonly banner: FieldRef<"Blogs", 'String'>
    readonly content: FieldRef<"Blogs", 'String'>
    readonly score: FieldRef<"Blogs", 'Int'>
    readonly views: FieldRef<"Blogs", 'Int'>
    readonly userID: FieldRef<"Blogs", 'String'>
    readonly createdAt: FieldRef<"Blogs", 'DateTime'>
    readonly watchs: FieldRef<"Blogs", 'Int'>
    readonly updatedAt: FieldRef<"Blogs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Blogs findUnique
   */
  export type BlogsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogs
     */
    select?: BlogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blogs
     */
    omit?: BlogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogsInclude<ExtArgs> | null
    /**
     * Filter, which Blogs to fetch.
     */
    where: BlogsWhereUniqueInput
  }

  /**
   * Blogs findUniqueOrThrow
   */
  export type BlogsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogs
     */
    select?: BlogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blogs
     */
    omit?: BlogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogsInclude<ExtArgs> | null
    /**
     * Filter, which Blogs to fetch.
     */
    where: BlogsWhereUniqueInput
  }

  /**
   * Blogs findFirst
   */
  export type BlogsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogs
     */
    select?: BlogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blogs
     */
    omit?: BlogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogsInclude<ExtArgs> | null
    /**
     * Filter, which Blogs to fetch.
     */
    where?: BlogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogsOrderByWithRelationInput | BlogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogsScalarFieldEnum | BlogsScalarFieldEnum[]
  }

  /**
   * Blogs findFirstOrThrow
   */
  export type BlogsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogs
     */
    select?: BlogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blogs
     */
    omit?: BlogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogsInclude<ExtArgs> | null
    /**
     * Filter, which Blogs to fetch.
     */
    where?: BlogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogsOrderByWithRelationInput | BlogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogsScalarFieldEnum | BlogsScalarFieldEnum[]
  }

  /**
   * Blogs findMany
   */
  export type BlogsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogs
     */
    select?: BlogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blogs
     */
    omit?: BlogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogsInclude<ExtArgs> | null
    /**
     * Filter, which Blogs to fetch.
     */
    where?: BlogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogsOrderByWithRelationInput | BlogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Blogs.
     */
    cursor?: BlogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    distinct?: BlogsScalarFieldEnum | BlogsScalarFieldEnum[]
  }

  /**
   * Blogs create
   */
  export type BlogsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogs
     */
    select?: BlogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blogs
     */
    omit?: BlogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogsInclude<ExtArgs> | null
    /**
     * The data needed to create a Blogs.
     */
    data: XOR<BlogsCreateInput, BlogsUncheckedCreateInput>
  }

  /**
   * Blogs createMany
   */
  export type BlogsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Blogs.
     */
    data: BlogsCreateManyInput | BlogsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Blogs update
   */
  export type BlogsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogs
     */
    select?: BlogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blogs
     */
    omit?: BlogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogsInclude<ExtArgs> | null
    /**
     * The data needed to update a Blogs.
     */
    data: XOR<BlogsUpdateInput, BlogsUncheckedUpdateInput>
    /**
     * Choose, which Blogs to update.
     */
    where: BlogsWhereUniqueInput
  }

  /**
   * Blogs updateMany
   */
  export type BlogsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Blogs.
     */
    data: XOR<BlogsUpdateManyMutationInput, BlogsUncheckedUpdateManyInput>
    /**
     * Filter which Blogs to update
     */
    where?: BlogsWhereInput
    /**
     * Limit how many Blogs to update.
     */
    limit?: number
  }

  /**
   * Blogs upsert
   */
  export type BlogsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogs
     */
    select?: BlogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blogs
     */
    omit?: BlogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogsInclude<ExtArgs> | null
    /**
     * The filter to search for the Blogs to update in case it exists.
     */
    where: BlogsWhereUniqueInput
    /**
     * In case the Blogs found by the `where` argument doesn't exist, create a new Blogs with this data.
     */
    create: XOR<BlogsCreateInput, BlogsUncheckedCreateInput>
    /**
     * In case the Blogs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogsUpdateInput, BlogsUncheckedUpdateInput>
  }

  /**
   * Blogs delete
   */
  export type BlogsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogs
     */
    select?: BlogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blogs
     */
    omit?: BlogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogsInclude<ExtArgs> | null
    /**
     * Filter which Blogs to delete.
     */
    where: BlogsWhereUniqueInput
  }

  /**
   * Blogs deleteMany
   */
  export type BlogsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blogs to delete
     */
    where?: BlogsWhereInput
    /**
     * Limit how many Blogs to delete.
     */
    limit?: number
  }

  /**
   * Blogs.TopBlogs
   */
  export type Blogs$TopBlogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopBlogs
     */
    select?: TopBlogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopBlogs
     */
    omit?: TopBlogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopBlogsInclude<ExtArgs> | null
    where?: TopBlogsWhereInput
  }

  /**
   * Blogs without action
   */
  export type BlogsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogs
     */
    select?: BlogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blogs
     */
    omit?: BlogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogsInclude<ExtArgs> | null
  }


  /**
   * Model TopBlogs
   */

  export type AggregateTopBlogs = {
    _count: TopBlogsCountAggregateOutputType | null
    _min: TopBlogsMinAggregateOutputType | null
    _max: TopBlogsMaxAggregateOutputType | null
  }

  export type TopBlogsMinAggregateOutputType = {
    topBlogID: string | null
    blogID: string | null
  }

  export type TopBlogsMaxAggregateOutputType = {
    topBlogID: string | null
    blogID: string | null
  }

  export type TopBlogsCountAggregateOutputType = {
    topBlogID: number
    blogID: number
    _all: number
  }


  export type TopBlogsMinAggregateInputType = {
    topBlogID?: true
    blogID?: true
  }

  export type TopBlogsMaxAggregateInputType = {
    topBlogID?: true
    blogID?: true
  }

  export type TopBlogsCountAggregateInputType = {
    topBlogID?: true
    blogID?: true
    _all?: true
  }

  export type TopBlogsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TopBlogs to aggregate.
     */
    where?: TopBlogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TopBlogs to fetch.
     */
    orderBy?: TopBlogsOrderByWithRelationInput | TopBlogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TopBlogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TopBlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TopBlogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TopBlogs
    **/
    _count?: true | TopBlogsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TopBlogsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TopBlogsMaxAggregateInputType
  }

  export type GetTopBlogsAggregateType<T extends TopBlogsAggregateArgs> = {
        [P in keyof T & keyof AggregateTopBlogs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTopBlogs[P]>
      : GetScalarType<T[P], AggregateTopBlogs[P]>
  }




  export type TopBlogsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TopBlogsWhereInput
    orderBy?: TopBlogsOrderByWithAggregationInput | TopBlogsOrderByWithAggregationInput[]
    by: TopBlogsScalarFieldEnum[] | TopBlogsScalarFieldEnum
    having?: TopBlogsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TopBlogsCountAggregateInputType | true
    _min?: TopBlogsMinAggregateInputType
    _max?: TopBlogsMaxAggregateInputType
  }

  export type TopBlogsGroupByOutputType = {
    topBlogID: string
    blogID: string
    _count: TopBlogsCountAggregateOutputType | null
    _min: TopBlogsMinAggregateOutputType | null
    _max: TopBlogsMaxAggregateOutputType | null
  }

  type GetTopBlogsGroupByPayload<T extends TopBlogsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TopBlogsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TopBlogsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TopBlogsGroupByOutputType[P]>
            : GetScalarType<T[P], TopBlogsGroupByOutputType[P]>
        }
      >
    >


  export type TopBlogsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    topBlogID?: boolean
    blogID?: boolean
    Blogs?: boolean | BlogsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["topBlogs"]>



  export type TopBlogsSelectScalar = {
    topBlogID?: boolean
    blogID?: boolean
  }

  export type TopBlogsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"topBlogID" | "blogID", ExtArgs["result"]["topBlogs"]>
  export type TopBlogsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Blogs?: boolean | BlogsDefaultArgs<ExtArgs>
  }

  export type $TopBlogsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TopBlogs"
    objects: {
      Blogs: Prisma.$BlogsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      topBlogID: string
      blogID: string
    }, ExtArgs["result"]["topBlogs"]>
    composites: {}
  }

  type TopBlogsGetPayload<S extends boolean | null | undefined | TopBlogsDefaultArgs> = $Result.GetResult<Prisma.$TopBlogsPayload, S>

  type TopBlogsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TopBlogsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TopBlogsCountAggregateInputType | true
    }

  export interface TopBlogsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TopBlogs'], meta: { name: 'TopBlogs' } }
    /**
     * Find zero or one TopBlogs that matches the filter.
     * @param {TopBlogsFindUniqueArgs} args - Arguments to find a TopBlogs
     * @example
     * // Get one TopBlogs
     * const topBlogs = await prisma.topBlogs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TopBlogsFindUniqueArgs>(args: SelectSubset<T, TopBlogsFindUniqueArgs<ExtArgs>>): Prisma__TopBlogsClient<$Result.GetResult<Prisma.$TopBlogsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TopBlogs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TopBlogsFindUniqueOrThrowArgs} args - Arguments to find a TopBlogs
     * @example
     * // Get one TopBlogs
     * const topBlogs = await prisma.topBlogs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TopBlogsFindUniqueOrThrowArgs>(args: SelectSubset<T, TopBlogsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TopBlogsClient<$Result.GetResult<Prisma.$TopBlogsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TopBlogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopBlogsFindFirstArgs} args - Arguments to find a TopBlogs
     * @example
     * // Get one TopBlogs
     * const topBlogs = await prisma.topBlogs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TopBlogsFindFirstArgs>(args?: SelectSubset<T, TopBlogsFindFirstArgs<ExtArgs>>): Prisma__TopBlogsClient<$Result.GetResult<Prisma.$TopBlogsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TopBlogs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopBlogsFindFirstOrThrowArgs} args - Arguments to find a TopBlogs
     * @example
     * // Get one TopBlogs
     * const topBlogs = await prisma.topBlogs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TopBlogsFindFirstOrThrowArgs>(args?: SelectSubset<T, TopBlogsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TopBlogsClient<$Result.GetResult<Prisma.$TopBlogsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TopBlogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopBlogsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TopBlogs
     * const topBlogs = await prisma.topBlogs.findMany()
     * 
     * // Get first 10 TopBlogs
     * const topBlogs = await prisma.topBlogs.findMany({ take: 10 })
     * 
     * // Only select the `topBlogID`
     * const topBlogsWithTopBlogIDOnly = await prisma.topBlogs.findMany({ select: { topBlogID: true } })
     * 
     */
    findMany<T extends TopBlogsFindManyArgs>(args?: SelectSubset<T, TopBlogsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopBlogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TopBlogs.
     * @param {TopBlogsCreateArgs} args - Arguments to create a TopBlogs.
     * @example
     * // Create one TopBlogs
     * const TopBlogs = await prisma.topBlogs.create({
     *   data: {
     *     // ... data to create a TopBlogs
     *   }
     * })
     * 
     */
    create<T extends TopBlogsCreateArgs>(args: SelectSubset<T, TopBlogsCreateArgs<ExtArgs>>): Prisma__TopBlogsClient<$Result.GetResult<Prisma.$TopBlogsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TopBlogs.
     * @param {TopBlogsCreateManyArgs} args - Arguments to create many TopBlogs.
     * @example
     * // Create many TopBlogs
     * const topBlogs = await prisma.topBlogs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TopBlogsCreateManyArgs>(args?: SelectSubset<T, TopBlogsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TopBlogs.
     * @param {TopBlogsDeleteArgs} args - Arguments to delete one TopBlogs.
     * @example
     * // Delete one TopBlogs
     * const TopBlogs = await prisma.topBlogs.delete({
     *   where: {
     *     // ... filter to delete one TopBlogs
     *   }
     * })
     * 
     */
    delete<T extends TopBlogsDeleteArgs>(args: SelectSubset<T, TopBlogsDeleteArgs<ExtArgs>>): Prisma__TopBlogsClient<$Result.GetResult<Prisma.$TopBlogsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TopBlogs.
     * @param {TopBlogsUpdateArgs} args - Arguments to update one TopBlogs.
     * @example
     * // Update one TopBlogs
     * const topBlogs = await prisma.topBlogs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TopBlogsUpdateArgs>(args: SelectSubset<T, TopBlogsUpdateArgs<ExtArgs>>): Prisma__TopBlogsClient<$Result.GetResult<Prisma.$TopBlogsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TopBlogs.
     * @param {TopBlogsDeleteManyArgs} args - Arguments to filter TopBlogs to delete.
     * @example
     * // Delete a few TopBlogs
     * const { count } = await prisma.topBlogs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TopBlogsDeleteManyArgs>(args?: SelectSubset<T, TopBlogsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TopBlogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopBlogsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TopBlogs
     * const topBlogs = await prisma.topBlogs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TopBlogsUpdateManyArgs>(args: SelectSubset<T, TopBlogsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TopBlogs.
     * @param {TopBlogsUpsertArgs} args - Arguments to update or create a TopBlogs.
     * @example
     * // Update or create a TopBlogs
     * const topBlogs = await prisma.topBlogs.upsert({
     *   create: {
     *     // ... data to create a TopBlogs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TopBlogs we want to update
     *   }
     * })
     */
    upsert<T extends TopBlogsUpsertArgs>(args: SelectSubset<T, TopBlogsUpsertArgs<ExtArgs>>): Prisma__TopBlogsClient<$Result.GetResult<Prisma.$TopBlogsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TopBlogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopBlogsCountArgs} args - Arguments to filter TopBlogs to count.
     * @example
     * // Count the number of TopBlogs
     * const count = await prisma.topBlogs.count({
     *   where: {
     *     // ... the filter for the TopBlogs we want to count
     *   }
     * })
    **/
    count<T extends TopBlogsCountArgs>(
      args?: Subset<T, TopBlogsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TopBlogsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TopBlogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopBlogsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TopBlogsAggregateArgs>(args: Subset<T, TopBlogsAggregateArgs>): Prisma.PrismaPromise<GetTopBlogsAggregateType<T>>

    /**
     * Group by TopBlogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopBlogsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TopBlogsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TopBlogsGroupByArgs['orderBy'] }
        : { orderBy?: TopBlogsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TopBlogsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTopBlogsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TopBlogs model
   */
  readonly fields: TopBlogsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TopBlogs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TopBlogsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Blogs<T extends BlogsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BlogsDefaultArgs<ExtArgs>>): Prisma__BlogsClient<$Result.GetResult<Prisma.$BlogsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TopBlogs model
   */
  interface TopBlogsFieldRefs {
    readonly topBlogID: FieldRef<"TopBlogs", 'String'>
    readonly blogID: FieldRef<"TopBlogs", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TopBlogs findUnique
   */
  export type TopBlogsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopBlogs
     */
    select?: TopBlogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopBlogs
     */
    omit?: TopBlogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopBlogsInclude<ExtArgs> | null
    /**
     * Filter, which TopBlogs to fetch.
     */
    where: TopBlogsWhereUniqueInput
  }

  /**
   * TopBlogs findUniqueOrThrow
   */
  export type TopBlogsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopBlogs
     */
    select?: TopBlogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopBlogs
     */
    omit?: TopBlogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopBlogsInclude<ExtArgs> | null
    /**
     * Filter, which TopBlogs to fetch.
     */
    where: TopBlogsWhereUniqueInput
  }

  /**
   * TopBlogs findFirst
   */
  export type TopBlogsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopBlogs
     */
    select?: TopBlogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopBlogs
     */
    omit?: TopBlogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopBlogsInclude<ExtArgs> | null
    /**
     * Filter, which TopBlogs to fetch.
     */
    where?: TopBlogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TopBlogs to fetch.
     */
    orderBy?: TopBlogsOrderByWithRelationInput | TopBlogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TopBlogs.
     */
    cursor?: TopBlogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TopBlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TopBlogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TopBlogs.
     */
    distinct?: TopBlogsScalarFieldEnum | TopBlogsScalarFieldEnum[]
  }

  /**
   * TopBlogs findFirstOrThrow
   */
  export type TopBlogsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopBlogs
     */
    select?: TopBlogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopBlogs
     */
    omit?: TopBlogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopBlogsInclude<ExtArgs> | null
    /**
     * Filter, which TopBlogs to fetch.
     */
    where?: TopBlogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TopBlogs to fetch.
     */
    orderBy?: TopBlogsOrderByWithRelationInput | TopBlogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TopBlogs.
     */
    cursor?: TopBlogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TopBlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TopBlogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TopBlogs.
     */
    distinct?: TopBlogsScalarFieldEnum | TopBlogsScalarFieldEnum[]
  }

  /**
   * TopBlogs findMany
   */
  export type TopBlogsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopBlogs
     */
    select?: TopBlogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopBlogs
     */
    omit?: TopBlogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopBlogsInclude<ExtArgs> | null
    /**
     * Filter, which TopBlogs to fetch.
     */
    where?: TopBlogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TopBlogs to fetch.
     */
    orderBy?: TopBlogsOrderByWithRelationInput | TopBlogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TopBlogs.
     */
    cursor?: TopBlogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TopBlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TopBlogs.
     */
    skip?: number
    distinct?: TopBlogsScalarFieldEnum | TopBlogsScalarFieldEnum[]
  }

  /**
   * TopBlogs create
   */
  export type TopBlogsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopBlogs
     */
    select?: TopBlogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopBlogs
     */
    omit?: TopBlogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopBlogsInclude<ExtArgs> | null
    /**
     * The data needed to create a TopBlogs.
     */
    data: XOR<TopBlogsCreateInput, TopBlogsUncheckedCreateInput>
  }

  /**
   * TopBlogs createMany
   */
  export type TopBlogsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TopBlogs.
     */
    data: TopBlogsCreateManyInput | TopBlogsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TopBlogs update
   */
  export type TopBlogsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopBlogs
     */
    select?: TopBlogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopBlogs
     */
    omit?: TopBlogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopBlogsInclude<ExtArgs> | null
    /**
     * The data needed to update a TopBlogs.
     */
    data: XOR<TopBlogsUpdateInput, TopBlogsUncheckedUpdateInput>
    /**
     * Choose, which TopBlogs to update.
     */
    where: TopBlogsWhereUniqueInput
  }

  /**
   * TopBlogs updateMany
   */
  export type TopBlogsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TopBlogs.
     */
    data: XOR<TopBlogsUpdateManyMutationInput, TopBlogsUncheckedUpdateManyInput>
    /**
     * Filter which TopBlogs to update
     */
    where?: TopBlogsWhereInput
    /**
     * Limit how many TopBlogs to update.
     */
    limit?: number
  }

  /**
   * TopBlogs upsert
   */
  export type TopBlogsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopBlogs
     */
    select?: TopBlogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopBlogs
     */
    omit?: TopBlogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopBlogsInclude<ExtArgs> | null
    /**
     * The filter to search for the TopBlogs to update in case it exists.
     */
    where: TopBlogsWhereUniqueInput
    /**
     * In case the TopBlogs found by the `where` argument doesn't exist, create a new TopBlogs with this data.
     */
    create: XOR<TopBlogsCreateInput, TopBlogsUncheckedCreateInput>
    /**
     * In case the TopBlogs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TopBlogsUpdateInput, TopBlogsUncheckedUpdateInput>
  }

  /**
   * TopBlogs delete
   */
  export type TopBlogsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopBlogs
     */
    select?: TopBlogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopBlogs
     */
    omit?: TopBlogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopBlogsInclude<ExtArgs> | null
    /**
     * Filter which TopBlogs to delete.
     */
    where: TopBlogsWhereUniqueInput
  }

  /**
   * TopBlogs deleteMany
   */
  export type TopBlogsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TopBlogs to delete
     */
    where?: TopBlogsWhereInput
    /**
     * Limit how many TopBlogs to delete.
     */
    limit?: number
  }

  /**
   * TopBlogs without action
   */
  export type TopBlogsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopBlogs
     */
    select?: TopBlogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopBlogs
     */
    omit?: TopBlogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopBlogsInclude<ExtArgs> | null
  }


  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    userID: string | null
    avatar: string | null
    name: string | null
    username: string | null
  }

  export type UsersMaxAggregateOutputType = {
    userID: string | null
    avatar: string | null
    name: string | null
    username: string | null
  }

  export type UsersCountAggregateOutputType = {
    userID: number
    avatar: number
    name: number
    username: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    userID?: true
    avatar?: true
    name?: true
    username?: true
  }

  export type UsersMaxAggregateInputType = {
    userID?: true
    avatar?: true
    name?: true
    username?: true
  }

  export type UsersCountAggregateInputType = {
    userID?: true
    avatar?: true
    name?: true
    username?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    userID: string
    avatar: string
    name: string
    username: string
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userID?: boolean
    avatar?: boolean
    name?: boolean
    username?: boolean
    Blogs?: boolean | Users$BlogsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type UsersSelectScalar = {
    userID?: boolean
    avatar?: boolean
    name?: boolean
    username?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userID" | "avatar" | "name" | "username", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Blogs?: boolean | Users$BlogsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      Blogs: Prisma.$BlogsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userID: string
      avatar: string
      name: string
      username: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `userID`
     * const usersWithUserIDOnly = await prisma.users.findMany({ select: { userID: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Blogs<T extends Users$BlogsArgs<ExtArgs> = {}>(args?: Subset<T, Users$BlogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly userID: FieldRef<"Users", 'String'>
    readonly avatar: FieldRef<"Users", 'String'>
    readonly name: FieldRef<"Users", 'String'>
    readonly username: FieldRef<"Users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.Blogs
   */
  export type Users$BlogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogs
     */
    select?: BlogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blogs
     */
    omit?: BlogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogsInclude<ExtArgs> | null
    where?: BlogsWhereInput
    orderBy?: BlogsOrderByWithRelationInput | BlogsOrderByWithRelationInput[]
    cursor?: BlogsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogsScalarFieldEnum | BlogsScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BlogsScalarFieldEnum: {
    blogID: 'blogID',
    title: 'title',
    banner: 'banner',
    content: 'content',
    score: 'score',
    views: 'views',
    userID: 'userID',
    createdAt: 'createdAt',
    watchs: 'watchs',
    updatedAt: 'updatedAt'
  };

  export type BlogsScalarFieldEnum = (typeof BlogsScalarFieldEnum)[keyof typeof BlogsScalarFieldEnum]


  export const TopBlogsScalarFieldEnum: {
    topBlogID: 'topBlogID',
    blogID: 'blogID'
  };

  export type TopBlogsScalarFieldEnum = (typeof TopBlogsScalarFieldEnum)[keyof typeof TopBlogsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    userID: 'userID',
    avatar: 'avatar',
    name: 'name',
    username: 'username'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const BlogsOrderByRelevanceFieldEnum: {
    blogID: 'blogID',
    title: 'title',
    banner: 'banner',
    content: 'content',
    userID: 'userID'
  };

  export type BlogsOrderByRelevanceFieldEnum = (typeof BlogsOrderByRelevanceFieldEnum)[keyof typeof BlogsOrderByRelevanceFieldEnum]


  export const TopBlogsOrderByRelevanceFieldEnum: {
    topBlogID: 'topBlogID',
    blogID: 'blogID'
  };

  export type TopBlogsOrderByRelevanceFieldEnum = (typeof TopBlogsOrderByRelevanceFieldEnum)[keyof typeof TopBlogsOrderByRelevanceFieldEnum]


  export const UsersOrderByRelevanceFieldEnum: {
    userID: 'userID',
    avatar: 'avatar',
    name: 'name',
    username: 'username'
  };

  export type UsersOrderByRelevanceFieldEnum = (typeof UsersOrderByRelevanceFieldEnum)[keyof typeof UsersOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type BlogsWhereInput = {
    AND?: BlogsWhereInput | BlogsWhereInput[]
    OR?: BlogsWhereInput[]
    NOT?: BlogsWhereInput | BlogsWhereInput[]
    blogID?: StringFilter<"Blogs"> | string
    title?: StringFilter<"Blogs"> | string
    banner?: StringNullableFilter<"Blogs"> | string | null
    content?: StringFilter<"Blogs"> | string
    score?: IntFilter<"Blogs"> | number
    views?: IntFilter<"Blogs"> | number
    userID?: StringFilter<"Blogs"> | string
    createdAt?: DateTimeFilter<"Blogs"> | Date | string
    watchs?: IntFilter<"Blogs"> | number
    updatedAt?: DateTimeFilter<"Blogs"> | Date | string
    author?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    TopBlogs?: XOR<TopBlogsNullableScalarRelationFilter, TopBlogsWhereInput> | null
  }

  export type BlogsOrderByWithRelationInput = {
    blogID?: SortOrder
    title?: SortOrder
    banner?: SortOrderInput | SortOrder
    content?: SortOrder
    score?: SortOrder
    views?: SortOrder
    userID?: SortOrder
    createdAt?: SortOrder
    watchs?: SortOrder
    updatedAt?: SortOrder
    author?: UsersOrderByWithRelationInput
    TopBlogs?: TopBlogsOrderByWithRelationInput
    _relevance?: BlogsOrderByRelevanceInput
  }

  export type BlogsWhereUniqueInput = Prisma.AtLeast<{
    blogID?: string
    AND?: BlogsWhereInput | BlogsWhereInput[]
    OR?: BlogsWhereInput[]
    NOT?: BlogsWhereInput | BlogsWhereInput[]
    title?: StringFilter<"Blogs"> | string
    banner?: StringNullableFilter<"Blogs"> | string | null
    content?: StringFilter<"Blogs"> | string
    score?: IntFilter<"Blogs"> | number
    views?: IntFilter<"Blogs"> | number
    userID?: StringFilter<"Blogs"> | string
    createdAt?: DateTimeFilter<"Blogs"> | Date | string
    watchs?: IntFilter<"Blogs"> | number
    updatedAt?: DateTimeFilter<"Blogs"> | Date | string
    author?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    TopBlogs?: XOR<TopBlogsNullableScalarRelationFilter, TopBlogsWhereInput> | null
  }, "blogID">

  export type BlogsOrderByWithAggregationInput = {
    blogID?: SortOrder
    title?: SortOrder
    banner?: SortOrderInput | SortOrder
    content?: SortOrder
    score?: SortOrder
    views?: SortOrder
    userID?: SortOrder
    createdAt?: SortOrder
    watchs?: SortOrder
    updatedAt?: SortOrder
    _count?: BlogsCountOrderByAggregateInput
    _avg?: BlogsAvgOrderByAggregateInput
    _max?: BlogsMaxOrderByAggregateInput
    _min?: BlogsMinOrderByAggregateInput
    _sum?: BlogsSumOrderByAggregateInput
  }

  export type BlogsScalarWhereWithAggregatesInput = {
    AND?: BlogsScalarWhereWithAggregatesInput | BlogsScalarWhereWithAggregatesInput[]
    OR?: BlogsScalarWhereWithAggregatesInput[]
    NOT?: BlogsScalarWhereWithAggregatesInput | BlogsScalarWhereWithAggregatesInput[]
    blogID?: StringWithAggregatesFilter<"Blogs"> | string
    title?: StringWithAggregatesFilter<"Blogs"> | string
    banner?: StringNullableWithAggregatesFilter<"Blogs"> | string | null
    content?: StringWithAggregatesFilter<"Blogs"> | string
    score?: IntWithAggregatesFilter<"Blogs"> | number
    views?: IntWithAggregatesFilter<"Blogs"> | number
    userID?: StringWithAggregatesFilter<"Blogs"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Blogs"> | Date | string
    watchs?: IntWithAggregatesFilter<"Blogs"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"Blogs"> | Date | string
  }

  export type TopBlogsWhereInput = {
    AND?: TopBlogsWhereInput | TopBlogsWhereInput[]
    OR?: TopBlogsWhereInput[]
    NOT?: TopBlogsWhereInput | TopBlogsWhereInput[]
    topBlogID?: StringFilter<"TopBlogs"> | string
    blogID?: StringFilter<"TopBlogs"> | string
    Blogs?: XOR<BlogsScalarRelationFilter, BlogsWhereInput>
  }

  export type TopBlogsOrderByWithRelationInput = {
    topBlogID?: SortOrder
    blogID?: SortOrder
    Blogs?: BlogsOrderByWithRelationInput
    _relevance?: TopBlogsOrderByRelevanceInput
  }

  export type TopBlogsWhereUniqueInput = Prisma.AtLeast<{
    topBlogID?: string
    blogID?: string
    AND?: TopBlogsWhereInput | TopBlogsWhereInput[]
    OR?: TopBlogsWhereInput[]
    NOT?: TopBlogsWhereInput | TopBlogsWhereInput[]
    Blogs?: XOR<BlogsScalarRelationFilter, BlogsWhereInput>
  }, "topBlogID" | "blogID">

  export type TopBlogsOrderByWithAggregationInput = {
    topBlogID?: SortOrder
    blogID?: SortOrder
    _count?: TopBlogsCountOrderByAggregateInput
    _max?: TopBlogsMaxOrderByAggregateInput
    _min?: TopBlogsMinOrderByAggregateInput
  }

  export type TopBlogsScalarWhereWithAggregatesInput = {
    AND?: TopBlogsScalarWhereWithAggregatesInput | TopBlogsScalarWhereWithAggregatesInput[]
    OR?: TopBlogsScalarWhereWithAggregatesInput[]
    NOT?: TopBlogsScalarWhereWithAggregatesInput | TopBlogsScalarWhereWithAggregatesInput[]
    topBlogID?: StringWithAggregatesFilter<"TopBlogs"> | string
    blogID?: StringWithAggregatesFilter<"TopBlogs"> | string
  }

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    userID?: StringFilter<"Users"> | string
    avatar?: StringFilter<"Users"> | string
    name?: StringFilter<"Users"> | string
    username?: StringFilter<"Users"> | string
    Blogs?: BlogsListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    userID?: SortOrder
    avatar?: SortOrder
    name?: SortOrder
    username?: SortOrder
    Blogs?: BlogsOrderByRelationAggregateInput
    _relevance?: UsersOrderByRelevanceInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    userID?: string
    username?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    avatar?: StringFilter<"Users"> | string
    name?: StringFilter<"Users"> | string
    Blogs?: BlogsListRelationFilter
  }, "userID" | "username">

  export type UsersOrderByWithAggregationInput = {
    userID?: SortOrder
    avatar?: SortOrder
    name?: SortOrder
    username?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    userID?: StringWithAggregatesFilter<"Users"> | string
    avatar?: StringWithAggregatesFilter<"Users"> | string
    name?: StringWithAggregatesFilter<"Users"> | string
    username?: StringWithAggregatesFilter<"Users"> | string
  }

  export type BlogsCreateInput = {
    blogID: string
    title: string
    banner?: string | null
    content: string
    score: number
    views: number
    createdAt: Date | string
    watchs: number
    updatedAt: Date | string
    author: UsersCreateNestedOneWithoutBlogsInput
    TopBlogs?: TopBlogsCreateNestedOneWithoutBlogsInput
  }

  export type BlogsUncheckedCreateInput = {
    blogID: string
    title: string
    banner?: string | null
    content: string
    score: number
    views: number
    userID: string
    createdAt: Date | string
    watchs: number
    updatedAt: Date | string
    TopBlogs?: TopBlogsUncheckedCreateNestedOneWithoutBlogsInput
  }

  export type BlogsUpdateInput = {
    blogID?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watchs?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UsersUpdateOneRequiredWithoutBlogsNestedInput
    TopBlogs?: TopBlogsUpdateOneWithoutBlogsNestedInput
  }

  export type BlogsUncheckedUpdateInput = {
    blogID?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    userID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watchs?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TopBlogs?: TopBlogsUncheckedUpdateOneWithoutBlogsNestedInput
  }

  export type BlogsCreateManyInput = {
    blogID: string
    title: string
    banner?: string | null
    content: string
    score: number
    views: number
    userID: string
    createdAt: Date | string
    watchs: number
    updatedAt: Date | string
  }

  export type BlogsUpdateManyMutationInput = {
    blogID?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watchs?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogsUncheckedUpdateManyInput = {
    blogID?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    userID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watchs?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopBlogsCreateInput = {
    topBlogID?: string
    Blogs: BlogsCreateNestedOneWithoutTopBlogsInput
  }

  export type TopBlogsUncheckedCreateInput = {
    topBlogID?: string
    blogID: string
  }

  export type TopBlogsUpdateInput = {
    topBlogID?: StringFieldUpdateOperationsInput | string
    Blogs?: BlogsUpdateOneRequiredWithoutTopBlogsNestedInput
  }

  export type TopBlogsUncheckedUpdateInput = {
    topBlogID?: StringFieldUpdateOperationsInput | string
    blogID?: StringFieldUpdateOperationsInput | string
  }

  export type TopBlogsCreateManyInput = {
    topBlogID?: string
    blogID: string
  }

  export type TopBlogsUpdateManyMutationInput = {
    topBlogID?: StringFieldUpdateOperationsInput | string
  }

  export type TopBlogsUncheckedUpdateManyInput = {
    topBlogID?: StringFieldUpdateOperationsInput | string
    blogID?: StringFieldUpdateOperationsInput | string
  }

  export type UsersCreateInput = {
    userID: string
    avatar: string
    name: string
    username: string
    Blogs?: BlogsCreateNestedManyWithoutAuthorInput
  }

  export type UsersUncheckedCreateInput = {
    userID: string
    avatar: string
    name: string
    username: string
    Blogs?: BlogsUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UsersUpdateInput = {
    userID?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    Blogs?: BlogsUpdateManyWithoutAuthorNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    userID?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    Blogs?: BlogsUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UsersCreateManyInput = {
    userID: string
    avatar: string
    name: string
    username: string
  }

  export type UsersUpdateManyMutationInput = {
    userID?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
  }

  export type UsersUncheckedUpdateManyInput = {
    userID?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type TopBlogsNullableScalarRelationFilter = {
    is?: TopBlogsWhereInput | null
    isNot?: TopBlogsWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BlogsOrderByRelevanceInput = {
    fields: BlogsOrderByRelevanceFieldEnum | BlogsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BlogsCountOrderByAggregateInput = {
    blogID?: SortOrder
    title?: SortOrder
    banner?: SortOrder
    content?: SortOrder
    score?: SortOrder
    views?: SortOrder
    userID?: SortOrder
    createdAt?: SortOrder
    watchs?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogsAvgOrderByAggregateInput = {
    score?: SortOrder
    views?: SortOrder
    watchs?: SortOrder
  }

  export type BlogsMaxOrderByAggregateInput = {
    blogID?: SortOrder
    title?: SortOrder
    banner?: SortOrder
    content?: SortOrder
    score?: SortOrder
    views?: SortOrder
    userID?: SortOrder
    createdAt?: SortOrder
    watchs?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogsMinOrderByAggregateInput = {
    blogID?: SortOrder
    title?: SortOrder
    banner?: SortOrder
    content?: SortOrder
    score?: SortOrder
    views?: SortOrder
    userID?: SortOrder
    createdAt?: SortOrder
    watchs?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogsSumOrderByAggregateInput = {
    score?: SortOrder
    views?: SortOrder
    watchs?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BlogsScalarRelationFilter = {
    is?: BlogsWhereInput
    isNot?: BlogsWhereInput
  }

  export type TopBlogsOrderByRelevanceInput = {
    fields: TopBlogsOrderByRelevanceFieldEnum | TopBlogsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TopBlogsCountOrderByAggregateInput = {
    topBlogID?: SortOrder
    blogID?: SortOrder
  }

  export type TopBlogsMaxOrderByAggregateInput = {
    topBlogID?: SortOrder
    blogID?: SortOrder
  }

  export type TopBlogsMinOrderByAggregateInput = {
    topBlogID?: SortOrder
    blogID?: SortOrder
  }

  export type BlogsListRelationFilter = {
    every?: BlogsWhereInput
    some?: BlogsWhereInput
    none?: BlogsWhereInput
  }

  export type BlogsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersOrderByRelevanceInput = {
    fields: UsersOrderByRelevanceFieldEnum | UsersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsersCountOrderByAggregateInput = {
    userID?: SortOrder
    avatar?: SortOrder
    name?: SortOrder
    username?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    userID?: SortOrder
    avatar?: SortOrder
    name?: SortOrder
    username?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    userID?: SortOrder
    avatar?: SortOrder
    name?: SortOrder
    username?: SortOrder
  }

  export type UsersCreateNestedOneWithoutBlogsInput = {
    create?: XOR<UsersCreateWithoutBlogsInput, UsersUncheckedCreateWithoutBlogsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutBlogsInput
    connect?: UsersWhereUniqueInput
  }

  export type TopBlogsCreateNestedOneWithoutBlogsInput = {
    create?: XOR<TopBlogsCreateWithoutBlogsInput, TopBlogsUncheckedCreateWithoutBlogsInput>
    connectOrCreate?: TopBlogsCreateOrConnectWithoutBlogsInput
    connect?: TopBlogsWhereUniqueInput
  }

  export type TopBlogsUncheckedCreateNestedOneWithoutBlogsInput = {
    create?: XOR<TopBlogsCreateWithoutBlogsInput, TopBlogsUncheckedCreateWithoutBlogsInput>
    connectOrCreate?: TopBlogsCreateOrConnectWithoutBlogsInput
    connect?: TopBlogsWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UsersUpdateOneRequiredWithoutBlogsNestedInput = {
    create?: XOR<UsersCreateWithoutBlogsInput, UsersUncheckedCreateWithoutBlogsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutBlogsInput
    upsert?: UsersUpsertWithoutBlogsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutBlogsInput, UsersUpdateWithoutBlogsInput>, UsersUncheckedUpdateWithoutBlogsInput>
  }

  export type TopBlogsUpdateOneWithoutBlogsNestedInput = {
    create?: XOR<TopBlogsCreateWithoutBlogsInput, TopBlogsUncheckedCreateWithoutBlogsInput>
    connectOrCreate?: TopBlogsCreateOrConnectWithoutBlogsInput
    upsert?: TopBlogsUpsertWithoutBlogsInput
    disconnect?: TopBlogsWhereInput | boolean
    delete?: TopBlogsWhereInput | boolean
    connect?: TopBlogsWhereUniqueInput
    update?: XOR<XOR<TopBlogsUpdateToOneWithWhereWithoutBlogsInput, TopBlogsUpdateWithoutBlogsInput>, TopBlogsUncheckedUpdateWithoutBlogsInput>
  }

  export type TopBlogsUncheckedUpdateOneWithoutBlogsNestedInput = {
    create?: XOR<TopBlogsCreateWithoutBlogsInput, TopBlogsUncheckedCreateWithoutBlogsInput>
    connectOrCreate?: TopBlogsCreateOrConnectWithoutBlogsInput
    upsert?: TopBlogsUpsertWithoutBlogsInput
    disconnect?: TopBlogsWhereInput | boolean
    delete?: TopBlogsWhereInput | boolean
    connect?: TopBlogsWhereUniqueInput
    update?: XOR<XOR<TopBlogsUpdateToOneWithWhereWithoutBlogsInput, TopBlogsUpdateWithoutBlogsInput>, TopBlogsUncheckedUpdateWithoutBlogsInput>
  }

  export type BlogsCreateNestedOneWithoutTopBlogsInput = {
    create?: XOR<BlogsCreateWithoutTopBlogsInput, BlogsUncheckedCreateWithoutTopBlogsInput>
    connectOrCreate?: BlogsCreateOrConnectWithoutTopBlogsInput
    connect?: BlogsWhereUniqueInput
  }

  export type BlogsUpdateOneRequiredWithoutTopBlogsNestedInput = {
    create?: XOR<BlogsCreateWithoutTopBlogsInput, BlogsUncheckedCreateWithoutTopBlogsInput>
    connectOrCreate?: BlogsCreateOrConnectWithoutTopBlogsInput
    upsert?: BlogsUpsertWithoutTopBlogsInput
    connect?: BlogsWhereUniqueInput
    update?: XOR<XOR<BlogsUpdateToOneWithWhereWithoutTopBlogsInput, BlogsUpdateWithoutTopBlogsInput>, BlogsUncheckedUpdateWithoutTopBlogsInput>
  }

  export type BlogsCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BlogsCreateWithoutAuthorInput, BlogsUncheckedCreateWithoutAuthorInput> | BlogsCreateWithoutAuthorInput[] | BlogsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BlogsCreateOrConnectWithoutAuthorInput | BlogsCreateOrConnectWithoutAuthorInput[]
    createMany?: BlogsCreateManyAuthorInputEnvelope
    connect?: BlogsWhereUniqueInput | BlogsWhereUniqueInput[]
  }

  export type BlogsUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BlogsCreateWithoutAuthorInput, BlogsUncheckedCreateWithoutAuthorInput> | BlogsCreateWithoutAuthorInput[] | BlogsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BlogsCreateOrConnectWithoutAuthorInput | BlogsCreateOrConnectWithoutAuthorInput[]
    createMany?: BlogsCreateManyAuthorInputEnvelope
    connect?: BlogsWhereUniqueInput | BlogsWhereUniqueInput[]
  }

  export type BlogsUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<BlogsCreateWithoutAuthorInput, BlogsUncheckedCreateWithoutAuthorInput> | BlogsCreateWithoutAuthorInput[] | BlogsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BlogsCreateOrConnectWithoutAuthorInput | BlogsCreateOrConnectWithoutAuthorInput[]
    upsert?: BlogsUpsertWithWhereUniqueWithoutAuthorInput | BlogsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: BlogsCreateManyAuthorInputEnvelope
    set?: BlogsWhereUniqueInput | BlogsWhereUniqueInput[]
    disconnect?: BlogsWhereUniqueInput | BlogsWhereUniqueInput[]
    delete?: BlogsWhereUniqueInput | BlogsWhereUniqueInput[]
    connect?: BlogsWhereUniqueInput | BlogsWhereUniqueInput[]
    update?: BlogsUpdateWithWhereUniqueWithoutAuthorInput | BlogsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: BlogsUpdateManyWithWhereWithoutAuthorInput | BlogsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: BlogsScalarWhereInput | BlogsScalarWhereInput[]
  }

  export type BlogsUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<BlogsCreateWithoutAuthorInput, BlogsUncheckedCreateWithoutAuthorInput> | BlogsCreateWithoutAuthorInput[] | BlogsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BlogsCreateOrConnectWithoutAuthorInput | BlogsCreateOrConnectWithoutAuthorInput[]
    upsert?: BlogsUpsertWithWhereUniqueWithoutAuthorInput | BlogsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: BlogsCreateManyAuthorInputEnvelope
    set?: BlogsWhereUniqueInput | BlogsWhereUniqueInput[]
    disconnect?: BlogsWhereUniqueInput | BlogsWhereUniqueInput[]
    delete?: BlogsWhereUniqueInput | BlogsWhereUniqueInput[]
    connect?: BlogsWhereUniqueInput | BlogsWhereUniqueInput[]
    update?: BlogsUpdateWithWhereUniqueWithoutAuthorInput | BlogsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: BlogsUpdateManyWithWhereWithoutAuthorInput | BlogsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: BlogsScalarWhereInput | BlogsScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UsersCreateWithoutBlogsInput = {
    userID: string
    avatar: string
    name: string
    username: string
  }

  export type UsersUncheckedCreateWithoutBlogsInput = {
    userID: string
    avatar: string
    name: string
    username: string
  }

  export type UsersCreateOrConnectWithoutBlogsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutBlogsInput, UsersUncheckedCreateWithoutBlogsInput>
  }

  export type TopBlogsCreateWithoutBlogsInput = {
    topBlogID?: string
  }

  export type TopBlogsUncheckedCreateWithoutBlogsInput = {
    topBlogID?: string
  }

  export type TopBlogsCreateOrConnectWithoutBlogsInput = {
    where: TopBlogsWhereUniqueInput
    create: XOR<TopBlogsCreateWithoutBlogsInput, TopBlogsUncheckedCreateWithoutBlogsInput>
  }

  export type UsersUpsertWithoutBlogsInput = {
    update: XOR<UsersUpdateWithoutBlogsInput, UsersUncheckedUpdateWithoutBlogsInput>
    create: XOR<UsersCreateWithoutBlogsInput, UsersUncheckedCreateWithoutBlogsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutBlogsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutBlogsInput, UsersUncheckedUpdateWithoutBlogsInput>
  }

  export type UsersUpdateWithoutBlogsInput = {
    userID?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
  }

  export type UsersUncheckedUpdateWithoutBlogsInput = {
    userID?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
  }

  export type TopBlogsUpsertWithoutBlogsInput = {
    update: XOR<TopBlogsUpdateWithoutBlogsInput, TopBlogsUncheckedUpdateWithoutBlogsInput>
    create: XOR<TopBlogsCreateWithoutBlogsInput, TopBlogsUncheckedCreateWithoutBlogsInput>
    where?: TopBlogsWhereInput
  }

  export type TopBlogsUpdateToOneWithWhereWithoutBlogsInput = {
    where?: TopBlogsWhereInput
    data: XOR<TopBlogsUpdateWithoutBlogsInput, TopBlogsUncheckedUpdateWithoutBlogsInput>
  }

  export type TopBlogsUpdateWithoutBlogsInput = {
    topBlogID?: StringFieldUpdateOperationsInput | string
  }

  export type TopBlogsUncheckedUpdateWithoutBlogsInput = {
    topBlogID?: StringFieldUpdateOperationsInput | string
  }

  export type BlogsCreateWithoutTopBlogsInput = {
    blogID: string
    title: string
    banner?: string | null
    content: string
    score: number
    views: number
    createdAt: Date | string
    watchs: number
    updatedAt: Date | string
    author: UsersCreateNestedOneWithoutBlogsInput
  }

  export type BlogsUncheckedCreateWithoutTopBlogsInput = {
    blogID: string
    title: string
    banner?: string | null
    content: string
    score: number
    views: number
    userID: string
    createdAt: Date | string
    watchs: number
    updatedAt: Date | string
  }

  export type BlogsCreateOrConnectWithoutTopBlogsInput = {
    where: BlogsWhereUniqueInput
    create: XOR<BlogsCreateWithoutTopBlogsInput, BlogsUncheckedCreateWithoutTopBlogsInput>
  }

  export type BlogsUpsertWithoutTopBlogsInput = {
    update: XOR<BlogsUpdateWithoutTopBlogsInput, BlogsUncheckedUpdateWithoutTopBlogsInput>
    create: XOR<BlogsCreateWithoutTopBlogsInput, BlogsUncheckedCreateWithoutTopBlogsInput>
    where?: BlogsWhereInput
  }

  export type BlogsUpdateToOneWithWhereWithoutTopBlogsInput = {
    where?: BlogsWhereInput
    data: XOR<BlogsUpdateWithoutTopBlogsInput, BlogsUncheckedUpdateWithoutTopBlogsInput>
  }

  export type BlogsUpdateWithoutTopBlogsInput = {
    blogID?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watchs?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UsersUpdateOneRequiredWithoutBlogsNestedInput
  }

  export type BlogsUncheckedUpdateWithoutTopBlogsInput = {
    blogID?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    userID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watchs?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogsCreateWithoutAuthorInput = {
    blogID: string
    title: string
    banner?: string | null
    content: string
    score: number
    views: number
    createdAt: Date | string
    watchs: number
    updatedAt: Date | string
    TopBlogs?: TopBlogsCreateNestedOneWithoutBlogsInput
  }

  export type BlogsUncheckedCreateWithoutAuthorInput = {
    blogID: string
    title: string
    banner?: string | null
    content: string
    score: number
    views: number
    createdAt: Date | string
    watchs: number
    updatedAt: Date | string
    TopBlogs?: TopBlogsUncheckedCreateNestedOneWithoutBlogsInput
  }

  export type BlogsCreateOrConnectWithoutAuthorInput = {
    where: BlogsWhereUniqueInput
    create: XOR<BlogsCreateWithoutAuthorInput, BlogsUncheckedCreateWithoutAuthorInput>
  }

  export type BlogsCreateManyAuthorInputEnvelope = {
    data: BlogsCreateManyAuthorInput | BlogsCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type BlogsUpsertWithWhereUniqueWithoutAuthorInput = {
    where: BlogsWhereUniqueInput
    update: XOR<BlogsUpdateWithoutAuthorInput, BlogsUncheckedUpdateWithoutAuthorInput>
    create: XOR<BlogsCreateWithoutAuthorInput, BlogsUncheckedCreateWithoutAuthorInput>
  }

  export type BlogsUpdateWithWhereUniqueWithoutAuthorInput = {
    where: BlogsWhereUniqueInput
    data: XOR<BlogsUpdateWithoutAuthorInput, BlogsUncheckedUpdateWithoutAuthorInput>
  }

  export type BlogsUpdateManyWithWhereWithoutAuthorInput = {
    where: BlogsScalarWhereInput
    data: XOR<BlogsUpdateManyMutationInput, BlogsUncheckedUpdateManyWithoutAuthorInput>
  }

  export type BlogsScalarWhereInput = {
    AND?: BlogsScalarWhereInput | BlogsScalarWhereInput[]
    OR?: BlogsScalarWhereInput[]
    NOT?: BlogsScalarWhereInput | BlogsScalarWhereInput[]
    blogID?: StringFilter<"Blogs"> | string
    title?: StringFilter<"Blogs"> | string
    banner?: StringNullableFilter<"Blogs"> | string | null
    content?: StringFilter<"Blogs"> | string
    score?: IntFilter<"Blogs"> | number
    views?: IntFilter<"Blogs"> | number
    userID?: StringFilter<"Blogs"> | string
    createdAt?: DateTimeFilter<"Blogs"> | Date | string
    watchs?: IntFilter<"Blogs"> | number
    updatedAt?: DateTimeFilter<"Blogs"> | Date | string
  }

  export type BlogsCreateManyAuthorInput = {
    blogID: string
    title: string
    banner?: string | null
    content: string
    score: number
    views: number
    createdAt: Date | string
    watchs: number
    updatedAt: Date | string
  }

  export type BlogsUpdateWithoutAuthorInput = {
    blogID?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watchs?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TopBlogs?: TopBlogsUpdateOneWithoutBlogsNestedInput
  }

  export type BlogsUncheckedUpdateWithoutAuthorInput = {
    blogID?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watchs?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TopBlogs?: TopBlogsUncheckedUpdateOneWithoutBlogsNestedInput
  }

  export type BlogsUncheckedUpdateManyWithoutAuthorInput = {
    blogID?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watchs?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}