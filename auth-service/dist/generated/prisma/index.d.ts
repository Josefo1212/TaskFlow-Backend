
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model activity_logs
 * 
 */
export type activity_logs = $Result.DefaultSelection<Prisma.$activity_logsPayload>
/**
 * Model project_members
 * 
 */
export type project_members = $Result.DefaultSelection<Prisma.$project_membersPayload>
/**
 * Model projects
 * 
 */
export type projects = $Result.DefaultSelection<Prisma.$projectsPayload>
/**
 * Model tags
 * 
 */
export type tags = $Result.DefaultSelection<Prisma.$tagsPayload>
/**
 * Model task_tags
 * 
 */
export type task_tags = $Result.DefaultSelection<Prisma.$task_tagsPayload>
/**
 * Model tasks
 * 
 */
export type tasks = $Result.DefaultSelection<Prisma.$tasksPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Activity_logs
 * const activity_logs = await prisma.activity_logs.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * // Fetch zero or more Activity_logs
   * const activity_logs = await prisma.activity_logs.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.activity_logs`: Exposes CRUD operations for the **activity_logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Activity_logs
    * const activity_logs = await prisma.activity_logs.findMany()
    * ```
    */
  get activity_logs(): Prisma.activity_logsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project_members`: Exposes CRUD operations for the **project_members** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Project_members
    * const project_members = await prisma.project_members.findMany()
    * ```
    */
  get project_members(): Prisma.project_membersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projects`: Exposes CRUD operations for the **projects** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.projects.findMany()
    * ```
    */
  get projects(): Prisma.projectsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tags`: Exposes CRUD operations for the **tags** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tags.findMany()
    * ```
    */
  get tags(): Prisma.tagsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task_tags`: Exposes CRUD operations for the **task_tags** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Task_tags
    * const task_tags = await prisma.task_tags.findMany()
    * ```
    */
  get task_tags(): Prisma.task_tagsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tasks`: Exposes CRUD operations for the **tasks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.tasks.findMany()
    * ```
    */
  get tasks(): Prisma.tasksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.1
   * Query Engine version: 55ae170b1ced7fc6ed07a15f110549408c501bb3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    activity_logs: 'activity_logs',
    project_members: 'project_members',
    projects: 'projects',
    tags: 'tags',
    task_tags: 'task_tags',
    tasks: 'tasks',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "activity_logs" | "project_members" | "projects" | "tags" | "task_tags" | "tasks" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      activity_logs: {
        payload: Prisma.$activity_logsPayload<ExtArgs>
        fields: Prisma.activity_logsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.activity_logsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activity_logsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.activity_logsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activity_logsPayload>
          }
          findFirst: {
            args: Prisma.activity_logsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activity_logsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.activity_logsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activity_logsPayload>
          }
          findMany: {
            args: Prisma.activity_logsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activity_logsPayload>[]
          }
          create: {
            args: Prisma.activity_logsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activity_logsPayload>
          }
          createMany: {
            args: Prisma.activity_logsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.activity_logsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activity_logsPayload>[]
          }
          delete: {
            args: Prisma.activity_logsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activity_logsPayload>
          }
          update: {
            args: Prisma.activity_logsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activity_logsPayload>
          }
          deleteMany: {
            args: Prisma.activity_logsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.activity_logsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.activity_logsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activity_logsPayload>[]
          }
          upsert: {
            args: Prisma.activity_logsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activity_logsPayload>
          }
          aggregate: {
            args: Prisma.Activity_logsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivity_logs>
          }
          groupBy: {
            args: Prisma.activity_logsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Activity_logsGroupByOutputType>[]
          }
          count: {
            args: Prisma.activity_logsCountArgs<ExtArgs>
            result: $Utils.Optional<Activity_logsCountAggregateOutputType> | number
          }
        }
      }
      project_members: {
        payload: Prisma.$project_membersPayload<ExtArgs>
        fields: Prisma.project_membersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.project_membersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_membersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.project_membersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_membersPayload>
          }
          findFirst: {
            args: Prisma.project_membersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_membersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.project_membersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_membersPayload>
          }
          findMany: {
            args: Prisma.project_membersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_membersPayload>[]
          }
          create: {
            args: Prisma.project_membersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_membersPayload>
          }
          createMany: {
            args: Prisma.project_membersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.project_membersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_membersPayload>[]
          }
          delete: {
            args: Prisma.project_membersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_membersPayload>
          }
          update: {
            args: Prisma.project_membersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_membersPayload>
          }
          deleteMany: {
            args: Prisma.project_membersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.project_membersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.project_membersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_membersPayload>[]
          }
          upsert: {
            args: Prisma.project_membersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_membersPayload>
          }
          aggregate: {
            args: Prisma.Project_membersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject_members>
          }
          groupBy: {
            args: Prisma.project_membersGroupByArgs<ExtArgs>
            result: $Utils.Optional<Project_membersGroupByOutputType>[]
          }
          count: {
            args: Prisma.project_membersCountArgs<ExtArgs>
            result: $Utils.Optional<Project_membersCountAggregateOutputType> | number
          }
        }
      }
      projects: {
        payload: Prisma.$projectsPayload<ExtArgs>
        fields: Prisma.projectsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.projectsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.projectsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          findFirst: {
            args: Prisma.projectsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.projectsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          findMany: {
            args: Prisma.projectsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>[]
          }
          create: {
            args: Prisma.projectsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          createMany: {
            args: Prisma.projectsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.projectsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>[]
          }
          delete: {
            args: Prisma.projectsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          update: {
            args: Prisma.projectsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          deleteMany: {
            args: Prisma.projectsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.projectsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.projectsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>[]
          }
          upsert: {
            args: Prisma.projectsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          aggregate: {
            args: Prisma.ProjectsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjects>
          }
          groupBy: {
            args: Prisma.projectsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectsGroupByOutputType>[]
          }
          count: {
            args: Prisma.projectsCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectsCountAggregateOutputType> | number
          }
        }
      }
      tags: {
        payload: Prisma.$tagsPayload<ExtArgs>
        fields: Prisma.tagsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tagsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tagsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          findFirst: {
            args: Prisma.tagsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tagsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          findMany: {
            args: Prisma.tagsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>[]
          }
          create: {
            args: Prisma.tagsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          createMany: {
            args: Prisma.tagsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tagsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>[]
          }
          delete: {
            args: Prisma.tagsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          update: {
            args: Prisma.tagsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          deleteMany: {
            args: Prisma.tagsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tagsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tagsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>[]
          }
          upsert: {
            args: Prisma.tagsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          aggregate: {
            args: Prisma.TagsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTags>
          }
          groupBy: {
            args: Prisma.tagsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagsGroupByOutputType>[]
          }
          count: {
            args: Prisma.tagsCountArgs<ExtArgs>
            result: $Utils.Optional<TagsCountAggregateOutputType> | number
          }
        }
      }
      task_tags: {
        payload: Prisma.$task_tagsPayload<ExtArgs>
        fields: Prisma.task_tagsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.task_tagsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_tagsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.task_tagsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_tagsPayload>
          }
          findFirst: {
            args: Prisma.task_tagsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_tagsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.task_tagsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_tagsPayload>
          }
          findMany: {
            args: Prisma.task_tagsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_tagsPayload>[]
          }
          create: {
            args: Prisma.task_tagsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_tagsPayload>
          }
          createMany: {
            args: Prisma.task_tagsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.task_tagsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_tagsPayload>[]
          }
          delete: {
            args: Prisma.task_tagsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_tagsPayload>
          }
          update: {
            args: Prisma.task_tagsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_tagsPayload>
          }
          deleteMany: {
            args: Prisma.task_tagsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.task_tagsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.task_tagsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_tagsPayload>[]
          }
          upsert: {
            args: Prisma.task_tagsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_tagsPayload>
          }
          aggregate: {
            args: Prisma.Task_tagsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask_tags>
          }
          groupBy: {
            args: Prisma.task_tagsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Task_tagsGroupByOutputType>[]
          }
          count: {
            args: Prisma.task_tagsCountArgs<ExtArgs>
            result: $Utils.Optional<Task_tagsCountAggregateOutputType> | number
          }
        }
      }
      tasks: {
        payload: Prisma.$tasksPayload<ExtArgs>
        fields: Prisma.tasksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tasksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tasksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          findFirst: {
            args: Prisma.tasksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tasksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          findMany: {
            args: Prisma.tasksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>[]
          }
          create: {
            args: Prisma.tasksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          createMany: {
            args: Prisma.tasksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tasksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>[]
          }
          delete: {
            args: Prisma.tasksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          update: {
            args: Prisma.tasksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          deleteMany: {
            args: Prisma.tasksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tasksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tasksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>[]
          }
          upsert: {
            args: Prisma.tasksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          aggregate: {
            args: Prisma.TasksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTasks>
          }
          groupBy: {
            args: Prisma.tasksGroupByArgs<ExtArgs>
            result: $Utils.Optional<TasksGroupByOutputType>[]
          }
          count: {
            args: Prisma.tasksCountArgs<ExtArgs>
            result: $Utils.Optional<TasksCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    activity_logs?: activity_logsOmit
    project_members?: project_membersOmit
    projects?: projectsOmit
    tags?: tagsOmit
    task_tags?: task_tagsOmit
    tasks?: tasksOmit
    users?: usersOmit
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
   * Count Type ProjectsCountOutputType
   */

  export type ProjectsCountOutputType = {
    activity_logs: number
    project_members: number
    tasks: number
  }

  export type ProjectsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activity_logs?: boolean | ProjectsCountOutputTypeCountActivity_logsArgs
    project_members?: boolean | ProjectsCountOutputTypeCountProject_membersArgs
    tasks?: boolean | ProjectsCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * ProjectsCountOutputType without action
   */
  export type ProjectsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectsCountOutputType
     */
    select?: ProjectsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectsCountOutputType without action
   */
  export type ProjectsCountOutputTypeCountActivity_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: activity_logsWhereInput
  }

  /**
   * ProjectsCountOutputType without action
   */
  export type ProjectsCountOutputTypeCountProject_membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: project_membersWhereInput
  }

  /**
   * ProjectsCountOutputType without action
   */
  export type ProjectsCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tasksWhereInput
  }


  /**
   * Count Type TagsCountOutputType
   */

  export type TagsCountOutputType = {
    task_tags: number
  }

  export type TagsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task_tags?: boolean | TagsCountOutputTypeCountTask_tagsArgs
  }

  // Custom InputTypes
  /**
   * TagsCountOutputType without action
   */
  export type TagsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsCountOutputType
     */
    select?: TagsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagsCountOutputType without action
   */
  export type TagsCountOutputTypeCountTask_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: task_tagsWhereInput
  }


  /**
   * Count Type TasksCountOutputType
   */

  export type TasksCountOutputType = {
    activity_logs: number
    task_tags: number
  }

  export type TasksCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activity_logs?: boolean | TasksCountOutputTypeCountActivity_logsArgs
    task_tags?: boolean | TasksCountOutputTypeCountTask_tagsArgs
  }

  // Custom InputTypes
  /**
   * TasksCountOutputType without action
   */
  export type TasksCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TasksCountOutputType
     */
    select?: TasksCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TasksCountOutputType without action
   */
  export type TasksCountOutputTypeCountActivity_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: activity_logsWhereInput
  }

  /**
   * TasksCountOutputType without action
   */
  export type TasksCountOutputTypeCountTask_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: task_tagsWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    activity_logs: number
    project_members: number
    projects: number
    tags: number
    tasks_tasks_assignee_idTousers: number
    tasks_tasks_creator_idTousers: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activity_logs?: boolean | UsersCountOutputTypeCountActivity_logsArgs
    project_members?: boolean | UsersCountOutputTypeCountProject_membersArgs
    projects?: boolean | UsersCountOutputTypeCountProjectsArgs
    tags?: boolean | UsersCountOutputTypeCountTagsArgs
    tasks_tasks_assignee_idTousers?: boolean | UsersCountOutputTypeCountTasks_tasks_assignee_idTousersArgs
    tasks_tasks_creator_idTousers?: boolean | UsersCountOutputTypeCountTasks_tasks_creator_idTousersArgs
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
  export type UsersCountOutputTypeCountActivity_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: activity_logsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountProject_membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: project_membersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tagsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTasks_tasks_assignee_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tasksWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTasks_tasks_creator_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tasksWhereInput
  }


  /**
   * Models
   */

  /**
   * Model activity_logs
   */

  export type AggregateActivity_logs = {
    _count: Activity_logsCountAggregateOutputType | null
    _min: Activity_logsMinAggregateOutputType | null
    _max: Activity_logsMaxAggregateOutputType | null
  }

  export type Activity_logsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    project_id: string | null
    task_id: string | null
    action: string | null
    created_at: Date | null
  }

  export type Activity_logsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    project_id: string | null
    task_id: string | null
    action: string | null
    created_at: Date | null
  }

  export type Activity_logsCountAggregateOutputType = {
    id: number
    user_id: number
    project_id: number
    task_id: number
    action: number
    metadata: number
    created_at: number
    _all: number
  }


  export type Activity_logsMinAggregateInputType = {
    id?: true
    user_id?: true
    project_id?: true
    task_id?: true
    action?: true
    created_at?: true
  }

  export type Activity_logsMaxAggregateInputType = {
    id?: true
    user_id?: true
    project_id?: true
    task_id?: true
    action?: true
    created_at?: true
  }

  export type Activity_logsCountAggregateInputType = {
    id?: true
    user_id?: true
    project_id?: true
    task_id?: true
    action?: true
    metadata?: true
    created_at?: true
    _all?: true
  }

  export type Activity_logsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which activity_logs to aggregate.
     */
    where?: activity_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activity_logs to fetch.
     */
    orderBy?: activity_logsOrderByWithRelationInput | activity_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: activity_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activity_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activity_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned activity_logs
    **/
    _count?: true | Activity_logsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Activity_logsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Activity_logsMaxAggregateInputType
  }

  export type GetActivity_logsAggregateType<T extends Activity_logsAggregateArgs> = {
        [P in keyof T & keyof AggregateActivity_logs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivity_logs[P]>
      : GetScalarType<T[P], AggregateActivity_logs[P]>
  }




  export type activity_logsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: activity_logsWhereInput
    orderBy?: activity_logsOrderByWithAggregationInput | activity_logsOrderByWithAggregationInput[]
    by: Activity_logsScalarFieldEnum[] | Activity_logsScalarFieldEnum
    having?: activity_logsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Activity_logsCountAggregateInputType | true
    _min?: Activity_logsMinAggregateInputType
    _max?: Activity_logsMaxAggregateInputType
  }

  export type Activity_logsGroupByOutputType = {
    id: string
    user_id: string
    project_id: string | null
    task_id: string | null
    action: string
    metadata: JsonValue | null
    created_at: Date | null
    _count: Activity_logsCountAggregateOutputType | null
    _min: Activity_logsMinAggregateOutputType | null
    _max: Activity_logsMaxAggregateOutputType | null
  }

  type GetActivity_logsGroupByPayload<T extends activity_logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Activity_logsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Activity_logsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Activity_logsGroupByOutputType[P]>
            : GetScalarType<T[P], Activity_logsGroupByOutputType[P]>
        }
      >
    >


  export type activity_logsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    project_id?: boolean
    task_id?: boolean
    action?: boolean
    metadata?: boolean
    created_at?: boolean
    projects?: boolean | activity_logs$projectsArgs<ExtArgs>
    tasks?: boolean | activity_logs$tasksArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activity_logs"]>

  export type activity_logsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    project_id?: boolean
    task_id?: boolean
    action?: boolean
    metadata?: boolean
    created_at?: boolean
    projects?: boolean | activity_logs$projectsArgs<ExtArgs>
    tasks?: boolean | activity_logs$tasksArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activity_logs"]>

  export type activity_logsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    project_id?: boolean
    task_id?: boolean
    action?: boolean
    metadata?: boolean
    created_at?: boolean
    projects?: boolean | activity_logs$projectsArgs<ExtArgs>
    tasks?: boolean | activity_logs$tasksArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activity_logs"]>

  export type activity_logsSelectScalar = {
    id?: boolean
    user_id?: boolean
    project_id?: boolean
    task_id?: boolean
    action?: boolean
    metadata?: boolean
    created_at?: boolean
  }

  export type activity_logsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "project_id" | "task_id" | "action" | "metadata" | "created_at", ExtArgs["result"]["activity_logs"]>
  export type activity_logsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | activity_logs$projectsArgs<ExtArgs>
    tasks?: boolean | activity_logs$tasksArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type activity_logsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | activity_logs$projectsArgs<ExtArgs>
    tasks?: boolean | activity_logs$tasksArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type activity_logsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | activity_logs$projectsArgs<ExtArgs>
    tasks?: boolean | activity_logs$tasksArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $activity_logsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "activity_logs"
    objects: {
      projects: Prisma.$projectsPayload<ExtArgs> | null
      tasks: Prisma.$tasksPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      project_id: string | null
      task_id: string | null
      action: string
      metadata: Prisma.JsonValue | null
      created_at: Date | null
    }, ExtArgs["result"]["activity_logs"]>
    composites: {}
  }

  type activity_logsGetPayload<S extends boolean | null | undefined | activity_logsDefaultArgs> = $Result.GetResult<Prisma.$activity_logsPayload, S>

  type activity_logsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<activity_logsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Activity_logsCountAggregateInputType | true
    }

  export interface activity_logsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['activity_logs'], meta: { name: 'activity_logs' } }
    /**
     * Find zero or one Activity_logs that matches the filter.
     * @param {activity_logsFindUniqueArgs} args - Arguments to find a Activity_logs
     * @example
     * // Get one Activity_logs
     * const activity_logs = await prisma.activity_logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends activity_logsFindUniqueArgs>(args: SelectSubset<T, activity_logsFindUniqueArgs<ExtArgs>>): Prisma__activity_logsClient<$Result.GetResult<Prisma.$activity_logsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Activity_logs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {activity_logsFindUniqueOrThrowArgs} args - Arguments to find a Activity_logs
     * @example
     * // Get one Activity_logs
     * const activity_logs = await prisma.activity_logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends activity_logsFindUniqueOrThrowArgs>(args: SelectSubset<T, activity_logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__activity_logsClient<$Result.GetResult<Prisma.$activity_logsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activity_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activity_logsFindFirstArgs} args - Arguments to find a Activity_logs
     * @example
     * // Get one Activity_logs
     * const activity_logs = await prisma.activity_logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends activity_logsFindFirstArgs>(args?: SelectSubset<T, activity_logsFindFirstArgs<ExtArgs>>): Prisma__activity_logsClient<$Result.GetResult<Prisma.$activity_logsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activity_logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activity_logsFindFirstOrThrowArgs} args - Arguments to find a Activity_logs
     * @example
     * // Get one Activity_logs
     * const activity_logs = await prisma.activity_logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends activity_logsFindFirstOrThrowArgs>(args?: SelectSubset<T, activity_logsFindFirstOrThrowArgs<ExtArgs>>): Prisma__activity_logsClient<$Result.GetResult<Prisma.$activity_logsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Activity_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activity_logsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Activity_logs
     * const activity_logs = await prisma.activity_logs.findMany()
     * 
     * // Get first 10 Activity_logs
     * const activity_logs = await prisma.activity_logs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activity_logsWithIdOnly = await prisma.activity_logs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends activity_logsFindManyArgs>(args?: SelectSubset<T, activity_logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$activity_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Activity_logs.
     * @param {activity_logsCreateArgs} args - Arguments to create a Activity_logs.
     * @example
     * // Create one Activity_logs
     * const Activity_logs = await prisma.activity_logs.create({
     *   data: {
     *     // ... data to create a Activity_logs
     *   }
     * })
     * 
     */
    create<T extends activity_logsCreateArgs>(args: SelectSubset<T, activity_logsCreateArgs<ExtArgs>>): Prisma__activity_logsClient<$Result.GetResult<Prisma.$activity_logsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Activity_logs.
     * @param {activity_logsCreateManyArgs} args - Arguments to create many Activity_logs.
     * @example
     * // Create many Activity_logs
     * const activity_logs = await prisma.activity_logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends activity_logsCreateManyArgs>(args?: SelectSubset<T, activity_logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Activity_logs and returns the data saved in the database.
     * @param {activity_logsCreateManyAndReturnArgs} args - Arguments to create many Activity_logs.
     * @example
     * // Create many Activity_logs
     * const activity_logs = await prisma.activity_logs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Activity_logs and only return the `id`
     * const activity_logsWithIdOnly = await prisma.activity_logs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends activity_logsCreateManyAndReturnArgs>(args?: SelectSubset<T, activity_logsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$activity_logsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Activity_logs.
     * @param {activity_logsDeleteArgs} args - Arguments to delete one Activity_logs.
     * @example
     * // Delete one Activity_logs
     * const Activity_logs = await prisma.activity_logs.delete({
     *   where: {
     *     // ... filter to delete one Activity_logs
     *   }
     * })
     * 
     */
    delete<T extends activity_logsDeleteArgs>(args: SelectSubset<T, activity_logsDeleteArgs<ExtArgs>>): Prisma__activity_logsClient<$Result.GetResult<Prisma.$activity_logsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Activity_logs.
     * @param {activity_logsUpdateArgs} args - Arguments to update one Activity_logs.
     * @example
     * // Update one Activity_logs
     * const activity_logs = await prisma.activity_logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends activity_logsUpdateArgs>(args: SelectSubset<T, activity_logsUpdateArgs<ExtArgs>>): Prisma__activity_logsClient<$Result.GetResult<Prisma.$activity_logsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Activity_logs.
     * @param {activity_logsDeleteManyArgs} args - Arguments to filter Activity_logs to delete.
     * @example
     * // Delete a few Activity_logs
     * const { count } = await prisma.activity_logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends activity_logsDeleteManyArgs>(args?: SelectSubset<T, activity_logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activity_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activity_logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Activity_logs
     * const activity_logs = await prisma.activity_logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends activity_logsUpdateManyArgs>(args: SelectSubset<T, activity_logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activity_logs and returns the data updated in the database.
     * @param {activity_logsUpdateManyAndReturnArgs} args - Arguments to update many Activity_logs.
     * @example
     * // Update many Activity_logs
     * const activity_logs = await prisma.activity_logs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Activity_logs and only return the `id`
     * const activity_logsWithIdOnly = await prisma.activity_logs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends activity_logsUpdateManyAndReturnArgs>(args: SelectSubset<T, activity_logsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$activity_logsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Activity_logs.
     * @param {activity_logsUpsertArgs} args - Arguments to update or create a Activity_logs.
     * @example
     * // Update or create a Activity_logs
     * const activity_logs = await prisma.activity_logs.upsert({
     *   create: {
     *     // ... data to create a Activity_logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Activity_logs we want to update
     *   }
     * })
     */
    upsert<T extends activity_logsUpsertArgs>(args: SelectSubset<T, activity_logsUpsertArgs<ExtArgs>>): Prisma__activity_logsClient<$Result.GetResult<Prisma.$activity_logsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Activity_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activity_logsCountArgs} args - Arguments to filter Activity_logs to count.
     * @example
     * // Count the number of Activity_logs
     * const count = await prisma.activity_logs.count({
     *   where: {
     *     // ... the filter for the Activity_logs we want to count
     *   }
     * })
    **/
    count<T extends activity_logsCountArgs>(
      args?: Subset<T, activity_logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Activity_logsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Activity_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Activity_logsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Activity_logsAggregateArgs>(args: Subset<T, Activity_logsAggregateArgs>): Prisma.PrismaPromise<GetActivity_logsAggregateType<T>>

    /**
     * Group by Activity_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activity_logsGroupByArgs} args - Group by arguments.
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
      T extends activity_logsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: activity_logsGroupByArgs['orderBy'] }
        : { orderBy?: activity_logsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, activity_logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivity_logsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the activity_logs model
   */
  readonly fields: activity_logsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for activity_logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__activity_logsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends activity_logs$projectsArgs<ExtArgs> = {}>(args?: Subset<T, activity_logs$projectsArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tasks<T extends activity_logs$tasksArgs<ExtArgs> = {}>(args?: Subset<T, activity_logs$tasksArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the activity_logs model
   */
  interface activity_logsFieldRefs {
    readonly id: FieldRef<"activity_logs", 'String'>
    readonly user_id: FieldRef<"activity_logs", 'String'>
    readonly project_id: FieldRef<"activity_logs", 'String'>
    readonly task_id: FieldRef<"activity_logs", 'String'>
    readonly action: FieldRef<"activity_logs", 'String'>
    readonly metadata: FieldRef<"activity_logs", 'Json'>
    readonly created_at: FieldRef<"activity_logs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * activity_logs findUnique
   */
  export type activity_logsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_logs
     */
    select?: activity_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activity_logs
     */
    omit?: activity_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activity_logsInclude<ExtArgs> | null
    /**
     * Filter, which activity_logs to fetch.
     */
    where: activity_logsWhereUniqueInput
  }

  /**
   * activity_logs findUniqueOrThrow
   */
  export type activity_logsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_logs
     */
    select?: activity_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activity_logs
     */
    omit?: activity_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activity_logsInclude<ExtArgs> | null
    /**
     * Filter, which activity_logs to fetch.
     */
    where: activity_logsWhereUniqueInput
  }

  /**
   * activity_logs findFirst
   */
  export type activity_logsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_logs
     */
    select?: activity_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activity_logs
     */
    omit?: activity_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activity_logsInclude<ExtArgs> | null
    /**
     * Filter, which activity_logs to fetch.
     */
    where?: activity_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activity_logs to fetch.
     */
    orderBy?: activity_logsOrderByWithRelationInput | activity_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for activity_logs.
     */
    cursor?: activity_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activity_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activity_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of activity_logs.
     */
    distinct?: Activity_logsScalarFieldEnum | Activity_logsScalarFieldEnum[]
  }

  /**
   * activity_logs findFirstOrThrow
   */
  export type activity_logsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_logs
     */
    select?: activity_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activity_logs
     */
    omit?: activity_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activity_logsInclude<ExtArgs> | null
    /**
     * Filter, which activity_logs to fetch.
     */
    where?: activity_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activity_logs to fetch.
     */
    orderBy?: activity_logsOrderByWithRelationInput | activity_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for activity_logs.
     */
    cursor?: activity_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activity_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activity_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of activity_logs.
     */
    distinct?: Activity_logsScalarFieldEnum | Activity_logsScalarFieldEnum[]
  }

  /**
   * activity_logs findMany
   */
  export type activity_logsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_logs
     */
    select?: activity_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activity_logs
     */
    omit?: activity_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activity_logsInclude<ExtArgs> | null
    /**
     * Filter, which activity_logs to fetch.
     */
    where?: activity_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activity_logs to fetch.
     */
    orderBy?: activity_logsOrderByWithRelationInput | activity_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing activity_logs.
     */
    cursor?: activity_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activity_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activity_logs.
     */
    skip?: number
    distinct?: Activity_logsScalarFieldEnum | Activity_logsScalarFieldEnum[]
  }

  /**
   * activity_logs create
   */
  export type activity_logsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_logs
     */
    select?: activity_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activity_logs
     */
    omit?: activity_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activity_logsInclude<ExtArgs> | null
    /**
     * The data needed to create a activity_logs.
     */
    data: XOR<activity_logsCreateInput, activity_logsUncheckedCreateInput>
  }

  /**
   * activity_logs createMany
   */
  export type activity_logsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many activity_logs.
     */
    data: activity_logsCreateManyInput | activity_logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * activity_logs createManyAndReturn
   */
  export type activity_logsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_logs
     */
    select?: activity_logsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the activity_logs
     */
    omit?: activity_logsOmit<ExtArgs> | null
    /**
     * The data used to create many activity_logs.
     */
    data: activity_logsCreateManyInput | activity_logsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activity_logsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * activity_logs update
   */
  export type activity_logsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_logs
     */
    select?: activity_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activity_logs
     */
    omit?: activity_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activity_logsInclude<ExtArgs> | null
    /**
     * The data needed to update a activity_logs.
     */
    data: XOR<activity_logsUpdateInput, activity_logsUncheckedUpdateInput>
    /**
     * Choose, which activity_logs to update.
     */
    where: activity_logsWhereUniqueInput
  }

  /**
   * activity_logs updateMany
   */
  export type activity_logsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update activity_logs.
     */
    data: XOR<activity_logsUpdateManyMutationInput, activity_logsUncheckedUpdateManyInput>
    /**
     * Filter which activity_logs to update
     */
    where?: activity_logsWhereInput
    /**
     * Limit how many activity_logs to update.
     */
    limit?: number
  }

  /**
   * activity_logs updateManyAndReturn
   */
  export type activity_logsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_logs
     */
    select?: activity_logsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the activity_logs
     */
    omit?: activity_logsOmit<ExtArgs> | null
    /**
     * The data used to update activity_logs.
     */
    data: XOR<activity_logsUpdateManyMutationInput, activity_logsUncheckedUpdateManyInput>
    /**
     * Filter which activity_logs to update
     */
    where?: activity_logsWhereInput
    /**
     * Limit how many activity_logs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activity_logsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * activity_logs upsert
   */
  export type activity_logsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_logs
     */
    select?: activity_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activity_logs
     */
    omit?: activity_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activity_logsInclude<ExtArgs> | null
    /**
     * The filter to search for the activity_logs to update in case it exists.
     */
    where: activity_logsWhereUniqueInput
    /**
     * In case the activity_logs found by the `where` argument doesn't exist, create a new activity_logs with this data.
     */
    create: XOR<activity_logsCreateInput, activity_logsUncheckedCreateInput>
    /**
     * In case the activity_logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<activity_logsUpdateInput, activity_logsUncheckedUpdateInput>
  }

  /**
   * activity_logs delete
   */
  export type activity_logsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_logs
     */
    select?: activity_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activity_logs
     */
    omit?: activity_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activity_logsInclude<ExtArgs> | null
    /**
     * Filter which activity_logs to delete.
     */
    where: activity_logsWhereUniqueInput
  }

  /**
   * activity_logs deleteMany
   */
  export type activity_logsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which activity_logs to delete
     */
    where?: activity_logsWhereInput
    /**
     * Limit how many activity_logs to delete.
     */
    limit?: number
  }

  /**
   * activity_logs.projects
   */
  export type activity_logs$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    where?: projectsWhereInput
  }

  /**
   * activity_logs.tasks
   */
  export type activity_logs$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    where?: tasksWhereInput
  }

  /**
   * activity_logs without action
   */
  export type activity_logsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_logs
     */
    select?: activity_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activity_logs
     */
    omit?: activity_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activity_logsInclude<ExtArgs> | null
  }


  /**
   * Model project_members
   */

  export type AggregateProject_members = {
    _count: Project_membersCountAggregateOutputType | null
    _min: Project_membersMinAggregateOutputType | null
    _max: Project_membersMaxAggregateOutputType | null
  }

  export type Project_membersMinAggregateOutputType = {
    id: string | null
    project_id: string | null
    user_id: string | null
    role: string | null
    created_at: Date | null
  }

  export type Project_membersMaxAggregateOutputType = {
    id: string | null
    project_id: string | null
    user_id: string | null
    role: string | null
    created_at: Date | null
  }

  export type Project_membersCountAggregateOutputType = {
    id: number
    project_id: number
    user_id: number
    role: number
    created_at: number
    _all: number
  }


  export type Project_membersMinAggregateInputType = {
    id?: true
    project_id?: true
    user_id?: true
    role?: true
    created_at?: true
  }

  export type Project_membersMaxAggregateInputType = {
    id?: true
    project_id?: true
    user_id?: true
    role?: true
    created_at?: true
  }

  export type Project_membersCountAggregateInputType = {
    id?: true
    project_id?: true
    user_id?: true
    role?: true
    created_at?: true
    _all?: true
  }

  export type Project_membersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which project_members to aggregate.
     */
    where?: project_membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of project_members to fetch.
     */
    orderBy?: project_membersOrderByWithRelationInput | project_membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: project_membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` project_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` project_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned project_members
    **/
    _count?: true | Project_membersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Project_membersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Project_membersMaxAggregateInputType
  }

  export type GetProject_membersAggregateType<T extends Project_membersAggregateArgs> = {
        [P in keyof T & keyof AggregateProject_members]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject_members[P]>
      : GetScalarType<T[P], AggregateProject_members[P]>
  }




  export type project_membersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: project_membersWhereInput
    orderBy?: project_membersOrderByWithAggregationInput | project_membersOrderByWithAggregationInput[]
    by: Project_membersScalarFieldEnum[] | Project_membersScalarFieldEnum
    having?: project_membersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Project_membersCountAggregateInputType | true
    _min?: Project_membersMinAggregateInputType
    _max?: Project_membersMaxAggregateInputType
  }

  export type Project_membersGroupByOutputType = {
    id: string
    project_id: string
    user_id: string
    role: string
    created_at: Date | null
    _count: Project_membersCountAggregateOutputType | null
    _min: Project_membersMinAggregateOutputType | null
    _max: Project_membersMaxAggregateOutputType | null
  }

  type GetProject_membersGroupByPayload<T extends project_membersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Project_membersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Project_membersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Project_membersGroupByOutputType[P]>
            : GetScalarType<T[P], Project_membersGroupByOutputType[P]>
        }
      >
    >


  export type project_membersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project_id?: boolean
    user_id?: boolean
    role?: boolean
    created_at?: boolean
    projects?: boolean | projectsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project_members"]>

  export type project_membersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project_id?: boolean
    user_id?: boolean
    role?: boolean
    created_at?: boolean
    projects?: boolean | projectsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project_members"]>

  export type project_membersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project_id?: boolean
    user_id?: boolean
    role?: boolean
    created_at?: boolean
    projects?: boolean | projectsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project_members"]>

  export type project_membersSelectScalar = {
    id?: boolean
    project_id?: boolean
    user_id?: boolean
    role?: boolean
    created_at?: boolean
  }

  export type project_membersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "project_id" | "user_id" | "role" | "created_at", ExtArgs["result"]["project_members"]>
  export type project_membersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | projectsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type project_membersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | projectsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type project_membersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | projectsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $project_membersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "project_members"
    objects: {
      projects: Prisma.$projectsPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      project_id: string
      user_id: string
      role: string
      created_at: Date | null
    }, ExtArgs["result"]["project_members"]>
    composites: {}
  }

  type project_membersGetPayload<S extends boolean | null | undefined | project_membersDefaultArgs> = $Result.GetResult<Prisma.$project_membersPayload, S>

  type project_membersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<project_membersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Project_membersCountAggregateInputType | true
    }

  export interface project_membersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['project_members'], meta: { name: 'project_members' } }
    /**
     * Find zero or one Project_members that matches the filter.
     * @param {project_membersFindUniqueArgs} args - Arguments to find a Project_members
     * @example
     * // Get one Project_members
     * const project_members = await prisma.project_members.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends project_membersFindUniqueArgs>(args: SelectSubset<T, project_membersFindUniqueArgs<ExtArgs>>): Prisma__project_membersClient<$Result.GetResult<Prisma.$project_membersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project_members that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {project_membersFindUniqueOrThrowArgs} args - Arguments to find a Project_members
     * @example
     * // Get one Project_members
     * const project_members = await prisma.project_members.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends project_membersFindUniqueOrThrowArgs>(args: SelectSubset<T, project_membersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__project_membersClient<$Result.GetResult<Prisma.$project_membersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project_members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_membersFindFirstArgs} args - Arguments to find a Project_members
     * @example
     * // Get one Project_members
     * const project_members = await prisma.project_members.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends project_membersFindFirstArgs>(args?: SelectSubset<T, project_membersFindFirstArgs<ExtArgs>>): Prisma__project_membersClient<$Result.GetResult<Prisma.$project_membersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project_members that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_membersFindFirstOrThrowArgs} args - Arguments to find a Project_members
     * @example
     * // Get one Project_members
     * const project_members = await prisma.project_members.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends project_membersFindFirstOrThrowArgs>(args?: SelectSubset<T, project_membersFindFirstOrThrowArgs<ExtArgs>>): Prisma__project_membersClient<$Result.GetResult<Prisma.$project_membersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Project_members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_membersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Project_members
     * const project_members = await prisma.project_members.findMany()
     * 
     * // Get first 10 Project_members
     * const project_members = await prisma.project_members.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const project_membersWithIdOnly = await prisma.project_members.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends project_membersFindManyArgs>(args?: SelectSubset<T, project_membersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$project_membersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project_members.
     * @param {project_membersCreateArgs} args - Arguments to create a Project_members.
     * @example
     * // Create one Project_members
     * const Project_members = await prisma.project_members.create({
     *   data: {
     *     // ... data to create a Project_members
     *   }
     * })
     * 
     */
    create<T extends project_membersCreateArgs>(args: SelectSubset<T, project_membersCreateArgs<ExtArgs>>): Prisma__project_membersClient<$Result.GetResult<Prisma.$project_membersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Project_members.
     * @param {project_membersCreateManyArgs} args - Arguments to create many Project_members.
     * @example
     * // Create many Project_members
     * const project_members = await prisma.project_members.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends project_membersCreateManyArgs>(args?: SelectSubset<T, project_membersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Project_members and returns the data saved in the database.
     * @param {project_membersCreateManyAndReturnArgs} args - Arguments to create many Project_members.
     * @example
     * // Create many Project_members
     * const project_members = await prisma.project_members.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Project_members and only return the `id`
     * const project_membersWithIdOnly = await prisma.project_members.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends project_membersCreateManyAndReturnArgs>(args?: SelectSubset<T, project_membersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$project_membersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project_members.
     * @param {project_membersDeleteArgs} args - Arguments to delete one Project_members.
     * @example
     * // Delete one Project_members
     * const Project_members = await prisma.project_members.delete({
     *   where: {
     *     // ... filter to delete one Project_members
     *   }
     * })
     * 
     */
    delete<T extends project_membersDeleteArgs>(args: SelectSubset<T, project_membersDeleteArgs<ExtArgs>>): Prisma__project_membersClient<$Result.GetResult<Prisma.$project_membersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project_members.
     * @param {project_membersUpdateArgs} args - Arguments to update one Project_members.
     * @example
     * // Update one Project_members
     * const project_members = await prisma.project_members.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends project_membersUpdateArgs>(args: SelectSubset<T, project_membersUpdateArgs<ExtArgs>>): Prisma__project_membersClient<$Result.GetResult<Prisma.$project_membersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Project_members.
     * @param {project_membersDeleteManyArgs} args - Arguments to filter Project_members to delete.
     * @example
     * // Delete a few Project_members
     * const { count } = await prisma.project_members.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends project_membersDeleteManyArgs>(args?: SelectSubset<T, project_membersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Project_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_membersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Project_members
     * const project_members = await prisma.project_members.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends project_membersUpdateManyArgs>(args: SelectSubset<T, project_membersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Project_members and returns the data updated in the database.
     * @param {project_membersUpdateManyAndReturnArgs} args - Arguments to update many Project_members.
     * @example
     * // Update many Project_members
     * const project_members = await prisma.project_members.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Project_members and only return the `id`
     * const project_membersWithIdOnly = await prisma.project_members.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends project_membersUpdateManyAndReturnArgs>(args: SelectSubset<T, project_membersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$project_membersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project_members.
     * @param {project_membersUpsertArgs} args - Arguments to update or create a Project_members.
     * @example
     * // Update or create a Project_members
     * const project_members = await prisma.project_members.upsert({
     *   create: {
     *     // ... data to create a Project_members
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project_members we want to update
     *   }
     * })
     */
    upsert<T extends project_membersUpsertArgs>(args: SelectSubset<T, project_membersUpsertArgs<ExtArgs>>): Prisma__project_membersClient<$Result.GetResult<Prisma.$project_membersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Project_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_membersCountArgs} args - Arguments to filter Project_members to count.
     * @example
     * // Count the number of Project_members
     * const count = await prisma.project_members.count({
     *   where: {
     *     // ... the filter for the Project_members we want to count
     *   }
     * })
    **/
    count<T extends project_membersCountArgs>(
      args?: Subset<T, project_membersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Project_membersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Project_membersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Project_membersAggregateArgs>(args: Subset<T, Project_membersAggregateArgs>): Prisma.PrismaPromise<GetProject_membersAggregateType<T>>

    /**
     * Group by Project_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_membersGroupByArgs} args - Group by arguments.
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
      T extends project_membersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: project_membersGroupByArgs['orderBy'] }
        : { orderBy?: project_membersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, project_membersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProject_membersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the project_members model
   */
  readonly fields: project_membersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for project_members.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__project_membersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends projectsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, projectsDefaultArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the project_members model
   */
  interface project_membersFieldRefs {
    readonly id: FieldRef<"project_members", 'String'>
    readonly project_id: FieldRef<"project_members", 'String'>
    readonly user_id: FieldRef<"project_members", 'String'>
    readonly role: FieldRef<"project_members", 'String'>
    readonly created_at: FieldRef<"project_members", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * project_members findUnique
   */
  export type project_membersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_members
     */
    select?: project_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_members
     */
    omit?: project_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_membersInclude<ExtArgs> | null
    /**
     * Filter, which project_members to fetch.
     */
    where: project_membersWhereUniqueInput
  }

  /**
   * project_members findUniqueOrThrow
   */
  export type project_membersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_members
     */
    select?: project_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_members
     */
    omit?: project_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_membersInclude<ExtArgs> | null
    /**
     * Filter, which project_members to fetch.
     */
    where: project_membersWhereUniqueInput
  }

  /**
   * project_members findFirst
   */
  export type project_membersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_members
     */
    select?: project_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_members
     */
    omit?: project_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_membersInclude<ExtArgs> | null
    /**
     * Filter, which project_members to fetch.
     */
    where?: project_membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of project_members to fetch.
     */
    orderBy?: project_membersOrderByWithRelationInput | project_membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for project_members.
     */
    cursor?: project_membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` project_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` project_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of project_members.
     */
    distinct?: Project_membersScalarFieldEnum | Project_membersScalarFieldEnum[]
  }

  /**
   * project_members findFirstOrThrow
   */
  export type project_membersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_members
     */
    select?: project_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_members
     */
    omit?: project_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_membersInclude<ExtArgs> | null
    /**
     * Filter, which project_members to fetch.
     */
    where?: project_membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of project_members to fetch.
     */
    orderBy?: project_membersOrderByWithRelationInput | project_membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for project_members.
     */
    cursor?: project_membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` project_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` project_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of project_members.
     */
    distinct?: Project_membersScalarFieldEnum | Project_membersScalarFieldEnum[]
  }

  /**
   * project_members findMany
   */
  export type project_membersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_members
     */
    select?: project_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_members
     */
    omit?: project_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_membersInclude<ExtArgs> | null
    /**
     * Filter, which project_members to fetch.
     */
    where?: project_membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of project_members to fetch.
     */
    orderBy?: project_membersOrderByWithRelationInput | project_membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing project_members.
     */
    cursor?: project_membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` project_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` project_members.
     */
    skip?: number
    distinct?: Project_membersScalarFieldEnum | Project_membersScalarFieldEnum[]
  }

  /**
   * project_members create
   */
  export type project_membersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_members
     */
    select?: project_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_members
     */
    omit?: project_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_membersInclude<ExtArgs> | null
    /**
     * The data needed to create a project_members.
     */
    data: XOR<project_membersCreateInput, project_membersUncheckedCreateInput>
  }

  /**
   * project_members createMany
   */
  export type project_membersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many project_members.
     */
    data: project_membersCreateManyInput | project_membersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * project_members createManyAndReturn
   */
  export type project_membersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_members
     */
    select?: project_membersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the project_members
     */
    omit?: project_membersOmit<ExtArgs> | null
    /**
     * The data used to create many project_members.
     */
    data: project_membersCreateManyInput | project_membersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_membersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * project_members update
   */
  export type project_membersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_members
     */
    select?: project_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_members
     */
    omit?: project_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_membersInclude<ExtArgs> | null
    /**
     * The data needed to update a project_members.
     */
    data: XOR<project_membersUpdateInput, project_membersUncheckedUpdateInput>
    /**
     * Choose, which project_members to update.
     */
    where: project_membersWhereUniqueInput
  }

  /**
   * project_members updateMany
   */
  export type project_membersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update project_members.
     */
    data: XOR<project_membersUpdateManyMutationInput, project_membersUncheckedUpdateManyInput>
    /**
     * Filter which project_members to update
     */
    where?: project_membersWhereInput
    /**
     * Limit how many project_members to update.
     */
    limit?: number
  }

  /**
   * project_members updateManyAndReturn
   */
  export type project_membersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_members
     */
    select?: project_membersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the project_members
     */
    omit?: project_membersOmit<ExtArgs> | null
    /**
     * The data used to update project_members.
     */
    data: XOR<project_membersUpdateManyMutationInput, project_membersUncheckedUpdateManyInput>
    /**
     * Filter which project_members to update
     */
    where?: project_membersWhereInput
    /**
     * Limit how many project_members to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_membersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * project_members upsert
   */
  export type project_membersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_members
     */
    select?: project_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_members
     */
    omit?: project_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_membersInclude<ExtArgs> | null
    /**
     * The filter to search for the project_members to update in case it exists.
     */
    where: project_membersWhereUniqueInput
    /**
     * In case the project_members found by the `where` argument doesn't exist, create a new project_members with this data.
     */
    create: XOR<project_membersCreateInput, project_membersUncheckedCreateInput>
    /**
     * In case the project_members was found with the provided `where` argument, update it with this data.
     */
    update: XOR<project_membersUpdateInput, project_membersUncheckedUpdateInput>
  }

  /**
   * project_members delete
   */
  export type project_membersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_members
     */
    select?: project_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_members
     */
    omit?: project_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_membersInclude<ExtArgs> | null
    /**
     * Filter which project_members to delete.
     */
    where: project_membersWhereUniqueInput
  }

  /**
   * project_members deleteMany
   */
  export type project_membersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which project_members to delete
     */
    where?: project_membersWhereInput
    /**
     * Limit how many project_members to delete.
     */
    limit?: number
  }

  /**
   * project_members without action
   */
  export type project_membersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_members
     */
    select?: project_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_members
     */
    omit?: project_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_membersInclude<ExtArgs> | null
  }


  /**
   * Model projects
   */

  export type AggregateProjects = {
    _count: ProjectsCountAggregateOutputType | null
    _min: ProjectsMinAggregateOutputType | null
    _max: ProjectsMaxAggregateOutputType | null
  }

  export type ProjectsMinAggregateOutputType = {
    id: string | null
    owner_id: string | null
    name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProjectsMaxAggregateOutputType = {
    id: string | null
    owner_id: string | null
    name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProjectsCountAggregateOutputType = {
    id: number
    owner_id: number
    name: number
    description: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ProjectsMinAggregateInputType = {
    id?: true
    owner_id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type ProjectsMaxAggregateInputType = {
    id?: true
    owner_id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type ProjectsCountAggregateInputType = {
    id?: true
    owner_id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ProjectsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projects to aggregate.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned projects
    **/
    _count?: true | ProjectsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectsMaxAggregateInputType
  }

  export type GetProjectsAggregateType<T extends ProjectsAggregateArgs> = {
        [P in keyof T & keyof AggregateProjects]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjects[P]>
      : GetScalarType<T[P], AggregateProjects[P]>
  }




  export type projectsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectsWhereInput
    orderBy?: projectsOrderByWithAggregationInput | projectsOrderByWithAggregationInput[]
    by: ProjectsScalarFieldEnum[] | ProjectsScalarFieldEnum
    having?: projectsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectsCountAggregateInputType | true
    _min?: ProjectsMinAggregateInputType
    _max?: ProjectsMaxAggregateInputType
  }

  export type ProjectsGroupByOutputType = {
    id: string
    owner_id: string
    name: string
    description: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: ProjectsCountAggregateOutputType | null
    _min: ProjectsMinAggregateOutputType | null
    _max: ProjectsMaxAggregateOutputType | null
  }

  type GetProjectsGroupByPayload<T extends projectsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectsGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectsGroupByOutputType[P]>
        }
      >
    >


  export type projectsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner_id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    activity_logs?: boolean | projects$activity_logsArgs<ExtArgs>
    project_members?: boolean | projects$project_membersArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    tasks?: boolean | projects$tasksArgs<ExtArgs>
    _count?: boolean | ProjectsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projects"]>

  export type projectsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner_id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projects"]>

  export type projectsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner_id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projects"]>

  export type projectsSelectScalar = {
    id?: boolean
    owner_id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type projectsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "owner_id" | "name" | "description" | "created_at" | "updated_at", ExtArgs["result"]["projects"]>
  export type projectsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activity_logs?: boolean | projects$activity_logsArgs<ExtArgs>
    project_members?: boolean | projects$project_membersArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    tasks?: boolean | projects$tasksArgs<ExtArgs>
    _count?: boolean | ProjectsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type projectsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type projectsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $projectsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "projects"
    objects: {
      activity_logs: Prisma.$activity_logsPayload<ExtArgs>[]
      project_members: Prisma.$project_membersPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>
      tasks: Prisma.$tasksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      owner_id: string
      name: string
      description: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["projects"]>
    composites: {}
  }

  type projectsGetPayload<S extends boolean | null | undefined | projectsDefaultArgs> = $Result.GetResult<Prisma.$projectsPayload, S>

  type projectsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<projectsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectsCountAggregateInputType | true
    }

  export interface projectsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['projects'], meta: { name: 'projects' } }
    /**
     * Find zero or one Projects that matches the filter.
     * @param {projectsFindUniqueArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends projectsFindUniqueArgs>(args: SelectSubset<T, projectsFindUniqueArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Projects that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {projectsFindUniqueOrThrowArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends projectsFindUniqueOrThrowArgs>(args: SelectSubset<T, projectsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsFindFirstArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends projectsFindFirstArgs>(args?: SelectSubset<T, projectsFindFirstArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projects that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsFindFirstOrThrowArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends projectsFindFirstOrThrowArgs>(args?: SelectSubset<T, projectsFindFirstOrThrowArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.projects.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.projects.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectsWithIdOnly = await prisma.projects.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends projectsFindManyArgs>(args?: SelectSubset<T, projectsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Projects.
     * @param {projectsCreateArgs} args - Arguments to create a Projects.
     * @example
     * // Create one Projects
     * const Projects = await prisma.projects.create({
     *   data: {
     *     // ... data to create a Projects
     *   }
     * })
     * 
     */
    create<T extends projectsCreateArgs>(args: SelectSubset<T, projectsCreateArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {projectsCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const projects = await prisma.projects.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends projectsCreateManyArgs>(args?: SelectSubset<T, projectsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {projectsCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const projects = await prisma.projects.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectsWithIdOnly = await prisma.projects.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends projectsCreateManyAndReturnArgs>(args?: SelectSubset<T, projectsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Projects.
     * @param {projectsDeleteArgs} args - Arguments to delete one Projects.
     * @example
     * // Delete one Projects
     * const Projects = await prisma.projects.delete({
     *   where: {
     *     // ... filter to delete one Projects
     *   }
     * })
     * 
     */
    delete<T extends projectsDeleteArgs>(args: SelectSubset<T, projectsDeleteArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Projects.
     * @param {projectsUpdateArgs} args - Arguments to update one Projects.
     * @example
     * // Update one Projects
     * const projects = await prisma.projects.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends projectsUpdateArgs>(args: SelectSubset<T, projectsUpdateArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {projectsDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.projects.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends projectsDeleteManyArgs>(args?: SelectSubset<T, projectsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const projects = await prisma.projects.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends projectsUpdateManyArgs>(args: SelectSubset<T, projectsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {projectsUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const projects = await prisma.projects.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectsWithIdOnly = await prisma.projects.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends projectsUpdateManyAndReturnArgs>(args: SelectSubset<T, projectsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Projects.
     * @param {projectsUpsertArgs} args - Arguments to update or create a Projects.
     * @example
     * // Update or create a Projects
     * const projects = await prisma.projects.upsert({
     *   create: {
     *     // ... data to create a Projects
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Projects we want to update
     *   }
     * })
     */
    upsert<T extends projectsUpsertArgs>(args: SelectSubset<T, projectsUpsertArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.projects.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends projectsCountArgs>(
      args?: Subset<T, projectsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectsAggregateArgs>(args: Subset<T, ProjectsAggregateArgs>): Prisma.PrismaPromise<GetProjectsAggregateType<T>>

    /**
     * Group by Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsGroupByArgs} args - Group by arguments.
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
      T extends projectsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: projectsGroupByArgs['orderBy'] }
        : { orderBy?: projectsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, projectsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the projects model
   */
  readonly fields: projectsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for projects.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__projectsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    activity_logs<T extends projects$activity_logsArgs<ExtArgs> = {}>(args?: Subset<T, projects$activity_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$activity_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    project_members<T extends projects$project_membersArgs<ExtArgs> = {}>(args?: Subset<T, projects$project_membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$project_membersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tasks<T extends projects$tasksArgs<ExtArgs> = {}>(args?: Subset<T, projects$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the projects model
   */
  interface projectsFieldRefs {
    readonly id: FieldRef<"projects", 'String'>
    readonly owner_id: FieldRef<"projects", 'String'>
    readonly name: FieldRef<"projects", 'String'>
    readonly description: FieldRef<"projects", 'String'>
    readonly created_at: FieldRef<"projects", 'DateTime'>
    readonly updated_at: FieldRef<"projects", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * projects findUnique
   */
  export type projectsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where: projectsWhereUniqueInput
  }

  /**
   * projects findUniqueOrThrow
   */
  export type projectsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where: projectsWhereUniqueInput
  }

  /**
   * projects findFirst
   */
  export type projectsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * projects findFirstOrThrow
   */
  export type projectsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * projects findMany
   */
  export type projectsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing projects.
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * projects create
   */
  export type projectsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * The data needed to create a projects.
     */
    data: XOR<projectsCreateInput, projectsUncheckedCreateInput>
  }

  /**
   * projects createMany
   */
  export type projectsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many projects.
     */
    data: projectsCreateManyInput | projectsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * projects createManyAndReturn
   */
  export type projectsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * The data used to create many projects.
     */
    data: projectsCreateManyInput | projectsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * projects update
   */
  export type projectsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * The data needed to update a projects.
     */
    data: XOR<projectsUpdateInput, projectsUncheckedUpdateInput>
    /**
     * Choose, which projects to update.
     */
    where: projectsWhereUniqueInput
  }

  /**
   * projects updateMany
   */
  export type projectsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update projects.
     */
    data: XOR<projectsUpdateManyMutationInput, projectsUncheckedUpdateManyInput>
    /**
     * Filter which projects to update
     */
    where?: projectsWhereInput
    /**
     * Limit how many projects to update.
     */
    limit?: number
  }

  /**
   * projects updateManyAndReturn
   */
  export type projectsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * The data used to update projects.
     */
    data: XOR<projectsUpdateManyMutationInput, projectsUncheckedUpdateManyInput>
    /**
     * Filter which projects to update
     */
    where?: projectsWhereInput
    /**
     * Limit how many projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * projects upsert
   */
  export type projectsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * The filter to search for the projects to update in case it exists.
     */
    where: projectsWhereUniqueInput
    /**
     * In case the projects found by the `where` argument doesn't exist, create a new projects with this data.
     */
    create: XOR<projectsCreateInput, projectsUncheckedCreateInput>
    /**
     * In case the projects was found with the provided `where` argument, update it with this data.
     */
    update: XOR<projectsUpdateInput, projectsUncheckedUpdateInput>
  }

  /**
   * projects delete
   */
  export type projectsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter which projects to delete.
     */
    where: projectsWhereUniqueInput
  }

  /**
   * projects deleteMany
   */
  export type projectsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projects to delete
     */
    where?: projectsWhereInput
    /**
     * Limit how many projects to delete.
     */
    limit?: number
  }

  /**
   * projects.activity_logs
   */
  export type projects$activity_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_logs
     */
    select?: activity_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activity_logs
     */
    omit?: activity_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activity_logsInclude<ExtArgs> | null
    where?: activity_logsWhereInput
    orderBy?: activity_logsOrderByWithRelationInput | activity_logsOrderByWithRelationInput[]
    cursor?: activity_logsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Activity_logsScalarFieldEnum | Activity_logsScalarFieldEnum[]
  }

  /**
   * projects.project_members
   */
  export type projects$project_membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_members
     */
    select?: project_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_members
     */
    omit?: project_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_membersInclude<ExtArgs> | null
    where?: project_membersWhereInput
    orderBy?: project_membersOrderByWithRelationInput | project_membersOrderByWithRelationInput[]
    cursor?: project_membersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Project_membersScalarFieldEnum | Project_membersScalarFieldEnum[]
  }

  /**
   * projects.tasks
   */
  export type projects$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    where?: tasksWhereInput
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    cursor?: tasksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * projects without action
   */
  export type projectsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
  }


  /**
   * Model tags
   */

  export type AggregateTags = {
    _count: TagsCountAggregateOutputType | null
    _min: TagsMinAggregateOutputType | null
    _max: TagsMaxAggregateOutputType | null
  }

  export type TagsMinAggregateOutputType = {
    id: string | null
    owner_id: string | null
    name: string | null
    color: string | null
    created_at: Date | null
  }

  export type TagsMaxAggregateOutputType = {
    id: string | null
    owner_id: string | null
    name: string | null
    color: string | null
    created_at: Date | null
  }

  export type TagsCountAggregateOutputType = {
    id: number
    owner_id: number
    name: number
    color: number
    created_at: number
    _all: number
  }


  export type TagsMinAggregateInputType = {
    id?: true
    owner_id?: true
    name?: true
    color?: true
    created_at?: true
  }

  export type TagsMaxAggregateInputType = {
    id?: true
    owner_id?: true
    name?: true
    color?: true
    created_at?: true
  }

  export type TagsCountAggregateInputType = {
    id?: true
    owner_id?: true
    name?: true
    color?: true
    created_at?: true
    _all?: true
  }

  export type TagsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tags to aggregate.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tags
    **/
    _count?: true | TagsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagsMaxAggregateInputType
  }

  export type GetTagsAggregateType<T extends TagsAggregateArgs> = {
        [P in keyof T & keyof AggregateTags]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTags[P]>
      : GetScalarType<T[P], AggregateTags[P]>
  }




  export type tagsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tagsWhereInput
    orderBy?: tagsOrderByWithAggregationInput | tagsOrderByWithAggregationInput[]
    by: TagsScalarFieldEnum[] | TagsScalarFieldEnum
    having?: tagsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagsCountAggregateInputType | true
    _min?: TagsMinAggregateInputType
    _max?: TagsMaxAggregateInputType
  }

  export type TagsGroupByOutputType = {
    id: string
    owner_id: string
    name: string
    color: string | null
    created_at: Date | null
    _count: TagsCountAggregateOutputType | null
    _min: TagsMinAggregateOutputType | null
    _max: TagsMaxAggregateOutputType | null
  }

  type GetTagsGroupByPayload<T extends tagsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagsGroupByOutputType[P]>
            : GetScalarType<T[P], TagsGroupByOutputType[P]>
        }
      >
    >


  export type tagsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner_id?: boolean
    name?: boolean
    color?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    task_tags?: boolean | tags$task_tagsArgs<ExtArgs>
    _count?: boolean | TagsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tags"]>

  export type tagsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner_id?: boolean
    name?: boolean
    color?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tags"]>

  export type tagsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner_id?: boolean
    name?: boolean
    color?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tags"]>

  export type tagsSelectScalar = {
    id?: boolean
    owner_id?: boolean
    name?: boolean
    color?: boolean
    created_at?: boolean
  }

  export type tagsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "owner_id" | "name" | "color" | "created_at", ExtArgs["result"]["tags"]>
  export type tagsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    task_tags?: boolean | tags$task_tagsArgs<ExtArgs>
    _count?: boolean | TagsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tagsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type tagsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $tagsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tags"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      task_tags: Prisma.$task_tagsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      owner_id: string
      name: string
      color: string | null
      created_at: Date | null
    }, ExtArgs["result"]["tags"]>
    composites: {}
  }

  type tagsGetPayload<S extends boolean | null | undefined | tagsDefaultArgs> = $Result.GetResult<Prisma.$tagsPayload, S>

  type tagsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tagsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagsCountAggregateInputType | true
    }

  export interface tagsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tags'], meta: { name: 'tags' } }
    /**
     * Find zero or one Tags that matches the filter.
     * @param {tagsFindUniqueArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tagsFindUniqueArgs>(args: SelectSubset<T, tagsFindUniqueArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tags that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tagsFindUniqueOrThrowArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tagsFindUniqueOrThrowArgs>(args: SelectSubset<T, tagsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsFindFirstArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tagsFindFirstArgs>(args?: SelectSubset<T, tagsFindFirstArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tags that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsFindFirstOrThrowArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tagsFindFirstOrThrowArgs>(args?: SelectSubset<T, tagsFindFirstOrThrowArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tags.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tags.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagsWithIdOnly = await prisma.tags.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tagsFindManyArgs>(args?: SelectSubset<T, tagsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tags.
     * @param {tagsCreateArgs} args - Arguments to create a Tags.
     * @example
     * // Create one Tags
     * const Tags = await prisma.tags.create({
     *   data: {
     *     // ... data to create a Tags
     *   }
     * })
     * 
     */
    create<T extends tagsCreateArgs>(args: SelectSubset<T, tagsCreateArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {tagsCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tags = await prisma.tags.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tagsCreateManyArgs>(args?: SelectSubset<T, tagsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {tagsCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tags = await prisma.tags.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagsWithIdOnly = await prisma.tags.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tagsCreateManyAndReturnArgs>(args?: SelectSubset<T, tagsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tags.
     * @param {tagsDeleteArgs} args - Arguments to delete one Tags.
     * @example
     * // Delete one Tags
     * const Tags = await prisma.tags.delete({
     *   where: {
     *     // ... filter to delete one Tags
     *   }
     * })
     * 
     */
    delete<T extends tagsDeleteArgs>(args: SelectSubset<T, tagsDeleteArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tags.
     * @param {tagsUpdateArgs} args - Arguments to update one Tags.
     * @example
     * // Update one Tags
     * const tags = await prisma.tags.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tagsUpdateArgs>(args: SelectSubset<T, tagsUpdateArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {tagsDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tags.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tagsDeleteManyArgs>(args?: SelectSubset<T, tagsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tags = await prisma.tags.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tagsUpdateManyArgs>(args: SelectSubset<T, tagsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {tagsUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tags = await prisma.tags.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagsWithIdOnly = await prisma.tags.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tagsUpdateManyAndReturnArgs>(args: SelectSubset<T, tagsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tags.
     * @param {tagsUpsertArgs} args - Arguments to update or create a Tags.
     * @example
     * // Update or create a Tags
     * const tags = await prisma.tags.upsert({
     *   create: {
     *     // ... data to create a Tags
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tags we want to update
     *   }
     * })
     */
    upsert<T extends tagsUpsertArgs>(args: SelectSubset<T, tagsUpsertArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tags.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends tagsCountArgs>(
      args?: Subset<T, tagsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagsAggregateArgs>(args: Subset<T, TagsAggregateArgs>): Prisma.PrismaPromise<GetTagsAggregateType<T>>

    /**
     * Group by Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsGroupByArgs} args - Group by arguments.
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
      T extends tagsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tagsGroupByArgs['orderBy'] }
        : { orderBy?: tagsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tagsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tags model
   */
  readonly fields: tagsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tags.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tagsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    task_tags<T extends tags$task_tagsArgs<ExtArgs> = {}>(args?: Subset<T, tags$task_tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$task_tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the tags model
   */
  interface tagsFieldRefs {
    readonly id: FieldRef<"tags", 'String'>
    readonly owner_id: FieldRef<"tags", 'String'>
    readonly name: FieldRef<"tags", 'String'>
    readonly color: FieldRef<"tags", 'String'>
    readonly created_at: FieldRef<"tags", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tags findUnique
   */
  export type tagsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags findUniqueOrThrow
   */
  export type tagsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags findFirst
   */
  export type tagsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tags.
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tags.
     */
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * tags findFirstOrThrow
   */
  export type tagsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tags.
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tags.
     */
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * tags findMany
   */
  export type tagsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tags.
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * tags create
   */
  export type tagsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * The data needed to create a tags.
     */
    data: XOR<tagsCreateInput, tagsUncheckedCreateInput>
  }

  /**
   * tags createMany
   */
  export type tagsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tags.
     */
    data: tagsCreateManyInput | tagsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tags createManyAndReturn
   */
  export type tagsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * The data used to create many tags.
     */
    data: tagsCreateManyInput | tagsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tags update
   */
  export type tagsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * The data needed to update a tags.
     */
    data: XOR<tagsUpdateInput, tagsUncheckedUpdateInput>
    /**
     * Choose, which tags to update.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags updateMany
   */
  export type tagsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tags.
     */
    data: XOR<tagsUpdateManyMutationInput, tagsUncheckedUpdateManyInput>
    /**
     * Filter which tags to update
     */
    where?: tagsWhereInput
    /**
     * Limit how many tags to update.
     */
    limit?: number
  }

  /**
   * tags updateManyAndReturn
   */
  export type tagsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * The data used to update tags.
     */
    data: XOR<tagsUpdateManyMutationInput, tagsUncheckedUpdateManyInput>
    /**
     * Filter which tags to update
     */
    where?: tagsWhereInput
    /**
     * Limit how many tags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * tags upsert
   */
  export type tagsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * The filter to search for the tags to update in case it exists.
     */
    where: tagsWhereUniqueInput
    /**
     * In case the tags found by the `where` argument doesn't exist, create a new tags with this data.
     */
    create: XOR<tagsCreateInput, tagsUncheckedCreateInput>
    /**
     * In case the tags was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tagsUpdateInput, tagsUncheckedUpdateInput>
  }

  /**
   * tags delete
   */
  export type tagsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter which tags to delete.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags deleteMany
   */
  export type tagsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tags to delete
     */
    where?: tagsWhereInput
    /**
     * Limit how many tags to delete.
     */
    limit?: number
  }

  /**
   * tags.task_tags
   */
  export type tags$task_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_tags
     */
    select?: task_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_tags
     */
    omit?: task_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_tagsInclude<ExtArgs> | null
    where?: task_tagsWhereInput
    orderBy?: task_tagsOrderByWithRelationInput | task_tagsOrderByWithRelationInput[]
    cursor?: task_tagsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Task_tagsScalarFieldEnum | Task_tagsScalarFieldEnum[]
  }

  /**
   * tags without action
   */
  export type tagsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
  }


  /**
   * Model task_tags
   */

  export type AggregateTask_tags = {
    _count: Task_tagsCountAggregateOutputType | null
    _min: Task_tagsMinAggregateOutputType | null
    _max: Task_tagsMaxAggregateOutputType | null
  }

  export type Task_tagsMinAggregateOutputType = {
    id: string | null
    task_id: string | null
    tag_id: string | null
  }

  export type Task_tagsMaxAggregateOutputType = {
    id: string | null
    task_id: string | null
    tag_id: string | null
  }

  export type Task_tagsCountAggregateOutputType = {
    id: number
    task_id: number
    tag_id: number
    _all: number
  }


  export type Task_tagsMinAggregateInputType = {
    id?: true
    task_id?: true
    tag_id?: true
  }

  export type Task_tagsMaxAggregateInputType = {
    id?: true
    task_id?: true
    tag_id?: true
  }

  export type Task_tagsCountAggregateInputType = {
    id?: true
    task_id?: true
    tag_id?: true
    _all?: true
  }

  export type Task_tagsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which task_tags to aggregate.
     */
    where?: task_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of task_tags to fetch.
     */
    orderBy?: task_tagsOrderByWithRelationInput | task_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: task_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` task_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` task_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned task_tags
    **/
    _count?: true | Task_tagsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Task_tagsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Task_tagsMaxAggregateInputType
  }

  export type GetTask_tagsAggregateType<T extends Task_tagsAggregateArgs> = {
        [P in keyof T & keyof AggregateTask_tags]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask_tags[P]>
      : GetScalarType<T[P], AggregateTask_tags[P]>
  }




  export type task_tagsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: task_tagsWhereInput
    orderBy?: task_tagsOrderByWithAggregationInput | task_tagsOrderByWithAggregationInput[]
    by: Task_tagsScalarFieldEnum[] | Task_tagsScalarFieldEnum
    having?: task_tagsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Task_tagsCountAggregateInputType | true
    _min?: Task_tagsMinAggregateInputType
    _max?: Task_tagsMaxAggregateInputType
  }

  export type Task_tagsGroupByOutputType = {
    id: string
    task_id: string
    tag_id: string
    _count: Task_tagsCountAggregateOutputType | null
    _min: Task_tagsMinAggregateOutputType | null
    _max: Task_tagsMaxAggregateOutputType | null
  }

  type GetTask_tagsGroupByPayload<T extends task_tagsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Task_tagsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Task_tagsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Task_tagsGroupByOutputType[P]>
            : GetScalarType<T[P], Task_tagsGroupByOutputType[P]>
        }
      >
    >


  export type task_tagsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    task_id?: boolean
    tag_id?: boolean
    tags?: boolean | tagsDefaultArgs<ExtArgs>
    tasks?: boolean | tasksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task_tags"]>

  export type task_tagsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    task_id?: boolean
    tag_id?: boolean
    tags?: boolean | tagsDefaultArgs<ExtArgs>
    tasks?: boolean | tasksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task_tags"]>

  export type task_tagsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    task_id?: boolean
    tag_id?: boolean
    tags?: boolean | tagsDefaultArgs<ExtArgs>
    tasks?: boolean | tasksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task_tags"]>

  export type task_tagsSelectScalar = {
    id?: boolean
    task_id?: boolean
    tag_id?: boolean
  }

  export type task_tagsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "task_id" | "tag_id", ExtArgs["result"]["task_tags"]>
  export type task_tagsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | tagsDefaultArgs<ExtArgs>
    tasks?: boolean | tasksDefaultArgs<ExtArgs>
  }
  export type task_tagsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | tagsDefaultArgs<ExtArgs>
    tasks?: boolean | tasksDefaultArgs<ExtArgs>
  }
  export type task_tagsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | tagsDefaultArgs<ExtArgs>
    tasks?: boolean | tasksDefaultArgs<ExtArgs>
  }

  export type $task_tagsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "task_tags"
    objects: {
      tags: Prisma.$tagsPayload<ExtArgs>
      tasks: Prisma.$tasksPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      task_id: string
      tag_id: string
    }, ExtArgs["result"]["task_tags"]>
    composites: {}
  }

  type task_tagsGetPayload<S extends boolean | null | undefined | task_tagsDefaultArgs> = $Result.GetResult<Prisma.$task_tagsPayload, S>

  type task_tagsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<task_tagsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Task_tagsCountAggregateInputType | true
    }

  export interface task_tagsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['task_tags'], meta: { name: 'task_tags' } }
    /**
     * Find zero or one Task_tags that matches the filter.
     * @param {task_tagsFindUniqueArgs} args - Arguments to find a Task_tags
     * @example
     * // Get one Task_tags
     * const task_tags = await prisma.task_tags.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends task_tagsFindUniqueArgs>(args: SelectSubset<T, task_tagsFindUniqueArgs<ExtArgs>>): Prisma__task_tagsClient<$Result.GetResult<Prisma.$task_tagsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task_tags that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {task_tagsFindUniqueOrThrowArgs} args - Arguments to find a Task_tags
     * @example
     * // Get one Task_tags
     * const task_tags = await prisma.task_tags.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends task_tagsFindUniqueOrThrowArgs>(args: SelectSubset<T, task_tagsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__task_tagsClient<$Result.GetResult<Prisma.$task_tagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task_tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {task_tagsFindFirstArgs} args - Arguments to find a Task_tags
     * @example
     * // Get one Task_tags
     * const task_tags = await prisma.task_tags.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends task_tagsFindFirstArgs>(args?: SelectSubset<T, task_tagsFindFirstArgs<ExtArgs>>): Prisma__task_tagsClient<$Result.GetResult<Prisma.$task_tagsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task_tags that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {task_tagsFindFirstOrThrowArgs} args - Arguments to find a Task_tags
     * @example
     * // Get one Task_tags
     * const task_tags = await prisma.task_tags.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends task_tagsFindFirstOrThrowArgs>(args?: SelectSubset<T, task_tagsFindFirstOrThrowArgs<ExtArgs>>): Prisma__task_tagsClient<$Result.GetResult<Prisma.$task_tagsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Task_tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {task_tagsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Task_tags
     * const task_tags = await prisma.task_tags.findMany()
     * 
     * // Get first 10 Task_tags
     * const task_tags = await prisma.task_tags.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const task_tagsWithIdOnly = await prisma.task_tags.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends task_tagsFindManyArgs>(args?: SelectSubset<T, task_tagsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$task_tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task_tags.
     * @param {task_tagsCreateArgs} args - Arguments to create a Task_tags.
     * @example
     * // Create one Task_tags
     * const Task_tags = await prisma.task_tags.create({
     *   data: {
     *     // ... data to create a Task_tags
     *   }
     * })
     * 
     */
    create<T extends task_tagsCreateArgs>(args: SelectSubset<T, task_tagsCreateArgs<ExtArgs>>): Prisma__task_tagsClient<$Result.GetResult<Prisma.$task_tagsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Task_tags.
     * @param {task_tagsCreateManyArgs} args - Arguments to create many Task_tags.
     * @example
     * // Create many Task_tags
     * const task_tags = await prisma.task_tags.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends task_tagsCreateManyArgs>(args?: SelectSubset<T, task_tagsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Task_tags and returns the data saved in the database.
     * @param {task_tagsCreateManyAndReturnArgs} args - Arguments to create many Task_tags.
     * @example
     * // Create many Task_tags
     * const task_tags = await prisma.task_tags.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Task_tags and only return the `id`
     * const task_tagsWithIdOnly = await prisma.task_tags.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends task_tagsCreateManyAndReturnArgs>(args?: SelectSubset<T, task_tagsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$task_tagsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task_tags.
     * @param {task_tagsDeleteArgs} args - Arguments to delete one Task_tags.
     * @example
     * // Delete one Task_tags
     * const Task_tags = await prisma.task_tags.delete({
     *   where: {
     *     // ... filter to delete one Task_tags
     *   }
     * })
     * 
     */
    delete<T extends task_tagsDeleteArgs>(args: SelectSubset<T, task_tagsDeleteArgs<ExtArgs>>): Prisma__task_tagsClient<$Result.GetResult<Prisma.$task_tagsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task_tags.
     * @param {task_tagsUpdateArgs} args - Arguments to update one Task_tags.
     * @example
     * // Update one Task_tags
     * const task_tags = await prisma.task_tags.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends task_tagsUpdateArgs>(args: SelectSubset<T, task_tagsUpdateArgs<ExtArgs>>): Prisma__task_tagsClient<$Result.GetResult<Prisma.$task_tagsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Task_tags.
     * @param {task_tagsDeleteManyArgs} args - Arguments to filter Task_tags to delete.
     * @example
     * // Delete a few Task_tags
     * const { count } = await prisma.task_tags.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends task_tagsDeleteManyArgs>(args?: SelectSubset<T, task_tagsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Task_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {task_tagsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Task_tags
     * const task_tags = await prisma.task_tags.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends task_tagsUpdateManyArgs>(args: SelectSubset<T, task_tagsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Task_tags and returns the data updated in the database.
     * @param {task_tagsUpdateManyAndReturnArgs} args - Arguments to update many Task_tags.
     * @example
     * // Update many Task_tags
     * const task_tags = await prisma.task_tags.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Task_tags and only return the `id`
     * const task_tagsWithIdOnly = await prisma.task_tags.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends task_tagsUpdateManyAndReturnArgs>(args: SelectSubset<T, task_tagsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$task_tagsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task_tags.
     * @param {task_tagsUpsertArgs} args - Arguments to update or create a Task_tags.
     * @example
     * // Update or create a Task_tags
     * const task_tags = await prisma.task_tags.upsert({
     *   create: {
     *     // ... data to create a Task_tags
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task_tags we want to update
     *   }
     * })
     */
    upsert<T extends task_tagsUpsertArgs>(args: SelectSubset<T, task_tagsUpsertArgs<ExtArgs>>): Prisma__task_tagsClient<$Result.GetResult<Prisma.$task_tagsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Task_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {task_tagsCountArgs} args - Arguments to filter Task_tags to count.
     * @example
     * // Count the number of Task_tags
     * const count = await prisma.task_tags.count({
     *   where: {
     *     // ... the filter for the Task_tags we want to count
     *   }
     * })
    **/
    count<T extends task_tagsCountArgs>(
      args?: Subset<T, task_tagsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Task_tagsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Task_tagsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Task_tagsAggregateArgs>(args: Subset<T, Task_tagsAggregateArgs>): Prisma.PrismaPromise<GetTask_tagsAggregateType<T>>

    /**
     * Group by Task_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {task_tagsGroupByArgs} args - Group by arguments.
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
      T extends task_tagsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: task_tagsGroupByArgs['orderBy'] }
        : { orderBy?: task_tagsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, task_tagsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTask_tagsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the task_tags model
   */
  readonly fields: task_tagsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for task_tags.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__task_tagsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tags<T extends tagsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tagsDefaultArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tasks<T extends tasksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tasksDefaultArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the task_tags model
   */
  interface task_tagsFieldRefs {
    readonly id: FieldRef<"task_tags", 'String'>
    readonly task_id: FieldRef<"task_tags", 'String'>
    readonly tag_id: FieldRef<"task_tags", 'String'>
  }
    

  // Custom InputTypes
  /**
   * task_tags findUnique
   */
  export type task_tagsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_tags
     */
    select?: task_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_tags
     */
    omit?: task_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_tagsInclude<ExtArgs> | null
    /**
     * Filter, which task_tags to fetch.
     */
    where: task_tagsWhereUniqueInput
  }

  /**
   * task_tags findUniqueOrThrow
   */
  export type task_tagsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_tags
     */
    select?: task_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_tags
     */
    omit?: task_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_tagsInclude<ExtArgs> | null
    /**
     * Filter, which task_tags to fetch.
     */
    where: task_tagsWhereUniqueInput
  }

  /**
   * task_tags findFirst
   */
  export type task_tagsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_tags
     */
    select?: task_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_tags
     */
    omit?: task_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_tagsInclude<ExtArgs> | null
    /**
     * Filter, which task_tags to fetch.
     */
    where?: task_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of task_tags to fetch.
     */
    orderBy?: task_tagsOrderByWithRelationInput | task_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for task_tags.
     */
    cursor?: task_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` task_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` task_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of task_tags.
     */
    distinct?: Task_tagsScalarFieldEnum | Task_tagsScalarFieldEnum[]
  }

  /**
   * task_tags findFirstOrThrow
   */
  export type task_tagsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_tags
     */
    select?: task_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_tags
     */
    omit?: task_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_tagsInclude<ExtArgs> | null
    /**
     * Filter, which task_tags to fetch.
     */
    where?: task_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of task_tags to fetch.
     */
    orderBy?: task_tagsOrderByWithRelationInput | task_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for task_tags.
     */
    cursor?: task_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` task_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` task_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of task_tags.
     */
    distinct?: Task_tagsScalarFieldEnum | Task_tagsScalarFieldEnum[]
  }

  /**
   * task_tags findMany
   */
  export type task_tagsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_tags
     */
    select?: task_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_tags
     */
    omit?: task_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_tagsInclude<ExtArgs> | null
    /**
     * Filter, which task_tags to fetch.
     */
    where?: task_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of task_tags to fetch.
     */
    orderBy?: task_tagsOrderByWithRelationInput | task_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing task_tags.
     */
    cursor?: task_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` task_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` task_tags.
     */
    skip?: number
    distinct?: Task_tagsScalarFieldEnum | Task_tagsScalarFieldEnum[]
  }

  /**
   * task_tags create
   */
  export type task_tagsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_tags
     */
    select?: task_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_tags
     */
    omit?: task_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_tagsInclude<ExtArgs> | null
    /**
     * The data needed to create a task_tags.
     */
    data: XOR<task_tagsCreateInput, task_tagsUncheckedCreateInput>
  }

  /**
   * task_tags createMany
   */
  export type task_tagsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many task_tags.
     */
    data: task_tagsCreateManyInput | task_tagsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * task_tags createManyAndReturn
   */
  export type task_tagsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_tags
     */
    select?: task_tagsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the task_tags
     */
    omit?: task_tagsOmit<ExtArgs> | null
    /**
     * The data used to create many task_tags.
     */
    data: task_tagsCreateManyInput | task_tagsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_tagsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * task_tags update
   */
  export type task_tagsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_tags
     */
    select?: task_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_tags
     */
    omit?: task_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_tagsInclude<ExtArgs> | null
    /**
     * The data needed to update a task_tags.
     */
    data: XOR<task_tagsUpdateInput, task_tagsUncheckedUpdateInput>
    /**
     * Choose, which task_tags to update.
     */
    where: task_tagsWhereUniqueInput
  }

  /**
   * task_tags updateMany
   */
  export type task_tagsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update task_tags.
     */
    data: XOR<task_tagsUpdateManyMutationInput, task_tagsUncheckedUpdateManyInput>
    /**
     * Filter which task_tags to update
     */
    where?: task_tagsWhereInput
    /**
     * Limit how many task_tags to update.
     */
    limit?: number
  }

  /**
   * task_tags updateManyAndReturn
   */
  export type task_tagsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_tags
     */
    select?: task_tagsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the task_tags
     */
    omit?: task_tagsOmit<ExtArgs> | null
    /**
     * The data used to update task_tags.
     */
    data: XOR<task_tagsUpdateManyMutationInput, task_tagsUncheckedUpdateManyInput>
    /**
     * Filter which task_tags to update
     */
    where?: task_tagsWhereInput
    /**
     * Limit how many task_tags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_tagsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * task_tags upsert
   */
  export type task_tagsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_tags
     */
    select?: task_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_tags
     */
    omit?: task_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_tagsInclude<ExtArgs> | null
    /**
     * The filter to search for the task_tags to update in case it exists.
     */
    where: task_tagsWhereUniqueInput
    /**
     * In case the task_tags found by the `where` argument doesn't exist, create a new task_tags with this data.
     */
    create: XOR<task_tagsCreateInput, task_tagsUncheckedCreateInput>
    /**
     * In case the task_tags was found with the provided `where` argument, update it with this data.
     */
    update: XOR<task_tagsUpdateInput, task_tagsUncheckedUpdateInput>
  }

  /**
   * task_tags delete
   */
  export type task_tagsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_tags
     */
    select?: task_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_tags
     */
    omit?: task_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_tagsInclude<ExtArgs> | null
    /**
     * Filter which task_tags to delete.
     */
    where: task_tagsWhereUniqueInput
  }

  /**
   * task_tags deleteMany
   */
  export type task_tagsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which task_tags to delete
     */
    where?: task_tagsWhereInput
    /**
     * Limit how many task_tags to delete.
     */
    limit?: number
  }

  /**
   * task_tags without action
   */
  export type task_tagsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_tags
     */
    select?: task_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_tags
     */
    omit?: task_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_tagsInclude<ExtArgs> | null
  }


  /**
   * Model tasks
   */

  export type AggregateTasks = {
    _count: TasksCountAggregateOutputType | null
    _min: TasksMinAggregateOutputType | null
    _max: TasksMaxAggregateOutputType | null
  }

  export type TasksMinAggregateOutputType = {
    id: string | null
    project_id: string | null
    creator_id: string | null
    assignee_id: string | null
    title: string | null
    description: string | null
    status: string | null
    priority: string | null
    due_date: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TasksMaxAggregateOutputType = {
    id: string | null
    project_id: string | null
    creator_id: string | null
    assignee_id: string | null
    title: string | null
    description: string | null
    status: string | null
    priority: string | null
    due_date: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TasksCountAggregateOutputType = {
    id: number
    project_id: number
    creator_id: number
    assignee_id: number
    title: number
    description: number
    status: number
    priority: number
    due_date: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TasksMinAggregateInputType = {
    id?: true
    project_id?: true
    creator_id?: true
    assignee_id?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    due_date?: true
    created_at?: true
    updated_at?: true
  }

  export type TasksMaxAggregateInputType = {
    id?: true
    project_id?: true
    creator_id?: true
    assignee_id?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    due_date?: true
    created_at?: true
    updated_at?: true
  }

  export type TasksCountAggregateInputType = {
    id?: true
    project_id?: true
    creator_id?: true
    assignee_id?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    due_date?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TasksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tasks to aggregate.
     */
    where?: tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tasks
    **/
    _count?: true | TasksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TasksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TasksMaxAggregateInputType
  }

  export type GetTasksAggregateType<T extends TasksAggregateArgs> = {
        [P in keyof T & keyof AggregateTasks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTasks[P]>
      : GetScalarType<T[P], AggregateTasks[P]>
  }




  export type tasksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tasksWhereInput
    orderBy?: tasksOrderByWithAggregationInput | tasksOrderByWithAggregationInput[]
    by: TasksScalarFieldEnum[] | TasksScalarFieldEnum
    having?: tasksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TasksCountAggregateInputType | true
    _min?: TasksMinAggregateInputType
    _max?: TasksMaxAggregateInputType
  }

  export type TasksGroupByOutputType = {
    id: string
    project_id: string
    creator_id: string
    assignee_id: string | null
    title: string
    description: string | null
    status: string | null
    priority: string | null
    due_date: Date | null
    created_at: Date | null
    updated_at: Date | null
    _count: TasksCountAggregateOutputType | null
    _min: TasksMinAggregateOutputType | null
    _max: TasksMaxAggregateOutputType | null
  }

  type GetTasksGroupByPayload<T extends tasksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TasksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TasksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TasksGroupByOutputType[P]>
            : GetScalarType<T[P], TasksGroupByOutputType[P]>
        }
      >
    >


  export type tasksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project_id?: boolean
    creator_id?: boolean
    assignee_id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    due_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    activity_logs?: boolean | tasks$activity_logsArgs<ExtArgs>
    task_tags?: boolean | tasks$task_tagsArgs<ExtArgs>
    users_tasks_assignee_idTousers?: boolean | tasks$users_tasks_assignee_idTousersArgs<ExtArgs>
    users_tasks_creator_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    projects?: boolean | projectsDefaultArgs<ExtArgs>
    _count?: boolean | TasksCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tasks"]>

  export type tasksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project_id?: boolean
    creator_id?: boolean
    assignee_id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    due_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    users_tasks_assignee_idTousers?: boolean | tasks$users_tasks_assignee_idTousersArgs<ExtArgs>
    users_tasks_creator_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    projects?: boolean | projectsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tasks"]>

  export type tasksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project_id?: boolean
    creator_id?: boolean
    assignee_id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    due_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    users_tasks_assignee_idTousers?: boolean | tasks$users_tasks_assignee_idTousersArgs<ExtArgs>
    users_tasks_creator_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    projects?: boolean | projectsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tasks"]>

  export type tasksSelectScalar = {
    id?: boolean
    project_id?: boolean
    creator_id?: boolean
    assignee_id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    due_date?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type tasksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "project_id" | "creator_id" | "assignee_id" | "title" | "description" | "status" | "priority" | "due_date" | "created_at" | "updated_at", ExtArgs["result"]["tasks"]>
  export type tasksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activity_logs?: boolean | tasks$activity_logsArgs<ExtArgs>
    task_tags?: boolean | tasks$task_tagsArgs<ExtArgs>
    users_tasks_assignee_idTousers?: boolean | tasks$users_tasks_assignee_idTousersArgs<ExtArgs>
    users_tasks_creator_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    projects?: boolean | projectsDefaultArgs<ExtArgs>
    _count?: boolean | TasksCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tasksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_tasks_assignee_idTousers?: boolean | tasks$users_tasks_assignee_idTousersArgs<ExtArgs>
    users_tasks_creator_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    projects?: boolean | projectsDefaultArgs<ExtArgs>
  }
  export type tasksIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_tasks_assignee_idTousers?: boolean | tasks$users_tasks_assignee_idTousersArgs<ExtArgs>
    users_tasks_creator_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    projects?: boolean | projectsDefaultArgs<ExtArgs>
  }

  export type $tasksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tasks"
    objects: {
      activity_logs: Prisma.$activity_logsPayload<ExtArgs>[]
      task_tags: Prisma.$task_tagsPayload<ExtArgs>[]
      users_tasks_assignee_idTousers: Prisma.$usersPayload<ExtArgs> | null
      users_tasks_creator_idTousers: Prisma.$usersPayload<ExtArgs>
      projects: Prisma.$projectsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      project_id: string
      creator_id: string
      assignee_id: string | null
      title: string
      description: string | null
      status: string | null
      priority: string | null
      due_date: Date | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["tasks"]>
    composites: {}
  }

  type tasksGetPayload<S extends boolean | null | undefined | tasksDefaultArgs> = $Result.GetResult<Prisma.$tasksPayload, S>

  type tasksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tasksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TasksCountAggregateInputType | true
    }

  export interface tasksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tasks'], meta: { name: 'tasks' } }
    /**
     * Find zero or one Tasks that matches the filter.
     * @param {tasksFindUniqueArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tasksFindUniqueArgs>(args: SelectSubset<T, tasksFindUniqueArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tasks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tasksFindUniqueOrThrowArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tasksFindUniqueOrThrowArgs>(args: SelectSubset<T, tasksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksFindFirstArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tasksFindFirstArgs>(args?: SelectSubset<T, tasksFindFirstArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tasks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksFindFirstOrThrowArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tasksFindFirstOrThrowArgs>(args?: SelectSubset<T, tasksFindFirstOrThrowArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.tasks.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.tasks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tasksWithIdOnly = await prisma.tasks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tasksFindManyArgs>(args?: SelectSubset<T, tasksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tasks.
     * @param {tasksCreateArgs} args - Arguments to create a Tasks.
     * @example
     * // Create one Tasks
     * const Tasks = await prisma.tasks.create({
     *   data: {
     *     // ... data to create a Tasks
     *   }
     * })
     * 
     */
    create<T extends tasksCreateArgs>(args: SelectSubset<T, tasksCreateArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {tasksCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const tasks = await prisma.tasks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tasksCreateManyArgs>(args?: SelectSubset<T, tasksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {tasksCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const tasks = await prisma.tasks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const tasksWithIdOnly = await prisma.tasks.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tasksCreateManyAndReturnArgs>(args?: SelectSubset<T, tasksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tasks.
     * @param {tasksDeleteArgs} args - Arguments to delete one Tasks.
     * @example
     * // Delete one Tasks
     * const Tasks = await prisma.tasks.delete({
     *   where: {
     *     // ... filter to delete one Tasks
     *   }
     * })
     * 
     */
    delete<T extends tasksDeleteArgs>(args: SelectSubset<T, tasksDeleteArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tasks.
     * @param {tasksUpdateArgs} args - Arguments to update one Tasks.
     * @example
     * // Update one Tasks
     * const tasks = await prisma.tasks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tasksUpdateArgs>(args: SelectSubset<T, tasksUpdateArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {tasksDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.tasks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tasksDeleteManyArgs>(args?: SelectSubset<T, tasksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const tasks = await prisma.tasks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tasksUpdateManyArgs>(args: SelectSubset<T, tasksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {tasksUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const tasks = await prisma.tasks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const tasksWithIdOnly = await prisma.tasks.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tasksUpdateManyAndReturnArgs>(args: SelectSubset<T, tasksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tasks.
     * @param {tasksUpsertArgs} args - Arguments to update or create a Tasks.
     * @example
     * // Update or create a Tasks
     * const tasks = await prisma.tasks.upsert({
     *   create: {
     *     // ... data to create a Tasks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tasks we want to update
     *   }
     * })
     */
    upsert<T extends tasksUpsertArgs>(args: SelectSubset<T, tasksUpsertArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.tasks.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends tasksCountArgs>(
      args?: Subset<T, tasksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TasksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TasksAggregateArgs>(args: Subset<T, TasksAggregateArgs>): Prisma.PrismaPromise<GetTasksAggregateType<T>>

    /**
     * Group by Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksGroupByArgs} args - Group by arguments.
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
      T extends tasksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tasksGroupByArgs['orderBy'] }
        : { orderBy?: tasksGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tasksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTasksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tasks model
   */
  readonly fields: tasksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tasks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tasksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    activity_logs<T extends tasks$activity_logsArgs<ExtArgs> = {}>(args?: Subset<T, tasks$activity_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$activity_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    task_tags<T extends tasks$task_tagsArgs<ExtArgs> = {}>(args?: Subset<T, tasks$task_tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$task_tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users_tasks_assignee_idTousers<T extends tasks$users_tasks_assignee_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, tasks$users_tasks_assignee_idTousersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users_tasks_creator_idTousers<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    projects<T extends projectsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, projectsDefaultArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the tasks model
   */
  interface tasksFieldRefs {
    readonly id: FieldRef<"tasks", 'String'>
    readonly project_id: FieldRef<"tasks", 'String'>
    readonly creator_id: FieldRef<"tasks", 'String'>
    readonly assignee_id: FieldRef<"tasks", 'String'>
    readonly title: FieldRef<"tasks", 'String'>
    readonly description: FieldRef<"tasks", 'String'>
    readonly status: FieldRef<"tasks", 'String'>
    readonly priority: FieldRef<"tasks", 'String'>
    readonly due_date: FieldRef<"tasks", 'DateTime'>
    readonly created_at: FieldRef<"tasks", 'DateTime'>
    readonly updated_at: FieldRef<"tasks", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tasks findUnique
   */
  export type tasksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where: tasksWhereUniqueInput
  }

  /**
   * tasks findUniqueOrThrow
   */
  export type tasksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where: tasksWhereUniqueInput
  }

  /**
   * tasks findFirst
   */
  export type tasksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where?: tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tasks.
     */
    cursor?: tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tasks.
     */
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * tasks findFirstOrThrow
   */
  export type tasksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where?: tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tasks.
     */
    cursor?: tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tasks.
     */
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * tasks findMany
   */
  export type tasksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where?: tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tasks.
     */
    cursor?: tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * tasks create
   */
  export type tasksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * The data needed to create a tasks.
     */
    data: XOR<tasksCreateInput, tasksUncheckedCreateInput>
  }

  /**
   * tasks createMany
   */
  export type tasksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tasks.
     */
    data: tasksCreateManyInput | tasksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tasks createManyAndReturn
   */
  export type tasksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * The data used to create many tasks.
     */
    data: tasksCreateManyInput | tasksCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tasks update
   */
  export type tasksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * The data needed to update a tasks.
     */
    data: XOR<tasksUpdateInput, tasksUncheckedUpdateInput>
    /**
     * Choose, which tasks to update.
     */
    where: tasksWhereUniqueInput
  }

  /**
   * tasks updateMany
   */
  export type tasksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tasks.
     */
    data: XOR<tasksUpdateManyMutationInput, tasksUncheckedUpdateManyInput>
    /**
     * Filter which tasks to update
     */
    where?: tasksWhereInput
    /**
     * Limit how many tasks to update.
     */
    limit?: number
  }

  /**
   * tasks updateManyAndReturn
   */
  export type tasksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * The data used to update tasks.
     */
    data: XOR<tasksUpdateManyMutationInput, tasksUncheckedUpdateManyInput>
    /**
     * Filter which tasks to update
     */
    where?: tasksWhereInput
    /**
     * Limit how many tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * tasks upsert
   */
  export type tasksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * The filter to search for the tasks to update in case it exists.
     */
    where: tasksWhereUniqueInput
    /**
     * In case the tasks found by the `where` argument doesn't exist, create a new tasks with this data.
     */
    create: XOR<tasksCreateInput, tasksUncheckedCreateInput>
    /**
     * In case the tasks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tasksUpdateInput, tasksUncheckedUpdateInput>
  }

  /**
   * tasks delete
   */
  export type tasksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter which tasks to delete.
     */
    where: tasksWhereUniqueInput
  }

  /**
   * tasks deleteMany
   */
  export type tasksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tasks to delete
     */
    where?: tasksWhereInput
    /**
     * Limit how many tasks to delete.
     */
    limit?: number
  }

  /**
   * tasks.activity_logs
   */
  export type tasks$activity_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_logs
     */
    select?: activity_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activity_logs
     */
    omit?: activity_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activity_logsInclude<ExtArgs> | null
    where?: activity_logsWhereInput
    orderBy?: activity_logsOrderByWithRelationInput | activity_logsOrderByWithRelationInput[]
    cursor?: activity_logsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Activity_logsScalarFieldEnum | Activity_logsScalarFieldEnum[]
  }

  /**
   * tasks.task_tags
   */
  export type tasks$task_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_tags
     */
    select?: task_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_tags
     */
    omit?: task_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_tagsInclude<ExtArgs> | null
    where?: task_tagsWhereInput
    orderBy?: task_tagsOrderByWithRelationInput | task_tagsOrderByWithRelationInput[]
    cursor?: task_tagsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Task_tagsScalarFieldEnum | Task_tagsScalarFieldEnum[]
  }

  /**
   * tasks.users_tasks_assignee_idTousers
   */
  export type tasks$users_tasks_assignee_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * tasks without action
   */
  export type tasksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    email: string | null
    password_hash: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password_hash: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    password_hash: number
    name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
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




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    email: string
    password_hash: string
    name: string
    created_at: Date | null
    updated_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
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


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    activity_logs?: boolean | users$activity_logsArgs<ExtArgs>
    project_members?: boolean | users$project_membersArgs<ExtArgs>
    projects?: boolean | users$projectsArgs<ExtArgs>
    tags?: boolean | users$tagsArgs<ExtArgs>
    tasks_tasks_assignee_idTousers?: boolean | users$tasks_tasks_assignee_idTousersArgs<ExtArgs>
    tasks_tasks_creator_idTousers?: boolean | users$tasks_tasks_creator_idTousersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    password_hash?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password_hash" | "name" | "created_at" | "updated_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activity_logs?: boolean | users$activity_logsArgs<ExtArgs>
    project_members?: boolean | users$project_membersArgs<ExtArgs>
    projects?: boolean | users$projectsArgs<ExtArgs>
    tags?: boolean | users$tagsArgs<ExtArgs>
    tasks_tasks_assignee_idTousers?: boolean | users$tasks_tasks_assignee_idTousersArgs<ExtArgs>
    tasks_tasks_creator_idTousers?: boolean | users$tasks_tasks_creator_idTousersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      activity_logs: Prisma.$activity_logsPayload<ExtArgs>[]
      project_members: Prisma.$project_membersPayload<ExtArgs>[]
      projects: Prisma.$projectsPayload<ExtArgs>[]
      tags: Prisma.$tagsPayload<ExtArgs>[]
      tasks_tasks_assignee_idTousers: Prisma.$tasksPayload<ExtArgs>[]
      tasks_tasks_creator_idTousers: Prisma.$tasksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password_hash: string
      name: string
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
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
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
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
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
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
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    activity_logs<T extends users$activity_logsArgs<ExtArgs> = {}>(args?: Subset<T, users$activity_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$activity_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    project_members<T extends users$project_membersArgs<ExtArgs> = {}>(args?: Subset<T, users$project_membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$project_membersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projects<T extends users$projectsArgs<ExtArgs> = {}>(args?: Subset<T, users$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tags<T extends users$tagsArgs<ExtArgs> = {}>(args?: Subset<T, users$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tasks_tasks_assignee_idTousers<T extends users$tasks_tasks_assignee_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$tasks_tasks_assignee_idTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tasks_tasks_creator_idTousers<T extends users$tasks_tasks_creator_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$tasks_tasks_creator_idTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password_hash: FieldRef<"users", 'String'>
    readonly name: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.activity_logs
   */
  export type users$activity_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_logs
     */
    select?: activity_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activity_logs
     */
    omit?: activity_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activity_logsInclude<ExtArgs> | null
    where?: activity_logsWhereInput
    orderBy?: activity_logsOrderByWithRelationInput | activity_logsOrderByWithRelationInput[]
    cursor?: activity_logsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Activity_logsScalarFieldEnum | Activity_logsScalarFieldEnum[]
  }

  /**
   * users.project_members
   */
  export type users$project_membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_members
     */
    select?: project_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_members
     */
    omit?: project_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_membersInclude<ExtArgs> | null
    where?: project_membersWhereInput
    orderBy?: project_membersOrderByWithRelationInput | project_membersOrderByWithRelationInput[]
    cursor?: project_membersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Project_membersScalarFieldEnum | Project_membersScalarFieldEnum[]
  }

  /**
   * users.projects
   */
  export type users$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    where?: projectsWhereInput
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    cursor?: projectsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * users.tags
   */
  export type users$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    where?: tagsWhereInput
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    cursor?: tagsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * users.tasks_tasks_assignee_idTousers
   */
  export type users$tasks_tasks_assignee_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    where?: tasksWhereInput
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    cursor?: tasksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * users.tasks_tasks_creator_idTousers
   */
  export type users$tasks_tasks_creator_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    where?: tasksWhereInput
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    cursor?: tasksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
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


  export const Activity_logsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    project_id: 'project_id',
    task_id: 'task_id',
    action: 'action',
    metadata: 'metadata',
    created_at: 'created_at'
  };

  export type Activity_logsScalarFieldEnum = (typeof Activity_logsScalarFieldEnum)[keyof typeof Activity_logsScalarFieldEnum]


  export const Project_membersScalarFieldEnum: {
    id: 'id',
    project_id: 'project_id',
    user_id: 'user_id',
    role: 'role',
    created_at: 'created_at'
  };

  export type Project_membersScalarFieldEnum = (typeof Project_membersScalarFieldEnum)[keyof typeof Project_membersScalarFieldEnum]


  export const ProjectsScalarFieldEnum: {
    id: 'id',
    owner_id: 'owner_id',
    name: 'name',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ProjectsScalarFieldEnum = (typeof ProjectsScalarFieldEnum)[keyof typeof ProjectsScalarFieldEnum]


  export const TagsScalarFieldEnum: {
    id: 'id',
    owner_id: 'owner_id',
    name: 'name',
    color: 'color',
    created_at: 'created_at'
  };

  export type TagsScalarFieldEnum = (typeof TagsScalarFieldEnum)[keyof typeof TagsScalarFieldEnum]


  export const Task_tagsScalarFieldEnum: {
    id: 'id',
    task_id: 'task_id',
    tag_id: 'tag_id'
  };

  export type Task_tagsScalarFieldEnum = (typeof Task_tagsScalarFieldEnum)[keyof typeof Task_tagsScalarFieldEnum]


  export const TasksScalarFieldEnum: {
    id: 'id',
    project_id: 'project_id',
    creator_id: 'creator_id',
    assignee_id: 'assignee_id',
    title: 'title',
    description: 'description',
    status: 'status',
    priority: 'priority',
    due_date: 'due_date',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TasksScalarFieldEnum = (typeof TasksScalarFieldEnum)[keyof typeof TasksScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password_hash: 'password_hash',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type activity_logsWhereInput = {
    AND?: activity_logsWhereInput | activity_logsWhereInput[]
    OR?: activity_logsWhereInput[]
    NOT?: activity_logsWhereInput | activity_logsWhereInput[]
    id?: UuidFilter<"activity_logs"> | string
    user_id?: UuidFilter<"activity_logs"> | string
    project_id?: UuidNullableFilter<"activity_logs"> | string | null
    task_id?: UuidNullableFilter<"activity_logs"> | string | null
    action?: StringFilter<"activity_logs"> | string
    metadata?: JsonNullableFilter<"activity_logs">
    created_at?: DateTimeNullableFilter<"activity_logs"> | Date | string | null
    projects?: XOR<ProjectsNullableScalarRelationFilter, projectsWhereInput> | null
    tasks?: XOR<TasksNullableScalarRelationFilter, tasksWhereInput> | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type activity_logsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    project_id?: SortOrderInput | SortOrder
    task_id?: SortOrderInput | SortOrder
    action?: SortOrder
    metadata?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    projects?: projectsOrderByWithRelationInput
    tasks?: tasksOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type activity_logsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: activity_logsWhereInput | activity_logsWhereInput[]
    OR?: activity_logsWhereInput[]
    NOT?: activity_logsWhereInput | activity_logsWhereInput[]
    user_id?: UuidFilter<"activity_logs"> | string
    project_id?: UuidNullableFilter<"activity_logs"> | string | null
    task_id?: UuidNullableFilter<"activity_logs"> | string | null
    action?: StringFilter<"activity_logs"> | string
    metadata?: JsonNullableFilter<"activity_logs">
    created_at?: DateTimeNullableFilter<"activity_logs"> | Date | string | null
    projects?: XOR<ProjectsNullableScalarRelationFilter, projectsWhereInput> | null
    tasks?: XOR<TasksNullableScalarRelationFilter, tasksWhereInput> | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type activity_logsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    project_id?: SortOrderInput | SortOrder
    task_id?: SortOrderInput | SortOrder
    action?: SortOrder
    metadata?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: activity_logsCountOrderByAggregateInput
    _max?: activity_logsMaxOrderByAggregateInput
    _min?: activity_logsMinOrderByAggregateInput
  }

  export type activity_logsScalarWhereWithAggregatesInput = {
    AND?: activity_logsScalarWhereWithAggregatesInput | activity_logsScalarWhereWithAggregatesInput[]
    OR?: activity_logsScalarWhereWithAggregatesInput[]
    NOT?: activity_logsScalarWhereWithAggregatesInput | activity_logsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"activity_logs"> | string
    user_id?: UuidWithAggregatesFilter<"activity_logs"> | string
    project_id?: UuidNullableWithAggregatesFilter<"activity_logs"> | string | null
    task_id?: UuidNullableWithAggregatesFilter<"activity_logs"> | string | null
    action?: StringWithAggregatesFilter<"activity_logs"> | string
    metadata?: JsonNullableWithAggregatesFilter<"activity_logs">
    created_at?: DateTimeNullableWithAggregatesFilter<"activity_logs"> | Date | string | null
  }

  export type project_membersWhereInput = {
    AND?: project_membersWhereInput | project_membersWhereInput[]
    OR?: project_membersWhereInput[]
    NOT?: project_membersWhereInput | project_membersWhereInput[]
    id?: UuidFilter<"project_members"> | string
    project_id?: UuidFilter<"project_members"> | string
    user_id?: UuidFilter<"project_members"> | string
    role?: StringFilter<"project_members"> | string
    created_at?: DateTimeNullableFilter<"project_members"> | Date | string | null
    projects?: XOR<ProjectsScalarRelationFilter, projectsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type project_membersOrderByWithRelationInput = {
    id?: SortOrder
    project_id?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
    created_at?: SortOrderInput | SortOrder
    projects?: projectsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type project_membersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    project_id_user_id?: project_membersProject_idUser_idCompoundUniqueInput
    AND?: project_membersWhereInput | project_membersWhereInput[]
    OR?: project_membersWhereInput[]
    NOT?: project_membersWhereInput | project_membersWhereInput[]
    project_id?: UuidFilter<"project_members"> | string
    user_id?: UuidFilter<"project_members"> | string
    role?: StringFilter<"project_members"> | string
    created_at?: DateTimeNullableFilter<"project_members"> | Date | string | null
    projects?: XOR<ProjectsScalarRelationFilter, projectsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "project_id_user_id">

  export type project_membersOrderByWithAggregationInput = {
    id?: SortOrder
    project_id?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: project_membersCountOrderByAggregateInput
    _max?: project_membersMaxOrderByAggregateInput
    _min?: project_membersMinOrderByAggregateInput
  }

  export type project_membersScalarWhereWithAggregatesInput = {
    AND?: project_membersScalarWhereWithAggregatesInput | project_membersScalarWhereWithAggregatesInput[]
    OR?: project_membersScalarWhereWithAggregatesInput[]
    NOT?: project_membersScalarWhereWithAggregatesInput | project_membersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"project_members"> | string
    project_id?: UuidWithAggregatesFilter<"project_members"> | string
    user_id?: UuidWithAggregatesFilter<"project_members"> | string
    role?: StringWithAggregatesFilter<"project_members"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"project_members"> | Date | string | null
  }

  export type projectsWhereInput = {
    AND?: projectsWhereInput | projectsWhereInput[]
    OR?: projectsWhereInput[]
    NOT?: projectsWhereInput | projectsWhereInput[]
    id?: UuidFilter<"projects"> | string
    owner_id?: UuidFilter<"projects"> | string
    name?: StringFilter<"projects"> | string
    description?: StringNullableFilter<"projects"> | string | null
    created_at?: DateTimeNullableFilter<"projects"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"projects"> | Date | string | null
    activity_logs?: Activity_logsListRelationFilter
    project_members?: Project_membersListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    tasks?: TasksListRelationFilter
  }

  export type projectsOrderByWithRelationInput = {
    id?: SortOrder
    owner_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    activity_logs?: activity_logsOrderByRelationAggregateInput
    project_members?: project_membersOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
    tasks?: tasksOrderByRelationAggregateInput
  }

  export type projectsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: projectsWhereInput | projectsWhereInput[]
    OR?: projectsWhereInput[]
    NOT?: projectsWhereInput | projectsWhereInput[]
    owner_id?: UuidFilter<"projects"> | string
    name?: StringFilter<"projects"> | string
    description?: StringNullableFilter<"projects"> | string | null
    created_at?: DateTimeNullableFilter<"projects"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"projects"> | Date | string | null
    activity_logs?: Activity_logsListRelationFilter
    project_members?: Project_membersListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    tasks?: TasksListRelationFilter
  }, "id">

  export type projectsOrderByWithAggregationInput = {
    id?: SortOrder
    owner_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: projectsCountOrderByAggregateInput
    _max?: projectsMaxOrderByAggregateInput
    _min?: projectsMinOrderByAggregateInput
  }

  export type projectsScalarWhereWithAggregatesInput = {
    AND?: projectsScalarWhereWithAggregatesInput | projectsScalarWhereWithAggregatesInput[]
    OR?: projectsScalarWhereWithAggregatesInput[]
    NOT?: projectsScalarWhereWithAggregatesInput | projectsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"projects"> | string
    owner_id?: UuidWithAggregatesFilter<"projects"> | string
    name?: StringWithAggregatesFilter<"projects"> | string
    description?: StringNullableWithAggregatesFilter<"projects"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"projects"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"projects"> | Date | string | null
  }

  export type tagsWhereInput = {
    AND?: tagsWhereInput | tagsWhereInput[]
    OR?: tagsWhereInput[]
    NOT?: tagsWhereInput | tagsWhereInput[]
    id?: UuidFilter<"tags"> | string
    owner_id?: UuidFilter<"tags"> | string
    name?: StringFilter<"tags"> | string
    color?: StringNullableFilter<"tags"> | string | null
    created_at?: DateTimeNullableFilter<"tags"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    task_tags?: Task_tagsListRelationFilter
  }

  export type tagsOrderByWithRelationInput = {
    id?: SortOrder
    owner_id?: SortOrder
    name?: SortOrder
    color?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    task_tags?: task_tagsOrderByRelationAggregateInput
  }

  export type tagsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: tagsWhereInput | tagsWhereInput[]
    OR?: tagsWhereInput[]
    NOT?: tagsWhereInput | tagsWhereInput[]
    owner_id?: UuidFilter<"tags"> | string
    name?: StringFilter<"tags"> | string
    color?: StringNullableFilter<"tags"> | string | null
    created_at?: DateTimeNullableFilter<"tags"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    task_tags?: Task_tagsListRelationFilter
  }, "id">

  export type tagsOrderByWithAggregationInput = {
    id?: SortOrder
    owner_id?: SortOrder
    name?: SortOrder
    color?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: tagsCountOrderByAggregateInput
    _max?: tagsMaxOrderByAggregateInput
    _min?: tagsMinOrderByAggregateInput
  }

  export type tagsScalarWhereWithAggregatesInput = {
    AND?: tagsScalarWhereWithAggregatesInput | tagsScalarWhereWithAggregatesInput[]
    OR?: tagsScalarWhereWithAggregatesInput[]
    NOT?: tagsScalarWhereWithAggregatesInput | tagsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"tags"> | string
    owner_id?: UuidWithAggregatesFilter<"tags"> | string
    name?: StringWithAggregatesFilter<"tags"> | string
    color?: StringNullableWithAggregatesFilter<"tags"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"tags"> | Date | string | null
  }

  export type task_tagsWhereInput = {
    AND?: task_tagsWhereInput | task_tagsWhereInput[]
    OR?: task_tagsWhereInput[]
    NOT?: task_tagsWhereInput | task_tagsWhereInput[]
    id?: UuidFilter<"task_tags"> | string
    task_id?: UuidFilter<"task_tags"> | string
    tag_id?: UuidFilter<"task_tags"> | string
    tags?: XOR<TagsScalarRelationFilter, tagsWhereInput>
    tasks?: XOR<TasksScalarRelationFilter, tasksWhereInput>
  }

  export type task_tagsOrderByWithRelationInput = {
    id?: SortOrder
    task_id?: SortOrder
    tag_id?: SortOrder
    tags?: tagsOrderByWithRelationInput
    tasks?: tasksOrderByWithRelationInput
  }

  export type task_tagsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    task_id_tag_id?: task_tagsTask_idTag_idCompoundUniqueInput
    AND?: task_tagsWhereInput | task_tagsWhereInput[]
    OR?: task_tagsWhereInput[]
    NOT?: task_tagsWhereInput | task_tagsWhereInput[]
    task_id?: UuidFilter<"task_tags"> | string
    tag_id?: UuidFilter<"task_tags"> | string
    tags?: XOR<TagsScalarRelationFilter, tagsWhereInput>
    tasks?: XOR<TasksScalarRelationFilter, tasksWhereInput>
  }, "id" | "task_id_tag_id">

  export type task_tagsOrderByWithAggregationInput = {
    id?: SortOrder
    task_id?: SortOrder
    tag_id?: SortOrder
    _count?: task_tagsCountOrderByAggregateInput
    _max?: task_tagsMaxOrderByAggregateInput
    _min?: task_tagsMinOrderByAggregateInput
  }

  export type task_tagsScalarWhereWithAggregatesInput = {
    AND?: task_tagsScalarWhereWithAggregatesInput | task_tagsScalarWhereWithAggregatesInput[]
    OR?: task_tagsScalarWhereWithAggregatesInput[]
    NOT?: task_tagsScalarWhereWithAggregatesInput | task_tagsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"task_tags"> | string
    task_id?: UuidWithAggregatesFilter<"task_tags"> | string
    tag_id?: UuidWithAggregatesFilter<"task_tags"> | string
  }

  export type tasksWhereInput = {
    AND?: tasksWhereInput | tasksWhereInput[]
    OR?: tasksWhereInput[]
    NOT?: tasksWhereInput | tasksWhereInput[]
    id?: UuidFilter<"tasks"> | string
    project_id?: UuidFilter<"tasks"> | string
    creator_id?: UuidFilter<"tasks"> | string
    assignee_id?: UuidNullableFilter<"tasks"> | string | null
    title?: StringFilter<"tasks"> | string
    description?: StringNullableFilter<"tasks"> | string | null
    status?: StringNullableFilter<"tasks"> | string | null
    priority?: StringNullableFilter<"tasks"> | string | null
    due_date?: DateTimeNullableFilter<"tasks"> | Date | string | null
    created_at?: DateTimeNullableFilter<"tasks"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"tasks"> | Date | string | null
    activity_logs?: Activity_logsListRelationFilter
    task_tags?: Task_tagsListRelationFilter
    users_tasks_assignee_idTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    users_tasks_creator_idTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    projects?: XOR<ProjectsScalarRelationFilter, projectsWhereInput>
  }

  export type tasksOrderByWithRelationInput = {
    id?: SortOrder
    project_id?: SortOrder
    creator_id?: SortOrder
    assignee_id?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    priority?: SortOrderInput | SortOrder
    due_date?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    activity_logs?: activity_logsOrderByRelationAggregateInput
    task_tags?: task_tagsOrderByRelationAggregateInput
    users_tasks_assignee_idTousers?: usersOrderByWithRelationInput
    users_tasks_creator_idTousers?: usersOrderByWithRelationInput
    projects?: projectsOrderByWithRelationInput
  }

  export type tasksWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: tasksWhereInput | tasksWhereInput[]
    OR?: tasksWhereInput[]
    NOT?: tasksWhereInput | tasksWhereInput[]
    project_id?: UuidFilter<"tasks"> | string
    creator_id?: UuidFilter<"tasks"> | string
    assignee_id?: UuidNullableFilter<"tasks"> | string | null
    title?: StringFilter<"tasks"> | string
    description?: StringNullableFilter<"tasks"> | string | null
    status?: StringNullableFilter<"tasks"> | string | null
    priority?: StringNullableFilter<"tasks"> | string | null
    due_date?: DateTimeNullableFilter<"tasks"> | Date | string | null
    created_at?: DateTimeNullableFilter<"tasks"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"tasks"> | Date | string | null
    activity_logs?: Activity_logsListRelationFilter
    task_tags?: Task_tagsListRelationFilter
    users_tasks_assignee_idTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    users_tasks_creator_idTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    projects?: XOR<ProjectsScalarRelationFilter, projectsWhereInput>
  }, "id">

  export type tasksOrderByWithAggregationInput = {
    id?: SortOrder
    project_id?: SortOrder
    creator_id?: SortOrder
    assignee_id?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    priority?: SortOrderInput | SortOrder
    due_date?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: tasksCountOrderByAggregateInput
    _max?: tasksMaxOrderByAggregateInput
    _min?: tasksMinOrderByAggregateInput
  }

  export type tasksScalarWhereWithAggregatesInput = {
    AND?: tasksScalarWhereWithAggregatesInput | tasksScalarWhereWithAggregatesInput[]
    OR?: tasksScalarWhereWithAggregatesInput[]
    NOT?: tasksScalarWhereWithAggregatesInput | tasksScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"tasks"> | string
    project_id?: UuidWithAggregatesFilter<"tasks"> | string
    creator_id?: UuidWithAggregatesFilter<"tasks"> | string
    assignee_id?: UuidNullableWithAggregatesFilter<"tasks"> | string | null
    title?: StringWithAggregatesFilter<"tasks"> | string
    description?: StringNullableWithAggregatesFilter<"tasks"> | string | null
    status?: StringNullableWithAggregatesFilter<"tasks"> | string | null
    priority?: StringNullableWithAggregatesFilter<"tasks"> | string | null
    due_date?: DateTimeNullableWithAggregatesFilter<"tasks"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"tasks"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"tasks"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: UuidFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password_hash?: StringFilter<"users"> | string
    name?: StringFilter<"users"> | string
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    activity_logs?: Activity_logsListRelationFilter
    project_members?: Project_membersListRelationFilter
    projects?: ProjectsListRelationFilter
    tags?: TagsListRelationFilter
    tasks_tasks_assignee_idTousers?: TasksListRelationFilter
    tasks_tasks_creator_idTousers?: TasksListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    activity_logs?: activity_logsOrderByRelationAggregateInput
    project_members?: project_membersOrderByRelationAggregateInput
    projects?: projectsOrderByRelationAggregateInput
    tags?: tagsOrderByRelationAggregateInput
    tasks_tasks_assignee_idTousers?: tasksOrderByRelationAggregateInput
    tasks_tasks_creator_idTousers?: tasksOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password_hash?: StringFilter<"users"> | string
    name?: StringFilter<"users"> | string
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    activity_logs?: Activity_logsListRelationFilter
    project_members?: Project_membersListRelationFilter
    projects?: ProjectsListRelationFilter
    tags?: TagsListRelationFilter
    tasks_tasks_assignee_idTousers?: TasksListRelationFilter
    tasks_tasks_creator_idTousers?: TasksListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    password_hash?: StringWithAggregatesFilter<"users"> | string
    name?: StringWithAggregatesFilter<"users"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type activity_logsCreateInput = {
    id?: string
    action: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string | null
    projects?: projectsCreateNestedOneWithoutActivity_logsInput
    tasks?: tasksCreateNestedOneWithoutActivity_logsInput
    users: usersCreateNestedOneWithoutActivity_logsInput
  }

  export type activity_logsUncheckedCreateInput = {
    id?: string
    user_id: string
    project_id?: string | null
    task_id?: string | null
    action: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string | null
  }

  export type activity_logsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projects?: projectsUpdateOneWithoutActivity_logsNestedInput
    tasks?: tasksUpdateOneWithoutActivity_logsNestedInput
    users?: usersUpdateOneRequiredWithoutActivity_logsNestedInput
  }

  export type activity_logsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    project_id?: NullableStringFieldUpdateOperationsInput | string | null
    task_id?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type activity_logsCreateManyInput = {
    id?: string
    user_id: string
    project_id?: string | null
    task_id?: string | null
    action: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string | null
  }

  export type activity_logsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type activity_logsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    project_id?: NullableStringFieldUpdateOperationsInput | string | null
    task_id?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type project_membersCreateInput = {
    id?: string
    role: string
    created_at?: Date | string | null
    projects: projectsCreateNestedOneWithoutProject_membersInput
    users: usersCreateNestedOneWithoutProject_membersInput
  }

  export type project_membersUncheckedCreateInput = {
    id?: string
    project_id: string
    user_id: string
    role: string
    created_at?: Date | string | null
  }

  export type project_membersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projects?: projectsUpdateOneRequiredWithoutProject_membersNestedInput
    users?: usersUpdateOneRequiredWithoutProject_membersNestedInput
  }

  export type project_membersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    project_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type project_membersCreateManyInput = {
    id?: string
    project_id: string
    user_id: string
    role: string
    created_at?: Date | string | null
  }

  export type project_membersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type project_membersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    project_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type projectsCreateInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    activity_logs?: activity_logsCreateNestedManyWithoutProjectsInput
    project_members?: project_membersCreateNestedManyWithoutProjectsInput
    users: usersCreateNestedOneWithoutProjectsInput
    tasks?: tasksCreateNestedManyWithoutProjectsInput
  }

  export type projectsUncheckedCreateInput = {
    id?: string
    owner_id: string
    name: string
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    activity_logs?: activity_logsUncheckedCreateNestedManyWithoutProjectsInput
    project_members?: project_membersUncheckedCreateNestedManyWithoutProjectsInput
    tasks?: tasksUncheckedCreateNestedManyWithoutProjectsInput
  }

  export type projectsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activity_logs?: activity_logsUpdateManyWithoutProjectsNestedInput
    project_members?: project_membersUpdateManyWithoutProjectsNestedInput
    users?: usersUpdateOneRequiredWithoutProjectsNestedInput
    tasks?: tasksUpdateManyWithoutProjectsNestedInput
  }

  export type projectsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activity_logs?: activity_logsUncheckedUpdateManyWithoutProjectsNestedInput
    project_members?: project_membersUncheckedUpdateManyWithoutProjectsNestedInput
    tasks?: tasksUncheckedUpdateManyWithoutProjectsNestedInput
  }

  export type projectsCreateManyInput = {
    id?: string
    owner_id: string
    name: string
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type projectsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type projectsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tagsCreateInput = {
    id?: string
    name: string
    color?: string | null
    created_at?: Date | string | null
    users: usersCreateNestedOneWithoutTagsInput
    task_tags?: task_tagsCreateNestedManyWithoutTagsInput
  }

  export type tagsUncheckedCreateInput = {
    id?: string
    owner_id: string
    name: string
    color?: string | null
    created_at?: Date | string | null
    task_tags?: task_tagsUncheckedCreateNestedManyWithoutTagsInput
  }

  export type tagsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutTagsNestedInput
    task_tags?: task_tagsUpdateManyWithoutTagsNestedInput
  }

  export type tagsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task_tags?: task_tagsUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type tagsCreateManyInput = {
    id?: string
    owner_id: string
    name: string
    color?: string | null
    created_at?: Date | string | null
  }

  export type tagsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tagsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type task_tagsCreateInput = {
    id?: string
    tags: tagsCreateNestedOneWithoutTask_tagsInput
    tasks: tasksCreateNestedOneWithoutTask_tagsInput
  }

  export type task_tagsUncheckedCreateInput = {
    id?: string
    task_id: string
    tag_id: string
  }

  export type task_tagsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tags?: tagsUpdateOneRequiredWithoutTask_tagsNestedInput
    tasks?: tasksUpdateOneRequiredWithoutTask_tagsNestedInput
  }

  export type task_tagsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    task_id?: StringFieldUpdateOperationsInput | string
    tag_id?: StringFieldUpdateOperationsInput | string
  }

  export type task_tagsCreateManyInput = {
    id?: string
    task_id: string
    tag_id: string
  }

  export type task_tagsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type task_tagsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    task_id?: StringFieldUpdateOperationsInput | string
    tag_id?: StringFieldUpdateOperationsInput | string
  }

  export type tasksCreateInput = {
    id?: string
    title: string
    description?: string | null
    status?: string | null
    priority?: string | null
    due_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    activity_logs?: activity_logsCreateNestedManyWithoutTasksInput
    task_tags?: task_tagsCreateNestedManyWithoutTasksInput
    users_tasks_assignee_idTousers?: usersCreateNestedOneWithoutTasks_tasks_assignee_idTousersInput
    users_tasks_creator_idTousers: usersCreateNestedOneWithoutTasks_tasks_creator_idTousersInput
    projects: projectsCreateNestedOneWithoutTasksInput
  }

  export type tasksUncheckedCreateInput = {
    id?: string
    project_id: string
    creator_id: string
    assignee_id?: string | null
    title: string
    description?: string | null
    status?: string | null
    priority?: string | null
    due_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    activity_logs?: activity_logsUncheckedCreateNestedManyWithoutTasksInput
    task_tags?: task_tagsUncheckedCreateNestedManyWithoutTasksInput
  }

  export type tasksUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activity_logs?: activity_logsUpdateManyWithoutTasksNestedInput
    task_tags?: task_tagsUpdateManyWithoutTasksNestedInput
    users_tasks_assignee_idTousers?: usersUpdateOneWithoutTasks_tasks_assignee_idTousersNestedInput
    users_tasks_creator_idTousers?: usersUpdateOneRequiredWithoutTasks_tasks_creator_idTousersNestedInput
    projects?: projectsUpdateOneRequiredWithoutTasksNestedInput
  }

  export type tasksUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    project_id?: StringFieldUpdateOperationsInput | string
    creator_id?: StringFieldUpdateOperationsInput | string
    assignee_id?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activity_logs?: activity_logsUncheckedUpdateManyWithoutTasksNestedInput
    task_tags?: task_tagsUncheckedUpdateManyWithoutTasksNestedInput
  }

  export type tasksCreateManyInput = {
    id?: string
    project_id: string
    creator_id: string
    assignee_id?: string | null
    title: string
    description?: string | null
    status?: string | null
    priority?: string | null
    due_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type tasksUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tasksUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    project_id?: StringFieldUpdateOperationsInput | string
    creator_id?: StringFieldUpdateOperationsInput | string
    assignee_id?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    id?: string
    email: string
    password_hash: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    activity_logs?: activity_logsCreateNestedManyWithoutUsersInput
    project_members?: project_membersCreateNestedManyWithoutUsersInput
    projects?: projectsCreateNestedManyWithoutUsersInput
    tags?: tagsCreateNestedManyWithoutUsersInput
    tasks_tasks_assignee_idTousers?: tasksCreateNestedManyWithoutUsers_tasks_assignee_idTousersInput
    tasks_tasks_creator_idTousers?: tasksCreateNestedManyWithoutUsers_tasks_creator_idTousersInput
  }

  export type usersUncheckedCreateInput = {
    id?: string
    email: string
    password_hash: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    activity_logs?: activity_logsUncheckedCreateNestedManyWithoutUsersInput
    project_members?: project_membersUncheckedCreateNestedManyWithoutUsersInput
    projects?: projectsUncheckedCreateNestedManyWithoutUsersInput
    tags?: tagsUncheckedCreateNestedManyWithoutUsersInput
    tasks_tasks_assignee_idTousers?: tasksUncheckedCreateNestedManyWithoutUsers_tasks_assignee_idTousersInput
    tasks_tasks_creator_idTousers?: tasksUncheckedCreateNestedManyWithoutUsers_tasks_creator_idTousersInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activity_logs?: activity_logsUpdateManyWithoutUsersNestedInput
    project_members?: project_membersUpdateManyWithoutUsersNestedInput
    projects?: projectsUpdateManyWithoutUsersNestedInput
    tags?: tagsUpdateManyWithoutUsersNestedInput
    tasks_tasks_assignee_idTousers?: tasksUpdateManyWithoutUsers_tasks_assignee_idTousersNestedInput
    tasks_tasks_creator_idTousers?: tasksUpdateManyWithoutUsers_tasks_creator_idTousersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activity_logs?: activity_logsUncheckedUpdateManyWithoutUsersNestedInput
    project_members?: project_membersUncheckedUpdateManyWithoutUsersNestedInput
    projects?: projectsUncheckedUpdateManyWithoutUsersNestedInput
    tags?: tagsUncheckedUpdateManyWithoutUsersNestedInput
    tasks_tasks_assignee_idTousers?: tasksUncheckedUpdateManyWithoutUsers_tasks_assignee_idTousersNestedInput
    tasks_tasks_creator_idTousers?: tasksUncheckedUpdateManyWithoutUsers_tasks_creator_idTousersNestedInput
  }

  export type usersCreateManyInput = {
    id?: string
    email: string
    password_hash: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ProjectsNullableScalarRelationFilter = {
    is?: projectsWhereInput | null
    isNot?: projectsWhereInput | null
  }

  export type TasksNullableScalarRelationFilter = {
    is?: tasksWhereInput | null
    isNot?: tasksWhereInput | null
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type activity_logsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    project_id?: SortOrder
    task_id?: SortOrder
    action?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
  }

  export type activity_logsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    project_id?: SortOrder
    task_id?: SortOrder
    action?: SortOrder
    created_at?: SortOrder
  }

  export type activity_logsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    project_id?: SortOrder
    task_id?: SortOrder
    action?: SortOrder
    created_at?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ProjectsScalarRelationFilter = {
    is?: projectsWhereInput
    isNot?: projectsWhereInput
  }

  export type project_membersProject_idUser_idCompoundUniqueInput = {
    project_id: string
    user_id: string
  }

  export type project_membersCountOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type project_membersMaxOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type project_membersMinOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Activity_logsListRelationFilter = {
    every?: activity_logsWhereInput
    some?: activity_logsWhereInput
    none?: activity_logsWhereInput
  }

  export type Project_membersListRelationFilter = {
    every?: project_membersWhereInput
    some?: project_membersWhereInput
    none?: project_membersWhereInput
  }

  export type TasksListRelationFilter = {
    every?: tasksWhereInput
    some?: tasksWhereInput
    none?: tasksWhereInput
  }

  export type activity_logsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type project_membersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tasksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type projectsCountOrderByAggregateInput = {
    id?: SortOrder
    owner_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type projectsMaxOrderByAggregateInput = {
    id?: SortOrder
    owner_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type projectsMinOrderByAggregateInput = {
    id?: SortOrder
    owner_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Task_tagsListRelationFilter = {
    every?: task_tagsWhereInput
    some?: task_tagsWhereInput
    none?: task_tagsWhereInput
  }

  export type task_tagsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tagsCountOrderByAggregateInput = {
    id?: SortOrder
    owner_id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    created_at?: SortOrder
  }

  export type tagsMaxOrderByAggregateInput = {
    id?: SortOrder
    owner_id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    created_at?: SortOrder
  }

  export type tagsMinOrderByAggregateInput = {
    id?: SortOrder
    owner_id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    created_at?: SortOrder
  }

  export type TagsScalarRelationFilter = {
    is?: tagsWhereInput
    isNot?: tagsWhereInput
  }

  export type TasksScalarRelationFilter = {
    is?: tasksWhereInput
    isNot?: tasksWhereInput
  }

  export type task_tagsTask_idTag_idCompoundUniqueInput = {
    task_id: string
    tag_id: string
  }

  export type task_tagsCountOrderByAggregateInput = {
    id?: SortOrder
    task_id?: SortOrder
    tag_id?: SortOrder
  }

  export type task_tagsMaxOrderByAggregateInput = {
    id?: SortOrder
    task_id?: SortOrder
    tag_id?: SortOrder
  }

  export type task_tagsMinOrderByAggregateInput = {
    id?: SortOrder
    task_id?: SortOrder
    tag_id?: SortOrder
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type tasksCountOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    creator_id?: SortOrder
    assignee_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    due_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type tasksMaxOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    creator_id?: SortOrder
    assignee_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    due_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type tasksMinOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    creator_id?: SortOrder
    assignee_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    due_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProjectsListRelationFilter = {
    every?: projectsWhereInput
    some?: projectsWhereInput
    none?: projectsWhereInput
  }

  export type TagsListRelationFilter = {
    every?: tagsWhereInput
    some?: tagsWhereInput
    none?: tagsWhereInput
  }

  export type projectsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tagsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type projectsCreateNestedOneWithoutActivity_logsInput = {
    create?: XOR<projectsCreateWithoutActivity_logsInput, projectsUncheckedCreateWithoutActivity_logsInput>
    connectOrCreate?: projectsCreateOrConnectWithoutActivity_logsInput
    connect?: projectsWhereUniqueInput
  }

  export type tasksCreateNestedOneWithoutActivity_logsInput = {
    create?: XOR<tasksCreateWithoutActivity_logsInput, tasksUncheckedCreateWithoutActivity_logsInput>
    connectOrCreate?: tasksCreateOrConnectWithoutActivity_logsInput
    connect?: tasksWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutActivity_logsInput = {
    create?: XOR<usersCreateWithoutActivity_logsInput, usersUncheckedCreateWithoutActivity_logsInput>
    connectOrCreate?: usersCreateOrConnectWithoutActivity_logsInput
    connect?: usersWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type projectsUpdateOneWithoutActivity_logsNestedInput = {
    create?: XOR<projectsCreateWithoutActivity_logsInput, projectsUncheckedCreateWithoutActivity_logsInput>
    connectOrCreate?: projectsCreateOrConnectWithoutActivity_logsInput
    upsert?: projectsUpsertWithoutActivity_logsInput
    disconnect?: projectsWhereInput | boolean
    delete?: projectsWhereInput | boolean
    connect?: projectsWhereUniqueInput
    update?: XOR<XOR<projectsUpdateToOneWithWhereWithoutActivity_logsInput, projectsUpdateWithoutActivity_logsInput>, projectsUncheckedUpdateWithoutActivity_logsInput>
  }

  export type tasksUpdateOneWithoutActivity_logsNestedInput = {
    create?: XOR<tasksCreateWithoutActivity_logsInput, tasksUncheckedCreateWithoutActivity_logsInput>
    connectOrCreate?: tasksCreateOrConnectWithoutActivity_logsInput
    upsert?: tasksUpsertWithoutActivity_logsInput
    disconnect?: tasksWhereInput | boolean
    delete?: tasksWhereInput | boolean
    connect?: tasksWhereUniqueInput
    update?: XOR<XOR<tasksUpdateToOneWithWhereWithoutActivity_logsInput, tasksUpdateWithoutActivity_logsInput>, tasksUncheckedUpdateWithoutActivity_logsInput>
  }

  export type usersUpdateOneRequiredWithoutActivity_logsNestedInput = {
    create?: XOR<usersCreateWithoutActivity_logsInput, usersUncheckedCreateWithoutActivity_logsInput>
    connectOrCreate?: usersCreateOrConnectWithoutActivity_logsInput
    upsert?: usersUpsertWithoutActivity_logsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutActivity_logsInput, usersUpdateWithoutActivity_logsInput>, usersUncheckedUpdateWithoutActivity_logsInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type projectsCreateNestedOneWithoutProject_membersInput = {
    create?: XOR<projectsCreateWithoutProject_membersInput, projectsUncheckedCreateWithoutProject_membersInput>
    connectOrCreate?: projectsCreateOrConnectWithoutProject_membersInput
    connect?: projectsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutProject_membersInput = {
    create?: XOR<usersCreateWithoutProject_membersInput, usersUncheckedCreateWithoutProject_membersInput>
    connectOrCreate?: usersCreateOrConnectWithoutProject_membersInput
    connect?: usersWhereUniqueInput
  }

  export type projectsUpdateOneRequiredWithoutProject_membersNestedInput = {
    create?: XOR<projectsCreateWithoutProject_membersInput, projectsUncheckedCreateWithoutProject_membersInput>
    connectOrCreate?: projectsCreateOrConnectWithoutProject_membersInput
    upsert?: projectsUpsertWithoutProject_membersInput
    connect?: projectsWhereUniqueInput
    update?: XOR<XOR<projectsUpdateToOneWithWhereWithoutProject_membersInput, projectsUpdateWithoutProject_membersInput>, projectsUncheckedUpdateWithoutProject_membersInput>
  }

  export type usersUpdateOneRequiredWithoutProject_membersNestedInput = {
    create?: XOR<usersCreateWithoutProject_membersInput, usersUncheckedCreateWithoutProject_membersInput>
    connectOrCreate?: usersCreateOrConnectWithoutProject_membersInput
    upsert?: usersUpsertWithoutProject_membersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutProject_membersInput, usersUpdateWithoutProject_membersInput>, usersUncheckedUpdateWithoutProject_membersInput>
  }

  export type activity_logsCreateNestedManyWithoutProjectsInput = {
    create?: XOR<activity_logsCreateWithoutProjectsInput, activity_logsUncheckedCreateWithoutProjectsInput> | activity_logsCreateWithoutProjectsInput[] | activity_logsUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: activity_logsCreateOrConnectWithoutProjectsInput | activity_logsCreateOrConnectWithoutProjectsInput[]
    createMany?: activity_logsCreateManyProjectsInputEnvelope
    connect?: activity_logsWhereUniqueInput | activity_logsWhereUniqueInput[]
  }

  export type project_membersCreateNestedManyWithoutProjectsInput = {
    create?: XOR<project_membersCreateWithoutProjectsInput, project_membersUncheckedCreateWithoutProjectsInput> | project_membersCreateWithoutProjectsInput[] | project_membersUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: project_membersCreateOrConnectWithoutProjectsInput | project_membersCreateOrConnectWithoutProjectsInput[]
    createMany?: project_membersCreateManyProjectsInputEnvelope
    connect?: project_membersWhereUniqueInput | project_membersWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutProjectsInput = {
    create?: XOR<usersCreateWithoutProjectsInput, usersUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: usersCreateOrConnectWithoutProjectsInput
    connect?: usersWhereUniqueInput
  }

  export type tasksCreateNestedManyWithoutProjectsInput = {
    create?: XOR<tasksCreateWithoutProjectsInput, tasksUncheckedCreateWithoutProjectsInput> | tasksCreateWithoutProjectsInput[] | tasksUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutProjectsInput | tasksCreateOrConnectWithoutProjectsInput[]
    createMany?: tasksCreateManyProjectsInputEnvelope
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
  }

  export type activity_logsUncheckedCreateNestedManyWithoutProjectsInput = {
    create?: XOR<activity_logsCreateWithoutProjectsInput, activity_logsUncheckedCreateWithoutProjectsInput> | activity_logsCreateWithoutProjectsInput[] | activity_logsUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: activity_logsCreateOrConnectWithoutProjectsInput | activity_logsCreateOrConnectWithoutProjectsInput[]
    createMany?: activity_logsCreateManyProjectsInputEnvelope
    connect?: activity_logsWhereUniqueInput | activity_logsWhereUniqueInput[]
  }

  export type project_membersUncheckedCreateNestedManyWithoutProjectsInput = {
    create?: XOR<project_membersCreateWithoutProjectsInput, project_membersUncheckedCreateWithoutProjectsInput> | project_membersCreateWithoutProjectsInput[] | project_membersUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: project_membersCreateOrConnectWithoutProjectsInput | project_membersCreateOrConnectWithoutProjectsInput[]
    createMany?: project_membersCreateManyProjectsInputEnvelope
    connect?: project_membersWhereUniqueInput | project_membersWhereUniqueInput[]
  }

  export type tasksUncheckedCreateNestedManyWithoutProjectsInput = {
    create?: XOR<tasksCreateWithoutProjectsInput, tasksUncheckedCreateWithoutProjectsInput> | tasksCreateWithoutProjectsInput[] | tasksUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutProjectsInput | tasksCreateOrConnectWithoutProjectsInput[]
    createMany?: tasksCreateManyProjectsInputEnvelope
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
  }

  export type activity_logsUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<activity_logsCreateWithoutProjectsInput, activity_logsUncheckedCreateWithoutProjectsInput> | activity_logsCreateWithoutProjectsInput[] | activity_logsUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: activity_logsCreateOrConnectWithoutProjectsInput | activity_logsCreateOrConnectWithoutProjectsInput[]
    upsert?: activity_logsUpsertWithWhereUniqueWithoutProjectsInput | activity_logsUpsertWithWhereUniqueWithoutProjectsInput[]
    createMany?: activity_logsCreateManyProjectsInputEnvelope
    set?: activity_logsWhereUniqueInput | activity_logsWhereUniqueInput[]
    disconnect?: activity_logsWhereUniqueInput | activity_logsWhereUniqueInput[]
    delete?: activity_logsWhereUniqueInput | activity_logsWhereUniqueInput[]
    connect?: activity_logsWhereUniqueInput | activity_logsWhereUniqueInput[]
    update?: activity_logsUpdateWithWhereUniqueWithoutProjectsInput | activity_logsUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: activity_logsUpdateManyWithWhereWithoutProjectsInput | activity_logsUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: activity_logsScalarWhereInput | activity_logsScalarWhereInput[]
  }

  export type project_membersUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<project_membersCreateWithoutProjectsInput, project_membersUncheckedCreateWithoutProjectsInput> | project_membersCreateWithoutProjectsInput[] | project_membersUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: project_membersCreateOrConnectWithoutProjectsInput | project_membersCreateOrConnectWithoutProjectsInput[]
    upsert?: project_membersUpsertWithWhereUniqueWithoutProjectsInput | project_membersUpsertWithWhereUniqueWithoutProjectsInput[]
    createMany?: project_membersCreateManyProjectsInputEnvelope
    set?: project_membersWhereUniqueInput | project_membersWhereUniqueInput[]
    disconnect?: project_membersWhereUniqueInput | project_membersWhereUniqueInput[]
    delete?: project_membersWhereUniqueInput | project_membersWhereUniqueInput[]
    connect?: project_membersWhereUniqueInput | project_membersWhereUniqueInput[]
    update?: project_membersUpdateWithWhereUniqueWithoutProjectsInput | project_membersUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: project_membersUpdateManyWithWhereWithoutProjectsInput | project_membersUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: project_membersScalarWhereInput | project_membersScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<usersCreateWithoutProjectsInput, usersUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: usersCreateOrConnectWithoutProjectsInput
    upsert?: usersUpsertWithoutProjectsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutProjectsInput, usersUpdateWithoutProjectsInput>, usersUncheckedUpdateWithoutProjectsInput>
  }

  export type tasksUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<tasksCreateWithoutProjectsInput, tasksUncheckedCreateWithoutProjectsInput> | tasksCreateWithoutProjectsInput[] | tasksUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutProjectsInput | tasksCreateOrConnectWithoutProjectsInput[]
    upsert?: tasksUpsertWithWhereUniqueWithoutProjectsInput | tasksUpsertWithWhereUniqueWithoutProjectsInput[]
    createMany?: tasksCreateManyProjectsInputEnvelope
    set?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    disconnect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    delete?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    update?: tasksUpdateWithWhereUniqueWithoutProjectsInput | tasksUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: tasksUpdateManyWithWhereWithoutProjectsInput | tasksUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: tasksScalarWhereInput | tasksScalarWhereInput[]
  }

  export type activity_logsUncheckedUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<activity_logsCreateWithoutProjectsInput, activity_logsUncheckedCreateWithoutProjectsInput> | activity_logsCreateWithoutProjectsInput[] | activity_logsUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: activity_logsCreateOrConnectWithoutProjectsInput | activity_logsCreateOrConnectWithoutProjectsInput[]
    upsert?: activity_logsUpsertWithWhereUniqueWithoutProjectsInput | activity_logsUpsertWithWhereUniqueWithoutProjectsInput[]
    createMany?: activity_logsCreateManyProjectsInputEnvelope
    set?: activity_logsWhereUniqueInput | activity_logsWhereUniqueInput[]
    disconnect?: activity_logsWhereUniqueInput | activity_logsWhereUniqueInput[]
    delete?: activity_logsWhereUniqueInput | activity_logsWhereUniqueInput[]
    connect?: activity_logsWhereUniqueInput | activity_logsWhereUniqueInput[]
    update?: activity_logsUpdateWithWhereUniqueWithoutProjectsInput | activity_logsUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: activity_logsUpdateManyWithWhereWithoutProjectsInput | activity_logsUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: activity_logsScalarWhereInput | activity_logsScalarWhereInput[]
  }

  export type project_membersUncheckedUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<project_membersCreateWithoutProjectsInput, project_membersUncheckedCreateWithoutProjectsInput> | project_membersCreateWithoutProjectsInput[] | project_membersUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: project_membersCreateOrConnectWithoutProjectsInput | project_membersCreateOrConnectWithoutProjectsInput[]
    upsert?: project_membersUpsertWithWhereUniqueWithoutProjectsInput | project_membersUpsertWithWhereUniqueWithoutProjectsInput[]
    createMany?: project_membersCreateManyProjectsInputEnvelope
    set?: project_membersWhereUniqueInput | project_membersWhereUniqueInput[]
    disconnect?: project_membersWhereUniqueInput | project_membersWhereUniqueInput[]
    delete?: project_membersWhereUniqueInput | project_membersWhereUniqueInput[]
    connect?: project_membersWhereUniqueInput | project_membersWhereUniqueInput[]
    update?: project_membersUpdateWithWhereUniqueWithoutProjectsInput | project_membersUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: project_membersUpdateManyWithWhereWithoutProjectsInput | project_membersUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: project_membersScalarWhereInput | project_membersScalarWhereInput[]
  }

  export type tasksUncheckedUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<tasksCreateWithoutProjectsInput, tasksUncheckedCreateWithoutProjectsInput> | tasksCreateWithoutProjectsInput[] | tasksUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutProjectsInput | tasksCreateOrConnectWithoutProjectsInput[]
    upsert?: tasksUpsertWithWhereUniqueWithoutProjectsInput | tasksUpsertWithWhereUniqueWithoutProjectsInput[]
    createMany?: tasksCreateManyProjectsInputEnvelope
    set?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    disconnect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    delete?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    update?: tasksUpdateWithWhereUniqueWithoutProjectsInput | tasksUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: tasksUpdateManyWithWhereWithoutProjectsInput | tasksUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: tasksScalarWhereInput | tasksScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutTagsInput = {
    create?: XOR<usersCreateWithoutTagsInput, usersUncheckedCreateWithoutTagsInput>
    connectOrCreate?: usersCreateOrConnectWithoutTagsInput
    connect?: usersWhereUniqueInput
  }

  export type task_tagsCreateNestedManyWithoutTagsInput = {
    create?: XOR<task_tagsCreateWithoutTagsInput, task_tagsUncheckedCreateWithoutTagsInput> | task_tagsCreateWithoutTagsInput[] | task_tagsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: task_tagsCreateOrConnectWithoutTagsInput | task_tagsCreateOrConnectWithoutTagsInput[]
    createMany?: task_tagsCreateManyTagsInputEnvelope
    connect?: task_tagsWhereUniqueInput | task_tagsWhereUniqueInput[]
  }

  export type task_tagsUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<task_tagsCreateWithoutTagsInput, task_tagsUncheckedCreateWithoutTagsInput> | task_tagsCreateWithoutTagsInput[] | task_tagsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: task_tagsCreateOrConnectWithoutTagsInput | task_tagsCreateOrConnectWithoutTagsInput[]
    createMany?: task_tagsCreateManyTagsInputEnvelope
    connect?: task_tagsWhereUniqueInput | task_tagsWhereUniqueInput[]
  }

  export type usersUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<usersCreateWithoutTagsInput, usersUncheckedCreateWithoutTagsInput>
    connectOrCreate?: usersCreateOrConnectWithoutTagsInput
    upsert?: usersUpsertWithoutTagsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutTagsInput, usersUpdateWithoutTagsInput>, usersUncheckedUpdateWithoutTagsInput>
  }

  export type task_tagsUpdateManyWithoutTagsNestedInput = {
    create?: XOR<task_tagsCreateWithoutTagsInput, task_tagsUncheckedCreateWithoutTagsInput> | task_tagsCreateWithoutTagsInput[] | task_tagsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: task_tagsCreateOrConnectWithoutTagsInput | task_tagsCreateOrConnectWithoutTagsInput[]
    upsert?: task_tagsUpsertWithWhereUniqueWithoutTagsInput | task_tagsUpsertWithWhereUniqueWithoutTagsInput[]
    createMany?: task_tagsCreateManyTagsInputEnvelope
    set?: task_tagsWhereUniqueInput | task_tagsWhereUniqueInput[]
    disconnect?: task_tagsWhereUniqueInput | task_tagsWhereUniqueInput[]
    delete?: task_tagsWhereUniqueInput | task_tagsWhereUniqueInput[]
    connect?: task_tagsWhereUniqueInput | task_tagsWhereUniqueInput[]
    update?: task_tagsUpdateWithWhereUniqueWithoutTagsInput | task_tagsUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: task_tagsUpdateManyWithWhereWithoutTagsInput | task_tagsUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: task_tagsScalarWhereInput | task_tagsScalarWhereInput[]
  }

  export type task_tagsUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<task_tagsCreateWithoutTagsInput, task_tagsUncheckedCreateWithoutTagsInput> | task_tagsCreateWithoutTagsInput[] | task_tagsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: task_tagsCreateOrConnectWithoutTagsInput | task_tagsCreateOrConnectWithoutTagsInput[]
    upsert?: task_tagsUpsertWithWhereUniqueWithoutTagsInput | task_tagsUpsertWithWhereUniqueWithoutTagsInput[]
    createMany?: task_tagsCreateManyTagsInputEnvelope
    set?: task_tagsWhereUniqueInput | task_tagsWhereUniqueInput[]
    disconnect?: task_tagsWhereUniqueInput | task_tagsWhereUniqueInput[]
    delete?: task_tagsWhereUniqueInput | task_tagsWhereUniqueInput[]
    connect?: task_tagsWhereUniqueInput | task_tagsWhereUniqueInput[]
    update?: task_tagsUpdateWithWhereUniqueWithoutTagsInput | task_tagsUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: task_tagsUpdateManyWithWhereWithoutTagsInput | task_tagsUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: task_tagsScalarWhereInput | task_tagsScalarWhereInput[]
  }

  export type tagsCreateNestedOneWithoutTask_tagsInput = {
    create?: XOR<tagsCreateWithoutTask_tagsInput, tagsUncheckedCreateWithoutTask_tagsInput>
    connectOrCreate?: tagsCreateOrConnectWithoutTask_tagsInput
    connect?: tagsWhereUniqueInput
  }

  export type tasksCreateNestedOneWithoutTask_tagsInput = {
    create?: XOR<tasksCreateWithoutTask_tagsInput, tasksUncheckedCreateWithoutTask_tagsInput>
    connectOrCreate?: tasksCreateOrConnectWithoutTask_tagsInput
    connect?: tasksWhereUniqueInput
  }

  export type tagsUpdateOneRequiredWithoutTask_tagsNestedInput = {
    create?: XOR<tagsCreateWithoutTask_tagsInput, tagsUncheckedCreateWithoutTask_tagsInput>
    connectOrCreate?: tagsCreateOrConnectWithoutTask_tagsInput
    upsert?: tagsUpsertWithoutTask_tagsInput
    connect?: tagsWhereUniqueInput
    update?: XOR<XOR<tagsUpdateToOneWithWhereWithoutTask_tagsInput, tagsUpdateWithoutTask_tagsInput>, tagsUncheckedUpdateWithoutTask_tagsInput>
  }

  export type tasksUpdateOneRequiredWithoutTask_tagsNestedInput = {
    create?: XOR<tasksCreateWithoutTask_tagsInput, tasksUncheckedCreateWithoutTask_tagsInput>
    connectOrCreate?: tasksCreateOrConnectWithoutTask_tagsInput
    upsert?: tasksUpsertWithoutTask_tagsInput
    connect?: tasksWhereUniqueInput
    update?: XOR<XOR<tasksUpdateToOneWithWhereWithoutTask_tagsInput, tasksUpdateWithoutTask_tagsInput>, tasksUncheckedUpdateWithoutTask_tagsInput>
  }

  export type activity_logsCreateNestedManyWithoutTasksInput = {
    create?: XOR<activity_logsCreateWithoutTasksInput, activity_logsUncheckedCreateWithoutTasksInput> | activity_logsCreateWithoutTasksInput[] | activity_logsUncheckedCreateWithoutTasksInput[]
    connectOrCreate?: activity_logsCreateOrConnectWithoutTasksInput | activity_logsCreateOrConnectWithoutTasksInput[]
    createMany?: activity_logsCreateManyTasksInputEnvelope
    connect?: activity_logsWhereUniqueInput | activity_logsWhereUniqueInput[]
  }

  export type task_tagsCreateNestedManyWithoutTasksInput = {
    create?: XOR<task_tagsCreateWithoutTasksInput, task_tagsUncheckedCreateWithoutTasksInput> | task_tagsCreateWithoutTasksInput[] | task_tagsUncheckedCreateWithoutTasksInput[]
    connectOrCreate?: task_tagsCreateOrConnectWithoutTasksInput | task_tagsCreateOrConnectWithoutTasksInput[]
    createMany?: task_tagsCreateManyTasksInputEnvelope
    connect?: task_tagsWhereUniqueInput | task_tagsWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutTasks_tasks_assignee_idTousersInput = {
    create?: XOR<usersCreateWithoutTasks_tasks_assignee_idTousersInput, usersUncheckedCreateWithoutTasks_tasks_assignee_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutTasks_tasks_assignee_idTousersInput
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutTasks_tasks_creator_idTousersInput = {
    create?: XOR<usersCreateWithoutTasks_tasks_creator_idTousersInput, usersUncheckedCreateWithoutTasks_tasks_creator_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutTasks_tasks_creator_idTousersInput
    connect?: usersWhereUniqueInput
  }

  export type projectsCreateNestedOneWithoutTasksInput = {
    create?: XOR<projectsCreateWithoutTasksInput, projectsUncheckedCreateWithoutTasksInput>
    connectOrCreate?: projectsCreateOrConnectWithoutTasksInput
    connect?: projectsWhereUniqueInput
  }

  export type activity_logsUncheckedCreateNestedManyWithoutTasksInput = {
    create?: XOR<activity_logsCreateWithoutTasksInput, activity_logsUncheckedCreateWithoutTasksInput> | activity_logsCreateWithoutTasksInput[] | activity_logsUncheckedCreateWithoutTasksInput[]
    connectOrCreate?: activity_logsCreateOrConnectWithoutTasksInput | activity_logsCreateOrConnectWithoutTasksInput[]
    createMany?: activity_logsCreateManyTasksInputEnvelope
    connect?: activity_logsWhereUniqueInput | activity_logsWhereUniqueInput[]
  }

  export type task_tagsUncheckedCreateNestedManyWithoutTasksInput = {
    create?: XOR<task_tagsCreateWithoutTasksInput, task_tagsUncheckedCreateWithoutTasksInput> | task_tagsCreateWithoutTasksInput[] | task_tagsUncheckedCreateWithoutTasksInput[]
    connectOrCreate?: task_tagsCreateOrConnectWithoutTasksInput | task_tagsCreateOrConnectWithoutTasksInput[]
    createMany?: task_tagsCreateManyTasksInputEnvelope
    connect?: task_tagsWhereUniqueInput | task_tagsWhereUniqueInput[]
  }

  export type activity_logsUpdateManyWithoutTasksNestedInput = {
    create?: XOR<activity_logsCreateWithoutTasksInput, activity_logsUncheckedCreateWithoutTasksInput> | activity_logsCreateWithoutTasksInput[] | activity_logsUncheckedCreateWithoutTasksInput[]
    connectOrCreate?: activity_logsCreateOrConnectWithoutTasksInput | activity_logsCreateOrConnectWithoutTasksInput[]
    upsert?: activity_logsUpsertWithWhereUniqueWithoutTasksInput | activity_logsUpsertWithWhereUniqueWithoutTasksInput[]
    createMany?: activity_logsCreateManyTasksInputEnvelope
    set?: activity_logsWhereUniqueInput | activity_logsWhereUniqueInput[]
    disconnect?: activity_logsWhereUniqueInput | activity_logsWhereUniqueInput[]
    delete?: activity_logsWhereUniqueInput | activity_logsWhereUniqueInput[]
    connect?: activity_logsWhereUniqueInput | activity_logsWhereUniqueInput[]
    update?: activity_logsUpdateWithWhereUniqueWithoutTasksInput | activity_logsUpdateWithWhereUniqueWithoutTasksInput[]
    updateMany?: activity_logsUpdateManyWithWhereWithoutTasksInput | activity_logsUpdateManyWithWhereWithoutTasksInput[]
    deleteMany?: activity_logsScalarWhereInput | activity_logsScalarWhereInput[]
  }

  export type task_tagsUpdateManyWithoutTasksNestedInput = {
    create?: XOR<task_tagsCreateWithoutTasksInput, task_tagsUncheckedCreateWithoutTasksInput> | task_tagsCreateWithoutTasksInput[] | task_tagsUncheckedCreateWithoutTasksInput[]
    connectOrCreate?: task_tagsCreateOrConnectWithoutTasksInput | task_tagsCreateOrConnectWithoutTasksInput[]
    upsert?: task_tagsUpsertWithWhereUniqueWithoutTasksInput | task_tagsUpsertWithWhereUniqueWithoutTasksInput[]
    createMany?: task_tagsCreateManyTasksInputEnvelope
    set?: task_tagsWhereUniqueInput | task_tagsWhereUniqueInput[]
    disconnect?: task_tagsWhereUniqueInput | task_tagsWhereUniqueInput[]
    delete?: task_tagsWhereUniqueInput | task_tagsWhereUniqueInput[]
    connect?: task_tagsWhereUniqueInput | task_tagsWhereUniqueInput[]
    update?: task_tagsUpdateWithWhereUniqueWithoutTasksInput | task_tagsUpdateWithWhereUniqueWithoutTasksInput[]
    updateMany?: task_tagsUpdateManyWithWhereWithoutTasksInput | task_tagsUpdateManyWithWhereWithoutTasksInput[]
    deleteMany?: task_tagsScalarWhereInput | task_tagsScalarWhereInput[]
  }

  export type usersUpdateOneWithoutTasks_tasks_assignee_idTousersNestedInput = {
    create?: XOR<usersCreateWithoutTasks_tasks_assignee_idTousersInput, usersUncheckedCreateWithoutTasks_tasks_assignee_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutTasks_tasks_assignee_idTousersInput
    upsert?: usersUpsertWithoutTasks_tasks_assignee_idTousersInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutTasks_tasks_assignee_idTousersInput, usersUpdateWithoutTasks_tasks_assignee_idTousersInput>, usersUncheckedUpdateWithoutTasks_tasks_assignee_idTousersInput>
  }

  export type usersUpdateOneRequiredWithoutTasks_tasks_creator_idTousersNestedInput = {
    create?: XOR<usersCreateWithoutTasks_tasks_creator_idTousersInput, usersUncheckedCreateWithoutTasks_tasks_creator_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutTasks_tasks_creator_idTousersInput
    upsert?: usersUpsertWithoutTasks_tasks_creator_idTousersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutTasks_tasks_creator_idTousersInput, usersUpdateWithoutTasks_tasks_creator_idTousersInput>, usersUncheckedUpdateWithoutTasks_tasks_creator_idTousersInput>
  }

  export type projectsUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<projectsCreateWithoutTasksInput, projectsUncheckedCreateWithoutTasksInput>
    connectOrCreate?: projectsCreateOrConnectWithoutTasksInput
    upsert?: projectsUpsertWithoutTasksInput
    connect?: projectsWhereUniqueInput
    update?: XOR<XOR<projectsUpdateToOneWithWhereWithoutTasksInput, projectsUpdateWithoutTasksInput>, projectsUncheckedUpdateWithoutTasksInput>
  }

  export type activity_logsUncheckedUpdateManyWithoutTasksNestedInput = {
    create?: XOR<activity_logsCreateWithoutTasksInput, activity_logsUncheckedCreateWithoutTasksInput> | activity_logsCreateWithoutTasksInput[] | activity_logsUncheckedCreateWithoutTasksInput[]
    connectOrCreate?: activity_logsCreateOrConnectWithoutTasksInput | activity_logsCreateOrConnectWithoutTasksInput[]
    upsert?: activity_logsUpsertWithWhereUniqueWithoutTasksInput | activity_logsUpsertWithWhereUniqueWithoutTasksInput[]
    createMany?: activity_logsCreateManyTasksInputEnvelope
    set?: activity_logsWhereUniqueInput | activity_logsWhereUniqueInput[]
    disconnect?: activity_logsWhereUniqueInput | activity_logsWhereUniqueInput[]
    delete?: activity_logsWhereUniqueInput | activity_logsWhereUniqueInput[]
    connect?: activity_logsWhereUniqueInput | activity_logsWhereUniqueInput[]
    update?: activity_logsUpdateWithWhereUniqueWithoutTasksInput | activity_logsUpdateWithWhereUniqueWithoutTasksInput[]
    updateMany?: activity_logsUpdateManyWithWhereWithoutTasksInput | activity_logsUpdateManyWithWhereWithoutTasksInput[]
    deleteMany?: activity_logsScalarWhereInput | activity_logsScalarWhereInput[]
  }

  export type task_tagsUncheckedUpdateManyWithoutTasksNestedInput = {
    create?: XOR<task_tagsCreateWithoutTasksInput, task_tagsUncheckedCreateWithoutTasksInput> | task_tagsCreateWithoutTasksInput[] | task_tagsUncheckedCreateWithoutTasksInput[]
    connectOrCreate?: task_tagsCreateOrConnectWithoutTasksInput | task_tagsCreateOrConnectWithoutTasksInput[]
    upsert?: task_tagsUpsertWithWhereUniqueWithoutTasksInput | task_tagsUpsertWithWhereUniqueWithoutTasksInput[]
    createMany?: task_tagsCreateManyTasksInputEnvelope
    set?: task_tagsWhereUniqueInput | task_tagsWhereUniqueInput[]
    disconnect?: task_tagsWhereUniqueInput | task_tagsWhereUniqueInput[]
    delete?: task_tagsWhereUniqueInput | task_tagsWhereUniqueInput[]
    connect?: task_tagsWhereUniqueInput | task_tagsWhereUniqueInput[]
    update?: task_tagsUpdateWithWhereUniqueWithoutTasksInput | task_tagsUpdateWithWhereUniqueWithoutTasksInput[]
    updateMany?: task_tagsUpdateManyWithWhereWithoutTasksInput | task_tagsUpdateManyWithWhereWithoutTasksInput[]
    deleteMany?: task_tagsScalarWhereInput | task_tagsScalarWhereInput[]
  }

  export type activity_logsCreateNestedManyWithoutUsersInput = {
    create?: XOR<activity_logsCreateWithoutUsersInput, activity_logsUncheckedCreateWithoutUsersInput> | activity_logsCreateWithoutUsersInput[] | activity_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: activity_logsCreateOrConnectWithoutUsersInput | activity_logsCreateOrConnectWithoutUsersInput[]
    createMany?: activity_logsCreateManyUsersInputEnvelope
    connect?: activity_logsWhereUniqueInput | activity_logsWhereUniqueInput[]
  }

  export type project_membersCreateNestedManyWithoutUsersInput = {
    create?: XOR<project_membersCreateWithoutUsersInput, project_membersUncheckedCreateWithoutUsersInput> | project_membersCreateWithoutUsersInput[] | project_membersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: project_membersCreateOrConnectWithoutUsersInput | project_membersCreateOrConnectWithoutUsersInput[]
    createMany?: project_membersCreateManyUsersInputEnvelope
    connect?: project_membersWhereUniqueInput | project_membersWhereUniqueInput[]
  }

  export type projectsCreateNestedManyWithoutUsersInput = {
    create?: XOR<projectsCreateWithoutUsersInput, projectsUncheckedCreateWithoutUsersInput> | projectsCreateWithoutUsersInput[] | projectsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: projectsCreateOrConnectWithoutUsersInput | projectsCreateOrConnectWithoutUsersInput[]
    createMany?: projectsCreateManyUsersInputEnvelope
    connect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
  }

  export type tagsCreateNestedManyWithoutUsersInput = {
    create?: XOR<tagsCreateWithoutUsersInput, tagsUncheckedCreateWithoutUsersInput> | tagsCreateWithoutUsersInput[] | tagsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: tagsCreateOrConnectWithoutUsersInput | tagsCreateOrConnectWithoutUsersInput[]
    createMany?: tagsCreateManyUsersInputEnvelope
    connect?: tagsWhereUniqueInput | tagsWhereUniqueInput[]
  }

  export type tasksCreateNestedManyWithoutUsers_tasks_assignee_idTousersInput = {
    create?: XOR<tasksCreateWithoutUsers_tasks_assignee_idTousersInput, tasksUncheckedCreateWithoutUsers_tasks_assignee_idTousersInput> | tasksCreateWithoutUsers_tasks_assignee_idTousersInput[] | tasksUncheckedCreateWithoutUsers_tasks_assignee_idTousersInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutUsers_tasks_assignee_idTousersInput | tasksCreateOrConnectWithoutUsers_tasks_assignee_idTousersInput[]
    createMany?: tasksCreateManyUsers_tasks_assignee_idTousersInputEnvelope
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
  }

  export type tasksCreateNestedManyWithoutUsers_tasks_creator_idTousersInput = {
    create?: XOR<tasksCreateWithoutUsers_tasks_creator_idTousersInput, tasksUncheckedCreateWithoutUsers_tasks_creator_idTousersInput> | tasksCreateWithoutUsers_tasks_creator_idTousersInput[] | tasksUncheckedCreateWithoutUsers_tasks_creator_idTousersInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutUsers_tasks_creator_idTousersInput | tasksCreateOrConnectWithoutUsers_tasks_creator_idTousersInput[]
    createMany?: tasksCreateManyUsers_tasks_creator_idTousersInputEnvelope
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
  }

  export type activity_logsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<activity_logsCreateWithoutUsersInput, activity_logsUncheckedCreateWithoutUsersInput> | activity_logsCreateWithoutUsersInput[] | activity_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: activity_logsCreateOrConnectWithoutUsersInput | activity_logsCreateOrConnectWithoutUsersInput[]
    createMany?: activity_logsCreateManyUsersInputEnvelope
    connect?: activity_logsWhereUniqueInput | activity_logsWhereUniqueInput[]
  }

  export type project_membersUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<project_membersCreateWithoutUsersInput, project_membersUncheckedCreateWithoutUsersInput> | project_membersCreateWithoutUsersInput[] | project_membersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: project_membersCreateOrConnectWithoutUsersInput | project_membersCreateOrConnectWithoutUsersInput[]
    createMany?: project_membersCreateManyUsersInputEnvelope
    connect?: project_membersWhereUniqueInput | project_membersWhereUniqueInput[]
  }

  export type projectsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<projectsCreateWithoutUsersInput, projectsUncheckedCreateWithoutUsersInput> | projectsCreateWithoutUsersInput[] | projectsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: projectsCreateOrConnectWithoutUsersInput | projectsCreateOrConnectWithoutUsersInput[]
    createMany?: projectsCreateManyUsersInputEnvelope
    connect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
  }

  export type tagsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<tagsCreateWithoutUsersInput, tagsUncheckedCreateWithoutUsersInput> | tagsCreateWithoutUsersInput[] | tagsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: tagsCreateOrConnectWithoutUsersInput | tagsCreateOrConnectWithoutUsersInput[]
    createMany?: tagsCreateManyUsersInputEnvelope
    connect?: tagsWhereUniqueInput | tagsWhereUniqueInput[]
  }

  export type tasksUncheckedCreateNestedManyWithoutUsers_tasks_assignee_idTousersInput = {
    create?: XOR<tasksCreateWithoutUsers_tasks_assignee_idTousersInput, tasksUncheckedCreateWithoutUsers_tasks_assignee_idTousersInput> | tasksCreateWithoutUsers_tasks_assignee_idTousersInput[] | tasksUncheckedCreateWithoutUsers_tasks_assignee_idTousersInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutUsers_tasks_assignee_idTousersInput | tasksCreateOrConnectWithoutUsers_tasks_assignee_idTousersInput[]
    createMany?: tasksCreateManyUsers_tasks_assignee_idTousersInputEnvelope
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
  }

  export type tasksUncheckedCreateNestedManyWithoutUsers_tasks_creator_idTousersInput = {
    create?: XOR<tasksCreateWithoutUsers_tasks_creator_idTousersInput, tasksUncheckedCreateWithoutUsers_tasks_creator_idTousersInput> | tasksCreateWithoutUsers_tasks_creator_idTousersInput[] | tasksUncheckedCreateWithoutUsers_tasks_creator_idTousersInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutUsers_tasks_creator_idTousersInput | tasksCreateOrConnectWithoutUsers_tasks_creator_idTousersInput[]
    createMany?: tasksCreateManyUsers_tasks_creator_idTousersInputEnvelope
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
  }

  export type activity_logsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<activity_logsCreateWithoutUsersInput, activity_logsUncheckedCreateWithoutUsersInput> | activity_logsCreateWithoutUsersInput[] | activity_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: activity_logsCreateOrConnectWithoutUsersInput | activity_logsCreateOrConnectWithoutUsersInput[]
    upsert?: activity_logsUpsertWithWhereUniqueWithoutUsersInput | activity_logsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: activity_logsCreateManyUsersInputEnvelope
    set?: activity_logsWhereUniqueInput | activity_logsWhereUniqueInput[]
    disconnect?: activity_logsWhereUniqueInput | activity_logsWhereUniqueInput[]
    delete?: activity_logsWhereUniqueInput | activity_logsWhereUniqueInput[]
    connect?: activity_logsWhereUniqueInput | activity_logsWhereUniqueInput[]
    update?: activity_logsUpdateWithWhereUniqueWithoutUsersInput | activity_logsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: activity_logsUpdateManyWithWhereWithoutUsersInput | activity_logsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: activity_logsScalarWhereInput | activity_logsScalarWhereInput[]
  }

  export type project_membersUpdateManyWithoutUsersNestedInput = {
    create?: XOR<project_membersCreateWithoutUsersInput, project_membersUncheckedCreateWithoutUsersInput> | project_membersCreateWithoutUsersInput[] | project_membersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: project_membersCreateOrConnectWithoutUsersInput | project_membersCreateOrConnectWithoutUsersInput[]
    upsert?: project_membersUpsertWithWhereUniqueWithoutUsersInput | project_membersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: project_membersCreateManyUsersInputEnvelope
    set?: project_membersWhereUniqueInput | project_membersWhereUniqueInput[]
    disconnect?: project_membersWhereUniqueInput | project_membersWhereUniqueInput[]
    delete?: project_membersWhereUniqueInput | project_membersWhereUniqueInput[]
    connect?: project_membersWhereUniqueInput | project_membersWhereUniqueInput[]
    update?: project_membersUpdateWithWhereUniqueWithoutUsersInput | project_membersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: project_membersUpdateManyWithWhereWithoutUsersInput | project_membersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: project_membersScalarWhereInput | project_membersScalarWhereInput[]
  }

  export type projectsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<projectsCreateWithoutUsersInput, projectsUncheckedCreateWithoutUsersInput> | projectsCreateWithoutUsersInput[] | projectsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: projectsCreateOrConnectWithoutUsersInput | projectsCreateOrConnectWithoutUsersInput[]
    upsert?: projectsUpsertWithWhereUniqueWithoutUsersInput | projectsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: projectsCreateManyUsersInputEnvelope
    set?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    disconnect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    delete?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    connect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    update?: projectsUpdateWithWhereUniqueWithoutUsersInput | projectsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: projectsUpdateManyWithWhereWithoutUsersInput | projectsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: projectsScalarWhereInput | projectsScalarWhereInput[]
  }

  export type tagsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<tagsCreateWithoutUsersInput, tagsUncheckedCreateWithoutUsersInput> | tagsCreateWithoutUsersInput[] | tagsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: tagsCreateOrConnectWithoutUsersInput | tagsCreateOrConnectWithoutUsersInput[]
    upsert?: tagsUpsertWithWhereUniqueWithoutUsersInput | tagsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: tagsCreateManyUsersInputEnvelope
    set?: tagsWhereUniqueInput | tagsWhereUniqueInput[]
    disconnect?: tagsWhereUniqueInput | tagsWhereUniqueInput[]
    delete?: tagsWhereUniqueInput | tagsWhereUniqueInput[]
    connect?: tagsWhereUniqueInput | tagsWhereUniqueInput[]
    update?: tagsUpdateWithWhereUniqueWithoutUsersInput | tagsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: tagsUpdateManyWithWhereWithoutUsersInput | tagsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: tagsScalarWhereInput | tagsScalarWhereInput[]
  }

  export type tasksUpdateManyWithoutUsers_tasks_assignee_idTousersNestedInput = {
    create?: XOR<tasksCreateWithoutUsers_tasks_assignee_idTousersInput, tasksUncheckedCreateWithoutUsers_tasks_assignee_idTousersInput> | tasksCreateWithoutUsers_tasks_assignee_idTousersInput[] | tasksUncheckedCreateWithoutUsers_tasks_assignee_idTousersInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutUsers_tasks_assignee_idTousersInput | tasksCreateOrConnectWithoutUsers_tasks_assignee_idTousersInput[]
    upsert?: tasksUpsertWithWhereUniqueWithoutUsers_tasks_assignee_idTousersInput | tasksUpsertWithWhereUniqueWithoutUsers_tasks_assignee_idTousersInput[]
    createMany?: tasksCreateManyUsers_tasks_assignee_idTousersInputEnvelope
    set?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    disconnect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    delete?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    update?: tasksUpdateWithWhereUniqueWithoutUsers_tasks_assignee_idTousersInput | tasksUpdateWithWhereUniqueWithoutUsers_tasks_assignee_idTousersInput[]
    updateMany?: tasksUpdateManyWithWhereWithoutUsers_tasks_assignee_idTousersInput | tasksUpdateManyWithWhereWithoutUsers_tasks_assignee_idTousersInput[]
    deleteMany?: tasksScalarWhereInput | tasksScalarWhereInput[]
  }

  export type tasksUpdateManyWithoutUsers_tasks_creator_idTousersNestedInput = {
    create?: XOR<tasksCreateWithoutUsers_tasks_creator_idTousersInput, tasksUncheckedCreateWithoutUsers_tasks_creator_idTousersInput> | tasksCreateWithoutUsers_tasks_creator_idTousersInput[] | tasksUncheckedCreateWithoutUsers_tasks_creator_idTousersInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutUsers_tasks_creator_idTousersInput | tasksCreateOrConnectWithoutUsers_tasks_creator_idTousersInput[]
    upsert?: tasksUpsertWithWhereUniqueWithoutUsers_tasks_creator_idTousersInput | tasksUpsertWithWhereUniqueWithoutUsers_tasks_creator_idTousersInput[]
    createMany?: tasksCreateManyUsers_tasks_creator_idTousersInputEnvelope
    set?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    disconnect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    delete?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    update?: tasksUpdateWithWhereUniqueWithoutUsers_tasks_creator_idTousersInput | tasksUpdateWithWhereUniqueWithoutUsers_tasks_creator_idTousersInput[]
    updateMany?: tasksUpdateManyWithWhereWithoutUsers_tasks_creator_idTousersInput | tasksUpdateManyWithWhereWithoutUsers_tasks_creator_idTousersInput[]
    deleteMany?: tasksScalarWhereInput | tasksScalarWhereInput[]
  }

  export type activity_logsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<activity_logsCreateWithoutUsersInput, activity_logsUncheckedCreateWithoutUsersInput> | activity_logsCreateWithoutUsersInput[] | activity_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: activity_logsCreateOrConnectWithoutUsersInput | activity_logsCreateOrConnectWithoutUsersInput[]
    upsert?: activity_logsUpsertWithWhereUniqueWithoutUsersInput | activity_logsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: activity_logsCreateManyUsersInputEnvelope
    set?: activity_logsWhereUniqueInput | activity_logsWhereUniqueInput[]
    disconnect?: activity_logsWhereUniqueInput | activity_logsWhereUniqueInput[]
    delete?: activity_logsWhereUniqueInput | activity_logsWhereUniqueInput[]
    connect?: activity_logsWhereUniqueInput | activity_logsWhereUniqueInput[]
    update?: activity_logsUpdateWithWhereUniqueWithoutUsersInput | activity_logsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: activity_logsUpdateManyWithWhereWithoutUsersInput | activity_logsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: activity_logsScalarWhereInput | activity_logsScalarWhereInput[]
  }

  export type project_membersUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<project_membersCreateWithoutUsersInput, project_membersUncheckedCreateWithoutUsersInput> | project_membersCreateWithoutUsersInput[] | project_membersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: project_membersCreateOrConnectWithoutUsersInput | project_membersCreateOrConnectWithoutUsersInput[]
    upsert?: project_membersUpsertWithWhereUniqueWithoutUsersInput | project_membersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: project_membersCreateManyUsersInputEnvelope
    set?: project_membersWhereUniqueInput | project_membersWhereUniqueInput[]
    disconnect?: project_membersWhereUniqueInput | project_membersWhereUniqueInput[]
    delete?: project_membersWhereUniqueInput | project_membersWhereUniqueInput[]
    connect?: project_membersWhereUniqueInput | project_membersWhereUniqueInput[]
    update?: project_membersUpdateWithWhereUniqueWithoutUsersInput | project_membersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: project_membersUpdateManyWithWhereWithoutUsersInput | project_membersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: project_membersScalarWhereInput | project_membersScalarWhereInput[]
  }

  export type projectsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<projectsCreateWithoutUsersInput, projectsUncheckedCreateWithoutUsersInput> | projectsCreateWithoutUsersInput[] | projectsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: projectsCreateOrConnectWithoutUsersInput | projectsCreateOrConnectWithoutUsersInput[]
    upsert?: projectsUpsertWithWhereUniqueWithoutUsersInput | projectsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: projectsCreateManyUsersInputEnvelope
    set?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    disconnect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    delete?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    connect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    update?: projectsUpdateWithWhereUniqueWithoutUsersInput | projectsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: projectsUpdateManyWithWhereWithoutUsersInput | projectsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: projectsScalarWhereInput | projectsScalarWhereInput[]
  }

  export type tagsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<tagsCreateWithoutUsersInput, tagsUncheckedCreateWithoutUsersInput> | tagsCreateWithoutUsersInput[] | tagsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: tagsCreateOrConnectWithoutUsersInput | tagsCreateOrConnectWithoutUsersInput[]
    upsert?: tagsUpsertWithWhereUniqueWithoutUsersInput | tagsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: tagsCreateManyUsersInputEnvelope
    set?: tagsWhereUniqueInput | tagsWhereUniqueInput[]
    disconnect?: tagsWhereUniqueInput | tagsWhereUniqueInput[]
    delete?: tagsWhereUniqueInput | tagsWhereUniqueInput[]
    connect?: tagsWhereUniqueInput | tagsWhereUniqueInput[]
    update?: tagsUpdateWithWhereUniqueWithoutUsersInput | tagsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: tagsUpdateManyWithWhereWithoutUsersInput | tagsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: tagsScalarWhereInput | tagsScalarWhereInput[]
  }

  export type tasksUncheckedUpdateManyWithoutUsers_tasks_assignee_idTousersNestedInput = {
    create?: XOR<tasksCreateWithoutUsers_tasks_assignee_idTousersInput, tasksUncheckedCreateWithoutUsers_tasks_assignee_idTousersInput> | tasksCreateWithoutUsers_tasks_assignee_idTousersInput[] | tasksUncheckedCreateWithoutUsers_tasks_assignee_idTousersInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutUsers_tasks_assignee_idTousersInput | tasksCreateOrConnectWithoutUsers_tasks_assignee_idTousersInput[]
    upsert?: tasksUpsertWithWhereUniqueWithoutUsers_tasks_assignee_idTousersInput | tasksUpsertWithWhereUniqueWithoutUsers_tasks_assignee_idTousersInput[]
    createMany?: tasksCreateManyUsers_tasks_assignee_idTousersInputEnvelope
    set?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    disconnect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    delete?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    update?: tasksUpdateWithWhereUniqueWithoutUsers_tasks_assignee_idTousersInput | tasksUpdateWithWhereUniqueWithoutUsers_tasks_assignee_idTousersInput[]
    updateMany?: tasksUpdateManyWithWhereWithoutUsers_tasks_assignee_idTousersInput | tasksUpdateManyWithWhereWithoutUsers_tasks_assignee_idTousersInput[]
    deleteMany?: tasksScalarWhereInput | tasksScalarWhereInput[]
  }

  export type tasksUncheckedUpdateManyWithoutUsers_tasks_creator_idTousersNestedInput = {
    create?: XOR<tasksCreateWithoutUsers_tasks_creator_idTousersInput, tasksUncheckedCreateWithoutUsers_tasks_creator_idTousersInput> | tasksCreateWithoutUsers_tasks_creator_idTousersInput[] | tasksUncheckedCreateWithoutUsers_tasks_creator_idTousersInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutUsers_tasks_creator_idTousersInput | tasksCreateOrConnectWithoutUsers_tasks_creator_idTousersInput[]
    upsert?: tasksUpsertWithWhereUniqueWithoutUsers_tasks_creator_idTousersInput | tasksUpsertWithWhereUniqueWithoutUsers_tasks_creator_idTousersInput[]
    createMany?: tasksCreateManyUsers_tasks_creator_idTousersInputEnvelope
    set?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    disconnect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    delete?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    update?: tasksUpdateWithWhereUniqueWithoutUsers_tasks_creator_idTousersInput | tasksUpdateWithWhereUniqueWithoutUsers_tasks_creator_idTousersInput[]
    updateMany?: tasksUpdateManyWithWhereWithoutUsers_tasks_creator_idTousersInput | tasksUpdateManyWithWhereWithoutUsers_tasks_creator_idTousersInput[]
    deleteMany?: tasksScalarWhereInput | tasksScalarWhereInput[]
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type projectsCreateWithoutActivity_logsInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    project_members?: project_membersCreateNestedManyWithoutProjectsInput
    users: usersCreateNestedOneWithoutProjectsInput
    tasks?: tasksCreateNestedManyWithoutProjectsInput
  }

  export type projectsUncheckedCreateWithoutActivity_logsInput = {
    id?: string
    owner_id: string
    name: string
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    project_members?: project_membersUncheckedCreateNestedManyWithoutProjectsInput
    tasks?: tasksUncheckedCreateNestedManyWithoutProjectsInput
  }

  export type projectsCreateOrConnectWithoutActivity_logsInput = {
    where: projectsWhereUniqueInput
    create: XOR<projectsCreateWithoutActivity_logsInput, projectsUncheckedCreateWithoutActivity_logsInput>
  }

  export type tasksCreateWithoutActivity_logsInput = {
    id?: string
    title: string
    description?: string | null
    status?: string | null
    priority?: string | null
    due_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    task_tags?: task_tagsCreateNestedManyWithoutTasksInput
    users_tasks_assignee_idTousers?: usersCreateNestedOneWithoutTasks_tasks_assignee_idTousersInput
    users_tasks_creator_idTousers: usersCreateNestedOneWithoutTasks_tasks_creator_idTousersInput
    projects: projectsCreateNestedOneWithoutTasksInput
  }

  export type tasksUncheckedCreateWithoutActivity_logsInput = {
    id?: string
    project_id: string
    creator_id: string
    assignee_id?: string | null
    title: string
    description?: string | null
    status?: string | null
    priority?: string | null
    due_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    task_tags?: task_tagsUncheckedCreateNestedManyWithoutTasksInput
  }

  export type tasksCreateOrConnectWithoutActivity_logsInput = {
    where: tasksWhereUniqueInput
    create: XOR<tasksCreateWithoutActivity_logsInput, tasksUncheckedCreateWithoutActivity_logsInput>
  }

  export type usersCreateWithoutActivity_logsInput = {
    id?: string
    email: string
    password_hash: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    project_members?: project_membersCreateNestedManyWithoutUsersInput
    projects?: projectsCreateNestedManyWithoutUsersInput
    tags?: tagsCreateNestedManyWithoutUsersInput
    tasks_tasks_assignee_idTousers?: tasksCreateNestedManyWithoutUsers_tasks_assignee_idTousersInput
    tasks_tasks_creator_idTousers?: tasksCreateNestedManyWithoutUsers_tasks_creator_idTousersInput
  }

  export type usersUncheckedCreateWithoutActivity_logsInput = {
    id?: string
    email: string
    password_hash: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    project_members?: project_membersUncheckedCreateNestedManyWithoutUsersInput
    projects?: projectsUncheckedCreateNestedManyWithoutUsersInput
    tags?: tagsUncheckedCreateNestedManyWithoutUsersInput
    tasks_tasks_assignee_idTousers?: tasksUncheckedCreateNestedManyWithoutUsers_tasks_assignee_idTousersInput
    tasks_tasks_creator_idTousers?: tasksUncheckedCreateNestedManyWithoutUsers_tasks_creator_idTousersInput
  }

  export type usersCreateOrConnectWithoutActivity_logsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutActivity_logsInput, usersUncheckedCreateWithoutActivity_logsInput>
  }

  export type projectsUpsertWithoutActivity_logsInput = {
    update: XOR<projectsUpdateWithoutActivity_logsInput, projectsUncheckedUpdateWithoutActivity_logsInput>
    create: XOR<projectsCreateWithoutActivity_logsInput, projectsUncheckedCreateWithoutActivity_logsInput>
    where?: projectsWhereInput
  }

  export type projectsUpdateToOneWithWhereWithoutActivity_logsInput = {
    where?: projectsWhereInput
    data: XOR<projectsUpdateWithoutActivity_logsInput, projectsUncheckedUpdateWithoutActivity_logsInput>
  }

  export type projectsUpdateWithoutActivity_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    project_members?: project_membersUpdateManyWithoutProjectsNestedInput
    users?: usersUpdateOneRequiredWithoutProjectsNestedInput
    tasks?: tasksUpdateManyWithoutProjectsNestedInput
  }

  export type projectsUncheckedUpdateWithoutActivity_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    project_members?: project_membersUncheckedUpdateManyWithoutProjectsNestedInput
    tasks?: tasksUncheckedUpdateManyWithoutProjectsNestedInput
  }

  export type tasksUpsertWithoutActivity_logsInput = {
    update: XOR<tasksUpdateWithoutActivity_logsInput, tasksUncheckedUpdateWithoutActivity_logsInput>
    create: XOR<tasksCreateWithoutActivity_logsInput, tasksUncheckedCreateWithoutActivity_logsInput>
    where?: tasksWhereInput
  }

  export type tasksUpdateToOneWithWhereWithoutActivity_logsInput = {
    where?: tasksWhereInput
    data: XOR<tasksUpdateWithoutActivity_logsInput, tasksUncheckedUpdateWithoutActivity_logsInput>
  }

  export type tasksUpdateWithoutActivity_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task_tags?: task_tagsUpdateManyWithoutTasksNestedInput
    users_tasks_assignee_idTousers?: usersUpdateOneWithoutTasks_tasks_assignee_idTousersNestedInput
    users_tasks_creator_idTousers?: usersUpdateOneRequiredWithoutTasks_tasks_creator_idTousersNestedInput
    projects?: projectsUpdateOneRequiredWithoutTasksNestedInput
  }

  export type tasksUncheckedUpdateWithoutActivity_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    project_id?: StringFieldUpdateOperationsInput | string
    creator_id?: StringFieldUpdateOperationsInput | string
    assignee_id?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task_tags?: task_tagsUncheckedUpdateManyWithoutTasksNestedInput
  }

  export type usersUpsertWithoutActivity_logsInput = {
    update: XOR<usersUpdateWithoutActivity_logsInput, usersUncheckedUpdateWithoutActivity_logsInput>
    create: XOR<usersCreateWithoutActivity_logsInput, usersUncheckedCreateWithoutActivity_logsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutActivity_logsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutActivity_logsInput, usersUncheckedUpdateWithoutActivity_logsInput>
  }

  export type usersUpdateWithoutActivity_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    project_members?: project_membersUpdateManyWithoutUsersNestedInput
    projects?: projectsUpdateManyWithoutUsersNestedInput
    tags?: tagsUpdateManyWithoutUsersNestedInput
    tasks_tasks_assignee_idTousers?: tasksUpdateManyWithoutUsers_tasks_assignee_idTousersNestedInput
    tasks_tasks_creator_idTousers?: tasksUpdateManyWithoutUsers_tasks_creator_idTousersNestedInput
  }

  export type usersUncheckedUpdateWithoutActivity_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    project_members?: project_membersUncheckedUpdateManyWithoutUsersNestedInput
    projects?: projectsUncheckedUpdateManyWithoutUsersNestedInput
    tags?: tagsUncheckedUpdateManyWithoutUsersNestedInput
    tasks_tasks_assignee_idTousers?: tasksUncheckedUpdateManyWithoutUsers_tasks_assignee_idTousersNestedInput
    tasks_tasks_creator_idTousers?: tasksUncheckedUpdateManyWithoutUsers_tasks_creator_idTousersNestedInput
  }

  export type projectsCreateWithoutProject_membersInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    activity_logs?: activity_logsCreateNestedManyWithoutProjectsInput
    users: usersCreateNestedOneWithoutProjectsInput
    tasks?: tasksCreateNestedManyWithoutProjectsInput
  }

  export type projectsUncheckedCreateWithoutProject_membersInput = {
    id?: string
    owner_id: string
    name: string
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    activity_logs?: activity_logsUncheckedCreateNestedManyWithoutProjectsInput
    tasks?: tasksUncheckedCreateNestedManyWithoutProjectsInput
  }

  export type projectsCreateOrConnectWithoutProject_membersInput = {
    where: projectsWhereUniqueInput
    create: XOR<projectsCreateWithoutProject_membersInput, projectsUncheckedCreateWithoutProject_membersInput>
  }

  export type usersCreateWithoutProject_membersInput = {
    id?: string
    email: string
    password_hash: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    activity_logs?: activity_logsCreateNestedManyWithoutUsersInput
    projects?: projectsCreateNestedManyWithoutUsersInput
    tags?: tagsCreateNestedManyWithoutUsersInput
    tasks_tasks_assignee_idTousers?: tasksCreateNestedManyWithoutUsers_tasks_assignee_idTousersInput
    tasks_tasks_creator_idTousers?: tasksCreateNestedManyWithoutUsers_tasks_creator_idTousersInput
  }

  export type usersUncheckedCreateWithoutProject_membersInput = {
    id?: string
    email: string
    password_hash: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    activity_logs?: activity_logsUncheckedCreateNestedManyWithoutUsersInput
    projects?: projectsUncheckedCreateNestedManyWithoutUsersInput
    tags?: tagsUncheckedCreateNestedManyWithoutUsersInput
    tasks_tasks_assignee_idTousers?: tasksUncheckedCreateNestedManyWithoutUsers_tasks_assignee_idTousersInput
    tasks_tasks_creator_idTousers?: tasksUncheckedCreateNestedManyWithoutUsers_tasks_creator_idTousersInput
  }

  export type usersCreateOrConnectWithoutProject_membersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutProject_membersInput, usersUncheckedCreateWithoutProject_membersInput>
  }

  export type projectsUpsertWithoutProject_membersInput = {
    update: XOR<projectsUpdateWithoutProject_membersInput, projectsUncheckedUpdateWithoutProject_membersInput>
    create: XOR<projectsCreateWithoutProject_membersInput, projectsUncheckedCreateWithoutProject_membersInput>
    where?: projectsWhereInput
  }

  export type projectsUpdateToOneWithWhereWithoutProject_membersInput = {
    where?: projectsWhereInput
    data: XOR<projectsUpdateWithoutProject_membersInput, projectsUncheckedUpdateWithoutProject_membersInput>
  }

  export type projectsUpdateWithoutProject_membersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activity_logs?: activity_logsUpdateManyWithoutProjectsNestedInput
    users?: usersUpdateOneRequiredWithoutProjectsNestedInput
    tasks?: tasksUpdateManyWithoutProjectsNestedInput
  }

  export type projectsUncheckedUpdateWithoutProject_membersInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activity_logs?: activity_logsUncheckedUpdateManyWithoutProjectsNestedInput
    tasks?: tasksUncheckedUpdateManyWithoutProjectsNestedInput
  }

  export type usersUpsertWithoutProject_membersInput = {
    update: XOR<usersUpdateWithoutProject_membersInput, usersUncheckedUpdateWithoutProject_membersInput>
    create: XOR<usersCreateWithoutProject_membersInput, usersUncheckedCreateWithoutProject_membersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutProject_membersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutProject_membersInput, usersUncheckedUpdateWithoutProject_membersInput>
  }

  export type usersUpdateWithoutProject_membersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activity_logs?: activity_logsUpdateManyWithoutUsersNestedInput
    projects?: projectsUpdateManyWithoutUsersNestedInput
    tags?: tagsUpdateManyWithoutUsersNestedInput
    tasks_tasks_assignee_idTousers?: tasksUpdateManyWithoutUsers_tasks_assignee_idTousersNestedInput
    tasks_tasks_creator_idTousers?: tasksUpdateManyWithoutUsers_tasks_creator_idTousersNestedInput
  }

  export type usersUncheckedUpdateWithoutProject_membersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activity_logs?: activity_logsUncheckedUpdateManyWithoutUsersNestedInput
    projects?: projectsUncheckedUpdateManyWithoutUsersNestedInput
    tags?: tagsUncheckedUpdateManyWithoutUsersNestedInput
    tasks_tasks_assignee_idTousers?: tasksUncheckedUpdateManyWithoutUsers_tasks_assignee_idTousersNestedInput
    tasks_tasks_creator_idTousers?: tasksUncheckedUpdateManyWithoutUsers_tasks_creator_idTousersNestedInput
  }

  export type activity_logsCreateWithoutProjectsInput = {
    id?: string
    action: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string | null
    tasks?: tasksCreateNestedOneWithoutActivity_logsInput
    users: usersCreateNestedOneWithoutActivity_logsInput
  }

  export type activity_logsUncheckedCreateWithoutProjectsInput = {
    id?: string
    user_id: string
    task_id?: string | null
    action: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string | null
  }

  export type activity_logsCreateOrConnectWithoutProjectsInput = {
    where: activity_logsWhereUniqueInput
    create: XOR<activity_logsCreateWithoutProjectsInput, activity_logsUncheckedCreateWithoutProjectsInput>
  }

  export type activity_logsCreateManyProjectsInputEnvelope = {
    data: activity_logsCreateManyProjectsInput | activity_logsCreateManyProjectsInput[]
    skipDuplicates?: boolean
  }

  export type project_membersCreateWithoutProjectsInput = {
    id?: string
    role: string
    created_at?: Date | string | null
    users: usersCreateNestedOneWithoutProject_membersInput
  }

  export type project_membersUncheckedCreateWithoutProjectsInput = {
    id?: string
    user_id: string
    role: string
    created_at?: Date | string | null
  }

  export type project_membersCreateOrConnectWithoutProjectsInput = {
    where: project_membersWhereUniqueInput
    create: XOR<project_membersCreateWithoutProjectsInput, project_membersUncheckedCreateWithoutProjectsInput>
  }

  export type project_membersCreateManyProjectsInputEnvelope = {
    data: project_membersCreateManyProjectsInput | project_membersCreateManyProjectsInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutProjectsInput = {
    id?: string
    email: string
    password_hash: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    activity_logs?: activity_logsCreateNestedManyWithoutUsersInput
    project_members?: project_membersCreateNestedManyWithoutUsersInput
    tags?: tagsCreateNestedManyWithoutUsersInput
    tasks_tasks_assignee_idTousers?: tasksCreateNestedManyWithoutUsers_tasks_assignee_idTousersInput
    tasks_tasks_creator_idTousers?: tasksCreateNestedManyWithoutUsers_tasks_creator_idTousersInput
  }

  export type usersUncheckedCreateWithoutProjectsInput = {
    id?: string
    email: string
    password_hash: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    activity_logs?: activity_logsUncheckedCreateNestedManyWithoutUsersInput
    project_members?: project_membersUncheckedCreateNestedManyWithoutUsersInput
    tags?: tagsUncheckedCreateNestedManyWithoutUsersInput
    tasks_tasks_assignee_idTousers?: tasksUncheckedCreateNestedManyWithoutUsers_tasks_assignee_idTousersInput
    tasks_tasks_creator_idTousers?: tasksUncheckedCreateNestedManyWithoutUsers_tasks_creator_idTousersInput
  }

  export type usersCreateOrConnectWithoutProjectsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutProjectsInput, usersUncheckedCreateWithoutProjectsInput>
  }

  export type tasksCreateWithoutProjectsInput = {
    id?: string
    title: string
    description?: string | null
    status?: string | null
    priority?: string | null
    due_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    activity_logs?: activity_logsCreateNestedManyWithoutTasksInput
    task_tags?: task_tagsCreateNestedManyWithoutTasksInput
    users_tasks_assignee_idTousers?: usersCreateNestedOneWithoutTasks_tasks_assignee_idTousersInput
    users_tasks_creator_idTousers: usersCreateNestedOneWithoutTasks_tasks_creator_idTousersInput
  }

  export type tasksUncheckedCreateWithoutProjectsInput = {
    id?: string
    creator_id: string
    assignee_id?: string | null
    title: string
    description?: string | null
    status?: string | null
    priority?: string | null
    due_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    activity_logs?: activity_logsUncheckedCreateNestedManyWithoutTasksInput
    task_tags?: task_tagsUncheckedCreateNestedManyWithoutTasksInput
  }

  export type tasksCreateOrConnectWithoutProjectsInput = {
    where: tasksWhereUniqueInput
    create: XOR<tasksCreateWithoutProjectsInput, tasksUncheckedCreateWithoutProjectsInput>
  }

  export type tasksCreateManyProjectsInputEnvelope = {
    data: tasksCreateManyProjectsInput | tasksCreateManyProjectsInput[]
    skipDuplicates?: boolean
  }

  export type activity_logsUpsertWithWhereUniqueWithoutProjectsInput = {
    where: activity_logsWhereUniqueInput
    update: XOR<activity_logsUpdateWithoutProjectsInput, activity_logsUncheckedUpdateWithoutProjectsInput>
    create: XOR<activity_logsCreateWithoutProjectsInput, activity_logsUncheckedCreateWithoutProjectsInput>
  }

  export type activity_logsUpdateWithWhereUniqueWithoutProjectsInput = {
    where: activity_logsWhereUniqueInput
    data: XOR<activity_logsUpdateWithoutProjectsInput, activity_logsUncheckedUpdateWithoutProjectsInput>
  }

  export type activity_logsUpdateManyWithWhereWithoutProjectsInput = {
    where: activity_logsScalarWhereInput
    data: XOR<activity_logsUpdateManyMutationInput, activity_logsUncheckedUpdateManyWithoutProjectsInput>
  }

  export type activity_logsScalarWhereInput = {
    AND?: activity_logsScalarWhereInput | activity_logsScalarWhereInput[]
    OR?: activity_logsScalarWhereInput[]
    NOT?: activity_logsScalarWhereInput | activity_logsScalarWhereInput[]
    id?: UuidFilter<"activity_logs"> | string
    user_id?: UuidFilter<"activity_logs"> | string
    project_id?: UuidNullableFilter<"activity_logs"> | string | null
    task_id?: UuidNullableFilter<"activity_logs"> | string | null
    action?: StringFilter<"activity_logs"> | string
    metadata?: JsonNullableFilter<"activity_logs">
    created_at?: DateTimeNullableFilter<"activity_logs"> | Date | string | null
  }

  export type project_membersUpsertWithWhereUniqueWithoutProjectsInput = {
    where: project_membersWhereUniqueInput
    update: XOR<project_membersUpdateWithoutProjectsInput, project_membersUncheckedUpdateWithoutProjectsInput>
    create: XOR<project_membersCreateWithoutProjectsInput, project_membersUncheckedCreateWithoutProjectsInput>
  }

  export type project_membersUpdateWithWhereUniqueWithoutProjectsInput = {
    where: project_membersWhereUniqueInput
    data: XOR<project_membersUpdateWithoutProjectsInput, project_membersUncheckedUpdateWithoutProjectsInput>
  }

  export type project_membersUpdateManyWithWhereWithoutProjectsInput = {
    where: project_membersScalarWhereInput
    data: XOR<project_membersUpdateManyMutationInput, project_membersUncheckedUpdateManyWithoutProjectsInput>
  }

  export type project_membersScalarWhereInput = {
    AND?: project_membersScalarWhereInput | project_membersScalarWhereInput[]
    OR?: project_membersScalarWhereInput[]
    NOT?: project_membersScalarWhereInput | project_membersScalarWhereInput[]
    id?: UuidFilter<"project_members"> | string
    project_id?: UuidFilter<"project_members"> | string
    user_id?: UuidFilter<"project_members"> | string
    role?: StringFilter<"project_members"> | string
    created_at?: DateTimeNullableFilter<"project_members"> | Date | string | null
  }

  export type usersUpsertWithoutProjectsInput = {
    update: XOR<usersUpdateWithoutProjectsInput, usersUncheckedUpdateWithoutProjectsInput>
    create: XOR<usersCreateWithoutProjectsInput, usersUncheckedCreateWithoutProjectsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutProjectsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutProjectsInput, usersUncheckedUpdateWithoutProjectsInput>
  }

  export type usersUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activity_logs?: activity_logsUpdateManyWithoutUsersNestedInput
    project_members?: project_membersUpdateManyWithoutUsersNestedInput
    tags?: tagsUpdateManyWithoutUsersNestedInput
    tasks_tasks_assignee_idTousers?: tasksUpdateManyWithoutUsers_tasks_assignee_idTousersNestedInput
    tasks_tasks_creator_idTousers?: tasksUpdateManyWithoutUsers_tasks_creator_idTousersNestedInput
  }

  export type usersUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activity_logs?: activity_logsUncheckedUpdateManyWithoutUsersNestedInput
    project_members?: project_membersUncheckedUpdateManyWithoutUsersNestedInput
    tags?: tagsUncheckedUpdateManyWithoutUsersNestedInput
    tasks_tasks_assignee_idTousers?: tasksUncheckedUpdateManyWithoutUsers_tasks_assignee_idTousersNestedInput
    tasks_tasks_creator_idTousers?: tasksUncheckedUpdateManyWithoutUsers_tasks_creator_idTousersNestedInput
  }

  export type tasksUpsertWithWhereUniqueWithoutProjectsInput = {
    where: tasksWhereUniqueInput
    update: XOR<tasksUpdateWithoutProjectsInput, tasksUncheckedUpdateWithoutProjectsInput>
    create: XOR<tasksCreateWithoutProjectsInput, tasksUncheckedCreateWithoutProjectsInput>
  }

  export type tasksUpdateWithWhereUniqueWithoutProjectsInput = {
    where: tasksWhereUniqueInput
    data: XOR<tasksUpdateWithoutProjectsInput, tasksUncheckedUpdateWithoutProjectsInput>
  }

  export type tasksUpdateManyWithWhereWithoutProjectsInput = {
    where: tasksScalarWhereInput
    data: XOR<tasksUpdateManyMutationInput, tasksUncheckedUpdateManyWithoutProjectsInput>
  }

  export type tasksScalarWhereInput = {
    AND?: tasksScalarWhereInput | tasksScalarWhereInput[]
    OR?: tasksScalarWhereInput[]
    NOT?: tasksScalarWhereInput | tasksScalarWhereInput[]
    id?: UuidFilter<"tasks"> | string
    project_id?: UuidFilter<"tasks"> | string
    creator_id?: UuidFilter<"tasks"> | string
    assignee_id?: UuidNullableFilter<"tasks"> | string | null
    title?: StringFilter<"tasks"> | string
    description?: StringNullableFilter<"tasks"> | string | null
    status?: StringNullableFilter<"tasks"> | string | null
    priority?: StringNullableFilter<"tasks"> | string | null
    due_date?: DateTimeNullableFilter<"tasks"> | Date | string | null
    created_at?: DateTimeNullableFilter<"tasks"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"tasks"> | Date | string | null
  }

  export type usersCreateWithoutTagsInput = {
    id?: string
    email: string
    password_hash: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    activity_logs?: activity_logsCreateNestedManyWithoutUsersInput
    project_members?: project_membersCreateNestedManyWithoutUsersInput
    projects?: projectsCreateNestedManyWithoutUsersInput
    tasks_tasks_assignee_idTousers?: tasksCreateNestedManyWithoutUsers_tasks_assignee_idTousersInput
    tasks_tasks_creator_idTousers?: tasksCreateNestedManyWithoutUsers_tasks_creator_idTousersInput
  }

  export type usersUncheckedCreateWithoutTagsInput = {
    id?: string
    email: string
    password_hash: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    activity_logs?: activity_logsUncheckedCreateNestedManyWithoutUsersInput
    project_members?: project_membersUncheckedCreateNestedManyWithoutUsersInput
    projects?: projectsUncheckedCreateNestedManyWithoutUsersInput
    tasks_tasks_assignee_idTousers?: tasksUncheckedCreateNestedManyWithoutUsers_tasks_assignee_idTousersInput
    tasks_tasks_creator_idTousers?: tasksUncheckedCreateNestedManyWithoutUsers_tasks_creator_idTousersInput
  }

  export type usersCreateOrConnectWithoutTagsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutTagsInput, usersUncheckedCreateWithoutTagsInput>
  }

  export type task_tagsCreateWithoutTagsInput = {
    id?: string
    tasks: tasksCreateNestedOneWithoutTask_tagsInput
  }

  export type task_tagsUncheckedCreateWithoutTagsInput = {
    id?: string
    task_id: string
  }

  export type task_tagsCreateOrConnectWithoutTagsInput = {
    where: task_tagsWhereUniqueInput
    create: XOR<task_tagsCreateWithoutTagsInput, task_tagsUncheckedCreateWithoutTagsInput>
  }

  export type task_tagsCreateManyTagsInputEnvelope = {
    data: task_tagsCreateManyTagsInput | task_tagsCreateManyTagsInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutTagsInput = {
    update: XOR<usersUpdateWithoutTagsInput, usersUncheckedUpdateWithoutTagsInput>
    create: XOR<usersCreateWithoutTagsInput, usersUncheckedCreateWithoutTagsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutTagsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutTagsInput, usersUncheckedUpdateWithoutTagsInput>
  }

  export type usersUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activity_logs?: activity_logsUpdateManyWithoutUsersNestedInput
    project_members?: project_membersUpdateManyWithoutUsersNestedInput
    projects?: projectsUpdateManyWithoutUsersNestedInput
    tasks_tasks_assignee_idTousers?: tasksUpdateManyWithoutUsers_tasks_assignee_idTousersNestedInput
    tasks_tasks_creator_idTousers?: tasksUpdateManyWithoutUsers_tasks_creator_idTousersNestedInput
  }

  export type usersUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activity_logs?: activity_logsUncheckedUpdateManyWithoutUsersNestedInput
    project_members?: project_membersUncheckedUpdateManyWithoutUsersNestedInput
    projects?: projectsUncheckedUpdateManyWithoutUsersNestedInput
    tasks_tasks_assignee_idTousers?: tasksUncheckedUpdateManyWithoutUsers_tasks_assignee_idTousersNestedInput
    tasks_tasks_creator_idTousers?: tasksUncheckedUpdateManyWithoutUsers_tasks_creator_idTousersNestedInput
  }

  export type task_tagsUpsertWithWhereUniqueWithoutTagsInput = {
    where: task_tagsWhereUniqueInput
    update: XOR<task_tagsUpdateWithoutTagsInput, task_tagsUncheckedUpdateWithoutTagsInput>
    create: XOR<task_tagsCreateWithoutTagsInput, task_tagsUncheckedCreateWithoutTagsInput>
  }

  export type task_tagsUpdateWithWhereUniqueWithoutTagsInput = {
    where: task_tagsWhereUniqueInput
    data: XOR<task_tagsUpdateWithoutTagsInput, task_tagsUncheckedUpdateWithoutTagsInput>
  }

  export type task_tagsUpdateManyWithWhereWithoutTagsInput = {
    where: task_tagsScalarWhereInput
    data: XOR<task_tagsUpdateManyMutationInput, task_tagsUncheckedUpdateManyWithoutTagsInput>
  }

  export type task_tagsScalarWhereInput = {
    AND?: task_tagsScalarWhereInput | task_tagsScalarWhereInput[]
    OR?: task_tagsScalarWhereInput[]
    NOT?: task_tagsScalarWhereInput | task_tagsScalarWhereInput[]
    id?: UuidFilter<"task_tags"> | string
    task_id?: UuidFilter<"task_tags"> | string
    tag_id?: UuidFilter<"task_tags"> | string
  }

  export type tagsCreateWithoutTask_tagsInput = {
    id?: string
    name: string
    color?: string | null
    created_at?: Date | string | null
    users: usersCreateNestedOneWithoutTagsInput
  }

  export type tagsUncheckedCreateWithoutTask_tagsInput = {
    id?: string
    owner_id: string
    name: string
    color?: string | null
    created_at?: Date | string | null
  }

  export type tagsCreateOrConnectWithoutTask_tagsInput = {
    where: tagsWhereUniqueInput
    create: XOR<tagsCreateWithoutTask_tagsInput, tagsUncheckedCreateWithoutTask_tagsInput>
  }

  export type tasksCreateWithoutTask_tagsInput = {
    id?: string
    title: string
    description?: string | null
    status?: string | null
    priority?: string | null
    due_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    activity_logs?: activity_logsCreateNestedManyWithoutTasksInput
    users_tasks_assignee_idTousers?: usersCreateNestedOneWithoutTasks_tasks_assignee_idTousersInput
    users_tasks_creator_idTousers: usersCreateNestedOneWithoutTasks_tasks_creator_idTousersInput
    projects: projectsCreateNestedOneWithoutTasksInput
  }

  export type tasksUncheckedCreateWithoutTask_tagsInput = {
    id?: string
    project_id: string
    creator_id: string
    assignee_id?: string | null
    title: string
    description?: string | null
    status?: string | null
    priority?: string | null
    due_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    activity_logs?: activity_logsUncheckedCreateNestedManyWithoutTasksInput
  }

  export type tasksCreateOrConnectWithoutTask_tagsInput = {
    where: tasksWhereUniqueInput
    create: XOR<tasksCreateWithoutTask_tagsInput, tasksUncheckedCreateWithoutTask_tagsInput>
  }

  export type tagsUpsertWithoutTask_tagsInput = {
    update: XOR<tagsUpdateWithoutTask_tagsInput, tagsUncheckedUpdateWithoutTask_tagsInput>
    create: XOR<tagsCreateWithoutTask_tagsInput, tagsUncheckedCreateWithoutTask_tagsInput>
    where?: tagsWhereInput
  }

  export type tagsUpdateToOneWithWhereWithoutTask_tagsInput = {
    where?: tagsWhereInput
    data: XOR<tagsUpdateWithoutTask_tagsInput, tagsUncheckedUpdateWithoutTask_tagsInput>
  }

  export type tagsUpdateWithoutTask_tagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutTagsNestedInput
  }

  export type tagsUncheckedUpdateWithoutTask_tagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tasksUpsertWithoutTask_tagsInput = {
    update: XOR<tasksUpdateWithoutTask_tagsInput, tasksUncheckedUpdateWithoutTask_tagsInput>
    create: XOR<tasksCreateWithoutTask_tagsInput, tasksUncheckedCreateWithoutTask_tagsInput>
    where?: tasksWhereInput
  }

  export type tasksUpdateToOneWithWhereWithoutTask_tagsInput = {
    where?: tasksWhereInput
    data: XOR<tasksUpdateWithoutTask_tagsInput, tasksUncheckedUpdateWithoutTask_tagsInput>
  }

  export type tasksUpdateWithoutTask_tagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activity_logs?: activity_logsUpdateManyWithoutTasksNestedInput
    users_tasks_assignee_idTousers?: usersUpdateOneWithoutTasks_tasks_assignee_idTousersNestedInput
    users_tasks_creator_idTousers?: usersUpdateOneRequiredWithoutTasks_tasks_creator_idTousersNestedInput
    projects?: projectsUpdateOneRequiredWithoutTasksNestedInput
  }

  export type tasksUncheckedUpdateWithoutTask_tagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    project_id?: StringFieldUpdateOperationsInput | string
    creator_id?: StringFieldUpdateOperationsInput | string
    assignee_id?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activity_logs?: activity_logsUncheckedUpdateManyWithoutTasksNestedInput
  }

  export type activity_logsCreateWithoutTasksInput = {
    id?: string
    action: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string | null
    projects?: projectsCreateNestedOneWithoutActivity_logsInput
    users: usersCreateNestedOneWithoutActivity_logsInput
  }

  export type activity_logsUncheckedCreateWithoutTasksInput = {
    id?: string
    user_id: string
    project_id?: string | null
    action: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string | null
  }

  export type activity_logsCreateOrConnectWithoutTasksInput = {
    where: activity_logsWhereUniqueInput
    create: XOR<activity_logsCreateWithoutTasksInput, activity_logsUncheckedCreateWithoutTasksInput>
  }

  export type activity_logsCreateManyTasksInputEnvelope = {
    data: activity_logsCreateManyTasksInput | activity_logsCreateManyTasksInput[]
    skipDuplicates?: boolean
  }

  export type task_tagsCreateWithoutTasksInput = {
    id?: string
    tags: tagsCreateNestedOneWithoutTask_tagsInput
  }

  export type task_tagsUncheckedCreateWithoutTasksInput = {
    id?: string
    tag_id: string
  }

  export type task_tagsCreateOrConnectWithoutTasksInput = {
    where: task_tagsWhereUniqueInput
    create: XOR<task_tagsCreateWithoutTasksInput, task_tagsUncheckedCreateWithoutTasksInput>
  }

  export type task_tagsCreateManyTasksInputEnvelope = {
    data: task_tagsCreateManyTasksInput | task_tagsCreateManyTasksInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutTasks_tasks_assignee_idTousersInput = {
    id?: string
    email: string
    password_hash: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    activity_logs?: activity_logsCreateNestedManyWithoutUsersInput
    project_members?: project_membersCreateNestedManyWithoutUsersInput
    projects?: projectsCreateNestedManyWithoutUsersInput
    tags?: tagsCreateNestedManyWithoutUsersInput
    tasks_tasks_creator_idTousers?: tasksCreateNestedManyWithoutUsers_tasks_creator_idTousersInput
  }

  export type usersUncheckedCreateWithoutTasks_tasks_assignee_idTousersInput = {
    id?: string
    email: string
    password_hash: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    activity_logs?: activity_logsUncheckedCreateNestedManyWithoutUsersInput
    project_members?: project_membersUncheckedCreateNestedManyWithoutUsersInput
    projects?: projectsUncheckedCreateNestedManyWithoutUsersInput
    tags?: tagsUncheckedCreateNestedManyWithoutUsersInput
    tasks_tasks_creator_idTousers?: tasksUncheckedCreateNestedManyWithoutUsers_tasks_creator_idTousersInput
  }

  export type usersCreateOrConnectWithoutTasks_tasks_assignee_idTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutTasks_tasks_assignee_idTousersInput, usersUncheckedCreateWithoutTasks_tasks_assignee_idTousersInput>
  }

  export type usersCreateWithoutTasks_tasks_creator_idTousersInput = {
    id?: string
    email: string
    password_hash: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    activity_logs?: activity_logsCreateNestedManyWithoutUsersInput
    project_members?: project_membersCreateNestedManyWithoutUsersInput
    projects?: projectsCreateNestedManyWithoutUsersInput
    tags?: tagsCreateNestedManyWithoutUsersInput
    tasks_tasks_assignee_idTousers?: tasksCreateNestedManyWithoutUsers_tasks_assignee_idTousersInput
  }

  export type usersUncheckedCreateWithoutTasks_tasks_creator_idTousersInput = {
    id?: string
    email: string
    password_hash: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    activity_logs?: activity_logsUncheckedCreateNestedManyWithoutUsersInput
    project_members?: project_membersUncheckedCreateNestedManyWithoutUsersInput
    projects?: projectsUncheckedCreateNestedManyWithoutUsersInput
    tags?: tagsUncheckedCreateNestedManyWithoutUsersInput
    tasks_tasks_assignee_idTousers?: tasksUncheckedCreateNestedManyWithoutUsers_tasks_assignee_idTousersInput
  }

  export type usersCreateOrConnectWithoutTasks_tasks_creator_idTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutTasks_tasks_creator_idTousersInput, usersUncheckedCreateWithoutTasks_tasks_creator_idTousersInput>
  }

  export type projectsCreateWithoutTasksInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    activity_logs?: activity_logsCreateNestedManyWithoutProjectsInput
    project_members?: project_membersCreateNestedManyWithoutProjectsInput
    users: usersCreateNestedOneWithoutProjectsInput
  }

  export type projectsUncheckedCreateWithoutTasksInput = {
    id?: string
    owner_id: string
    name: string
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    activity_logs?: activity_logsUncheckedCreateNestedManyWithoutProjectsInput
    project_members?: project_membersUncheckedCreateNestedManyWithoutProjectsInput
  }

  export type projectsCreateOrConnectWithoutTasksInput = {
    where: projectsWhereUniqueInput
    create: XOR<projectsCreateWithoutTasksInput, projectsUncheckedCreateWithoutTasksInput>
  }

  export type activity_logsUpsertWithWhereUniqueWithoutTasksInput = {
    where: activity_logsWhereUniqueInput
    update: XOR<activity_logsUpdateWithoutTasksInput, activity_logsUncheckedUpdateWithoutTasksInput>
    create: XOR<activity_logsCreateWithoutTasksInput, activity_logsUncheckedCreateWithoutTasksInput>
  }

  export type activity_logsUpdateWithWhereUniqueWithoutTasksInput = {
    where: activity_logsWhereUniqueInput
    data: XOR<activity_logsUpdateWithoutTasksInput, activity_logsUncheckedUpdateWithoutTasksInput>
  }

  export type activity_logsUpdateManyWithWhereWithoutTasksInput = {
    where: activity_logsScalarWhereInput
    data: XOR<activity_logsUpdateManyMutationInput, activity_logsUncheckedUpdateManyWithoutTasksInput>
  }

  export type task_tagsUpsertWithWhereUniqueWithoutTasksInput = {
    where: task_tagsWhereUniqueInput
    update: XOR<task_tagsUpdateWithoutTasksInput, task_tagsUncheckedUpdateWithoutTasksInput>
    create: XOR<task_tagsCreateWithoutTasksInput, task_tagsUncheckedCreateWithoutTasksInput>
  }

  export type task_tagsUpdateWithWhereUniqueWithoutTasksInput = {
    where: task_tagsWhereUniqueInput
    data: XOR<task_tagsUpdateWithoutTasksInput, task_tagsUncheckedUpdateWithoutTasksInput>
  }

  export type task_tagsUpdateManyWithWhereWithoutTasksInput = {
    where: task_tagsScalarWhereInput
    data: XOR<task_tagsUpdateManyMutationInput, task_tagsUncheckedUpdateManyWithoutTasksInput>
  }

  export type usersUpsertWithoutTasks_tasks_assignee_idTousersInput = {
    update: XOR<usersUpdateWithoutTasks_tasks_assignee_idTousersInput, usersUncheckedUpdateWithoutTasks_tasks_assignee_idTousersInput>
    create: XOR<usersCreateWithoutTasks_tasks_assignee_idTousersInput, usersUncheckedCreateWithoutTasks_tasks_assignee_idTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutTasks_tasks_assignee_idTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutTasks_tasks_assignee_idTousersInput, usersUncheckedUpdateWithoutTasks_tasks_assignee_idTousersInput>
  }

  export type usersUpdateWithoutTasks_tasks_assignee_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activity_logs?: activity_logsUpdateManyWithoutUsersNestedInput
    project_members?: project_membersUpdateManyWithoutUsersNestedInput
    projects?: projectsUpdateManyWithoutUsersNestedInput
    tags?: tagsUpdateManyWithoutUsersNestedInput
    tasks_tasks_creator_idTousers?: tasksUpdateManyWithoutUsers_tasks_creator_idTousersNestedInput
  }

  export type usersUncheckedUpdateWithoutTasks_tasks_assignee_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activity_logs?: activity_logsUncheckedUpdateManyWithoutUsersNestedInput
    project_members?: project_membersUncheckedUpdateManyWithoutUsersNestedInput
    projects?: projectsUncheckedUpdateManyWithoutUsersNestedInput
    tags?: tagsUncheckedUpdateManyWithoutUsersNestedInput
    tasks_tasks_creator_idTousers?: tasksUncheckedUpdateManyWithoutUsers_tasks_creator_idTousersNestedInput
  }

  export type usersUpsertWithoutTasks_tasks_creator_idTousersInput = {
    update: XOR<usersUpdateWithoutTasks_tasks_creator_idTousersInput, usersUncheckedUpdateWithoutTasks_tasks_creator_idTousersInput>
    create: XOR<usersCreateWithoutTasks_tasks_creator_idTousersInput, usersUncheckedCreateWithoutTasks_tasks_creator_idTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutTasks_tasks_creator_idTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutTasks_tasks_creator_idTousersInput, usersUncheckedUpdateWithoutTasks_tasks_creator_idTousersInput>
  }

  export type usersUpdateWithoutTasks_tasks_creator_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activity_logs?: activity_logsUpdateManyWithoutUsersNestedInput
    project_members?: project_membersUpdateManyWithoutUsersNestedInput
    projects?: projectsUpdateManyWithoutUsersNestedInput
    tags?: tagsUpdateManyWithoutUsersNestedInput
    tasks_tasks_assignee_idTousers?: tasksUpdateManyWithoutUsers_tasks_assignee_idTousersNestedInput
  }

  export type usersUncheckedUpdateWithoutTasks_tasks_creator_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activity_logs?: activity_logsUncheckedUpdateManyWithoutUsersNestedInput
    project_members?: project_membersUncheckedUpdateManyWithoutUsersNestedInput
    projects?: projectsUncheckedUpdateManyWithoutUsersNestedInput
    tags?: tagsUncheckedUpdateManyWithoutUsersNestedInput
    tasks_tasks_assignee_idTousers?: tasksUncheckedUpdateManyWithoutUsers_tasks_assignee_idTousersNestedInput
  }

  export type projectsUpsertWithoutTasksInput = {
    update: XOR<projectsUpdateWithoutTasksInput, projectsUncheckedUpdateWithoutTasksInput>
    create: XOR<projectsCreateWithoutTasksInput, projectsUncheckedCreateWithoutTasksInput>
    where?: projectsWhereInput
  }

  export type projectsUpdateToOneWithWhereWithoutTasksInput = {
    where?: projectsWhereInput
    data: XOR<projectsUpdateWithoutTasksInput, projectsUncheckedUpdateWithoutTasksInput>
  }

  export type projectsUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activity_logs?: activity_logsUpdateManyWithoutProjectsNestedInput
    project_members?: project_membersUpdateManyWithoutProjectsNestedInput
    users?: usersUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type projectsUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activity_logs?: activity_logsUncheckedUpdateManyWithoutProjectsNestedInput
    project_members?: project_membersUncheckedUpdateManyWithoutProjectsNestedInput
  }

  export type activity_logsCreateWithoutUsersInput = {
    id?: string
    action: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string | null
    projects?: projectsCreateNestedOneWithoutActivity_logsInput
    tasks?: tasksCreateNestedOneWithoutActivity_logsInput
  }

  export type activity_logsUncheckedCreateWithoutUsersInput = {
    id?: string
    project_id?: string | null
    task_id?: string | null
    action: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string | null
  }

  export type activity_logsCreateOrConnectWithoutUsersInput = {
    where: activity_logsWhereUniqueInput
    create: XOR<activity_logsCreateWithoutUsersInput, activity_logsUncheckedCreateWithoutUsersInput>
  }

  export type activity_logsCreateManyUsersInputEnvelope = {
    data: activity_logsCreateManyUsersInput | activity_logsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type project_membersCreateWithoutUsersInput = {
    id?: string
    role: string
    created_at?: Date | string | null
    projects: projectsCreateNestedOneWithoutProject_membersInput
  }

  export type project_membersUncheckedCreateWithoutUsersInput = {
    id?: string
    project_id: string
    role: string
    created_at?: Date | string | null
  }

  export type project_membersCreateOrConnectWithoutUsersInput = {
    where: project_membersWhereUniqueInput
    create: XOR<project_membersCreateWithoutUsersInput, project_membersUncheckedCreateWithoutUsersInput>
  }

  export type project_membersCreateManyUsersInputEnvelope = {
    data: project_membersCreateManyUsersInput | project_membersCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type projectsCreateWithoutUsersInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    activity_logs?: activity_logsCreateNestedManyWithoutProjectsInput
    project_members?: project_membersCreateNestedManyWithoutProjectsInput
    tasks?: tasksCreateNestedManyWithoutProjectsInput
  }

  export type projectsUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    activity_logs?: activity_logsUncheckedCreateNestedManyWithoutProjectsInput
    project_members?: project_membersUncheckedCreateNestedManyWithoutProjectsInput
    tasks?: tasksUncheckedCreateNestedManyWithoutProjectsInput
  }

  export type projectsCreateOrConnectWithoutUsersInput = {
    where: projectsWhereUniqueInput
    create: XOR<projectsCreateWithoutUsersInput, projectsUncheckedCreateWithoutUsersInput>
  }

  export type projectsCreateManyUsersInputEnvelope = {
    data: projectsCreateManyUsersInput | projectsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type tagsCreateWithoutUsersInput = {
    id?: string
    name: string
    color?: string | null
    created_at?: Date | string | null
    task_tags?: task_tagsCreateNestedManyWithoutTagsInput
  }

  export type tagsUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    color?: string | null
    created_at?: Date | string | null
    task_tags?: task_tagsUncheckedCreateNestedManyWithoutTagsInput
  }

  export type tagsCreateOrConnectWithoutUsersInput = {
    where: tagsWhereUniqueInput
    create: XOR<tagsCreateWithoutUsersInput, tagsUncheckedCreateWithoutUsersInput>
  }

  export type tagsCreateManyUsersInputEnvelope = {
    data: tagsCreateManyUsersInput | tagsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type tasksCreateWithoutUsers_tasks_assignee_idTousersInput = {
    id?: string
    title: string
    description?: string | null
    status?: string | null
    priority?: string | null
    due_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    activity_logs?: activity_logsCreateNestedManyWithoutTasksInput
    task_tags?: task_tagsCreateNestedManyWithoutTasksInput
    users_tasks_creator_idTousers: usersCreateNestedOneWithoutTasks_tasks_creator_idTousersInput
    projects: projectsCreateNestedOneWithoutTasksInput
  }

  export type tasksUncheckedCreateWithoutUsers_tasks_assignee_idTousersInput = {
    id?: string
    project_id: string
    creator_id: string
    title: string
    description?: string | null
    status?: string | null
    priority?: string | null
    due_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    activity_logs?: activity_logsUncheckedCreateNestedManyWithoutTasksInput
    task_tags?: task_tagsUncheckedCreateNestedManyWithoutTasksInput
  }

  export type tasksCreateOrConnectWithoutUsers_tasks_assignee_idTousersInput = {
    where: tasksWhereUniqueInput
    create: XOR<tasksCreateWithoutUsers_tasks_assignee_idTousersInput, tasksUncheckedCreateWithoutUsers_tasks_assignee_idTousersInput>
  }

  export type tasksCreateManyUsers_tasks_assignee_idTousersInputEnvelope = {
    data: tasksCreateManyUsers_tasks_assignee_idTousersInput | tasksCreateManyUsers_tasks_assignee_idTousersInput[]
    skipDuplicates?: boolean
  }

  export type tasksCreateWithoutUsers_tasks_creator_idTousersInput = {
    id?: string
    title: string
    description?: string | null
    status?: string | null
    priority?: string | null
    due_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    activity_logs?: activity_logsCreateNestedManyWithoutTasksInput
    task_tags?: task_tagsCreateNestedManyWithoutTasksInput
    users_tasks_assignee_idTousers?: usersCreateNestedOneWithoutTasks_tasks_assignee_idTousersInput
    projects: projectsCreateNestedOneWithoutTasksInput
  }

  export type tasksUncheckedCreateWithoutUsers_tasks_creator_idTousersInput = {
    id?: string
    project_id: string
    assignee_id?: string | null
    title: string
    description?: string | null
    status?: string | null
    priority?: string | null
    due_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    activity_logs?: activity_logsUncheckedCreateNestedManyWithoutTasksInput
    task_tags?: task_tagsUncheckedCreateNestedManyWithoutTasksInput
  }

  export type tasksCreateOrConnectWithoutUsers_tasks_creator_idTousersInput = {
    where: tasksWhereUniqueInput
    create: XOR<tasksCreateWithoutUsers_tasks_creator_idTousersInput, tasksUncheckedCreateWithoutUsers_tasks_creator_idTousersInput>
  }

  export type tasksCreateManyUsers_tasks_creator_idTousersInputEnvelope = {
    data: tasksCreateManyUsers_tasks_creator_idTousersInput | tasksCreateManyUsers_tasks_creator_idTousersInput[]
    skipDuplicates?: boolean
  }

  export type activity_logsUpsertWithWhereUniqueWithoutUsersInput = {
    where: activity_logsWhereUniqueInput
    update: XOR<activity_logsUpdateWithoutUsersInput, activity_logsUncheckedUpdateWithoutUsersInput>
    create: XOR<activity_logsCreateWithoutUsersInput, activity_logsUncheckedCreateWithoutUsersInput>
  }

  export type activity_logsUpdateWithWhereUniqueWithoutUsersInput = {
    where: activity_logsWhereUniqueInput
    data: XOR<activity_logsUpdateWithoutUsersInput, activity_logsUncheckedUpdateWithoutUsersInput>
  }

  export type activity_logsUpdateManyWithWhereWithoutUsersInput = {
    where: activity_logsScalarWhereInput
    data: XOR<activity_logsUpdateManyMutationInput, activity_logsUncheckedUpdateManyWithoutUsersInput>
  }

  export type project_membersUpsertWithWhereUniqueWithoutUsersInput = {
    where: project_membersWhereUniqueInput
    update: XOR<project_membersUpdateWithoutUsersInput, project_membersUncheckedUpdateWithoutUsersInput>
    create: XOR<project_membersCreateWithoutUsersInput, project_membersUncheckedCreateWithoutUsersInput>
  }

  export type project_membersUpdateWithWhereUniqueWithoutUsersInput = {
    where: project_membersWhereUniqueInput
    data: XOR<project_membersUpdateWithoutUsersInput, project_membersUncheckedUpdateWithoutUsersInput>
  }

  export type project_membersUpdateManyWithWhereWithoutUsersInput = {
    where: project_membersScalarWhereInput
    data: XOR<project_membersUpdateManyMutationInput, project_membersUncheckedUpdateManyWithoutUsersInput>
  }

  export type projectsUpsertWithWhereUniqueWithoutUsersInput = {
    where: projectsWhereUniqueInput
    update: XOR<projectsUpdateWithoutUsersInput, projectsUncheckedUpdateWithoutUsersInput>
    create: XOR<projectsCreateWithoutUsersInput, projectsUncheckedCreateWithoutUsersInput>
  }

  export type projectsUpdateWithWhereUniqueWithoutUsersInput = {
    where: projectsWhereUniqueInput
    data: XOR<projectsUpdateWithoutUsersInput, projectsUncheckedUpdateWithoutUsersInput>
  }

  export type projectsUpdateManyWithWhereWithoutUsersInput = {
    where: projectsScalarWhereInput
    data: XOR<projectsUpdateManyMutationInput, projectsUncheckedUpdateManyWithoutUsersInput>
  }

  export type projectsScalarWhereInput = {
    AND?: projectsScalarWhereInput | projectsScalarWhereInput[]
    OR?: projectsScalarWhereInput[]
    NOT?: projectsScalarWhereInput | projectsScalarWhereInput[]
    id?: UuidFilter<"projects"> | string
    owner_id?: UuidFilter<"projects"> | string
    name?: StringFilter<"projects"> | string
    description?: StringNullableFilter<"projects"> | string | null
    created_at?: DateTimeNullableFilter<"projects"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"projects"> | Date | string | null
  }

  export type tagsUpsertWithWhereUniqueWithoutUsersInput = {
    where: tagsWhereUniqueInput
    update: XOR<tagsUpdateWithoutUsersInput, tagsUncheckedUpdateWithoutUsersInput>
    create: XOR<tagsCreateWithoutUsersInput, tagsUncheckedCreateWithoutUsersInput>
  }

  export type tagsUpdateWithWhereUniqueWithoutUsersInput = {
    where: tagsWhereUniqueInput
    data: XOR<tagsUpdateWithoutUsersInput, tagsUncheckedUpdateWithoutUsersInput>
  }

  export type tagsUpdateManyWithWhereWithoutUsersInput = {
    where: tagsScalarWhereInput
    data: XOR<tagsUpdateManyMutationInput, tagsUncheckedUpdateManyWithoutUsersInput>
  }

  export type tagsScalarWhereInput = {
    AND?: tagsScalarWhereInput | tagsScalarWhereInput[]
    OR?: tagsScalarWhereInput[]
    NOT?: tagsScalarWhereInput | tagsScalarWhereInput[]
    id?: UuidFilter<"tags"> | string
    owner_id?: UuidFilter<"tags"> | string
    name?: StringFilter<"tags"> | string
    color?: StringNullableFilter<"tags"> | string | null
    created_at?: DateTimeNullableFilter<"tags"> | Date | string | null
  }

  export type tasksUpsertWithWhereUniqueWithoutUsers_tasks_assignee_idTousersInput = {
    where: tasksWhereUniqueInput
    update: XOR<tasksUpdateWithoutUsers_tasks_assignee_idTousersInput, tasksUncheckedUpdateWithoutUsers_tasks_assignee_idTousersInput>
    create: XOR<tasksCreateWithoutUsers_tasks_assignee_idTousersInput, tasksUncheckedCreateWithoutUsers_tasks_assignee_idTousersInput>
  }

  export type tasksUpdateWithWhereUniqueWithoutUsers_tasks_assignee_idTousersInput = {
    where: tasksWhereUniqueInput
    data: XOR<tasksUpdateWithoutUsers_tasks_assignee_idTousersInput, tasksUncheckedUpdateWithoutUsers_tasks_assignee_idTousersInput>
  }

  export type tasksUpdateManyWithWhereWithoutUsers_tasks_assignee_idTousersInput = {
    where: tasksScalarWhereInput
    data: XOR<tasksUpdateManyMutationInput, tasksUncheckedUpdateManyWithoutUsers_tasks_assignee_idTousersInput>
  }

  export type tasksUpsertWithWhereUniqueWithoutUsers_tasks_creator_idTousersInput = {
    where: tasksWhereUniqueInput
    update: XOR<tasksUpdateWithoutUsers_tasks_creator_idTousersInput, tasksUncheckedUpdateWithoutUsers_tasks_creator_idTousersInput>
    create: XOR<tasksCreateWithoutUsers_tasks_creator_idTousersInput, tasksUncheckedCreateWithoutUsers_tasks_creator_idTousersInput>
  }

  export type tasksUpdateWithWhereUniqueWithoutUsers_tasks_creator_idTousersInput = {
    where: tasksWhereUniqueInput
    data: XOR<tasksUpdateWithoutUsers_tasks_creator_idTousersInput, tasksUncheckedUpdateWithoutUsers_tasks_creator_idTousersInput>
  }

  export type tasksUpdateManyWithWhereWithoutUsers_tasks_creator_idTousersInput = {
    where: tasksScalarWhereInput
    data: XOR<tasksUpdateManyMutationInput, tasksUncheckedUpdateManyWithoutUsers_tasks_creator_idTousersInput>
  }

  export type activity_logsCreateManyProjectsInput = {
    id?: string
    user_id: string
    task_id?: string | null
    action: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string | null
  }

  export type project_membersCreateManyProjectsInput = {
    id?: string
    user_id: string
    role: string
    created_at?: Date | string | null
  }

  export type tasksCreateManyProjectsInput = {
    id?: string
    creator_id: string
    assignee_id?: string | null
    title: string
    description?: string | null
    status?: string | null
    priority?: string | null
    due_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type activity_logsUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tasks?: tasksUpdateOneWithoutActivity_logsNestedInput
    users?: usersUpdateOneRequiredWithoutActivity_logsNestedInput
  }

  export type activity_logsUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    task_id?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type activity_logsUncheckedUpdateManyWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    task_id?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type project_membersUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutProject_membersNestedInput
  }

  export type project_membersUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type project_membersUncheckedUpdateManyWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tasksUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activity_logs?: activity_logsUpdateManyWithoutTasksNestedInput
    task_tags?: task_tagsUpdateManyWithoutTasksNestedInput
    users_tasks_assignee_idTousers?: usersUpdateOneWithoutTasks_tasks_assignee_idTousersNestedInput
    users_tasks_creator_idTousers?: usersUpdateOneRequiredWithoutTasks_tasks_creator_idTousersNestedInput
  }

  export type tasksUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    creator_id?: StringFieldUpdateOperationsInput | string
    assignee_id?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activity_logs?: activity_logsUncheckedUpdateManyWithoutTasksNestedInput
    task_tags?: task_tagsUncheckedUpdateManyWithoutTasksNestedInput
  }

  export type tasksUncheckedUpdateManyWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    creator_id?: StringFieldUpdateOperationsInput | string
    assignee_id?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type task_tagsCreateManyTagsInput = {
    id?: string
    task_id: string
  }

  export type task_tagsUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tasks?: tasksUpdateOneRequiredWithoutTask_tagsNestedInput
  }

  export type task_tagsUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    task_id?: StringFieldUpdateOperationsInput | string
  }

  export type task_tagsUncheckedUpdateManyWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    task_id?: StringFieldUpdateOperationsInput | string
  }

  export type activity_logsCreateManyTasksInput = {
    id?: string
    user_id: string
    project_id?: string | null
    action: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string | null
  }

  export type task_tagsCreateManyTasksInput = {
    id?: string
    tag_id: string
  }

  export type activity_logsUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projects?: projectsUpdateOneWithoutActivity_logsNestedInput
    users?: usersUpdateOneRequiredWithoutActivity_logsNestedInput
  }

  export type activity_logsUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    project_id?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type activity_logsUncheckedUpdateManyWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    project_id?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type task_tagsUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    tags?: tagsUpdateOneRequiredWithoutTask_tagsNestedInput
  }

  export type task_tagsUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    tag_id?: StringFieldUpdateOperationsInput | string
  }

  export type task_tagsUncheckedUpdateManyWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    tag_id?: StringFieldUpdateOperationsInput | string
  }

  export type activity_logsCreateManyUsersInput = {
    id?: string
    project_id?: string | null
    task_id?: string | null
    action: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string | null
  }

  export type project_membersCreateManyUsersInput = {
    id?: string
    project_id: string
    role: string
    created_at?: Date | string | null
  }

  export type projectsCreateManyUsersInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type tagsCreateManyUsersInput = {
    id?: string
    name: string
    color?: string | null
    created_at?: Date | string | null
  }

  export type tasksCreateManyUsers_tasks_assignee_idTousersInput = {
    id?: string
    project_id: string
    creator_id: string
    title: string
    description?: string | null
    status?: string | null
    priority?: string | null
    due_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type tasksCreateManyUsers_tasks_creator_idTousersInput = {
    id?: string
    project_id: string
    assignee_id?: string | null
    title: string
    description?: string | null
    status?: string | null
    priority?: string | null
    due_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type activity_logsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projects?: projectsUpdateOneWithoutActivity_logsNestedInput
    tasks?: tasksUpdateOneWithoutActivity_logsNestedInput
  }

  export type activity_logsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    project_id?: NullableStringFieldUpdateOperationsInput | string | null
    task_id?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type activity_logsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    project_id?: NullableStringFieldUpdateOperationsInput | string | null
    task_id?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type project_membersUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projects?: projectsUpdateOneRequiredWithoutProject_membersNestedInput
  }

  export type project_membersUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    project_id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type project_membersUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    project_id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type projectsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activity_logs?: activity_logsUpdateManyWithoutProjectsNestedInput
    project_members?: project_membersUpdateManyWithoutProjectsNestedInput
    tasks?: tasksUpdateManyWithoutProjectsNestedInput
  }

  export type projectsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activity_logs?: activity_logsUncheckedUpdateManyWithoutProjectsNestedInput
    project_members?: project_membersUncheckedUpdateManyWithoutProjectsNestedInput
    tasks?: tasksUncheckedUpdateManyWithoutProjectsNestedInput
  }

  export type projectsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tagsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task_tags?: task_tagsUpdateManyWithoutTagsNestedInput
  }

  export type tagsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task_tags?: task_tagsUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type tagsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tasksUpdateWithoutUsers_tasks_assignee_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activity_logs?: activity_logsUpdateManyWithoutTasksNestedInput
    task_tags?: task_tagsUpdateManyWithoutTasksNestedInput
    users_tasks_creator_idTousers?: usersUpdateOneRequiredWithoutTasks_tasks_creator_idTousersNestedInput
    projects?: projectsUpdateOneRequiredWithoutTasksNestedInput
  }

  export type tasksUncheckedUpdateWithoutUsers_tasks_assignee_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    project_id?: StringFieldUpdateOperationsInput | string
    creator_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activity_logs?: activity_logsUncheckedUpdateManyWithoutTasksNestedInput
    task_tags?: task_tagsUncheckedUpdateManyWithoutTasksNestedInput
  }

  export type tasksUncheckedUpdateManyWithoutUsers_tasks_assignee_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    project_id?: StringFieldUpdateOperationsInput | string
    creator_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tasksUpdateWithoutUsers_tasks_creator_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activity_logs?: activity_logsUpdateManyWithoutTasksNestedInput
    task_tags?: task_tagsUpdateManyWithoutTasksNestedInput
    users_tasks_assignee_idTousers?: usersUpdateOneWithoutTasks_tasks_assignee_idTousersNestedInput
    projects?: projectsUpdateOneRequiredWithoutTasksNestedInput
  }

  export type tasksUncheckedUpdateWithoutUsers_tasks_creator_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    project_id?: StringFieldUpdateOperationsInput | string
    assignee_id?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activity_logs?: activity_logsUncheckedUpdateManyWithoutTasksNestedInput
    task_tags?: task_tagsUncheckedUpdateManyWithoutTasksNestedInput
  }

  export type tasksUncheckedUpdateManyWithoutUsers_tasks_creator_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    project_id?: StringFieldUpdateOperationsInput | string
    assignee_id?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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