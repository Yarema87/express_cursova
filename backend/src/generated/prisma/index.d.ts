
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Exercise
 * 
 */
export type Exercise = $Result.DefaultSelection<Prisma.$ExercisePayload>
/**
 * Model Workout
 * 
 */
export type Workout = $Result.DefaultSelection<Prisma.$WorkoutPayload>
/**
 * Model WorkoutExercise
 * 
 */
export type WorkoutExercise = $Result.DefaultSelection<Prisma.$WorkoutExercisePayload>
/**
 * Model Program
 * 
 */
export type Program = $Result.DefaultSelection<Prisma.$ProgramPayload>
/**
 * Model ProgramWorkout
 * 
 */
export type ProgramWorkout = $Result.DefaultSelection<Prisma.$ProgramWorkoutPayload>
/**
 * Model UserProgram
 * 
 */
export type UserProgram = $Result.DefaultSelection<Prisma.$UserProgramPayload>
/**
 * Model Log
 * 
 */
export type Log = $Result.DefaultSelection<Prisma.$LogPayload>
/**
 * Model Statistic
 * 
 */
export type Statistic = $Result.DefaultSelection<Prisma.$StatisticPayload>
/**
 * Model Achievment
 * 
 */
export type Achievment = $Result.DefaultSelection<Prisma.$AchievmentPayload>
/**
 * Model UserAchievment
 * 
 */
export type UserAchievment = $Result.DefaultSelection<Prisma.$UserAchievmentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const WeekDay: {
  Monday: 'Monday',
  Tuesday: 'Tuesday',
  Wednesday: 'Wednesday',
  Thursday: 'Thursday',
  Friday: 'Friday',
  Saturday: 'Saturday',
  Sunday: 'Sunday'
};

export type WeekDay = (typeof WeekDay)[keyof typeof WeekDay]


export const ExerciseType: {
  Strength: 'Strength',
  Cardio: 'Cardio',
  Other: 'Other'
};

export type ExerciseType = (typeof ExerciseType)[keyof typeof ExerciseType]

}

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type WeekDay = $Enums.WeekDay

export const WeekDay: typeof $Enums.WeekDay

export type ExerciseType = $Enums.ExerciseType

export const ExerciseType: typeof $Enums.ExerciseType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exercise`: Exposes CRUD operations for the **Exercise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exercises
    * const exercises = await prisma.exercise.findMany()
    * ```
    */
  get exercise(): Prisma.ExerciseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workout`: Exposes CRUD operations for the **Workout** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workouts
    * const workouts = await prisma.workout.findMany()
    * ```
    */
  get workout(): Prisma.WorkoutDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workoutExercise`: Exposes CRUD operations for the **WorkoutExercise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkoutExercises
    * const workoutExercises = await prisma.workoutExercise.findMany()
    * ```
    */
  get workoutExercise(): Prisma.WorkoutExerciseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.program`: Exposes CRUD operations for the **Program** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Programs
    * const programs = await prisma.program.findMany()
    * ```
    */
  get program(): Prisma.ProgramDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.programWorkout`: Exposes CRUD operations for the **ProgramWorkout** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProgramWorkouts
    * const programWorkouts = await prisma.programWorkout.findMany()
    * ```
    */
  get programWorkout(): Prisma.ProgramWorkoutDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userProgram`: Exposes CRUD operations for the **UserProgram** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPrograms
    * const userPrograms = await prisma.userProgram.findMany()
    * ```
    */
  get userProgram(): Prisma.UserProgramDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.log`: Exposes CRUD operations for the **Log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logs
    * const logs = await prisma.log.findMany()
    * ```
    */
  get log(): Prisma.LogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.statistic`: Exposes CRUD operations for the **Statistic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Statistics
    * const statistics = await prisma.statistic.findMany()
    * ```
    */
  get statistic(): Prisma.StatisticDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.achievment`: Exposes CRUD operations for the **Achievment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Achievments
    * const achievments = await prisma.achievment.findMany()
    * ```
    */
  get achievment(): Prisma.AchievmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userAchievment`: Exposes CRUD operations for the **UserAchievment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAchievments
    * const userAchievments = await prisma.userAchievment.findMany()
    * ```
    */
  get userAchievment(): Prisma.UserAchievmentDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
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
    User: 'User',
    Exercise: 'Exercise',
    Workout: 'Workout',
    WorkoutExercise: 'WorkoutExercise',
    Program: 'Program',
    ProgramWorkout: 'ProgramWorkout',
    UserProgram: 'UserProgram',
    Log: 'Log',
    Statistic: 'Statistic',
    Achievment: 'Achievment',
    UserAchievment: 'UserAchievment'
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
      modelProps: "user" | "exercise" | "workout" | "workoutExercise" | "program" | "programWorkout" | "userProgram" | "log" | "statistic" | "achievment" | "userAchievment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Exercise: {
        payload: Prisma.$ExercisePayload<ExtArgs>
        fields: Prisma.ExerciseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExerciseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExerciseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          findFirst: {
            args: Prisma.ExerciseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExerciseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          findMany: {
            args: Prisma.ExerciseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          create: {
            args: Prisma.ExerciseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          createMany: {
            args: Prisma.ExerciseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExerciseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          delete: {
            args: Prisma.ExerciseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          update: {
            args: Prisma.ExerciseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          deleteMany: {
            args: Prisma.ExerciseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExerciseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExerciseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          upsert: {
            args: Prisma.ExerciseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          aggregate: {
            args: Prisma.ExerciseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExercise>
          }
          groupBy: {
            args: Prisma.ExerciseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExerciseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExerciseCountArgs<ExtArgs>
            result: $Utils.Optional<ExerciseCountAggregateOutputType> | number
          }
        }
      }
      Workout: {
        payload: Prisma.$WorkoutPayload<ExtArgs>
        fields: Prisma.WorkoutFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkoutFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkoutFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          findFirst: {
            args: Prisma.WorkoutFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkoutFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          findMany: {
            args: Prisma.WorkoutFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>[]
          }
          create: {
            args: Prisma.WorkoutCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          createMany: {
            args: Prisma.WorkoutCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkoutCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>[]
          }
          delete: {
            args: Prisma.WorkoutDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          update: {
            args: Prisma.WorkoutUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          deleteMany: {
            args: Prisma.WorkoutDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkoutUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkoutUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>[]
          }
          upsert: {
            args: Prisma.WorkoutUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          aggregate: {
            args: Prisma.WorkoutAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkout>
          }
          groupBy: {
            args: Prisma.WorkoutGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkoutGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkoutCountArgs<ExtArgs>
            result: $Utils.Optional<WorkoutCountAggregateOutputType> | number
          }
        }
      }
      WorkoutExercise: {
        payload: Prisma.$WorkoutExercisePayload<ExtArgs>
        fields: Prisma.WorkoutExerciseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkoutExerciseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkoutExerciseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload>
          }
          findFirst: {
            args: Prisma.WorkoutExerciseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkoutExerciseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload>
          }
          findMany: {
            args: Prisma.WorkoutExerciseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload>[]
          }
          create: {
            args: Prisma.WorkoutExerciseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload>
          }
          createMany: {
            args: Prisma.WorkoutExerciseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkoutExerciseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload>[]
          }
          delete: {
            args: Prisma.WorkoutExerciseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload>
          }
          update: {
            args: Prisma.WorkoutExerciseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload>
          }
          deleteMany: {
            args: Prisma.WorkoutExerciseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkoutExerciseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkoutExerciseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload>[]
          }
          upsert: {
            args: Prisma.WorkoutExerciseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload>
          }
          aggregate: {
            args: Prisma.WorkoutExerciseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkoutExercise>
          }
          groupBy: {
            args: Prisma.WorkoutExerciseGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkoutExerciseGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkoutExerciseCountArgs<ExtArgs>
            result: $Utils.Optional<WorkoutExerciseCountAggregateOutputType> | number
          }
        }
      }
      Program: {
        payload: Prisma.$ProgramPayload<ExtArgs>
        fields: Prisma.ProgramFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgramFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgramFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          findFirst: {
            args: Prisma.ProgramFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgramFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          findMany: {
            args: Prisma.ProgramFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>[]
          }
          create: {
            args: Prisma.ProgramCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          createMany: {
            args: Prisma.ProgramCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProgramCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>[]
          }
          delete: {
            args: Prisma.ProgramDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          update: {
            args: Prisma.ProgramUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          deleteMany: {
            args: Prisma.ProgramDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProgramUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProgramUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>[]
          }
          upsert: {
            args: Prisma.ProgramUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          aggregate: {
            args: Prisma.ProgramAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgram>
          }
          groupBy: {
            args: Prisma.ProgramGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgramGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgramCountArgs<ExtArgs>
            result: $Utils.Optional<ProgramCountAggregateOutputType> | number
          }
        }
      }
      ProgramWorkout: {
        payload: Prisma.$ProgramWorkoutPayload<ExtArgs>
        fields: Prisma.ProgramWorkoutFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgramWorkoutFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramWorkoutPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgramWorkoutFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramWorkoutPayload>
          }
          findFirst: {
            args: Prisma.ProgramWorkoutFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramWorkoutPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgramWorkoutFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramWorkoutPayload>
          }
          findMany: {
            args: Prisma.ProgramWorkoutFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramWorkoutPayload>[]
          }
          create: {
            args: Prisma.ProgramWorkoutCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramWorkoutPayload>
          }
          createMany: {
            args: Prisma.ProgramWorkoutCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProgramWorkoutCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramWorkoutPayload>[]
          }
          delete: {
            args: Prisma.ProgramWorkoutDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramWorkoutPayload>
          }
          update: {
            args: Prisma.ProgramWorkoutUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramWorkoutPayload>
          }
          deleteMany: {
            args: Prisma.ProgramWorkoutDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProgramWorkoutUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProgramWorkoutUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramWorkoutPayload>[]
          }
          upsert: {
            args: Prisma.ProgramWorkoutUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramWorkoutPayload>
          }
          aggregate: {
            args: Prisma.ProgramWorkoutAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgramWorkout>
          }
          groupBy: {
            args: Prisma.ProgramWorkoutGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgramWorkoutGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgramWorkoutCountArgs<ExtArgs>
            result: $Utils.Optional<ProgramWorkoutCountAggregateOutputType> | number
          }
        }
      }
      UserProgram: {
        payload: Prisma.$UserProgramPayload<ExtArgs>
        fields: Prisma.UserProgramFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProgramFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProgramPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProgramFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProgramPayload>
          }
          findFirst: {
            args: Prisma.UserProgramFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProgramPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProgramFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProgramPayload>
          }
          findMany: {
            args: Prisma.UserProgramFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProgramPayload>[]
          }
          create: {
            args: Prisma.UserProgramCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProgramPayload>
          }
          createMany: {
            args: Prisma.UserProgramCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserProgramCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProgramPayload>[]
          }
          delete: {
            args: Prisma.UserProgramDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProgramPayload>
          }
          update: {
            args: Prisma.UserProgramUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProgramPayload>
          }
          deleteMany: {
            args: Prisma.UserProgramDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProgramUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserProgramUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProgramPayload>[]
          }
          upsert: {
            args: Prisma.UserProgramUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProgramPayload>
          }
          aggregate: {
            args: Prisma.UserProgramAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProgram>
          }
          groupBy: {
            args: Prisma.UserProgramGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProgramGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProgramCountArgs<ExtArgs>
            result: $Utils.Optional<UserProgramCountAggregateOutputType> | number
          }
        }
      }
      Log: {
        payload: Prisma.$LogPayload<ExtArgs>
        fields: Prisma.LogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          findFirst: {
            args: Prisma.LogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          findMany: {
            args: Prisma.LogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>[]
          }
          create: {
            args: Prisma.LogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          createMany: {
            args: Prisma.LogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>[]
          }
          delete: {
            args: Prisma.LogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          update: {
            args: Prisma.LogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          deleteMany: {
            args: Prisma.LogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>[]
          }
          upsert: {
            args: Prisma.LogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          aggregate: {
            args: Prisma.LogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLog>
          }
          groupBy: {
            args: Prisma.LogGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogCountArgs<ExtArgs>
            result: $Utils.Optional<LogCountAggregateOutputType> | number
          }
        }
      }
      Statistic: {
        payload: Prisma.$StatisticPayload<ExtArgs>
        fields: Prisma.StatisticFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StatisticFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StatisticFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload>
          }
          findFirst: {
            args: Prisma.StatisticFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StatisticFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload>
          }
          findMany: {
            args: Prisma.StatisticFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload>[]
          }
          create: {
            args: Prisma.StatisticCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload>
          }
          createMany: {
            args: Prisma.StatisticCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StatisticCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload>[]
          }
          delete: {
            args: Prisma.StatisticDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload>
          }
          update: {
            args: Prisma.StatisticUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload>
          }
          deleteMany: {
            args: Prisma.StatisticDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StatisticUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StatisticUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload>[]
          }
          upsert: {
            args: Prisma.StatisticUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload>
          }
          aggregate: {
            args: Prisma.StatisticAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStatistic>
          }
          groupBy: {
            args: Prisma.StatisticGroupByArgs<ExtArgs>
            result: $Utils.Optional<StatisticGroupByOutputType>[]
          }
          count: {
            args: Prisma.StatisticCountArgs<ExtArgs>
            result: $Utils.Optional<StatisticCountAggregateOutputType> | number
          }
        }
      }
      Achievment: {
        payload: Prisma.$AchievmentPayload<ExtArgs>
        fields: Prisma.AchievmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AchievmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AchievmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievmentPayload>
          }
          findFirst: {
            args: Prisma.AchievmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AchievmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievmentPayload>
          }
          findMany: {
            args: Prisma.AchievmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievmentPayload>[]
          }
          create: {
            args: Prisma.AchievmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievmentPayload>
          }
          createMany: {
            args: Prisma.AchievmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AchievmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievmentPayload>[]
          }
          delete: {
            args: Prisma.AchievmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievmentPayload>
          }
          update: {
            args: Prisma.AchievmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievmentPayload>
          }
          deleteMany: {
            args: Prisma.AchievmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AchievmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AchievmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievmentPayload>[]
          }
          upsert: {
            args: Prisma.AchievmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievmentPayload>
          }
          aggregate: {
            args: Prisma.AchievmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAchievment>
          }
          groupBy: {
            args: Prisma.AchievmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AchievmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AchievmentCountArgs<ExtArgs>
            result: $Utils.Optional<AchievmentCountAggregateOutputType> | number
          }
        }
      }
      UserAchievment: {
        payload: Prisma.$UserAchievmentPayload<ExtArgs>
        fields: Prisma.UserAchievmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserAchievmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserAchievmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievmentPayload>
          }
          findFirst: {
            args: Prisma.UserAchievmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserAchievmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievmentPayload>
          }
          findMany: {
            args: Prisma.UserAchievmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievmentPayload>[]
          }
          create: {
            args: Prisma.UserAchievmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievmentPayload>
          }
          createMany: {
            args: Prisma.UserAchievmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserAchievmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievmentPayload>[]
          }
          delete: {
            args: Prisma.UserAchievmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievmentPayload>
          }
          update: {
            args: Prisma.UserAchievmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievmentPayload>
          }
          deleteMany: {
            args: Prisma.UserAchievmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserAchievmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserAchievmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievmentPayload>[]
          }
          upsert: {
            args: Prisma.UserAchievmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievmentPayload>
          }
          aggregate: {
            args: Prisma.UserAchievmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserAchievment>
          }
          groupBy: {
            args: Prisma.UserAchievmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserAchievmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserAchievmentCountArgs<ExtArgs>
            result: $Utils.Optional<UserAchievmentCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    user?: UserOmit
    exercise?: ExerciseOmit
    workout?: WorkoutOmit
    workoutExercise?: WorkoutExerciseOmit
    program?: ProgramOmit
    programWorkout?: ProgramWorkoutOmit
    userProgram?: UserProgramOmit
    log?: LogOmit
    statistic?: StatisticOmit
    achievment?: AchievmentOmit
    userAchievment?: UserAchievmentOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    programs: number
    ownPrograms: number
    ownTrainings: number
    logs: number
    achievments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    programs?: boolean | UserCountOutputTypeCountProgramsArgs
    ownPrograms?: boolean | UserCountOutputTypeCountOwnProgramsArgs
    ownTrainings?: boolean | UserCountOutputTypeCountOwnTrainingsArgs
    logs?: boolean | UserCountOutputTypeCountLogsArgs
    achievments?: boolean | UserCountOutputTypeCountAchievmentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProgramsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProgramWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOwnProgramsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgramWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOwnTrainingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAchievmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAchievmentWhereInput
  }


  /**
   * Count Type ExerciseCountOutputType
   */

  export type ExerciseCountOutputType = {
    workoutExercises: number
  }

  export type ExerciseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workoutExercises?: boolean | ExerciseCountOutputTypeCountWorkoutExercisesArgs
  }

  // Custom InputTypes
  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseCountOutputType
     */
    select?: ExerciseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeCountWorkoutExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutExerciseWhereInput
  }


  /**
   * Count Type WorkoutCountOutputType
   */

  export type WorkoutCountOutputType = {
    workoutExercises: number
    programWorkouts: number
    logs: number
  }

  export type WorkoutCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workoutExercises?: boolean | WorkoutCountOutputTypeCountWorkoutExercisesArgs
    programWorkouts?: boolean | WorkoutCountOutputTypeCountProgramWorkoutsArgs
    logs?: boolean | WorkoutCountOutputTypeCountLogsArgs
  }

  // Custom InputTypes
  /**
   * WorkoutCountOutputType without action
   */
  export type WorkoutCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutCountOutputType
     */
    select?: WorkoutCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkoutCountOutputType without action
   */
  export type WorkoutCountOutputTypeCountWorkoutExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutExerciseWhereInput
  }

  /**
   * WorkoutCountOutputType without action
   */
  export type WorkoutCountOutputTypeCountProgramWorkoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgramWorkoutWhereInput
  }

  /**
   * WorkoutCountOutputType without action
   */
  export type WorkoutCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogWhereInput
  }


  /**
   * Count Type ProgramCountOutputType
   */

  export type ProgramCountOutputType = {
    programWorkouts: number
    users: number
  }

  export type ProgramCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    programWorkouts?: boolean | ProgramCountOutputTypeCountProgramWorkoutsArgs
    users?: boolean | ProgramCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * ProgramCountOutputType without action
   */
  export type ProgramCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramCountOutputType
     */
    select?: ProgramCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProgramCountOutputType without action
   */
  export type ProgramCountOutputTypeCountProgramWorkoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgramWorkoutWhereInput
  }

  /**
   * ProgramCountOutputType without action
   */
  export type ProgramCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProgramWhereInput
  }


  /**
   * Count Type AchievmentCountOutputType
   */

  export type AchievmentCountOutputType = {
    users: number
  }

  export type AchievmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | AchievmentCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * AchievmentCountOutputType without action
   */
  export type AchievmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AchievmentCountOutputType
     */
    select?: AchievmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AchievmentCountOutputType without action
   */
  export type AchievmentCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAchievmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    age: number | null
    height: number | null
    weight: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    age: number | null
    height: number | null
    weight: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    surname: string | null
    password: string | null
    access: string | null
    card_type: string | null
    age: number | null
    gender: $Enums.Gender | null
    height: number | null
    weight: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    surname: string | null
    password: string | null
    access: string | null
    card_type: string | null
    age: number | null
    gender: $Enums.Gender | null
    height: number | null
    weight: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    surname: number
    password: number
    access: number
    card_type: number
    age: number
    gender: number
    height: number
    weight: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    age?: true
    height?: true
    weight?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    age?: true
    height?: true
    weight?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    surname?: true
    password?: true
    access?: true
    card_type?: true
    age?: true
    gender?: true
    height?: true
    weight?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    surname?: true
    password?: true
    access?: true
    card_type?: true
    age?: true
    gender?: true
    height?: true
    weight?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    surname?: true
    password?: true
    access?: true
    card_type?: true
    age?: true
    gender?: true
    height?: true
    weight?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
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
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    name: string
    surname: string
    password: string
    access: string
    card_type: string
    age: number | null
    gender: $Enums.Gender | null
    height: number | null
    weight: number | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    surname?: boolean
    password?: boolean
    access?: boolean
    card_type?: boolean
    age?: boolean
    gender?: boolean
    height?: boolean
    weight?: boolean
    programs?: boolean | User$programsArgs<ExtArgs>
    ownPrograms?: boolean | User$ownProgramsArgs<ExtArgs>
    ownTrainings?: boolean | User$ownTrainingsArgs<ExtArgs>
    logs?: boolean | User$logsArgs<ExtArgs>
    stats?: boolean | User$statsArgs<ExtArgs>
    achievments?: boolean | User$achievmentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    surname?: boolean
    password?: boolean
    access?: boolean
    card_type?: boolean
    age?: boolean
    gender?: boolean
    height?: boolean
    weight?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    surname?: boolean
    password?: boolean
    access?: boolean
    card_type?: boolean
    age?: boolean
    gender?: boolean
    height?: boolean
    weight?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    surname?: boolean
    password?: boolean
    access?: boolean
    card_type?: boolean
    age?: boolean
    gender?: boolean
    height?: boolean
    weight?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "surname" | "password" | "access" | "card_type" | "age" | "gender" | "height" | "weight", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    programs?: boolean | User$programsArgs<ExtArgs>
    ownPrograms?: boolean | User$ownProgramsArgs<ExtArgs>
    ownTrainings?: boolean | User$ownTrainingsArgs<ExtArgs>
    logs?: boolean | User$logsArgs<ExtArgs>
    stats?: boolean | User$statsArgs<ExtArgs>
    achievments?: boolean | User$achievmentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      programs: Prisma.$UserProgramPayload<ExtArgs>[]
      ownPrograms: Prisma.$ProgramPayload<ExtArgs>[]
      ownTrainings: Prisma.$WorkoutPayload<ExtArgs>[]
      logs: Prisma.$LogPayload<ExtArgs>[]
      stats: Prisma.$StatisticPayload<ExtArgs> | null
      achievments: Prisma.$UserAchievmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string
      surname: string
      password: string
      access: string
      card_type: string
      age: number | null
      gender: $Enums.Gender | null
      height: number | null
      weight: number | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    programs<T extends User$programsArgs<ExtArgs> = {}>(args?: Subset<T, User$programsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProgramPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ownPrograms<T extends User$ownProgramsArgs<ExtArgs> = {}>(args?: Subset<T, User$ownProgramsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ownTrainings<T extends User$ownTrainingsArgs<ExtArgs> = {}>(args?: Subset<T, User$ownTrainingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    logs<T extends User$logsArgs<ExtArgs> = {}>(args?: Subset<T, User$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stats<T extends User$statsArgs<ExtArgs> = {}>(args?: Subset<T, User$statsArgs<ExtArgs>>): Prisma__StatisticClient<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    achievments<T extends User$achievmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$achievmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAchievmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly surname: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly access: FieldRef<"User", 'String'>
    readonly card_type: FieldRef<"User", 'String'>
    readonly age: FieldRef<"User", 'Int'>
    readonly gender: FieldRef<"User", 'Gender'>
    readonly height: FieldRef<"User", 'Float'>
    readonly weight: FieldRef<"User", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.programs
   */
  export type User$programsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProgram
     */
    select?: UserProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProgram
     */
    omit?: UserProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgramInclude<ExtArgs> | null
    where?: UserProgramWhereInput
    orderBy?: UserProgramOrderByWithRelationInput | UserProgramOrderByWithRelationInput[]
    cursor?: UserProgramWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserProgramScalarFieldEnum | UserProgramScalarFieldEnum[]
  }

  /**
   * User.ownPrograms
   */
  export type User$ownProgramsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    where?: ProgramWhereInput
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    cursor?: ProgramWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * User.ownTrainings
   */
  export type User$ownTrainingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    where?: WorkoutWhereInput
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    cursor?: WorkoutWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * User.logs
   */
  export type User$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    where?: LogWhereInput
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    cursor?: LogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * User.stats
   */
  export type User$statsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticInclude<ExtArgs> | null
    where?: StatisticWhereInput
  }

  /**
   * User.achievments
   */
  export type User$achievmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievment
     */
    select?: UserAchievmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievment
     */
    omit?: UserAchievmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievmentInclude<ExtArgs> | null
    where?: UserAchievmentWhereInput
    orderBy?: UserAchievmentOrderByWithRelationInput | UserAchievmentOrderByWithRelationInput[]
    cursor?: UserAchievmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAchievmentScalarFieldEnum | UserAchievmentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Exercise
   */

  export type AggregateExercise = {
    _count: ExerciseCountAggregateOutputType | null
    _avg: ExerciseAvgAggregateOutputType | null
    _sum: ExerciseSumAggregateOutputType | null
    _min: ExerciseMinAggregateOutputType | null
    _max: ExerciseMaxAggregateOutputType | null
  }

  export type ExerciseAvgAggregateOutputType = {
    id: number | null
  }

  export type ExerciseSumAggregateOutputType = {
    id: number | null
  }

  export type ExerciseMinAggregateOutputType = {
    id: number | null
    name: string | null
    type: $Enums.ExerciseType | null
    calories: string | null
    description: string | null
  }

  export type ExerciseMaxAggregateOutputType = {
    id: number | null
    name: string | null
    type: $Enums.ExerciseType | null
    calories: string | null
    description: string | null
  }

  export type ExerciseCountAggregateOutputType = {
    id: number
    name: number
    type: number
    calories: number
    description: number
    _all: number
  }


  export type ExerciseAvgAggregateInputType = {
    id?: true
  }

  export type ExerciseSumAggregateInputType = {
    id?: true
  }

  export type ExerciseMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    calories?: true
    description?: true
  }

  export type ExerciseMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    calories?: true
    description?: true
  }

  export type ExerciseCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    calories?: true
    description?: true
    _all?: true
  }

  export type ExerciseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exercise to aggregate.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exercises
    **/
    _count?: true | ExerciseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExerciseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExerciseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExerciseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExerciseMaxAggregateInputType
  }

  export type GetExerciseAggregateType<T extends ExerciseAggregateArgs> = {
        [P in keyof T & keyof AggregateExercise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExercise[P]>
      : GetScalarType<T[P], AggregateExercise[P]>
  }




  export type ExerciseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseWhereInput
    orderBy?: ExerciseOrderByWithAggregationInput | ExerciseOrderByWithAggregationInput[]
    by: ExerciseScalarFieldEnum[] | ExerciseScalarFieldEnum
    having?: ExerciseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExerciseCountAggregateInputType | true
    _avg?: ExerciseAvgAggregateInputType
    _sum?: ExerciseSumAggregateInputType
    _min?: ExerciseMinAggregateInputType
    _max?: ExerciseMaxAggregateInputType
  }

  export type ExerciseGroupByOutputType = {
    id: number
    name: string
    type: $Enums.ExerciseType
    calories: string
    description: string | null
    _count: ExerciseCountAggregateOutputType | null
    _avg: ExerciseAvgAggregateOutputType | null
    _sum: ExerciseSumAggregateOutputType | null
    _min: ExerciseMinAggregateOutputType | null
    _max: ExerciseMaxAggregateOutputType | null
  }

  type GetExerciseGroupByPayload<T extends ExerciseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExerciseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExerciseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExerciseGroupByOutputType[P]>
            : GetScalarType<T[P], ExerciseGroupByOutputType[P]>
        }
      >
    >


  export type ExerciseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    calories?: boolean
    description?: boolean
    workoutExercises?: boolean | Exercise$workoutExercisesArgs<ExtArgs>
    _count?: boolean | ExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    calories?: boolean
    description?: boolean
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    calories?: boolean
    description?: boolean
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    calories?: boolean
    description?: boolean
  }

  export type ExerciseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "calories" | "description", ExtArgs["result"]["exercise"]>
  export type ExerciseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workoutExercises?: boolean | Exercise$workoutExercisesArgs<ExtArgs>
    _count?: boolean | ExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExerciseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ExerciseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ExercisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Exercise"
    objects: {
      workoutExercises: Prisma.$WorkoutExercisePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      type: $Enums.ExerciseType
      calories: string
      description: string | null
    }, ExtArgs["result"]["exercise"]>
    composites: {}
  }

  type ExerciseGetPayload<S extends boolean | null | undefined | ExerciseDefaultArgs> = $Result.GetResult<Prisma.$ExercisePayload, S>

  type ExerciseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExerciseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExerciseCountAggregateInputType | true
    }

  export interface ExerciseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Exercise'], meta: { name: 'Exercise' } }
    /**
     * Find zero or one Exercise that matches the filter.
     * @param {ExerciseFindUniqueArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExerciseFindUniqueArgs>(args: SelectSubset<T, ExerciseFindUniqueArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Exercise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExerciseFindUniqueOrThrowArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExerciseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExerciseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindFirstArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExerciseFindFirstArgs>(args?: SelectSubset<T, ExerciseFindFirstArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindFirstOrThrowArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExerciseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExerciseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exercises
     * const exercises = await prisma.exercise.findMany()
     * 
     * // Get first 10 Exercises
     * const exercises = await prisma.exercise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exerciseWithIdOnly = await prisma.exercise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExerciseFindManyArgs>(args?: SelectSubset<T, ExerciseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Exercise.
     * @param {ExerciseCreateArgs} args - Arguments to create a Exercise.
     * @example
     * // Create one Exercise
     * const Exercise = await prisma.exercise.create({
     *   data: {
     *     // ... data to create a Exercise
     *   }
     * })
     * 
     */
    create<T extends ExerciseCreateArgs>(args: SelectSubset<T, ExerciseCreateArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exercises.
     * @param {ExerciseCreateManyArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercise = await prisma.exercise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExerciseCreateManyArgs>(args?: SelectSubset<T, ExerciseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Exercises and returns the data saved in the database.
     * @param {ExerciseCreateManyAndReturnArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercise = await prisma.exercise.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Exercises and only return the `id`
     * const exerciseWithIdOnly = await prisma.exercise.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExerciseCreateManyAndReturnArgs>(args?: SelectSubset<T, ExerciseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Exercise.
     * @param {ExerciseDeleteArgs} args - Arguments to delete one Exercise.
     * @example
     * // Delete one Exercise
     * const Exercise = await prisma.exercise.delete({
     *   where: {
     *     // ... filter to delete one Exercise
     *   }
     * })
     * 
     */
    delete<T extends ExerciseDeleteArgs>(args: SelectSubset<T, ExerciseDeleteArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Exercise.
     * @param {ExerciseUpdateArgs} args - Arguments to update one Exercise.
     * @example
     * // Update one Exercise
     * const exercise = await prisma.exercise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExerciseUpdateArgs>(args: SelectSubset<T, ExerciseUpdateArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exercises.
     * @param {ExerciseDeleteManyArgs} args - Arguments to filter Exercises to delete.
     * @example
     * // Delete a few Exercises
     * const { count } = await prisma.exercise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExerciseDeleteManyArgs>(args?: SelectSubset<T, ExerciseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exercises
     * const exercise = await prisma.exercise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExerciseUpdateManyArgs>(args: SelectSubset<T, ExerciseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises and returns the data updated in the database.
     * @param {ExerciseUpdateManyAndReturnArgs} args - Arguments to update many Exercises.
     * @example
     * // Update many Exercises
     * const exercise = await prisma.exercise.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Exercises and only return the `id`
     * const exerciseWithIdOnly = await prisma.exercise.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExerciseUpdateManyAndReturnArgs>(args: SelectSubset<T, ExerciseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Exercise.
     * @param {ExerciseUpsertArgs} args - Arguments to update or create a Exercise.
     * @example
     * // Update or create a Exercise
     * const exercise = await prisma.exercise.upsert({
     *   create: {
     *     // ... data to create a Exercise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exercise we want to update
     *   }
     * })
     */
    upsert<T extends ExerciseUpsertArgs>(args: SelectSubset<T, ExerciseUpsertArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseCountArgs} args - Arguments to filter Exercises to count.
     * @example
     * // Count the number of Exercises
     * const count = await prisma.exercise.count({
     *   where: {
     *     // ... the filter for the Exercises we want to count
     *   }
     * })
    **/
    count<T extends ExerciseCountArgs>(
      args?: Subset<T, ExerciseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExerciseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExerciseAggregateArgs>(args: Subset<T, ExerciseAggregateArgs>): Prisma.PrismaPromise<GetExerciseAggregateType<T>>

    /**
     * Group by Exercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseGroupByArgs} args - Group by arguments.
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
      T extends ExerciseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExerciseGroupByArgs['orderBy'] }
        : { orderBy?: ExerciseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExerciseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExerciseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Exercise model
   */
  readonly fields: ExerciseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Exercise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExerciseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workoutExercises<T extends Exercise$workoutExercisesArgs<ExtArgs> = {}>(args?: Subset<T, Exercise$workoutExercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Exercise model
   */
  interface ExerciseFieldRefs {
    readonly id: FieldRef<"Exercise", 'Int'>
    readonly name: FieldRef<"Exercise", 'String'>
    readonly type: FieldRef<"Exercise", 'ExerciseType'>
    readonly calories: FieldRef<"Exercise", 'String'>
    readonly description: FieldRef<"Exercise", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Exercise findUnique
   */
  export type ExerciseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise findUniqueOrThrow
   */
  export type ExerciseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise findFirst
   */
  export type ExerciseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise findFirstOrThrow
   */
  export type ExerciseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise findMany
   */
  export type ExerciseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercises to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise create
   */
  export type ExerciseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The data needed to create a Exercise.
     */
    data: XOR<ExerciseCreateInput, ExerciseUncheckedCreateInput>
  }

  /**
   * Exercise createMany
   */
  export type ExerciseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Exercises.
     */
    data: ExerciseCreateManyInput | ExerciseCreateManyInput[]
  }

  /**
   * Exercise createManyAndReturn
   */
  export type ExerciseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * The data used to create many Exercises.
     */
    data: ExerciseCreateManyInput | ExerciseCreateManyInput[]
  }

  /**
   * Exercise update
   */
  export type ExerciseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The data needed to update a Exercise.
     */
    data: XOR<ExerciseUpdateInput, ExerciseUncheckedUpdateInput>
    /**
     * Choose, which Exercise to update.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise updateMany
   */
  export type ExerciseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Exercises.
     */
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyInput>
    /**
     * Filter which Exercises to update
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to update.
     */
    limit?: number
  }

  /**
   * Exercise updateManyAndReturn
   */
  export type ExerciseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * The data used to update Exercises.
     */
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyInput>
    /**
     * Filter which Exercises to update
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to update.
     */
    limit?: number
  }

  /**
   * Exercise upsert
   */
  export type ExerciseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The filter to search for the Exercise to update in case it exists.
     */
    where: ExerciseWhereUniqueInput
    /**
     * In case the Exercise found by the `where` argument doesn't exist, create a new Exercise with this data.
     */
    create: XOR<ExerciseCreateInput, ExerciseUncheckedCreateInput>
    /**
     * In case the Exercise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExerciseUpdateInput, ExerciseUncheckedUpdateInput>
  }

  /**
   * Exercise delete
   */
  export type ExerciseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter which Exercise to delete.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise deleteMany
   */
  export type ExerciseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exercises to delete
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to delete.
     */
    limit?: number
  }

  /**
   * Exercise.workoutExercises
   */
  export type Exercise$workoutExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    where?: WorkoutExerciseWhereInput
    orderBy?: WorkoutExerciseOrderByWithRelationInput | WorkoutExerciseOrderByWithRelationInput[]
    cursor?: WorkoutExerciseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutExerciseScalarFieldEnum | WorkoutExerciseScalarFieldEnum[]
  }

  /**
   * Exercise without action
   */
  export type ExerciseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
  }


  /**
   * Model Workout
   */

  export type AggregateWorkout = {
    _count: WorkoutCountAggregateOutputType | null
    _avg: WorkoutAvgAggregateOutputType | null
    _sum: WorkoutSumAggregateOutputType | null
    _min: WorkoutMinAggregateOutputType | null
    _max: WorkoutMaxAggregateOutputType | null
  }

  export type WorkoutAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type WorkoutSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type WorkoutMinAggregateOutputType = {
    id: number | null
    name: string | null
    type: $Enums.ExerciseType | null
    description: string | null
    userId: number | null
  }

  export type WorkoutMaxAggregateOutputType = {
    id: number | null
    name: string | null
    type: $Enums.ExerciseType | null
    description: string | null
    userId: number | null
  }

  export type WorkoutCountAggregateOutputType = {
    id: number
    name: number
    type: number
    description: number
    userId: number
    _all: number
  }


  export type WorkoutAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type WorkoutSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type WorkoutMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    description?: true
    userId?: true
  }

  export type WorkoutMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    description?: true
    userId?: true
  }

  export type WorkoutCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    description?: true
    userId?: true
    _all?: true
  }

  export type WorkoutAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workout to aggregate.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workouts
    **/
    _count?: true | WorkoutCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkoutAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkoutSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkoutMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkoutMaxAggregateInputType
  }

  export type GetWorkoutAggregateType<T extends WorkoutAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkout]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkout[P]>
      : GetScalarType<T[P], AggregateWorkout[P]>
  }




  export type WorkoutGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutWhereInput
    orderBy?: WorkoutOrderByWithAggregationInput | WorkoutOrderByWithAggregationInput[]
    by: WorkoutScalarFieldEnum[] | WorkoutScalarFieldEnum
    having?: WorkoutScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkoutCountAggregateInputType | true
    _avg?: WorkoutAvgAggregateInputType
    _sum?: WorkoutSumAggregateInputType
    _min?: WorkoutMinAggregateInputType
    _max?: WorkoutMaxAggregateInputType
  }

  export type WorkoutGroupByOutputType = {
    id: number
    name: string
    type: $Enums.ExerciseType
    description: string | null
    userId: number | null
    _count: WorkoutCountAggregateOutputType | null
    _avg: WorkoutAvgAggregateOutputType | null
    _sum: WorkoutSumAggregateOutputType | null
    _min: WorkoutMinAggregateOutputType | null
    _max: WorkoutMaxAggregateOutputType | null
  }

  type GetWorkoutGroupByPayload<T extends WorkoutGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkoutGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkoutGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkoutGroupByOutputType[P]>
            : GetScalarType<T[P], WorkoutGroupByOutputType[P]>
        }
      >
    >


  export type WorkoutSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    description?: boolean
    userId?: boolean
    user?: boolean | Workout$userArgs<ExtArgs>
    workoutExercises?: boolean | Workout$workoutExercisesArgs<ExtArgs>
    programWorkouts?: boolean | Workout$programWorkoutsArgs<ExtArgs>
    logs?: boolean | Workout$logsArgs<ExtArgs>
    _count?: boolean | WorkoutCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workout"]>

  export type WorkoutSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    description?: boolean
    userId?: boolean
    user?: boolean | Workout$userArgs<ExtArgs>
  }, ExtArgs["result"]["workout"]>

  export type WorkoutSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    description?: boolean
    userId?: boolean
    user?: boolean | Workout$userArgs<ExtArgs>
  }, ExtArgs["result"]["workout"]>

  export type WorkoutSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    description?: boolean
    userId?: boolean
  }

  export type WorkoutOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "description" | "userId", ExtArgs["result"]["workout"]>
  export type WorkoutInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Workout$userArgs<ExtArgs>
    workoutExercises?: boolean | Workout$workoutExercisesArgs<ExtArgs>
    programWorkouts?: boolean | Workout$programWorkoutsArgs<ExtArgs>
    logs?: boolean | Workout$logsArgs<ExtArgs>
    _count?: boolean | WorkoutCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkoutIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Workout$userArgs<ExtArgs>
  }
  export type WorkoutIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Workout$userArgs<ExtArgs>
  }

  export type $WorkoutPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Workout"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      workoutExercises: Prisma.$WorkoutExercisePayload<ExtArgs>[]
      programWorkouts: Prisma.$ProgramWorkoutPayload<ExtArgs>[]
      logs: Prisma.$LogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      type: $Enums.ExerciseType
      description: string | null
      userId: number | null
    }, ExtArgs["result"]["workout"]>
    composites: {}
  }

  type WorkoutGetPayload<S extends boolean | null | undefined | WorkoutDefaultArgs> = $Result.GetResult<Prisma.$WorkoutPayload, S>

  type WorkoutCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkoutFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkoutCountAggregateInputType | true
    }

  export interface WorkoutDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Workout'], meta: { name: 'Workout' } }
    /**
     * Find zero or one Workout that matches the filter.
     * @param {WorkoutFindUniqueArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkoutFindUniqueArgs>(args: SelectSubset<T, WorkoutFindUniqueArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workout that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkoutFindUniqueOrThrowArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkoutFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkoutFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workout that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutFindFirstArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkoutFindFirstArgs>(args?: SelectSubset<T, WorkoutFindFirstArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workout that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutFindFirstOrThrowArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkoutFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkoutFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workouts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workouts
     * const workouts = await prisma.workout.findMany()
     * 
     * // Get first 10 Workouts
     * const workouts = await prisma.workout.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workoutWithIdOnly = await prisma.workout.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkoutFindManyArgs>(args?: SelectSubset<T, WorkoutFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workout.
     * @param {WorkoutCreateArgs} args - Arguments to create a Workout.
     * @example
     * // Create one Workout
     * const Workout = await prisma.workout.create({
     *   data: {
     *     // ... data to create a Workout
     *   }
     * })
     * 
     */
    create<T extends WorkoutCreateArgs>(args: SelectSubset<T, WorkoutCreateArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workouts.
     * @param {WorkoutCreateManyArgs} args - Arguments to create many Workouts.
     * @example
     * // Create many Workouts
     * const workout = await prisma.workout.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkoutCreateManyArgs>(args?: SelectSubset<T, WorkoutCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workouts and returns the data saved in the database.
     * @param {WorkoutCreateManyAndReturnArgs} args - Arguments to create many Workouts.
     * @example
     * // Create many Workouts
     * const workout = await prisma.workout.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workouts and only return the `id`
     * const workoutWithIdOnly = await prisma.workout.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkoutCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkoutCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Workout.
     * @param {WorkoutDeleteArgs} args - Arguments to delete one Workout.
     * @example
     * // Delete one Workout
     * const Workout = await prisma.workout.delete({
     *   where: {
     *     // ... filter to delete one Workout
     *   }
     * })
     * 
     */
    delete<T extends WorkoutDeleteArgs>(args: SelectSubset<T, WorkoutDeleteArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workout.
     * @param {WorkoutUpdateArgs} args - Arguments to update one Workout.
     * @example
     * // Update one Workout
     * const workout = await prisma.workout.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkoutUpdateArgs>(args: SelectSubset<T, WorkoutUpdateArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workouts.
     * @param {WorkoutDeleteManyArgs} args - Arguments to filter Workouts to delete.
     * @example
     * // Delete a few Workouts
     * const { count } = await prisma.workout.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkoutDeleteManyArgs>(args?: SelectSubset<T, WorkoutDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workouts
     * const workout = await prisma.workout.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkoutUpdateManyArgs>(args: SelectSubset<T, WorkoutUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workouts and returns the data updated in the database.
     * @param {WorkoutUpdateManyAndReturnArgs} args - Arguments to update many Workouts.
     * @example
     * // Update many Workouts
     * const workout = await prisma.workout.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workouts and only return the `id`
     * const workoutWithIdOnly = await prisma.workout.updateManyAndReturn({
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
    updateManyAndReturn<T extends WorkoutUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkoutUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Workout.
     * @param {WorkoutUpsertArgs} args - Arguments to update or create a Workout.
     * @example
     * // Update or create a Workout
     * const workout = await prisma.workout.upsert({
     *   create: {
     *     // ... data to create a Workout
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workout we want to update
     *   }
     * })
     */
    upsert<T extends WorkoutUpsertArgs>(args: SelectSubset<T, WorkoutUpsertArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutCountArgs} args - Arguments to filter Workouts to count.
     * @example
     * // Count the number of Workouts
     * const count = await prisma.workout.count({
     *   where: {
     *     // ... the filter for the Workouts we want to count
     *   }
     * })
    **/
    count<T extends WorkoutCountArgs>(
      args?: Subset<T, WorkoutCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkoutCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkoutAggregateArgs>(args: Subset<T, WorkoutAggregateArgs>): Prisma.PrismaPromise<GetWorkoutAggregateType<T>>

    /**
     * Group by Workout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutGroupByArgs} args - Group by arguments.
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
      T extends WorkoutGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkoutGroupByArgs['orderBy'] }
        : { orderBy?: WorkoutGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkoutGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkoutGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Workout model
   */
  readonly fields: WorkoutFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Workout.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkoutClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Workout$userArgs<ExtArgs> = {}>(args?: Subset<T, Workout$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    workoutExercises<T extends Workout$workoutExercisesArgs<ExtArgs> = {}>(args?: Subset<T, Workout$workoutExercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    programWorkouts<T extends Workout$programWorkoutsArgs<ExtArgs> = {}>(args?: Subset<T, Workout$programWorkoutsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramWorkoutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    logs<T extends Workout$logsArgs<ExtArgs> = {}>(args?: Subset<T, Workout$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Workout model
   */
  interface WorkoutFieldRefs {
    readonly id: FieldRef<"Workout", 'Int'>
    readonly name: FieldRef<"Workout", 'String'>
    readonly type: FieldRef<"Workout", 'ExerciseType'>
    readonly description: FieldRef<"Workout", 'String'>
    readonly userId: FieldRef<"Workout", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Workout findUnique
   */
  export type WorkoutFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout findUniqueOrThrow
   */
  export type WorkoutFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout findFirst
   */
  export type WorkoutFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workouts.
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workouts.
     */
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * Workout findFirstOrThrow
   */
  export type WorkoutFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workouts.
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workouts.
     */
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * Workout findMany
   */
  export type WorkoutFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workouts to fetch.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workouts.
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * Workout create
   */
  export type WorkoutCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * The data needed to create a Workout.
     */
    data: XOR<WorkoutCreateInput, WorkoutUncheckedCreateInput>
  }

  /**
   * Workout createMany
   */
  export type WorkoutCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Workouts.
     */
    data: WorkoutCreateManyInput | WorkoutCreateManyInput[]
  }

  /**
   * Workout createManyAndReturn
   */
  export type WorkoutCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * The data used to create many Workouts.
     */
    data: WorkoutCreateManyInput | WorkoutCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workout update
   */
  export type WorkoutUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * The data needed to update a Workout.
     */
    data: XOR<WorkoutUpdateInput, WorkoutUncheckedUpdateInput>
    /**
     * Choose, which Workout to update.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout updateMany
   */
  export type WorkoutUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Workouts.
     */
    data: XOR<WorkoutUpdateManyMutationInput, WorkoutUncheckedUpdateManyInput>
    /**
     * Filter which Workouts to update
     */
    where?: WorkoutWhereInput
    /**
     * Limit how many Workouts to update.
     */
    limit?: number
  }

  /**
   * Workout updateManyAndReturn
   */
  export type WorkoutUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * The data used to update Workouts.
     */
    data: XOR<WorkoutUpdateManyMutationInput, WorkoutUncheckedUpdateManyInput>
    /**
     * Filter which Workouts to update
     */
    where?: WorkoutWhereInput
    /**
     * Limit how many Workouts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workout upsert
   */
  export type WorkoutUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * The filter to search for the Workout to update in case it exists.
     */
    where: WorkoutWhereUniqueInput
    /**
     * In case the Workout found by the `where` argument doesn't exist, create a new Workout with this data.
     */
    create: XOR<WorkoutCreateInput, WorkoutUncheckedCreateInput>
    /**
     * In case the Workout was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkoutUpdateInput, WorkoutUncheckedUpdateInput>
  }

  /**
   * Workout delete
   */
  export type WorkoutDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter which Workout to delete.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout deleteMany
   */
  export type WorkoutDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workouts to delete
     */
    where?: WorkoutWhereInput
    /**
     * Limit how many Workouts to delete.
     */
    limit?: number
  }

  /**
   * Workout.user
   */
  export type Workout$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Workout.workoutExercises
   */
  export type Workout$workoutExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    where?: WorkoutExerciseWhereInput
    orderBy?: WorkoutExerciseOrderByWithRelationInput | WorkoutExerciseOrderByWithRelationInput[]
    cursor?: WorkoutExerciseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutExerciseScalarFieldEnum | WorkoutExerciseScalarFieldEnum[]
  }

  /**
   * Workout.programWorkouts
   */
  export type Workout$programWorkoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramWorkout
     */
    select?: ProgramWorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramWorkout
     */
    omit?: ProgramWorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramWorkoutInclude<ExtArgs> | null
    where?: ProgramWorkoutWhereInput
    orderBy?: ProgramWorkoutOrderByWithRelationInput | ProgramWorkoutOrderByWithRelationInput[]
    cursor?: ProgramWorkoutWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgramWorkoutScalarFieldEnum | ProgramWorkoutScalarFieldEnum[]
  }

  /**
   * Workout.logs
   */
  export type Workout$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    where?: LogWhereInput
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    cursor?: LogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Workout without action
   */
  export type WorkoutDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
  }


  /**
   * Model WorkoutExercise
   */

  export type AggregateWorkoutExercise = {
    _count: WorkoutExerciseCountAggregateOutputType | null
    _avg: WorkoutExerciseAvgAggregateOutputType | null
    _sum: WorkoutExerciseSumAggregateOutputType | null
    _min: WorkoutExerciseMinAggregateOutputType | null
    _max: WorkoutExerciseMaxAggregateOutputType | null
  }

  export type WorkoutExerciseAvgAggregateOutputType = {
    id: number | null
    workoutId: number | null
    exerciseId: number | null
    repetitions: number | null
    distance: number | null
  }

  export type WorkoutExerciseSumAggregateOutputType = {
    id: number | null
    workoutId: number | null
    exerciseId: number | null
    repetitions: number | null
    distance: number | null
  }

  export type WorkoutExerciseMinAggregateOutputType = {
    id: number | null
    workoutId: number | null
    exerciseId: number | null
    repetitions: number | null
    distance: number | null
  }

  export type WorkoutExerciseMaxAggregateOutputType = {
    id: number | null
    workoutId: number | null
    exerciseId: number | null
    repetitions: number | null
    distance: number | null
  }

  export type WorkoutExerciseCountAggregateOutputType = {
    id: number
    workoutId: number
    exerciseId: number
    repetitions: number
    distance: number
    _all: number
  }


  export type WorkoutExerciseAvgAggregateInputType = {
    id?: true
    workoutId?: true
    exerciseId?: true
    repetitions?: true
    distance?: true
  }

  export type WorkoutExerciseSumAggregateInputType = {
    id?: true
    workoutId?: true
    exerciseId?: true
    repetitions?: true
    distance?: true
  }

  export type WorkoutExerciseMinAggregateInputType = {
    id?: true
    workoutId?: true
    exerciseId?: true
    repetitions?: true
    distance?: true
  }

  export type WorkoutExerciseMaxAggregateInputType = {
    id?: true
    workoutId?: true
    exerciseId?: true
    repetitions?: true
    distance?: true
  }

  export type WorkoutExerciseCountAggregateInputType = {
    id?: true
    workoutId?: true
    exerciseId?: true
    repetitions?: true
    distance?: true
    _all?: true
  }

  export type WorkoutExerciseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutExercise to aggregate.
     */
    where?: WorkoutExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutExercises to fetch.
     */
    orderBy?: WorkoutExerciseOrderByWithRelationInput | WorkoutExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkoutExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkoutExercises
    **/
    _count?: true | WorkoutExerciseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkoutExerciseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkoutExerciseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkoutExerciseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkoutExerciseMaxAggregateInputType
  }

  export type GetWorkoutExerciseAggregateType<T extends WorkoutExerciseAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkoutExercise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkoutExercise[P]>
      : GetScalarType<T[P], AggregateWorkoutExercise[P]>
  }




  export type WorkoutExerciseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutExerciseWhereInput
    orderBy?: WorkoutExerciseOrderByWithAggregationInput | WorkoutExerciseOrderByWithAggregationInput[]
    by: WorkoutExerciseScalarFieldEnum[] | WorkoutExerciseScalarFieldEnum
    having?: WorkoutExerciseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkoutExerciseCountAggregateInputType | true
    _avg?: WorkoutExerciseAvgAggregateInputType
    _sum?: WorkoutExerciseSumAggregateInputType
    _min?: WorkoutExerciseMinAggregateInputType
    _max?: WorkoutExerciseMaxAggregateInputType
  }

  export type WorkoutExerciseGroupByOutputType = {
    id: number
    workoutId: number
    exerciseId: number
    repetitions: number | null
    distance: number | null
    _count: WorkoutExerciseCountAggregateOutputType | null
    _avg: WorkoutExerciseAvgAggregateOutputType | null
    _sum: WorkoutExerciseSumAggregateOutputType | null
    _min: WorkoutExerciseMinAggregateOutputType | null
    _max: WorkoutExerciseMaxAggregateOutputType | null
  }

  type GetWorkoutExerciseGroupByPayload<T extends WorkoutExerciseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkoutExerciseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkoutExerciseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkoutExerciseGroupByOutputType[P]>
            : GetScalarType<T[P], WorkoutExerciseGroupByOutputType[P]>
        }
      >
    >


  export type WorkoutExerciseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workoutId?: boolean
    exerciseId?: boolean
    repetitions?: boolean
    distance?: boolean
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutExercise"]>

  export type WorkoutExerciseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workoutId?: boolean
    exerciseId?: boolean
    repetitions?: boolean
    distance?: boolean
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutExercise"]>

  export type WorkoutExerciseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workoutId?: boolean
    exerciseId?: boolean
    repetitions?: boolean
    distance?: boolean
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutExercise"]>

  export type WorkoutExerciseSelectScalar = {
    id?: boolean
    workoutId?: boolean
    exerciseId?: boolean
    repetitions?: boolean
    distance?: boolean
  }

  export type WorkoutExerciseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workoutId" | "exerciseId" | "repetitions" | "distance", ExtArgs["result"]["workoutExercise"]>
  export type WorkoutExerciseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }
  export type WorkoutExerciseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }
  export type WorkoutExerciseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }

  export type $WorkoutExercisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkoutExercise"
    objects: {
      workout: Prisma.$WorkoutPayload<ExtArgs>
      exercise: Prisma.$ExercisePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      workoutId: number
      exerciseId: number
      repetitions: number | null
      distance: number | null
    }, ExtArgs["result"]["workoutExercise"]>
    composites: {}
  }

  type WorkoutExerciseGetPayload<S extends boolean | null | undefined | WorkoutExerciseDefaultArgs> = $Result.GetResult<Prisma.$WorkoutExercisePayload, S>

  type WorkoutExerciseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkoutExerciseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkoutExerciseCountAggregateInputType | true
    }

  export interface WorkoutExerciseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkoutExercise'], meta: { name: 'WorkoutExercise' } }
    /**
     * Find zero or one WorkoutExercise that matches the filter.
     * @param {WorkoutExerciseFindUniqueArgs} args - Arguments to find a WorkoutExercise
     * @example
     * // Get one WorkoutExercise
     * const workoutExercise = await prisma.workoutExercise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkoutExerciseFindUniqueArgs>(args: SelectSubset<T, WorkoutExerciseFindUniqueArgs<ExtArgs>>): Prisma__WorkoutExerciseClient<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkoutExercise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkoutExerciseFindUniqueOrThrowArgs} args - Arguments to find a WorkoutExercise
     * @example
     * // Get one WorkoutExercise
     * const workoutExercise = await prisma.workoutExercise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkoutExerciseFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkoutExerciseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkoutExerciseClient<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkoutExercise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExerciseFindFirstArgs} args - Arguments to find a WorkoutExercise
     * @example
     * // Get one WorkoutExercise
     * const workoutExercise = await prisma.workoutExercise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkoutExerciseFindFirstArgs>(args?: SelectSubset<T, WorkoutExerciseFindFirstArgs<ExtArgs>>): Prisma__WorkoutExerciseClient<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkoutExercise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExerciseFindFirstOrThrowArgs} args - Arguments to find a WorkoutExercise
     * @example
     * // Get one WorkoutExercise
     * const workoutExercise = await prisma.workoutExercise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkoutExerciseFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkoutExerciseFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkoutExerciseClient<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkoutExercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExerciseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkoutExercises
     * const workoutExercises = await prisma.workoutExercise.findMany()
     * 
     * // Get first 10 WorkoutExercises
     * const workoutExercises = await prisma.workoutExercise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workoutExerciseWithIdOnly = await prisma.workoutExercise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkoutExerciseFindManyArgs>(args?: SelectSubset<T, WorkoutExerciseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkoutExercise.
     * @param {WorkoutExerciseCreateArgs} args - Arguments to create a WorkoutExercise.
     * @example
     * // Create one WorkoutExercise
     * const WorkoutExercise = await prisma.workoutExercise.create({
     *   data: {
     *     // ... data to create a WorkoutExercise
     *   }
     * })
     * 
     */
    create<T extends WorkoutExerciseCreateArgs>(args: SelectSubset<T, WorkoutExerciseCreateArgs<ExtArgs>>): Prisma__WorkoutExerciseClient<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkoutExercises.
     * @param {WorkoutExerciseCreateManyArgs} args - Arguments to create many WorkoutExercises.
     * @example
     * // Create many WorkoutExercises
     * const workoutExercise = await prisma.workoutExercise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkoutExerciseCreateManyArgs>(args?: SelectSubset<T, WorkoutExerciseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkoutExercises and returns the data saved in the database.
     * @param {WorkoutExerciseCreateManyAndReturnArgs} args - Arguments to create many WorkoutExercises.
     * @example
     * // Create many WorkoutExercises
     * const workoutExercise = await prisma.workoutExercise.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkoutExercises and only return the `id`
     * const workoutExerciseWithIdOnly = await prisma.workoutExercise.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkoutExerciseCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkoutExerciseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkoutExercise.
     * @param {WorkoutExerciseDeleteArgs} args - Arguments to delete one WorkoutExercise.
     * @example
     * // Delete one WorkoutExercise
     * const WorkoutExercise = await prisma.workoutExercise.delete({
     *   where: {
     *     // ... filter to delete one WorkoutExercise
     *   }
     * })
     * 
     */
    delete<T extends WorkoutExerciseDeleteArgs>(args: SelectSubset<T, WorkoutExerciseDeleteArgs<ExtArgs>>): Prisma__WorkoutExerciseClient<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkoutExercise.
     * @param {WorkoutExerciseUpdateArgs} args - Arguments to update one WorkoutExercise.
     * @example
     * // Update one WorkoutExercise
     * const workoutExercise = await prisma.workoutExercise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkoutExerciseUpdateArgs>(args: SelectSubset<T, WorkoutExerciseUpdateArgs<ExtArgs>>): Prisma__WorkoutExerciseClient<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkoutExercises.
     * @param {WorkoutExerciseDeleteManyArgs} args - Arguments to filter WorkoutExercises to delete.
     * @example
     * // Delete a few WorkoutExercises
     * const { count } = await prisma.workoutExercise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkoutExerciseDeleteManyArgs>(args?: SelectSubset<T, WorkoutExerciseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutExercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExerciseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkoutExercises
     * const workoutExercise = await prisma.workoutExercise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkoutExerciseUpdateManyArgs>(args: SelectSubset<T, WorkoutExerciseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutExercises and returns the data updated in the database.
     * @param {WorkoutExerciseUpdateManyAndReturnArgs} args - Arguments to update many WorkoutExercises.
     * @example
     * // Update many WorkoutExercises
     * const workoutExercise = await prisma.workoutExercise.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkoutExercises and only return the `id`
     * const workoutExerciseWithIdOnly = await prisma.workoutExercise.updateManyAndReturn({
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
    updateManyAndReturn<T extends WorkoutExerciseUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkoutExerciseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkoutExercise.
     * @param {WorkoutExerciseUpsertArgs} args - Arguments to update or create a WorkoutExercise.
     * @example
     * // Update or create a WorkoutExercise
     * const workoutExercise = await prisma.workoutExercise.upsert({
     *   create: {
     *     // ... data to create a WorkoutExercise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkoutExercise we want to update
     *   }
     * })
     */
    upsert<T extends WorkoutExerciseUpsertArgs>(args: SelectSubset<T, WorkoutExerciseUpsertArgs<ExtArgs>>): Prisma__WorkoutExerciseClient<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkoutExercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExerciseCountArgs} args - Arguments to filter WorkoutExercises to count.
     * @example
     * // Count the number of WorkoutExercises
     * const count = await prisma.workoutExercise.count({
     *   where: {
     *     // ... the filter for the WorkoutExercises we want to count
     *   }
     * })
    **/
    count<T extends WorkoutExerciseCountArgs>(
      args?: Subset<T, WorkoutExerciseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkoutExerciseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkoutExercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExerciseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkoutExerciseAggregateArgs>(args: Subset<T, WorkoutExerciseAggregateArgs>): Prisma.PrismaPromise<GetWorkoutExerciseAggregateType<T>>

    /**
     * Group by WorkoutExercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExerciseGroupByArgs} args - Group by arguments.
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
      T extends WorkoutExerciseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkoutExerciseGroupByArgs['orderBy'] }
        : { orderBy?: WorkoutExerciseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkoutExerciseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkoutExerciseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkoutExercise model
   */
  readonly fields: WorkoutExerciseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkoutExercise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkoutExerciseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workout<T extends WorkoutDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkoutDefaultArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    exercise<T extends ExerciseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExerciseDefaultArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WorkoutExercise model
   */
  interface WorkoutExerciseFieldRefs {
    readonly id: FieldRef<"WorkoutExercise", 'Int'>
    readonly workoutId: FieldRef<"WorkoutExercise", 'Int'>
    readonly exerciseId: FieldRef<"WorkoutExercise", 'Int'>
    readonly repetitions: FieldRef<"WorkoutExercise", 'Int'>
    readonly distance: FieldRef<"WorkoutExercise", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * WorkoutExercise findUnique
   */
  export type WorkoutExerciseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutExercise to fetch.
     */
    where: WorkoutExerciseWhereUniqueInput
  }

  /**
   * WorkoutExercise findUniqueOrThrow
   */
  export type WorkoutExerciseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutExercise to fetch.
     */
    where: WorkoutExerciseWhereUniqueInput
  }

  /**
   * WorkoutExercise findFirst
   */
  export type WorkoutExerciseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutExercise to fetch.
     */
    where?: WorkoutExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutExercises to fetch.
     */
    orderBy?: WorkoutExerciseOrderByWithRelationInput | WorkoutExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutExercises.
     */
    cursor?: WorkoutExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutExercises.
     */
    distinct?: WorkoutExerciseScalarFieldEnum | WorkoutExerciseScalarFieldEnum[]
  }

  /**
   * WorkoutExercise findFirstOrThrow
   */
  export type WorkoutExerciseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutExercise to fetch.
     */
    where?: WorkoutExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutExercises to fetch.
     */
    orderBy?: WorkoutExerciseOrderByWithRelationInput | WorkoutExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutExercises.
     */
    cursor?: WorkoutExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutExercises.
     */
    distinct?: WorkoutExerciseScalarFieldEnum | WorkoutExerciseScalarFieldEnum[]
  }

  /**
   * WorkoutExercise findMany
   */
  export type WorkoutExerciseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutExercises to fetch.
     */
    where?: WorkoutExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutExercises to fetch.
     */
    orderBy?: WorkoutExerciseOrderByWithRelationInput | WorkoutExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkoutExercises.
     */
    cursor?: WorkoutExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutExercises.
     */
    skip?: number
    distinct?: WorkoutExerciseScalarFieldEnum | WorkoutExerciseScalarFieldEnum[]
  }

  /**
   * WorkoutExercise create
   */
  export type WorkoutExerciseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkoutExercise.
     */
    data: XOR<WorkoutExerciseCreateInput, WorkoutExerciseUncheckedCreateInput>
  }

  /**
   * WorkoutExercise createMany
   */
  export type WorkoutExerciseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkoutExercises.
     */
    data: WorkoutExerciseCreateManyInput | WorkoutExerciseCreateManyInput[]
  }

  /**
   * WorkoutExercise createManyAndReturn
   */
  export type WorkoutExerciseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * The data used to create many WorkoutExercises.
     */
    data: WorkoutExerciseCreateManyInput | WorkoutExerciseCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkoutExercise update
   */
  export type WorkoutExerciseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkoutExercise.
     */
    data: XOR<WorkoutExerciseUpdateInput, WorkoutExerciseUncheckedUpdateInput>
    /**
     * Choose, which WorkoutExercise to update.
     */
    where: WorkoutExerciseWhereUniqueInput
  }

  /**
   * WorkoutExercise updateMany
   */
  export type WorkoutExerciseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkoutExercises.
     */
    data: XOR<WorkoutExerciseUpdateManyMutationInput, WorkoutExerciseUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutExercises to update
     */
    where?: WorkoutExerciseWhereInput
    /**
     * Limit how many WorkoutExercises to update.
     */
    limit?: number
  }

  /**
   * WorkoutExercise updateManyAndReturn
   */
  export type WorkoutExerciseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * The data used to update WorkoutExercises.
     */
    data: XOR<WorkoutExerciseUpdateManyMutationInput, WorkoutExerciseUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutExercises to update
     */
    where?: WorkoutExerciseWhereInput
    /**
     * Limit how many WorkoutExercises to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkoutExercise upsert
   */
  export type WorkoutExerciseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkoutExercise to update in case it exists.
     */
    where: WorkoutExerciseWhereUniqueInput
    /**
     * In case the WorkoutExercise found by the `where` argument doesn't exist, create a new WorkoutExercise with this data.
     */
    create: XOR<WorkoutExerciseCreateInput, WorkoutExerciseUncheckedCreateInput>
    /**
     * In case the WorkoutExercise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkoutExerciseUpdateInput, WorkoutExerciseUncheckedUpdateInput>
  }

  /**
   * WorkoutExercise delete
   */
  export type WorkoutExerciseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    /**
     * Filter which WorkoutExercise to delete.
     */
    where: WorkoutExerciseWhereUniqueInput
  }

  /**
   * WorkoutExercise deleteMany
   */
  export type WorkoutExerciseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutExercises to delete
     */
    where?: WorkoutExerciseWhereInput
    /**
     * Limit how many WorkoutExercises to delete.
     */
    limit?: number
  }

  /**
   * WorkoutExercise without action
   */
  export type WorkoutExerciseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
  }


  /**
   * Model Program
   */

  export type AggregateProgram = {
    _count: ProgramCountAggregateOutputType | null
    _avg: ProgramAvgAggregateOutputType | null
    _sum: ProgramSumAggregateOutputType | null
    _min: ProgramMinAggregateOutputType | null
    _max: ProgramMaxAggregateOutputType | null
  }

  export type ProgramAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProgramSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProgramMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    userId: number | null
  }

  export type ProgramMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    userId: number | null
  }

  export type ProgramCountAggregateOutputType = {
    id: number
    name: number
    description: number
    userId: number
    _all: number
  }


  export type ProgramAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProgramSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProgramMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    userId?: true
  }

  export type ProgramMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    userId?: true
  }

  export type ProgramCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    userId?: true
    _all?: true
  }

  export type ProgramAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Program to aggregate.
     */
    where?: ProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programs to fetch.
     */
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Programs
    **/
    _count?: true | ProgramCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProgramAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProgramSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgramMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgramMaxAggregateInputType
  }

  export type GetProgramAggregateType<T extends ProgramAggregateArgs> = {
        [P in keyof T & keyof AggregateProgram]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgram[P]>
      : GetScalarType<T[P], AggregateProgram[P]>
  }




  export type ProgramGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgramWhereInput
    orderBy?: ProgramOrderByWithAggregationInput | ProgramOrderByWithAggregationInput[]
    by: ProgramScalarFieldEnum[] | ProgramScalarFieldEnum
    having?: ProgramScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgramCountAggregateInputType | true
    _avg?: ProgramAvgAggregateInputType
    _sum?: ProgramSumAggregateInputType
    _min?: ProgramMinAggregateInputType
    _max?: ProgramMaxAggregateInputType
  }

  export type ProgramGroupByOutputType = {
    id: number
    name: string
    description: string | null
    userId: number | null
    _count: ProgramCountAggregateOutputType | null
    _avg: ProgramAvgAggregateOutputType | null
    _sum: ProgramSumAggregateOutputType | null
    _min: ProgramMinAggregateOutputType | null
    _max: ProgramMaxAggregateOutputType | null
  }

  type GetProgramGroupByPayload<T extends ProgramGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgramGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgramGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgramGroupByOutputType[P]>
            : GetScalarType<T[P], ProgramGroupByOutputType[P]>
        }
      >
    >


  export type ProgramSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    userId?: boolean
    user?: boolean | Program$userArgs<ExtArgs>
    programWorkouts?: boolean | Program$programWorkoutsArgs<ExtArgs>
    users?: boolean | Program$usersArgs<ExtArgs>
    _count?: boolean | ProgramCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["program"]>

  export type ProgramSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    userId?: boolean
    user?: boolean | Program$userArgs<ExtArgs>
  }, ExtArgs["result"]["program"]>

  export type ProgramSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    userId?: boolean
    user?: boolean | Program$userArgs<ExtArgs>
  }, ExtArgs["result"]["program"]>

  export type ProgramSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    userId?: boolean
  }

  export type ProgramOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "userId", ExtArgs["result"]["program"]>
  export type ProgramInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Program$userArgs<ExtArgs>
    programWorkouts?: boolean | Program$programWorkoutsArgs<ExtArgs>
    users?: boolean | Program$usersArgs<ExtArgs>
    _count?: boolean | ProgramCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProgramIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Program$userArgs<ExtArgs>
  }
  export type ProgramIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Program$userArgs<ExtArgs>
  }

  export type $ProgramPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Program"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      programWorkouts: Prisma.$ProgramWorkoutPayload<ExtArgs>[]
      users: Prisma.$UserProgramPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      userId: number | null
    }, ExtArgs["result"]["program"]>
    composites: {}
  }

  type ProgramGetPayload<S extends boolean | null | undefined | ProgramDefaultArgs> = $Result.GetResult<Prisma.$ProgramPayload, S>

  type ProgramCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProgramFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProgramCountAggregateInputType | true
    }

  export interface ProgramDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Program'], meta: { name: 'Program' } }
    /**
     * Find zero or one Program that matches the filter.
     * @param {ProgramFindUniqueArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgramFindUniqueArgs>(args: SelectSubset<T, ProgramFindUniqueArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Program that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProgramFindUniqueOrThrowArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgramFindUniqueOrThrowArgs>(args: SelectSubset<T, ProgramFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Program that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramFindFirstArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgramFindFirstArgs>(args?: SelectSubset<T, ProgramFindFirstArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Program that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramFindFirstOrThrowArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgramFindFirstOrThrowArgs>(args?: SelectSubset<T, ProgramFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Programs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Programs
     * const programs = await prisma.program.findMany()
     * 
     * // Get first 10 Programs
     * const programs = await prisma.program.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const programWithIdOnly = await prisma.program.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProgramFindManyArgs>(args?: SelectSubset<T, ProgramFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Program.
     * @param {ProgramCreateArgs} args - Arguments to create a Program.
     * @example
     * // Create one Program
     * const Program = await prisma.program.create({
     *   data: {
     *     // ... data to create a Program
     *   }
     * })
     * 
     */
    create<T extends ProgramCreateArgs>(args: SelectSubset<T, ProgramCreateArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Programs.
     * @param {ProgramCreateManyArgs} args - Arguments to create many Programs.
     * @example
     * // Create many Programs
     * const program = await prisma.program.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProgramCreateManyArgs>(args?: SelectSubset<T, ProgramCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Programs and returns the data saved in the database.
     * @param {ProgramCreateManyAndReturnArgs} args - Arguments to create many Programs.
     * @example
     * // Create many Programs
     * const program = await prisma.program.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Programs and only return the `id`
     * const programWithIdOnly = await prisma.program.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProgramCreateManyAndReturnArgs>(args?: SelectSubset<T, ProgramCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Program.
     * @param {ProgramDeleteArgs} args - Arguments to delete one Program.
     * @example
     * // Delete one Program
     * const Program = await prisma.program.delete({
     *   where: {
     *     // ... filter to delete one Program
     *   }
     * })
     * 
     */
    delete<T extends ProgramDeleteArgs>(args: SelectSubset<T, ProgramDeleteArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Program.
     * @param {ProgramUpdateArgs} args - Arguments to update one Program.
     * @example
     * // Update one Program
     * const program = await prisma.program.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProgramUpdateArgs>(args: SelectSubset<T, ProgramUpdateArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Programs.
     * @param {ProgramDeleteManyArgs} args - Arguments to filter Programs to delete.
     * @example
     * // Delete a few Programs
     * const { count } = await prisma.program.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProgramDeleteManyArgs>(args?: SelectSubset<T, ProgramDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Programs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Programs
     * const program = await prisma.program.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProgramUpdateManyArgs>(args: SelectSubset<T, ProgramUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Programs and returns the data updated in the database.
     * @param {ProgramUpdateManyAndReturnArgs} args - Arguments to update many Programs.
     * @example
     * // Update many Programs
     * const program = await prisma.program.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Programs and only return the `id`
     * const programWithIdOnly = await prisma.program.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProgramUpdateManyAndReturnArgs>(args: SelectSubset<T, ProgramUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Program.
     * @param {ProgramUpsertArgs} args - Arguments to update or create a Program.
     * @example
     * // Update or create a Program
     * const program = await prisma.program.upsert({
     *   create: {
     *     // ... data to create a Program
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Program we want to update
     *   }
     * })
     */
    upsert<T extends ProgramUpsertArgs>(args: SelectSubset<T, ProgramUpsertArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Programs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramCountArgs} args - Arguments to filter Programs to count.
     * @example
     * // Count the number of Programs
     * const count = await prisma.program.count({
     *   where: {
     *     // ... the filter for the Programs we want to count
     *   }
     * })
    **/
    count<T extends ProgramCountArgs>(
      args?: Subset<T, ProgramCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgramCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Program.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProgramAggregateArgs>(args: Subset<T, ProgramAggregateArgs>): Prisma.PrismaPromise<GetProgramAggregateType<T>>

    /**
     * Group by Program.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramGroupByArgs} args - Group by arguments.
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
      T extends ProgramGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgramGroupByArgs['orderBy'] }
        : { orderBy?: ProgramGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProgramGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgramGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Program model
   */
  readonly fields: ProgramFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Program.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgramClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Program$userArgs<ExtArgs> = {}>(args?: Subset<T, Program$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    programWorkouts<T extends Program$programWorkoutsArgs<ExtArgs> = {}>(args?: Subset<T, Program$programWorkoutsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramWorkoutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends Program$usersArgs<ExtArgs> = {}>(args?: Subset<T, Program$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProgramPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Program model
   */
  interface ProgramFieldRefs {
    readonly id: FieldRef<"Program", 'Int'>
    readonly name: FieldRef<"Program", 'String'>
    readonly description: FieldRef<"Program", 'String'>
    readonly userId: FieldRef<"Program", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Program findUnique
   */
  export type ProgramFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter, which Program to fetch.
     */
    where: ProgramWhereUniqueInput
  }

  /**
   * Program findUniqueOrThrow
   */
  export type ProgramFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter, which Program to fetch.
     */
    where: ProgramWhereUniqueInput
  }

  /**
   * Program findFirst
   */
  export type ProgramFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter, which Program to fetch.
     */
    where?: ProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programs to fetch.
     */
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Programs.
     */
    cursor?: ProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Programs.
     */
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * Program findFirstOrThrow
   */
  export type ProgramFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter, which Program to fetch.
     */
    where?: ProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programs to fetch.
     */
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Programs.
     */
    cursor?: ProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Programs.
     */
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * Program findMany
   */
  export type ProgramFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter, which Programs to fetch.
     */
    where?: ProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programs to fetch.
     */
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Programs.
     */
    cursor?: ProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programs.
     */
    skip?: number
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * Program create
   */
  export type ProgramCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * The data needed to create a Program.
     */
    data: XOR<ProgramCreateInput, ProgramUncheckedCreateInput>
  }

  /**
   * Program createMany
   */
  export type ProgramCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Programs.
     */
    data: ProgramCreateManyInput | ProgramCreateManyInput[]
  }

  /**
   * Program createManyAndReturn
   */
  export type ProgramCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * The data used to create many Programs.
     */
    data: ProgramCreateManyInput | ProgramCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Program update
   */
  export type ProgramUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * The data needed to update a Program.
     */
    data: XOR<ProgramUpdateInput, ProgramUncheckedUpdateInput>
    /**
     * Choose, which Program to update.
     */
    where: ProgramWhereUniqueInput
  }

  /**
   * Program updateMany
   */
  export type ProgramUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Programs.
     */
    data: XOR<ProgramUpdateManyMutationInput, ProgramUncheckedUpdateManyInput>
    /**
     * Filter which Programs to update
     */
    where?: ProgramWhereInput
    /**
     * Limit how many Programs to update.
     */
    limit?: number
  }

  /**
   * Program updateManyAndReturn
   */
  export type ProgramUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * The data used to update Programs.
     */
    data: XOR<ProgramUpdateManyMutationInput, ProgramUncheckedUpdateManyInput>
    /**
     * Filter which Programs to update
     */
    where?: ProgramWhereInput
    /**
     * Limit how many Programs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Program upsert
   */
  export type ProgramUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * The filter to search for the Program to update in case it exists.
     */
    where: ProgramWhereUniqueInput
    /**
     * In case the Program found by the `where` argument doesn't exist, create a new Program with this data.
     */
    create: XOR<ProgramCreateInput, ProgramUncheckedCreateInput>
    /**
     * In case the Program was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgramUpdateInput, ProgramUncheckedUpdateInput>
  }

  /**
   * Program delete
   */
  export type ProgramDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter which Program to delete.
     */
    where: ProgramWhereUniqueInput
  }

  /**
   * Program deleteMany
   */
  export type ProgramDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Programs to delete
     */
    where?: ProgramWhereInput
    /**
     * Limit how many Programs to delete.
     */
    limit?: number
  }

  /**
   * Program.user
   */
  export type Program$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Program.programWorkouts
   */
  export type Program$programWorkoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramWorkout
     */
    select?: ProgramWorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramWorkout
     */
    omit?: ProgramWorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramWorkoutInclude<ExtArgs> | null
    where?: ProgramWorkoutWhereInput
    orderBy?: ProgramWorkoutOrderByWithRelationInput | ProgramWorkoutOrderByWithRelationInput[]
    cursor?: ProgramWorkoutWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgramWorkoutScalarFieldEnum | ProgramWorkoutScalarFieldEnum[]
  }

  /**
   * Program.users
   */
  export type Program$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProgram
     */
    select?: UserProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProgram
     */
    omit?: UserProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgramInclude<ExtArgs> | null
    where?: UserProgramWhereInput
    orderBy?: UserProgramOrderByWithRelationInput | UserProgramOrderByWithRelationInput[]
    cursor?: UserProgramWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserProgramScalarFieldEnum | UserProgramScalarFieldEnum[]
  }

  /**
   * Program without action
   */
  export type ProgramDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
  }


  /**
   * Model ProgramWorkout
   */

  export type AggregateProgramWorkout = {
    _count: ProgramWorkoutCountAggregateOutputType | null
    _avg: ProgramWorkoutAvgAggregateOutputType | null
    _sum: ProgramWorkoutSumAggregateOutputType | null
    _min: ProgramWorkoutMinAggregateOutputType | null
    _max: ProgramWorkoutMaxAggregateOutputType | null
  }

  export type ProgramWorkoutAvgAggregateOutputType = {
    id: number | null
    programId: number | null
    workoutId: number | null
  }

  export type ProgramWorkoutSumAggregateOutputType = {
    id: number | null
    programId: number | null
    workoutId: number | null
  }

  export type ProgramWorkoutMinAggregateOutputType = {
    id: number | null
    programId: number | null
    workoutId: number | null
    weekDay: $Enums.WeekDay | null
  }

  export type ProgramWorkoutMaxAggregateOutputType = {
    id: number | null
    programId: number | null
    workoutId: number | null
    weekDay: $Enums.WeekDay | null
  }

  export type ProgramWorkoutCountAggregateOutputType = {
    id: number
    programId: number
    workoutId: number
    weekDay: number
    _all: number
  }


  export type ProgramWorkoutAvgAggregateInputType = {
    id?: true
    programId?: true
    workoutId?: true
  }

  export type ProgramWorkoutSumAggregateInputType = {
    id?: true
    programId?: true
    workoutId?: true
  }

  export type ProgramWorkoutMinAggregateInputType = {
    id?: true
    programId?: true
    workoutId?: true
    weekDay?: true
  }

  export type ProgramWorkoutMaxAggregateInputType = {
    id?: true
    programId?: true
    workoutId?: true
    weekDay?: true
  }

  export type ProgramWorkoutCountAggregateInputType = {
    id?: true
    programId?: true
    workoutId?: true
    weekDay?: true
    _all?: true
  }

  export type ProgramWorkoutAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgramWorkout to aggregate.
     */
    where?: ProgramWorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgramWorkouts to fetch.
     */
    orderBy?: ProgramWorkoutOrderByWithRelationInput | ProgramWorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgramWorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgramWorkouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgramWorkouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProgramWorkouts
    **/
    _count?: true | ProgramWorkoutCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProgramWorkoutAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProgramWorkoutSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgramWorkoutMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgramWorkoutMaxAggregateInputType
  }

  export type GetProgramWorkoutAggregateType<T extends ProgramWorkoutAggregateArgs> = {
        [P in keyof T & keyof AggregateProgramWorkout]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgramWorkout[P]>
      : GetScalarType<T[P], AggregateProgramWorkout[P]>
  }




  export type ProgramWorkoutGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgramWorkoutWhereInput
    orderBy?: ProgramWorkoutOrderByWithAggregationInput | ProgramWorkoutOrderByWithAggregationInput[]
    by: ProgramWorkoutScalarFieldEnum[] | ProgramWorkoutScalarFieldEnum
    having?: ProgramWorkoutScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgramWorkoutCountAggregateInputType | true
    _avg?: ProgramWorkoutAvgAggregateInputType
    _sum?: ProgramWorkoutSumAggregateInputType
    _min?: ProgramWorkoutMinAggregateInputType
    _max?: ProgramWorkoutMaxAggregateInputType
  }

  export type ProgramWorkoutGroupByOutputType = {
    id: number
    programId: number
    workoutId: number
    weekDay: $Enums.WeekDay
    _count: ProgramWorkoutCountAggregateOutputType | null
    _avg: ProgramWorkoutAvgAggregateOutputType | null
    _sum: ProgramWorkoutSumAggregateOutputType | null
    _min: ProgramWorkoutMinAggregateOutputType | null
    _max: ProgramWorkoutMaxAggregateOutputType | null
  }

  type GetProgramWorkoutGroupByPayload<T extends ProgramWorkoutGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgramWorkoutGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgramWorkoutGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgramWorkoutGroupByOutputType[P]>
            : GetScalarType<T[P], ProgramWorkoutGroupByOutputType[P]>
        }
      >
    >


  export type ProgramWorkoutSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    programId?: boolean
    workoutId?: boolean
    weekDay?: boolean
    program?: boolean | ProgramDefaultArgs<ExtArgs>
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["programWorkout"]>

  export type ProgramWorkoutSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    programId?: boolean
    workoutId?: boolean
    weekDay?: boolean
    program?: boolean | ProgramDefaultArgs<ExtArgs>
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["programWorkout"]>

  export type ProgramWorkoutSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    programId?: boolean
    workoutId?: boolean
    weekDay?: boolean
    program?: boolean | ProgramDefaultArgs<ExtArgs>
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["programWorkout"]>

  export type ProgramWorkoutSelectScalar = {
    id?: boolean
    programId?: boolean
    workoutId?: boolean
    weekDay?: boolean
  }

  export type ProgramWorkoutOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "programId" | "workoutId" | "weekDay", ExtArgs["result"]["programWorkout"]>
  export type ProgramWorkoutInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    program?: boolean | ProgramDefaultArgs<ExtArgs>
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
  }
  export type ProgramWorkoutIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    program?: boolean | ProgramDefaultArgs<ExtArgs>
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
  }
  export type ProgramWorkoutIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    program?: boolean | ProgramDefaultArgs<ExtArgs>
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
  }

  export type $ProgramWorkoutPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProgramWorkout"
    objects: {
      program: Prisma.$ProgramPayload<ExtArgs>
      workout: Prisma.$WorkoutPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      programId: number
      workoutId: number
      weekDay: $Enums.WeekDay
    }, ExtArgs["result"]["programWorkout"]>
    composites: {}
  }

  type ProgramWorkoutGetPayload<S extends boolean | null | undefined | ProgramWorkoutDefaultArgs> = $Result.GetResult<Prisma.$ProgramWorkoutPayload, S>

  type ProgramWorkoutCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProgramWorkoutFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProgramWorkoutCountAggregateInputType | true
    }

  export interface ProgramWorkoutDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProgramWorkout'], meta: { name: 'ProgramWorkout' } }
    /**
     * Find zero or one ProgramWorkout that matches the filter.
     * @param {ProgramWorkoutFindUniqueArgs} args - Arguments to find a ProgramWorkout
     * @example
     * // Get one ProgramWorkout
     * const programWorkout = await prisma.programWorkout.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgramWorkoutFindUniqueArgs>(args: SelectSubset<T, ProgramWorkoutFindUniqueArgs<ExtArgs>>): Prisma__ProgramWorkoutClient<$Result.GetResult<Prisma.$ProgramWorkoutPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProgramWorkout that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProgramWorkoutFindUniqueOrThrowArgs} args - Arguments to find a ProgramWorkout
     * @example
     * // Get one ProgramWorkout
     * const programWorkout = await prisma.programWorkout.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgramWorkoutFindUniqueOrThrowArgs>(args: SelectSubset<T, ProgramWorkoutFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProgramWorkoutClient<$Result.GetResult<Prisma.$ProgramWorkoutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProgramWorkout that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramWorkoutFindFirstArgs} args - Arguments to find a ProgramWorkout
     * @example
     * // Get one ProgramWorkout
     * const programWorkout = await prisma.programWorkout.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgramWorkoutFindFirstArgs>(args?: SelectSubset<T, ProgramWorkoutFindFirstArgs<ExtArgs>>): Prisma__ProgramWorkoutClient<$Result.GetResult<Prisma.$ProgramWorkoutPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProgramWorkout that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramWorkoutFindFirstOrThrowArgs} args - Arguments to find a ProgramWorkout
     * @example
     * // Get one ProgramWorkout
     * const programWorkout = await prisma.programWorkout.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgramWorkoutFindFirstOrThrowArgs>(args?: SelectSubset<T, ProgramWorkoutFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProgramWorkoutClient<$Result.GetResult<Prisma.$ProgramWorkoutPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProgramWorkouts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramWorkoutFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProgramWorkouts
     * const programWorkouts = await prisma.programWorkout.findMany()
     * 
     * // Get first 10 ProgramWorkouts
     * const programWorkouts = await prisma.programWorkout.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const programWorkoutWithIdOnly = await prisma.programWorkout.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProgramWorkoutFindManyArgs>(args?: SelectSubset<T, ProgramWorkoutFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramWorkoutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProgramWorkout.
     * @param {ProgramWorkoutCreateArgs} args - Arguments to create a ProgramWorkout.
     * @example
     * // Create one ProgramWorkout
     * const ProgramWorkout = await prisma.programWorkout.create({
     *   data: {
     *     // ... data to create a ProgramWorkout
     *   }
     * })
     * 
     */
    create<T extends ProgramWorkoutCreateArgs>(args: SelectSubset<T, ProgramWorkoutCreateArgs<ExtArgs>>): Prisma__ProgramWorkoutClient<$Result.GetResult<Prisma.$ProgramWorkoutPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProgramWorkouts.
     * @param {ProgramWorkoutCreateManyArgs} args - Arguments to create many ProgramWorkouts.
     * @example
     * // Create many ProgramWorkouts
     * const programWorkout = await prisma.programWorkout.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProgramWorkoutCreateManyArgs>(args?: SelectSubset<T, ProgramWorkoutCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProgramWorkouts and returns the data saved in the database.
     * @param {ProgramWorkoutCreateManyAndReturnArgs} args - Arguments to create many ProgramWorkouts.
     * @example
     * // Create many ProgramWorkouts
     * const programWorkout = await prisma.programWorkout.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProgramWorkouts and only return the `id`
     * const programWorkoutWithIdOnly = await prisma.programWorkout.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProgramWorkoutCreateManyAndReturnArgs>(args?: SelectSubset<T, ProgramWorkoutCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramWorkoutPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProgramWorkout.
     * @param {ProgramWorkoutDeleteArgs} args - Arguments to delete one ProgramWorkout.
     * @example
     * // Delete one ProgramWorkout
     * const ProgramWorkout = await prisma.programWorkout.delete({
     *   where: {
     *     // ... filter to delete one ProgramWorkout
     *   }
     * })
     * 
     */
    delete<T extends ProgramWorkoutDeleteArgs>(args: SelectSubset<T, ProgramWorkoutDeleteArgs<ExtArgs>>): Prisma__ProgramWorkoutClient<$Result.GetResult<Prisma.$ProgramWorkoutPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProgramWorkout.
     * @param {ProgramWorkoutUpdateArgs} args - Arguments to update one ProgramWorkout.
     * @example
     * // Update one ProgramWorkout
     * const programWorkout = await prisma.programWorkout.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProgramWorkoutUpdateArgs>(args: SelectSubset<T, ProgramWorkoutUpdateArgs<ExtArgs>>): Prisma__ProgramWorkoutClient<$Result.GetResult<Prisma.$ProgramWorkoutPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProgramWorkouts.
     * @param {ProgramWorkoutDeleteManyArgs} args - Arguments to filter ProgramWorkouts to delete.
     * @example
     * // Delete a few ProgramWorkouts
     * const { count } = await prisma.programWorkout.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProgramWorkoutDeleteManyArgs>(args?: SelectSubset<T, ProgramWorkoutDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProgramWorkouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramWorkoutUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProgramWorkouts
     * const programWorkout = await prisma.programWorkout.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProgramWorkoutUpdateManyArgs>(args: SelectSubset<T, ProgramWorkoutUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProgramWorkouts and returns the data updated in the database.
     * @param {ProgramWorkoutUpdateManyAndReturnArgs} args - Arguments to update many ProgramWorkouts.
     * @example
     * // Update many ProgramWorkouts
     * const programWorkout = await prisma.programWorkout.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProgramWorkouts and only return the `id`
     * const programWorkoutWithIdOnly = await prisma.programWorkout.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProgramWorkoutUpdateManyAndReturnArgs>(args: SelectSubset<T, ProgramWorkoutUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramWorkoutPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProgramWorkout.
     * @param {ProgramWorkoutUpsertArgs} args - Arguments to update or create a ProgramWorkout.
     * @example
     * // Update or create a ProgramWorkout
     * const programWorkout = await prisma.programWorkout.upsert({
     *   create: {
     *     // ... data to create a ProgramWorkout
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProgramWorkout we want to update
     *   }
     * })
     */
    upsert<T extends ProgramWorkoutUpsertArgs>(args: SelectSubset<T, ProgramWorkoutUpsertArgs<ExtArgs>>): Prisma__ProgramWorkoutClient<$Result.GetResult<Prisma.$ProgramWorkoutPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProgramWorkouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramWorkoutCountArgs} args - Arguments to filter ProgramWorkouts to count.
     * @example
     * // Count the number of ProgramWorkouts
     * const count = await prisma.programWorkout.count({
     *   where: {
     *     // ... the filter for the ProgramWorkouts we want to count
     *   }
     * })
    **/
    count<T extends ProgramWorkoutCountArgs>(
      args?: Subset<T, ProgramWorkoutCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgramWorkoutCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProgramWorkout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramWorkoutAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProgramWorkoutAggregateArgs>(args: Subset<T, ProgramWorkoutAggregateArgs>): Prisma.PrismaPromise<GetProgramWorkoutAggregateType<T>>

    /**
     * Group by ProgramWorkout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramWorkoutGroupByArgs} args - Group by arguments.
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
      T extends ProgramWorkoutGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgramWorkoutGroupByArgs['orderBy'] }
        : { orderBy?: ProgramWorkoutGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProgramWorkoutGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgramWorkoutGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProgramWorkout model
   */
  readonly fields: ProgramWorkoutFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProgramWorkout.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgramWorkoutClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    program<T extends ProgramDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProgramDefaultArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workout<T extends WorkoutDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkoutDefaultArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProgramWorkout model
   */
  interface ProgramWorkoutFieldRefs {
    readonly id: FieldRef<"ProgramWorkout", 'Int'>
    readonly programId: FieldRef<"ProgramWorkout", 'Int'>
    readonly workoutId: FieldRef<"ProgramWorkout", 'Int'>
    readonly weekDay: FieldRef<"ProgramWorkout", 'WeekDay'>
  }
    

  // Custom InputTypes
  /**
   * ProgramWorkout findUnique
   */
  export type ProgramWorkoutFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramWorkout
     */
    select?: ProgramWorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramWorkout
     */
    omit?: ProgramWorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramWorkoutInclude<ExtArgs> | null
    /**
     * Filter, which ProgramWorkout to fetch.
     */
    where: ProgramWorkoutWhereUniqueInput
  }

  /**
   * ProgramWorkout findUniqueOrThrow
   */
  export type ProgramWorkoutFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramWorkout
     */
    select?: ProgramWorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramWorkout
     */
    omit?: ProgramWorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramWorkoutInclude<ExtArgs> | null
    /**
     * Filter, which ProgramWorkout to fetch.
     */
    where: ProgramWorkoutWhereUniqueInput
  }

  /**
   * ProgramWorkout findFirst
   */
  export type ProgramWorkoutFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramWorkout
     */
    select?: ProgramWorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramWorkout
     */
    omit?: ProgramWorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramWorkoutInclude<ExtArgs> | null
    /**
     * Filter, which ProgramWorkout to fetch.
     */
    where?: ProgramWorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgramWorkouts to fetch.
     */
    orderBy?: ProgramWorkoutOrderByWithRelationInput | ProgramWorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgramWorkouts.
     */
    cursor?: ProgramWorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgramWorkouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgramWorkouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgramWorkouts.
     */
    distinct?: ProgramWorkoutScalarFieldEnum | ProgramWorkoutScalarFieldEnum[]
  }

  /**
   * ProgramWorkout findFirstOrThrow
   */
  export type ProgramWorkoutFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramWorkout
     */
    select?: ProgramWorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramWorkout
     */
    omit?: ProgramWorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramWorkoutInclude<ExtArgs> | null
    /**
     * Filter, which ProgramWorkout to fetch.
     */
    where?: ProgramWorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgramWorkouts to fetch.
     */
    orderBy?: ProgramWorkoutOrderByWithRelationInput | ProgramWorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgramWorkouts.
     */
    cursor?: ProgramWorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgramWorkouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgramWorkouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgramWorkouts.
     */
    distinct?: ProgramWorkoutScalarFieldEnum | ProgramWorkoutScalarFieldEnum[]
  }

  /**
   * ProgramWorkout findMany
   */
  export type ProgramWorkoutFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramWorkout
     */
    select?: ProgramWorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramWorkout
     */
    omit?: ProgramWorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramWorkoutInclude<ExtArgs> | null
    /**
     * Filter, which ProgramWorkouts to fetch.
     */
    where?: ProgramWorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgramWorkouts to fetch.
     */
    orderBy?: ProgramWorkoutOrderByWithRelationInput | ProgramWorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProgramWorkouts.
     */
    cursor?: ProgramWorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgramWorkouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgramWorkouts.
     */
    skip?: number
    distinct?: ProgramWorkoutScalarFieldEnum | ProgramWorkoutScalarFieldEnum[]
  }

  /**
   * ProgramWorkout create
   */
  export type ProgramWorkoutCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramWorkout
     */
    select?: ProgramWorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramWorkout
     */
    omit?: ProgramWorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramWorkoutInclude<ExtArgs> | null
    /**
     * The data needed to create a ProgramWorkout.
     */
    data: XOR<ProgramWorkoutCreateInput, ProgramWorkoutUncheckedCreateInput>
  }

  /**
   * ProgramWorkout createMany
   */
  export type ProgramWorkoutCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProgramWorkouts.
     */
    data: ProgramWorkoutCreateManyInput | ProgramWorkoutCreateManyInput[]
  }

  /**
   * ProgramWorkout createManyAndReturn
   */
  export type ProgramWorkoutCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramWorkout
     */
    select?: ProgramWorkoutSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramWorkout
     */
    omit?: ProgramWorkoutOmit<ExtArgs> | null
    /**
     * The data used to create many ProgramWorkouts.
     */
    data: ProgramWorkoutCreateManyInput | ProgramWorkoutCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramWorkoutIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProgramWorkout update
   */
  export type ProgramWorkoutUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramWorkout
     */
    select?: ProgramWorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramWorkout
     */
    omit?: ProgramWorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramWorkoutInclude<ExtArgs> | null
    /**
     * The data needed to update a ProgramWorkout.
     */
    data: XOR<ProgramWorkoutUpdateInput, ProgramWorkoutUncheckedUpdateInput>
    /**
     * Choose, which ProgramWorkout to update.
     */
    where: ProgramWorkoutWhereUniqueInput
  }

  /**
   * ProgramWorkout updateMany
   */
  export type ProgramWorkoutUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProgramWorkouts.
     */
    data: XOR<ProgramWorkoutUpdateManyMutationInput, ProgramWorkoutUncheckedUpdateManyInput>
    /**
     * Filter which ProgramWorkouts to update
     */
    where?: ProgramWorkoutWhereInput
    /**
     * Limit how many ProgramWorkouts to update.
     */
    limit?: number
  }

  /**
   * ProgramWorkout updateManyAndReturn
   */
  export type ProgramWorkoutUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramWorkout
     */
    select?: ProgramWorkoutSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramWorkout
     */
    omit?: ProgramWorkoutOmit<ExtArgs> | null
    /**
     * The data used to update ProgramWorkouts.
     */
    data: XOR<ProgramWorkoutUpdateManyMutationInput, ProgramWorkoutUncheckedUpdateManyInput>
    /**
     * Filter which ProgramWorkouts to update
     */
    where?: ProgramWorkoutWhereInput
    /**
     * Limit how many ProgramWorkouts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramWorkoutIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProgramWorkout upsert
   */
  export type ProgramWorkoutUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramWorkout
     */
    select?: ProgramWorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramWorkout
     */
    omit?: ProgramWorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramWorkoutInclude<ExtArgs> | null
    /**
     * The filter to search for the ProgramWorkout to update in case it exists.
     */
    where: ProgramWorkoutWhereUniqueInput
    /**
     * In case the ProgramWorkout found by the `where` argument doesn't exist, create a new ProgramWorkout with this data.
     */
    create: XOR<ProgramWorkoutCreateInput, ProgramWorkoutUncheckedCreateInput>
    /**
     * In case the ProgramWorkout was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgramWorkoutUpdateInput, ProgramWorkoutUncheckedUpdateInput>
  }

  /**
   * ProgramWorkout delete
   */
  export type ProgramWorkoutDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramWorkout
     */
    select?: ProgramWorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramWorkout
     */
    omit?: ProgramWorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramWorkoutInclude<ExtArgs> | null
    /**
     * Filter which ProgramWorkout to delete.
     */
    where: ProgramWorkoutWhereUniqueInput
  }

  /**
   * ProgramWorkout deleteMany
   */
  export type ProgramWorkoutDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgramWorkouts to delete
     */
    where?: ProgramWorkoutWhereInput
    /**
     * Limit how many ProgramWorkouts to delete.
     */
    limit?: number
  }

  /**
   * ProgramWorkout without action
   */
  export type ProgramWorkoutDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramWorkout
     */
    select?: ProgramWorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramWorkout
     */
    omit?: ProgramWorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramWorkoutInclude<ExtArgs> | null
  }


  /**
   * Model UserProgram
   */

  export type AggregateUserProgram = {
    _count: UserProgramCountAggregateOutputType | null
    _avg: UserProgramAvgAggregateOutputType | null
    _sum: UserProgramSumAggregateOutputType | null
    _min: UserProgramMinAggregateOutputType | null
    _max: UserProgramMaxAggregateOutputType | null
  }

  export type UserProgramAvgAggregateOutputType = {
    id: number | null
    programId: number | null
    userId: number | null
  }

  export type UserProgramSumAggregateOutputType = {
    id: number | null
    programId: number | null
    userId: number | null
  }

  export type UserProgramMinAggregateOutputType = {
    id: number | null
    programId: number | null
    userId: number | null
  }

  export type UserProgramMaxAggregateOutputType = {
    id: number | null
    programId: number | null
    userId: number | null
  }

  export type UserProgramCountAggregateOutputType = {
    id: number
    programId: number
    userId: number
    _all: number
  }


  export type UserProgramAvgAggregateInputType = {
    id?: true
    programId?: true
    userId?: true
  }

  export type UserProgramSumAggregateInputType = {
    id?: true
    programId?: true
    userId?: true
  }

  export type UserProgramMinAggregateInputType = {
    id?: true
    programId?: true
    userId?: true
  }

  export type UserProgramMaxAggregateInputType = {
    id?: true
    programId?: true
    userId?: true
  }

  export type UserProgramCountAggregateInputType = {
    id?: true
    programId?: true
    userId?: true
    _all?: true
  }

  export type UserProgramAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProgram to aggregate.
     */
    where?: UserProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPrograms to fetch.
     */
    orderBy?: UserProgramOrderByWithRelationInput | UserProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPrograms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPrograms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPrograms
    **/
    _count?: true | UserProgramCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserProgramAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserProgramSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProgramMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProgramMaxAggregateInputType
  }

  export type GetUserProgramAggregateType<T extends UserProgramAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProgram]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProgram[P]>
      : GetScalarType<T[P], AggregateUserProgram[P]>
  }




  export type UserProgramGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProgramWhereInput
    orderBy?: UserProgramOrderByWithAggregationInput | UserProgramOrderByWithAggregationInput[]
    by: UserProgramScalarFieldEnum[] | UserProgramScalarFieldEnum
    having?: UserProgramScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProgramCountAggregateInputType | true
    _avg?: UserProgramAvgAggregateInputType
    _sum?: UserProgramSumAggregateInputType
    _min?: UserProgramMinAggregateInputType
    _max?: UserProgramMaxAggregateInputType
  }

  export type UserProgramGroupByOutputType = {
    id: number
    programId: number
    userId: number
    _count: UserProgramCountAggregateOutputType | null
    _avg: UserProgramAvgAggregateOutputType | null
    _sum: UserProgramSumAggregateOutputType | null
    _min: UserProgramMinAggregateOutputType | null
    _max: UserProgramMaxAggregateOutputType | null
  }

  type GetUserProgramGroupByPayload<T extends UserProgramGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProgramGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProgramGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProgramGroupByOutputType[P]>
            : GetScalarType<T[P], UserProgramGroupByOutputType[P]>
        }
      >
    >


  export type UserProgramSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    programId?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    program?: boolean | ProgramDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProgram"]>

  export type UserProgramSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    programId?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    program?: boolean | ProgramDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProgram"]>

  export type UserProgramSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    programId?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    program?: boolean | ProgramDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProgram"]>

  export type UserProgramSelectScalar = {
    id?: boolean
    programId?: boolean
    userId?: boolean
  }

  export type UserProgramOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "programId" | "userId", ExtArgs["result"]["userProgram"]>
  export type UserProgramInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    program?: boolean | ProgramDefaultArgs<ExtArgs>
  }
  export type UserProgramIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    program?: boolean | ProgramDefaultArgs<ExtArgs>
  }
  export type UserProgramIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    program?: boolean | ProgramDefaultArgs<ExtArgs>
  }

  export type $UserProgramPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProgram"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      program: Prisma.$ProgramPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      programId: number
      userId: number
    }, ExtArgs["result"]["userProgram"]>
    composites: {}
  }

  type UserProgramGetPayload<S extends boolean | null | undefined | UserProgramDefaultArgs> = $Result.GetResult<Prisma.$UserProgramPayload, S>

  type UserProgramCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserProgramFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserProgramCountAggregateInputType | true
    }

  export interface UserProgramDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProgram'], meta: { name: 'UserProgram' } }
    /**
     * Find zero or one UserProgram that matches the filter.
     * @param {UserProgramFindUniqueArgs} args - Arguments to find a UserProgram
     * @example
     * // Get one UserProgram
     * const userProgram = await prisma.userProgram.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProgramFindUniqueArgs>(args: SelectSubset<T, UserProgramFindUniqueArgs<ExtArgs>>): Prisma__UserProgramClient<$Result.GetResult<Prisma.$UserProgramPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserProgram that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserProgramFindUniqueOrThrowArgs} args - Arguments to find a UserProgram
     * @example
     * // Get one UserProgram
     * const userProgram = await prisma.userProgram.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProgramFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProgramFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProgramClient<$Result.GetResult<Prisma.$UserProgramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProgram that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProgramFindFirstArgs} args - Arguments to find a UserProgram
     * @example
     * // Get one UserProgram
     * const userProgram = await prisma.userProgram.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProgramFindFirstArgs>(args?: SelectSubset<T, UserProgramFindFirstArgs<ExtArgs>>): Prisma__UserProgramClient<$Result.GetResult<Prisma.$UserProgramPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProgram that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProgramFindFirstOrThrowArgs} args - Arguments to find a UserProgram
     * @example
     * // Get one UserProgram
     * const userProgram = await prisma.userProgram.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProgramFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProgramFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProgramClient<$Result.GetResult<Prisma.$UserProgramPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserPrograms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProgramFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPrograms
     * const userPrograms = await prisma.userProgram.findMany()
     * 
     * // Get first 10 UserPrograms
     * const userPrograms = await prisma.userProgram.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userProgramWithIdOnly = await prisma.userProgram.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserProgramFindManyArgs>(args?: SelectSubset<T, UserProgramFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProgramPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserProgram.
     * @param {UserProgramCreateArgs} args - Arguments to create a UserProgram.
     * @example
     * // Create one UserProgram
     * const UserProgram = await prisma.userProgram.create({
     *   data: {
     *     // ... data to create a UserProgram
     *   }
     * })
     * 
     */
    create<T extends UserProgramCreateArgs>(args: SelectSubset<T, UserProgramCreateArgs<ExtArgs>>): Prisma__UserProgramClient<$Result.GetResult<Prisma.$UserProgramPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserPrograms.
     * @param {UserProgramCreateManyArgs} args - Arguments to create many UserPrograms.
     * @example
     * // Create many UserPrograms
     * const userProgram = await prisma.userProgram.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProgramCreateManyArgs>(args?: SelectSubset<T, UserProgramCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserPrograms and returns the data saved in the database.
     * @param {UserProgramCreateManyAndReturnArgs} args - Arguments to create many UserPrograms.
     * @example
     * // Create many UserPrograms
     * const userProgram = await prisma.userProgram.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserPrograms and only return the `id`
     * const userProgramWithIdOnly = await prisma.userProgram.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserProgramCreateManyAndReturnArgs>(args?: SelectSubset<T, UserProgramCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProgramPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserProgram.
     * @param {UserProgramDeleteArgs} args - Arguments to delete one UserProgram.
     * @example
     * // Delete one UserProgram
     * const UserProgram = await prisma.userProgram.delete({
     *   where: {
     *     // ... filter to delete one UserProgram
     *   }
     * })
     * 
     */
    delete<T extends UserProgramDeleteArgs>(args: SelectSubset<T, UserProgramDeleteArgs<ExtArgs>>): Prisma__UserProgramClient<$Result.GetResult<Prisma.$UserProgramPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserProgram.
     * @param {UserProgramUpdateArgs} args - Arguments to update one UserProgram.
     * @example
     * // Update one UserProgram
     * const userProgram = await prisma.userProgram.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProgramUpdateArgs>(args: SelectSubset<T, UserProgramUpdateArgs<ExtArgs>>): Prisma__UserProgramClient<$Result.GetResult<Prisma.$UserProgramPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserPrograms.
     * @param {UserProgramDeleteManyArgs} args - Arguments to filter UserPrograms to delete.
     * @example
     * // Delete a few UserPrograms
     * const { count } = await prisma.userProgram.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProgramDeleteManyArgs>(args?: SelectSubset<T, UserProgramDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPrograms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProgramUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPrograms
     * const userProgram = await prisma.userProgram.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProgramUpdateManyArgs>(args: SelectSubset<T, UserProgramUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPrograms and returns the data updated in the database.
     * @param {UserProgramUpdateManyAndReturnArgs} args - Arguments to update many UserPrograms.
     * @example
     * // Update many UserPrograms
     * const userProgram = await prisma.userProgram.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserPrograms and only return the `id`
     * const userProgramWithIdOnly = await prisma.userProgram.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserProgramUpdateManyAndReturnArgs>(args: SelectSubset<T, UserProgramUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProgramPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserProgram.
     * @param {UserProgramUpsertArgs} args - Arguments to update or create a UserProgram.
     * @example
     * // Update or create a UserProgram
     * const userProgram = await prisma.userProgram.upsert({
     *   create: {
     *     // ... data to create a UserProgram
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProgram we want to update
     *   }
     * })
     */
    upsert<T extends UserProgramUpsertArgs>(args: SelectSubset<T, UserProgramUpsertArgs<ExtArgs>>): Prisma__UserProgramClient<$Result.GetResult<Prisma.$UserProgramPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserPrograms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProgramCountArgs} args - Arguments to filter UserPrograms to count.
     * @example
     * // Count the number of UserPrograms
     * const count = await prisma.userProgram.count({
     *   where: {
     *     // ... the filter for the UserPrograms we want to count
     *   }
     * })
    **/
    count<T extends UserProgramCountArgs>(
      args?: Subset<T, UserProgramCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProgramCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProgram.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProgramAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserProgramAggregateArgs>(args: Subset<T, UserProgramAggregateArgs>): Prisma.PrismaPromise<GetUserProgramAggregateType<T>>

    /**
     * Group by UserProgram.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProgramGroupByArgs} args - Group by arguments.
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
      T extends UserProgramGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProgramGroupByArgs['orderBy'] }
        : { orderBy?: UserProgramGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserProgramGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProgramGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProgram model
   */
  readonly fields: UserProgramFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProgram.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProgramClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    program<T extends ProgramDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProgramDefaultArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserProgram model
   */
  interface UserProgramFieldRefs {
    readonly id: FieldRef<"UserProgram", 'Int'>
    readonly programId: FieldRef<"UserProgram", 'Int'>
    readonly userId: FieldRef<"UserProgram", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserProgram findUnique
   */
  export type UserProgramFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProgram
     */
    select?: UserProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProgram
     */
    omit?: UserProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgramInclude<ExtArgs> | null
    /**
     * Filter, which UserProgram to fetch.
     */
    where: UserProgramWhereUniqueInput
  }

  /**
   * UserProgram findUniqueOrThrow
   */
  export type UserProgramFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProgram
     */
    select?: UserProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProgram
     */
    omit?: UserProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgramInclude<ExtArgs> | null
    /**
     * Filter, which UserProgram to fetch.
     */
    where: UserProgramWhereUniqueInput
  }

  /**
   * UserProgram findFirst
   */
  export type UserProgramFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProgram
     */
    select?: UserProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProgram
     */
    omit?: UserProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgramInclude<ExtArgs> | null
    /**
     * Filter, which UserProgram to fetch.
     */
    where?: UserProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPrograms to fetch.
     */
    orderBy?: UserProgramOrderByWithRelationInput | UserProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPrograms.
     */
    cursor?: UserProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPrograms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPrograms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPrograms.
     */
    distinct?: UserProgramScalarFieldEnum | UserProgramScalarFieldEnum[]
  }

  /**
   * UserProgram findFirstOrThrow
   */
  export type UserProgramFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProgram
     */
    select?: UserProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProgram
     */
    omit?: UserProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgramInclude<ExtArgs> | null
    /**
     * Filter, which UserProgram to fetch.
     */
    where?: UserProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPrograms to fetch.
     */
    orderBy?: UserProgramOrderByWithRelationInput | UserProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPrograms.
     */
    cursor?: UserProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPrograms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPrograms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPrograms.
     */
    distinct?: UserProgramScalarFieldEnum | UserProgramScalarFieldEnum[]
  }

  /**
   * UserProgram findMany
   */
  export type UserProgramFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProgram
     */
    select?: UserProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProgram
     */
    omit?: UserProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgramInclude<ExtArgs> | null
    /**
     * Filter, which UserPrograms to fetch.
     */
    where?: UserProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPrograms to fetch.
     */
    orderBy?: UserProgramOrderByWithRelationInput | UserProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPrograms.
     */
    cursor?: UserProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPrograms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPrograms.
     */
    skip?: number
    distinct?: UserProgramScalarFieldEnum | UserProgramScalarFieldEnum[]
  }

  /**
   * UserProgram create
   */
  export type UserProgramCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProgram
     */
    select?: UserProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProgram
     */
    omit?: UserProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgramInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProgram.
     */
    data: XOR<UserProgramCreateInput, UserProgramUncheckedCreateInput>
  }

  /**
   * UserProgram createMany
   */
  export type UserProgramCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPrograms.
     */
    data: UserProgramCreateManyInput | UserProgramCreateManyInput[]
  }

  /**
   * UserProgram createManyAndReturn
   */
  export type UserProgramCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProgram
     */
    select?: UserProgramSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProgram
     */
    omit?: UserProgramOmit<ExtArgs> | null
    /**
     * The data used to create many UserPrograms.
     */
    data: UserProgramCreateManyInput | UserProgramCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgramIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProgram update
   */
  export type UserProgramUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProgram
     */
    select?: UserProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProgram
     */
    omit?: UserProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgramInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProgram.
     */
    data: XOR<UserProgramUpdateInput, UserProgramUncheckedUpdateInput>
    /**
     * Choose, which UserProgram to update.
     */
    where: UserProgramWhereUniqueInput
  }

  /**
   * UserProgram updateMany
   */
  export type UserProgramUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPrograms.
     */
    data: XOR<UserProgramUpdateManyMutationInput, UserProgramUncheckedUpdateManyInput>
    /**
     * Filter which UserPrograms to update
     */
    where?: UserProgramWhereInput
    /**
     * Limit how many UserPrograms to update.
     */
    limit?: number
  }

  /**
   * UserProgram updateManyAndReturn
   */
  export type UserProgramUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProgram
     */
    select?: UserProgramSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProgram
     */
    omit?: UserProgramOmit<ExtArgs> | null
    /**
     * The data used to update UserPrograms.
     */
    data: XOR<UserProgramUpdateManyMutationInput, UserProgramUncheckedUpdateManyInput>
    /**
     * Filter which UserPrograms to update
     */
    where?: UserProgramWhereInput
    /**
     * Limit how many UserPrograms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgramIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProgram upsert
   */
  export type UserProgramUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProgram
     */
    select?: UserProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProgram
     */
    omit?: UserProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgramInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProgram to update in case it exists.
     */
    where: UserProgramWhereUniqueInput
    /**
     * In case the UserProgram found by the `where` argument doesn't exist, create a new UserProgram with this data.
     */
    create: XOR<UserProgramCreateInput, UserProgramUncheckedCreateInput>
    /**
     * In case the UserProgram was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProgramUpdateInput, UserProgramUncheckedUpdateInput>
  }

  /**
   * UserProgram delete
   */
  export type UserProgramDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProgram
     */
    select?: UserProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProgram
     */
    omit?: UserProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgramInclude<ExtArgs> | null
    /**
     * Filter which UserProgram to delete.
     */
    where: UserProgramWhereUniqueInput
  }

  /**
   * UserProgram deleteMany
   */
  export type UserProgramDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPrograms to delete
     */
    where?: UserProgramWhereInput
    /**
     * Limit how many UserPrograms to delete.
     */
    limit?: number
  }

  /**
   * UserProgram without action
   */
  export type UserProgramDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProgram
     */
    select?: UserProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProgram
     */
    omit?: UserProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgramInclude<ExtArgs> | null
  }


  /**
   * Model Log
   */

  export type AggregateLog = {
    _count: LogCountAggregateOutputType | null
    _avg: LogAvgAggregateOutputType | null
    _sum: LogSumAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  export type LogAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    workoutId: number | null
    calories: number | null
  }

  export type LogSumAggregateOutputType = {
    id: number | null
    userId: number | null
    workoutId: number | null
    calories: number | null
  }

  export type LogMinAggregateOutputType = {
    id: number | null
    userId: number | null
    workoutId: number | null
    calories: number | null
    timestamp: Date | null
  }

  export type LogMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    workoutId: number | null
    calories: number | null
    timestamp: Date | null
  }

  export type LogCountAggregateOutputType = {
    id: number
    userId: number
    workoutId: number
    calories: number
    timestamp: number
    _all: number
  }


  export type LogAvgAggregateInputType = {
    id?: true
    userId?: true
    workoutId?: true
    calories?: true
  }

  export type LogSumAggregateInputType = {
    id?: true
    userId?: true
    workoutId?: true
    calories?: true
  }

  export type LogMinAggregateInputType = {
    id?: true
    userId?: true
    workoutId?: true
    calories?: true
    timestamp?: true
  }

  export type LogMaxAggregateInputType = {
    id?: true
    userId?: true
    workoutId?: true
    calories?: true
    timestamp?: true
  }

  export type LogCountAggregateInputType = {
    id?: true
    userId?: true
    workoutId?: true
    calories?: true
    timestamp?: true
    _all?: true
  }

  export type LogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Log to aggregate.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Logs
    **/
    _count?: true | LogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogMaxAggregateInputType
  }

  export type GetLogAggregateType<T extends LogAggregateArgs> = {
        [P in keyof T & keyof AggregateLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLog[P]>
      : GetScalarType<T[P], AggregateLog[P]>
  }




  export type LogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogWhereInput
    orderBy?: LogOrderByWithAggregationInput | LogOrderByWithAggregationInput[]
    by: LogScalarFieldEnum[] | LogScalarFieldEnum
    having?: LogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogCountAggregateInputType | true
    _avg?: LogAvgAggregateInputType
    _sum?: LogSumAggregateInputType
    _min?: LogMinAggregateInputType
    _max?: LogMaxAggregateInputType
  }

  export type LogGroupByOutputType = {
    id: number
    userId: number
    workoutId: number
    calories: number | null
    timestamp: Date
    _count: LogCountAggregateOutputType | null
    _avg: LogAvgAggregateOutputType | null
    _sum: LogSumAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  type GetLogGroupByPayload<T extends LogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogGroupByOutputType[P]>
            : GetScalarType<T[P], LogGroupByOutputType[P]>
        }
      >
    >


  export type LogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    workoutId?: boolean
    calories?: boolean
    timestamp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["log"]>

  export type LogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    workoutId?: boolean
    calories?: boolean
    timestamp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["log"]>

  export type LogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    workoutId?: boolean
    calories?: boolean
    timestamp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["log"]>

  export type LogSelectScalar = {
    id?: boolean
    userId?: boolean
    workoutId?: boolean
    calories?: boolean
    timestamp?: boolean
  }

  export type LogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "workoutId" | "calories" | "timestamp", ExtArgs["result"]["log"]>
  export type LogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
  }
  export type LogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
  }
  export type LogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
  }

  export type $LogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Log"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      workout: Prisma.$WorkoutPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      workoutId: number
      calories: number | null
      timestamp: Date
    }, ExtArgs["result"]["log"]>
    composites: {}
  }

  type LogGetPayload<S extends boolean | null | undefined | LogDefaultArgs> = $Result.GetResult<Prisma.$LogPayload, S>

  type LogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogCountAggregateInputType | true
    }

  export interface LogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Log'], meta: { name: 'Log' } }
    /**
     * Find zero or one Log that matches the filter.
     * @param {LogFindUniqueArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogFindUniqueArgs>(args: SelectSubset<T, LogFindUniqueArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Log that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LogFindUniqueOrThrowArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogFindUniqueOrThrowArgs>(args: SelectSubset<T, LogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindFirstArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogFindFirstArgs>(args?: SelectSubset<T, LogFindFirstArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Log that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindFirstOrThrowArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogFindFirstOrThrowArgs>(args?: SelectSubset<T, LogFindFirstOrThrowArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logs
     * const logs = await prisma.log.findMany()
     * 
     * // Get first 10 Logs
     * const logs = await prisma.log.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logWithIdOnly = await prisma.log.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LogFindManyArgs>(args?: SelectSubset<T, LogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Log.
     * @param {LogCreateArgs} args - Arguments to create a Log.
     * @example
     * // Create one Log
     * const Log = await prisma.log.create({
     *   data: {
     *     // ... data to create a Log
     *   }
     * })
     * 
     */
    create<T extends LogCreateArgs>(args: SelectSubset<T, LogCreateArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Logs.
     * @param {LogCreateManyArgs} args - Arguments to create many Logs.
     * @example
     * // Create many Logs
     * const log = await prisma.log.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LogCreateManyArgs>(args?: SelectSubset<T, LogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Logs and returns the data saved in the database.
     * @param {LogCreateManyAndReturnArgs} args - Arguments to create many Logs.
     * @example
     * // Create many Logs
     * const log = await prisma.log.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Logs and only return the `id`
     * const logWithIdOnly = await prisma.log.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LogCreateManyAndReturnArgs>(args?: SelectSubset<T, LogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Log.
     * @param {LogDeleteArgs} args - Arguments to delete one Log.
     * @example
     * // Delete one Log
     * const Log = await prisma.log.delete({
     *   where: {
     *     // ... filter to delete one Log
     *   }
     * })
     * 
     */
    delete<T extends LogDeleteArgs>(args: SelectSubset<T, LogDeleteArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Log.
     * @param {LogUpdateArgs} args - Arguments to update one Log.
     * @example
     * // Update one Log
     * const log = await prisma.log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LogUpdateArgs>(args: SelectSubset<T, LogUpdateArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Logs.
     * @param {LogDeleteManyArgs} args - Arguments to filter Logs to delete.
     * @example
     * // Delete a few Logs
     * const { count } = await prisma.log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LogDeleteManyArgs>(args?: SelectSubset<T, LogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logs
     * const log = await prisma.log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LogUpdateManyArgs>(args: SelectSubset<T, LogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs and returns the data updated in the database.
     * @param {LogUpdateManyAndReturnArgs} args - Arguments to update many Logs.
     * @example
     * // Update many Logs
     * const log = await prisma.log.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Logs and only return the `id`
     * const logWithIdOnly = await prisma.log.updateManyAndReturn({
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
    updateManyAndReturn<T extends LogUpdateManyAndReturnArgs>(args: SelectSubset<T, LogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Log.
     * @param {LogUpsertArgs} args - Arguments to update or create a Log.
     * @example
     * // Update or create a Log
     * const log = await prisma.log.upsert({
     *   create: {
     *     // ... data to create a Log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Log we want to update
     *   }
     * })
     */
    upsert<T extends LogUpsertArgs>(args: SelectSubset<T, LogUpsertArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogCountArgs} args - Arguments to filter Logs to count.
     * @example
     * // Count the number of Logs
     * const count = await prisma.log.count({
     *   where: {
     *     // ... the filter for the Logs we want to count
     *   }
     * })
    **/
    count<T extends LogCountArgs>(
      args?: Subset<T, LogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LogAggregateArgs>(args: Subset<T, LogAggregateArgs>): Prisma.PrismaPromise<GetLogAggregateType<T>>

    /**
     * Group by Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogGroupByArgs} args - Group by arguments.
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
      T extends LogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogGroupByArgs['orderBy'] }
        : { orderBy?: LogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Log model
   */
  readonly fields: LogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workout<T extends WorkoutDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkoutDefaultArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Log model
   */
  interface LogFieldRefs {
    readonly id: FieldRef<"Log", 'Int'>
    readonly userId: FieldRef<"Log", 'Int'>
    readonly workoutId: FieldRef<"Log", 'Int'>
    readonly calories: FieldRef<"Log", 'Float'>
    readonly timestamp: FieldRef<"Log", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Log findUnique
   */
  export type LogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log findUniqueOrThrow
   */
  export type LogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log findFirst
   */
  export type LogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logs.
     */
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log findFirstOrThrow
   */
  export type LogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logs.
     */
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log findMany
   */
  export type LogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Logs to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log create
   */
  export type LogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * The data needed to create a Log.
     */
    data: XOR<LogCreateInput, LogUncheckedCreateInput>
  }

  /**
   * Log createMany
   */
  export type LogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Logs.
     */
    data: LogCreateManyInput | LogCreateManyInput[]
  }

  /**
   * Log createManyAndReturn
   */
  export type LogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * The data used to create many Logs.
     */
    data: LogCreateManyInput | LogCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Log update
   */
  export type LogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * The data needed to update a Log.
     */
    data: XOR<LogUpdateInput, LogUncheckedUpdateInput>
    /**
     * Choose, which Log to update.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log updateMany
   */
  export type LogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Logs.
     */
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyInput>
    /**
     * Filter which Logs to update
     */
    where?: LogWhereInput
    /**
     * Limit how many Logs to update.
     */
    limit?: number
  }

  /**
   * Log updateManyAndReturn
   */
  export type LogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * The data used to update Logs.
     */
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyInput>
    /**
     * Filter which Logs to update
     */
    where?: LogWhereInput
    /**
     * Limit how many Logs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Log upsert
   */
  export type LogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * The filter to search for the Log to update in case it exists.
     */
    where: LogWhereUniqueInput
    /**
     * In case the Log found by the `where` argument doesn't exist, create a new Log with this data.
     */
    create: XOR<LogCreateInput, LogUncheckedCreateInput>
    /**
     * In case the Log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogUpdateInput, LogUncheckedUpdateInput>
  }

  /**
   * Log delete
   */
  export type LogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter which Log to delete.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log deleteMany
   */
  export type LogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Logs to delete
     */
    where?: LogWhereInput
    /**
     * Limit how many Logs to delete.
     */
    limit?: number
  }

  /**
   * Log without action
   */
  export type LogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
  }


  /**
   * Model Statistic
   */

  export type AggregateStatistic = {
    _count: StatisticCountAggregateOutputType | null
    _avg: StatisticAvgAggregateOutputType | null
    _sum: StatisticSumAggregateOutputType | null
    _min: StatisticMinAggregateOutputType | null
    _max: StatisticMaxAggregateOutputType | null
  }

  export type StatisticAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    totalCalories: number | null
    totalWorkouts: number | null
  }

  export type StatisticSumAggregateOutputType = {
    id: number | null
    userId: number | null
    totalCalories: number | null
    totalWorkouts: number | null
  }

  export type StatisticMinAggregateOutputType = {
    id: number | null
    userId: number | null
    totalCalories: number | null
    totalWorkouts: number | null
    favoriteWorkout: string | null
    lastActivity: Date | null
  }

  export type StatisticMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    totalCalories: number | null
    totalWorkouts: number | null
    favoriteWorkout: string | null
    lastActivity: Date | null
  }

  export type StatisticCountAggregateOutputType = {
    id: number
    userId: number
    totalCalories: number
    totalWorkouts: number
    favoriteWorkout: number
    lastActivity: number
    _all: number
  }


  export type StatisticAvgAggregateInputType = {
    id?: true
    userId?: true
    totalCalories?: true
    totalWorkouts?: true
  }

  export type StatisticSumAggregateInputType = {
    id?: true
    userId?: true
    totalCalories?: true
    totalWorkouts?: true
  }

  export type StatisticMinAggregateInputType = {
    id?: true
    userId?: true
    totalCalories?: true
    totalWorkouts?: true
    favoriteWorkout?: true
    lastActivity?: true
  }

  export type StatisticMaxAggregateInputType = {
    id?: true
    userId?: true
    totalCalories?: true
    totalWorkouts?: true
    favoriteWorkout?: true
    lastActivity?: true
  }

  export type StatisticCountAggregateInputType = {
    id?: true
    userId?: true
    totalCalories?: true
    totalWorkouts?: true
    favoriteWorkout?: true
    lastActivity?: true
    _all?: true
  }

  export type StatisticAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Statistic to aggregate.
     */
    where?: StatisticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statistics to fetch.
     */
    orderBy?: StatisticOrderByWithRelationInput | StatisticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StatisticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statistics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Statistics
    **/
    _count?: true | StatisticCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StatisticAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StatisticSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatisticMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatisticMaxAggregateInputType
  }

  export type GetStatisticAggregateType<T extends StatisticAggregateArgs> = {
        [P in keyof T & keyof AggregateStatistic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatistic[P]>
      : GetScalarType<T[P], AggregateStatistic[P]>
  }




  export type StatisticGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatisticWhereInput
    orderBy?: StatisticOrderByWithAggregationInput | StatisticOrderByWithAggregationInput[]
    by: StatisticScalarFieldEnum[] | StatisticScalarFieldEnum
    having?: StatisticScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatisticCountAggregateInputType | true
    _avg?: StatisticAvgAggregateInputType
    _sum?: StatisticSumAggregateInputType
    _min?: StatisticMinAggregateInputType
    _max?: StatisticMaxAggregateInputType
  }

  export type StatisticGroupByOutputType = {
    id: number
    userId: number
    totalCalories: number
    totalWorkouts: number
    favoriteWorkout: string | null
    lastActivity: Date
    _count: StatisticCountAggregateOutputType | null
    _avg: StatisticAvgAggregateOutputType | null
    _sum: StatisticSumAggregateOutputType | null
    _min: StatisticMinAggregateOutputType | null
    _max: StatisticMaxAggregateOutputType | null
  }

  type GetStatisticGroupByPayload<T extends StatisticGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatisticGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatisticGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatisticGroupByOutputType[P]>
            : GetScalarType<T[P], StatisticGroupByOutputType[P]>
        }
      >
    >


  export type StatisticSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    totalCalories?: boolean
    totalWorkouts?: boolean
    favoriteWorkout?: boolean
    lastActivity?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["statistic"]>

  export type StatisticSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    totalCalories?: boolean
    totalWorkouts?: boolean
    favoriteWorkout?: boolean
    lastActivity?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["statistic"]>

  export type StatisticSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    totalCalories?: boolean
    totalWorkouts?: boolean
    favoriteWorkout?: boolean
    lastActivity?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["statistic"]>

  export type StatisticSelectScalar = {
    id?: boolean
    userId?: boolean
    totalCalories?: boolean
    totalWorkouts?: boolean
    favoriteWorkout?: boolean
    lastActivity?: boolean
  }

  export type StatisticOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "totalCalories" | "totalWorkouts" | "favoriteWorkout" | "lastActivity", ExtArgs["result"]["statistic"]>
  export type StatisticInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StatisticIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StatisticIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StatisticPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Statistic"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      totalCalories: number
      totalWorkouts: number
      favoriteWorkout: string | null
      lastActivity: Date
    }, ExtArgs["result"]["statistic"]>
    composites: {}
  }

  type StatisticGetPayload<S extends boolean | null | undefined | StatisticDefaultArgs> = $Result.GetResult<Prisma.$StatisticPayload, S>

  type StatisticCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StatisticFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StatisticCountAggregateInputType | true
    }

  export interface StatisticDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Statistic'], meta: { name: 'Statistic' } }
    /**
     * Find zero or one Statistic that matches the filter.
     * @param {StatisticFindUniqueArgs} args - Arguments to find a Statistic
     * @example
     * // Get one Statistic
     * const statistic = await prisma.statistic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StatisticFindUniqueArgs>(args: SelectSubset<T, StatisticFindUniqueArgs<ExtArgs>>): Prisma__StatisticClient<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Statistic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StatisticFindUniqueOrThrowArgs} args - Arguments to find a Statistic
     * @example
     * // Get one Statistic
     * const statistic = await prisma.statistic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StatisticFindUniqueOrThrowArgs>(args: SelectSubset<T, StatisticFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StatisticClient<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Statistic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticFindFirstArgs} args - Arguments to find a Statistic
     * @example
     * // Get one Statistic
     * const statistic = await prisma.statistic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StatisticFindFirstArgs>(args?: SelectSubset<T, StatisticFindFirstArgs<ExtArgs>>): Prisma__StatisticClient<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Statistic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticFindFirstOrThrowArgs} args - Arguments to find a Statistic
     * @example
     * // Get one Statistic
     * const statistic = await prisma.statistic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StatisticFindFirstOrThrowArgs>(args?: SelectSubset<T, StatisticFindFirstOrThrowArgs<ExtArgs>>): Prisma__StatisticClient<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Statistics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Statistics
     * const statistics = await prisma.statistic.findMany()
     * 
     * // Get first 10 Statistics
     * const statistics = await prisma.statistic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const statisticWithIdOnly = await prisma.statistic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StatisticFindManyArgs>(args?: SelectSubset<T, StatisticFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Statistic.
     * @param {StatisticCreateArgs} args - Arguments to create a Statistic.
     * @example
     * // Create one Statistic
     * const Statistic = await prisma.statistic.create({
     *   data: {
     *     // ... data to create a Statistic
     *   }
     * })
     * 
     */
    create<T extends StatisticCreateArgs>(args: SelectSubset<T, StatisticCreateArgs<ExtArgs>>): Prisma__StatisticClient<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Statistics.
     * @param {StatisticCreateManyArgs} args - Arguments to create many Statistics.
     * @example
     * // Create many Statistics
     * const statistic = await prisma.statistic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StatisticCreateManyArgs>(args?: SelectSubset<T, StatisticCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Statistics and returns the data saved in the database.
     * @param {StatisticCreateManyAndReturnArgs} args - Arguments to create many Statistics.
     * @example
     * // Create many Statistics
     * const statistic = await prisma.statistic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Statistics and only return the `id`
     * const statisticWithIdOnly = await prisma.statistic.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StatisticCreateManyAndReturnArgs>(args?: SelectSubset<T, StatisticCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Statistic.
     * @param {StatisticDeleteArgs} args - Arguments to delete one Statistic.
     * @example
     * // Delete one Statistic
     * const Statistic = await prisma.statistic.delete({
     *   where: {
     *     // ... filter to delete one Statistic
     *   }
     * })
     * 
     */
    delete<T extends StatisticDeleteArgs>(args: SelectSubset<T, StatisticDeleteArgs<ExtArgs>>): Prisma__StatisticClient<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Statistic.
     * @param {StatisticUpdateArgs} args - Arguments to update one Statistic.
     * @example
     * // Update one Statistic
     * const statistic = await prisma.statistic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StatisticUpdateArgs>(args: SelectSubset<T, StatisticUpdateArgs<ExtArgs>>): Prisma__StatisticClient<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Statistics.
     * @param {StatisticDeleteManyArgs} args - Arguments to filter Statistics to delete.
     * @example
     * // Delete a few Statistics
     * const { count } = await prisma.statistic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StatisticDeleteManyArgs>(args?: SelectSubset<T, StatisticDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Statistics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Statistics
     * const statistic = await prisma.statistic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StatisticUpdateManyArgs>(args: SelectSubset<T, StatisticUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Statistics and returns the data updated in the database.
     * @param {StatisticUpdateManyAndReturnArgs} args - Arguments to update many Statistics.
     * @example
     * // Update many Statistics
     * const statistic = await prisma.statistic.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Statistics and only return the `id`
     * const statisticWithIdOnly = await prisma.statistic.updateManyAndReturn({
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
    updateManyAndReturn<T extends StatisticUpdateManyAndReturnArgs>(args: SelectSubset<T, StatisticUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Statistic.
     * @param {StatisticUpsertArgs} args - Arguments to update or create a Statistic.
     * @example
     * // Update or create a Statistic
     * const statistic = await prisma.statistic.upsert({
     *   create: {
     *     // ... data to create a Statistic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Statistic we want to update
     *   }
     * })
     */
    upsert<T extends StatisticUpsertArgs>(args: SelectSubset<T, StatisticUpsertArgs<ExtArgs>>): Prisma__StatisticClient<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Statistics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticCountArgs} args - Arguments to filter Statistics to count.
     * @example
     * // Count the number of Statistics
     * const count = await prisma.statistic.count({
     *   where: {
     *     // ... the filter for the Statistics we want to count
     *   }
     * })
    **/
    count<T extends StatisticCountArgs>(
      args?: Subset<T, StatisticCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatisticCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Statistic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StatisticAggregateArgs>(args: Subset<T, StatisticAggregateArgs>): Prisma.PrismaPromise<GetStatisticAggregateType<T>>

    /**
     * Group by Statistic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticGroupByArgs} args - Group by arguments.
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
      T extends StatisticGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StatisticGroupByArgs['orderBy'] }
        : { orderBy?: StatisticGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StatisticGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatisticGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Statistic model
   */
  readonly fields: StatisticFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Statistic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StatisticClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Statistic model
   */
  interface StatisticFieldRefs {
    readonly id: FieldRef<"Statistic", 'Int'>
    readonly userId: FieldRef<"Statistic", 'Int'>
    readonly totalCalories: FieldRef<"Statistic", 'Int'>
    readonly totalWorkouts: FieldRef<"Statistic", 'Int'>
    readonly favoriteWorkout: FieldRef<"Statistic", 'String'>
    readonly lastActivity: FieldRef<"Statistic", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Statistic findUnique
   */
  export type StatisticFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticInclude<ExtArgs> | null
    /**
     * Filter, which Statistic to fetch.
     */
    where: StatisticWhereUniqueInput
  }

  /**
   * Statistic findUniqueOrThrow
   */
  export type StatisticFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticInclude<ExtArgs> | null
    /**
     * Filter, which Statistic to fetch.
     */
    where: StatisticWhereUniqueInput
  }

  /**
   * Statistic findFirst
   */
  export type StatisticFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticInclude<ExtArgs> | null
    /**
     * Filter, which Statistic to fetch.
     */
    where?: StatisticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statistics to fetch.
     */
    orderBy?: StatisticOrderByWithRelationInput | StatisticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Statistics.
     */
    cursor?: StatisticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statistics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Statistics.
     */
    distinct?: StatisticScalarFieldEnum | StatisticScalarFieldEnum[]
  }

  /**
   * Statistic findFirstOrThrow
   */
  export type StatisticFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticInclude<ExtArgs> | null
    /**
     * Filter, which Statistic to fetch.
     */
    where?: StatisticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statistics to fetch.
     */
    orderBy?: StatisticOrderByWithRelationInput | StatisticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Statistics.
     */
    cursor?: StatisticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statistics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Statistics.
     */
    distinct?: StatisticScalarFieldEnum | StatisticScalarFieldEnum[]
  }

  /**
   * Statistic findMany
   */
  export type StatisticFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticInclude<ExtArgs> | null
    /**
     * Filter, which Statistics to fetch.
     */
    where?: StatisticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statistics to fetch.
     */
    orderBy?: StatisticOrderByWithRelationInput | StatisticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Statistics.
     */
    cursor?: StatisticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statistics.
     */
    skip?: number
    distinct?: StatisticScalarFieldEnum | StatisticScalarFieldEnum[]
  }

  /**
   * Statistic create
   */
  export type StatisticCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticInclude<ExtArgs> | null
    /**
     * The data needed to create a Statistic.
     */
    data: XOR<StatisticCreateInput, StatisticUncheckedCreateInput>
  }

  /**
   * Statistic createMany
   */
  export type StatisticCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Statistics.
     */
    data: StatisticCreateManyInput | StatisticCreateManyInput[]
  }

  /**
   * Statistic createManyAndReturn
   */
  export type StatisticCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * The data used to create many Statistics.
     */
    data: StatisticCreateManyInput | StatisticCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Statistic update
   */
  export type StatisticUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticInclude<ExtArgs> | null
    /**
     * The data needed to update a Statistic.
     */
    data: XOR<StatisticUpdateInput, StatisticUncheckedUpdateInput>
    /**
     * Choose, which Statistic to update.
     */
    where: StatisticWhereUniqueInput
  }

  /**
   * Statistic updateMany
   */
  export type StatisticUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Statistics.
     */
    data: XOR<StatisticUpdateManyMutationInput, StatisticUncheckedUpdateManyInput>
    /**
     * Filter which Statistics to update
     */
    where?: StatisticWhereInput
    /**
     * Limit how many Statistics to update.
     */
    limit?: number
  }

  /**
   * Statistic updateManyAndReturn
   */
  export type StatisticUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * The data used to update Statistics.
     */
    data: XOR<StatisticUpdateManyMutationInput, StatisticUncheckedUpdateManyInput>
    /**
     * Filter which Statistics to update
     */
    where?: StatisticWhereInput
    /**
     * Limit how many Statistics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Statistic upsert
   */
  export type StatisticUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticInclude<ExtArgs> | null
    /**
     * The filter to search for the Statistic to update in case it exists.
     */
    where: StatisticWhereUniqueInput
    /**
     * In case the Statistic found by the `where` argument doesn't exist, create a new Statistic with this data.
     */
    create: XOR<StatisticCreateInput, StatisticUncheckedCreateInput>
    /**
     * In case the Statistic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StatisticUpdateInput, StatisticUncheckedUpdateInput>
  }

  /**
   * Statistic delete
   */
  export type StatisticDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticInclude<ExtArgs> | null
    /**
     * Filter which Statistic to delete.
     */
    where: StatisticWhereUniqueInput
  }

  /**
   * Statistic deleteMany
   */
  export type StatisticDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Statistics to delete
     */
    where?: StatisticWhereInput
    /**
     * Limit how many Statistics to delete.
     */
    limit?: number
  }

  /**
   * Statistic without action
   */
  export type StatisticDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticInclude<ExtArgs> | null
  }


  /**
   * Model Achievment
   */

  export type AggregateAchievment = {
    _count: AchievmentCountAggregateOutputType | null
    _avg: AchievmentAvgAggregateOutputType | null
    _sum: AchievmentSumAggregateOutputType | null
    _min: AchievmentMinAggregateOutputType | null
    _max: AchievmentMaxAggregateOutputType | null
  }

  export type AchievmentAvgAggregateOutputType = {
    id: number | null
    condition: number | null
  }

  export type AchievmentSumAggregateOutputType = {
    id: number | null
    condition: number | null
  }

  export type AchievmentMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    type: string | null
    condition: number | null
  }

  export type AchievmentMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    type: string | null
    condition: number | null
  }

  export type AchievmentCountAggregateOutputType = {
    id: number
    name: number
    description: number
    type: number
    condition: number
    _all: number
  }


  export type AchievmentAvgAggregateInputType = {
    id?: true
    condition?: true
  }

  export type AchievmentSumAggregateInputType = {
    id?: true
    condition?: true
  }

  export type AchievmentMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    type?: true
    condition?: true
  }

  export type AchievmentMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    type?: true
    condition?: true
  }

  export type AchievmentCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    type?: true
    condition?: true
    _all?: true
  }

  export type AchievmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Achievment to aggregate.
     */
    where?: AchievmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievments to fetch.
     */
    orderBy?: AchievmentOrderByWithRelationInput | AchievmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AchievmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Achievments
    **/
    _count?: true | AchievmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AchievmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AchievmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AchievmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AchievmentMaxAggregateInputType
  }

  export type GetAchievmentAggregateType<T extends AchievmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAchievment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAchievment[P]>
      : GetScalarType<T[P], AggregateAchievment[P]>
  }




  export type AchievmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AchievmentWhereInput
    orderBy?: AchievmentOrderByWithAggregationInput | AchievmentOrderByWithAggregationInput[]
    by: AchievmentScalarFieldEnum[] | AchievmentScalarFieldEnum
    having?: AchievmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AchievmentCountAggregateInputType | true
    _avg?: AchievmentAvgAggregateInputType
    _sum?: AchievmentSumAggregateInputType
    _min?: AchievmentMinAggregateInputType
    _max?: AchievmentMaxAggregateInputType
  }

  export type AchievmentGroupByOutputType = {
    id: number
    name: string
    description: string
    type: string
    condition: number
    _count: AchievmentCountAggregateOutputType | null
    _avg: AchievmentAvgAggregateOutputType | null
    _sum: AchievmentSumAggregateOutputType | null
    _min: AchievmentMinAggregateOutputType | null
    _max: AchievmentMaxAggregateOutputType | null
  }

  type GetAchievmentGroupByPayload<T extends AchievmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AchievmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AchievmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AchievmentGroupByOutputType[P]>
            : GetScalarType<T[P], AchievmentGroupByOutputType[P]>
        }
      >
    >


  export type AchievmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    condition?: boolean
    users?: boolean | Achievment$usersArgs<ExtArgs>
    _count?: boolean | AchievmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["achievment"]>

  export type AchievmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    condition?: boolean
  }, ExtArgs["result"]["achievment"]>

  export type AchievmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    condition?: boolean
  }, ExtArgs["result"]["achievment"]>

  export type AchievmentSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    condition?: boolean
  }

  export type AchievmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "type" | "condition", ExtArgs["result"]["achievment"]>
  export type AchievmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Achievment$usersArgs<ExtArgs>
    _count?: boolean | AchievmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AchievmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AchievmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AchievmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Achievment"
    objects: {
      users: Prisma.$UserAchievmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      type: string
      condition: number
    }, ExtArgs["result"]["achievment"]>
    composites: {}
  }

  type AchievmentGetPayload<S extends boolean | null | undefined | AchievmentDefaultArgs> = $Result.GetResult<Prisma.$AchievmentPayload, S>

  type AchievmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AchievmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AchievmentCountAggregateInputType | true
    }

  export interface AchievmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Achievment'], meta: { name: 'Achievment' } }
    /**
     * Find zero or one Achievment that matches the filter.
     * @param {AchievmentFindUniqueArgs} args - Arguments to find a Achievment
     * @example
     * // Get one Achievment
     * const achievment = await prisma.achievment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AchievmentFindUniqueArgs>(args: SelectSubset<T, AchievmentFindUniqueArgs<ExtArgs>>): Prisma__AchievmentClient<$Result.GetResult<Prisma.$AchievmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Achievment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AchievmentFindUniqueOrThrowArgs} args - Arguments to find a Achievment
     * @example
     * // Get one Achievment
     * const achievment = await prisma.achievment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AchievmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AchievmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AchievmentClient<$Result.GetResult<Prisma.$AchievmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Achievment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievmentFindFirstArgs} args - Arguments to find a Achievment
     * @example
     * // Get one Achievment
     * const achievment = await prisma.achievment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AchievmentFindFirstArgs>(args?: SelectSubset<T, AchievmentFindFirstArgs<ExtArgs>>): Prisma__AchievmentClient<$Result.GetResult<Prisma.$AchievmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Achievment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievmentFindFirstOrThrowArgs} args - Arguments to find a Achievment
     * @example
     * // Get one Achievment
     * const achievment = await prisma.achievment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AchievmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AchievmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AchievmentClient<$Result.GetResult<Prisma.$AchievmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Achievments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Achievments
     * const achievments = await prisma.achievment.findMany()
     * 
     * // Get first 10 Achievments
     * const achievments = await prisma.achievment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const achievmentWithIdOnly = await prisma.achievment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AchievmentFindManyArgs>(args?: SelectSubset<T, AchievmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Achievment.
     * @param {AchievmentCreateArgs} args - Arguments to create a Achievment.
     * @example
     * // Create one Achievment
     * const Achievment = await prisma.achievment.create({
     *   data: {
     *     // ... data to create a Achievment
     *   }
     * })
     * 
     */
    create<T extends AchievmentCreateArgs>(args: SelectSubset<T, AchievmentCreateArgs<ExtArgs>>): Prisma__AchievmentClient<$Result.GetResult<Prisma.$AchievmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Achievments.
     * @param {AchievmentCreateManyArgs} args - Arguments to create many Achievments.
     * @example
     * // Create many Achievments
     * const achievment = await prisma.achievment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AchievmentCreateManyArgs>(args?: SelectSubset<T, AchievmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Achievments and returns the data saved in the database.
     * @param {AchievmentCreateManyAndReturnArgs} args - Arguments to create many Achievments.
     * @example
     * // Create many Achievments
     * const achievment = await prisma.achievment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Achievments and only return the `id`
     * const achievmentWithIdOnly = await prisma.achievment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AchievmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AchievmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Achievment.
     * @param {AchievmentDeleteArgs} args - Arguments to delete one Achievment.
     * @example
     * // Delete one Achievment
     * const Achievment = await prisma.achievment.delete({
     *   where: {
     *     // ... filter to delete one Achievment
     *   }
     * })
     * 
     */
    delete<T extends AchievmentDeleteArgs>(args: SelectSubset<T, AchievmentDeleteArgs<ExtArgs>>): Prisma__AchievmentClient<$Result.GetResult<Prisma.$AchievmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Achievment.
     * @param {AchievmentUpdateArgs} args - Arguments to update one Achievment.
     * @example
     * // Update one Achievment
     * const achievment = await prisma.achievment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AchievmentUpdateArgs>(args: SelectSubset<T, AchievmentUpdateArgs<ExtArgs>>): Prisma__AchievmentClient<$Result.GetResult<Prisma.$AchievmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Achievments.
     * @param {AchievmentDeleteManyArgs} args - Arguments to filter Achievments to delete.
     * @example
     * // Delete a few Achievments
     * const { count } = await prisma.achievment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AchievmentDeleteManyArgs>(args?: SelectSubset<T, AchievmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Achievments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Achievments
     * const achievment = await prisma.achievment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AchievmentUpdateManyArgs>(args: SelectSubset<T, AchievmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Achievments and returns the data updated in the database.
     * @param {AchievmentUpdateManyAndReturnArgs} args - Arguments to update many Achievments.
     * @example
     * // Update many Achievments
     * const achievment = await prisma.achievment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Achievments and only return the `id`
     * const achievmentWithIdOnly = await prisma.achievment.updateManyAndReturn({
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
    updateManyAndReturn<T extends AchievmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AchievmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Achievment.
     * @param {AchievmentUpsertArgs} args - Arguments to update or create a Achievment.
     * @example
     * // Update or create a Achievment
     * const achievment = await prisma.achievment.upsert({
     *   create: {
     *     // ... data to create a Achievment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Achievment we want to update
     *   }
     * })
     */
    upsert<T extends AchievmentUpsertArgs>(args: SelectSubset<T, AchievmentUpsertArgs<ExtArgs>>): Prisma__AchievmentClient<$Result.GetResult<Prisma.$AchievmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Achievments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievmentCountArgs} args - Arguments to filter Achievments to count.
     * @example
     * // Count the number of Achievments
     * const count = await prisma.achievment.count({
     *   where: {
     *     // ... the filter for the Achievments we want to count
     *   }
     * })
    **/
    count<T extends AchievmentCountArgs>(
      args?: Subset<T, AchievmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AchievmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Achievment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AchievmentAggregateArgs>(args: Subset<T, AchievmentAggregateArgs>): Prisma.PrismaPromise<GetAchievmentAggregateType<T>>

    /**
     * Group by Achievment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievmentGroupByArgs} args - Group by arguments.
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
      T extends AchievmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AchievmentGroupByArgs['orderBy'] }
        : { orderBy?: AchievmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AchievmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAchievmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Achievment model
   */
  readonly fields: AchievmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Achievment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AchievmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Achievment$usersArgs<ExtArgs> = {}>(args?: Subset<T, Achievment$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAchievmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Achievment model
   */
  interface AchievmentFieldRefs {
    readonly id: FieldRef<"Achievment", 'Int'>
    readonly name: FieldRef<"Achievment", 'String'>
    readonly description: FieldRef<"Achievment", 'String'>
    readonly type: FieldRef<"Achievment", 'String'>
    readonly condition: FieldRef<"Achievment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Achievment findUnique
   */
  export type AchievmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievment
     */
    select?: AchievmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievment
     */
    omit?: AchievmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievmentInclude<ExtArgs> | null
    /**
     * Filter, which Achievment to fetch.
     */
    where: AchievmentWhereUniqueInput
  }

  /**
   * Achievment findUniqueOrThrow
   */
  export type AchievmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievment
     */
    select?: AchievmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievment
     */
    omit?: AchievmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievmentInclude<ExtArgs> | null
    /**
     * Filter, which Achievment to fetch.
     */
    where: AchievmentWhereUniqueInput
  }

  /**
   * Achievment findFirst
   */
  export type AchievmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievment
     */
    select?: AchievmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievment
     */
    omit?: AchievmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievmentInclude<ExtArgs> | null
    /**
     * Filter, which Achievment to fetch.
     */
    where?: AchievmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievments to fetch.
     */
    orderBy?: AchievmentOrderByWithRelationInput | AchievmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Achievments.
     */
    cursor?: AchievmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Achievments.
     */
    distinct?: AchievmentScalarFieldEnum | AchievmentScalarFieldEnum[]
  }

  /**
   * Achievment findFirstOrThrow
   */
  export type AchievmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievment
     */
    select?: AchievmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievment
     */
    omit?: AchievmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievmentInclude<ExtArgs> | null
    /**
     * Filter, which Achievment to fetch.
     */
    where?: AchievmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievments to fetch.
     */
    orderBy?: AchievmentOrderByWithRelationInput | AchievmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Achievments.
     */
    cursor?: AchievmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Achievments.
     */
    distinct?: AchievmentScalarFieldEnum | AchievmentScalarFieldEnum[]
  }

  /**
   * Achievment findMany
   */
  export type AchievmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievment
     */
    select?: AchievmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievment
     */
    omit?: AchievmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievmentInclude<ExtArgs> | null
    /**
     * Filter, which Achievments to fetch.
     */
    where?: AchievmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievments to fetch.
     */
    orderBy?: AchievmentOrderByWithRelationInput | AchievmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Achievments.
     */
    cursor?: AchievmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievments.
     */
    skip?: number
    distinct?: AchievmentScalarFieldEnum | AchievmentScalarFieldEnum[]
  }

  /**
   * Achievment create
   */
  export type AchievmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievment
     */
    select?: AchievmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievment
     */
    omit?: AchievmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Achievment.
     */
    data: XOR<AchievmentCreateInput, AchievmentUncheckedCreateInput>
  }

  /**
   * Achievment createMany
   */
  export type AchievmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Achievments.
     */
    data: AchievmentCreateManyInput | AchievmentCreateManyInput[]
  }

  /**
   * Achievment createManyAndReturn
   */
  export type AchievmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievment
     */
    select?: AchievmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Achievment
     */
    omit?: AchievmentOmit<ExtArgs> | null
    /**
     * The data used to create many Achievments.
     */
    data: AchievmentCreateManyInput | AchievmentCreateManyInput[]
  }

  /**
   * Achievment update
   */
  export type AchievmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievment
     */
    select?: AchievmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievment
     */
    omit?: AchievmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Achievment.
     */
    data: XOR<AchievmentUpdateInput, AchievmentUncheckedUpdateInput>
    /**
     * Choose, which Achievment to update.
     */
    where: AchievmentWhereUniqueInput
  }

  /**
   * Achievment updateMany
   */
  export type AchievmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Achievments.
     */
    data: XOR<AchievmentUpdateManyMutationInput, AchievmentUncheckedUpdateManyInput>
    /**
     * Filter which Achievments to update
     */
    where?: AchievmentWhereInput
    /**
     * Limit how many Achievments to update.
     */
    limit?: number
  }

  /**
   * Achievment updateManyAndReturn
   */
  export type AchievmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievment
     */
    select?: AchievmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Achievment
     */
    omit?: AchievmentOmit<ExtArgs> | null
    /**
     * The data used to update Achievments.
     */
    data: XOR<AchievmentUpdateManyMutationInput, AchievmentUncheckedUpdateManyInput>
    /**
     * Filter which Achievments to update
     */
    where?: AchievmentWhereInput
    /**
     * Limit how many Achievments to update.
     */
    limit?: number
  }

  /**
   * Achievment upsert
   */
  export type AchievmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievment
     */
    select?: AchievmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievment
     */
    omit?: AchievmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Achievment to update in case it exists.
     */
    where: AchievmentWhereUniqueInput
    /**
     * In case the Achievment found by the `where` argument doesn't exist, create a new Achievment with this data.
     */
    create: XOR<AchievmentCreateInput, AchievmentUncheckedCreateInput>
    /**
     * In case the Achievment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AchievmentUpdateInput, AchievmentUncheckedUpdateInput>
  }

  /**
   * Achievment delete
   */
  export type AchievmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievment
     */
    select?: AchievmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievment
     */
    omit?: AchievmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievmentInclude<ExtArgs> | null
    /**
     * Filter which Achievment to delete.
     */
    where: AchievmentWhereUniqueInput
  }

  /**
   * Achievment deleteMany
   */
  export type AchievmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Achievments to delete
     */
    where?: AchievmentWhereInput
    /**
     * Limit how many Achievments to delete.
     */
    limit?: number
  }

  /**
   * Achievment.users
   */
  export type Achievment$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievment
     */
    select?: UserAchievmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievment
     */
    omit?: UserAchievmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievmentInclude<ExtArgs> | null
    where?: UserAchievmentWhereInput
    orderBy?: UserAchievmentOrderByWithRelationInput | UserAchievmentOrderByWithRelationInput[]
    cursor?: UserAchievmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAchievmentScalarFieldEnum | UserAchievmentScalarFieldEnum[]
  }

  /**
   * Achievment without action
   */
  export type AchievmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievment
     */
    select?: AchievmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievment
     */
    omit?: AchievmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievmentInclude<ExtArgs> | null
  }


  /**
   * Model UserAchievment
   */

  export type AggregateUserAchievment = {
    _count: UserAchievmentCountAggregateOutputType | null
    _avg: UserAchievmentAvgAggregateOutputType | null
    _sum: UserAchievmentSumAggregateOutputType | null
    _min: UserAchievmentMinAggregateOutputType | null
    _max: UserAchievmentMaxAggregateOutputType | null
  }

  export type UserAchievmentAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    achievmentId: number | null
  }

  export type UserAchievmentSumAggregateOutputType = {
    id: number | null
    userId: number | null
    achievmentId: number | null
  }

  export type UserAchievmentMinAggregateOutputType = {
    id: number | null
    userId: number | null
    achievmentId: number | null
    timestamp: Date | null
  }

  export type UserAchievmentMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    achievmentId: number | null
    timestamp: Date | null
  }

  export type UserAchievmentCountAggregateOutputType = {
    id: number
    userId: number
    achievmentId: number
    timestamp: number
    _all: number
  }


  export type UserAchievmentAvgAggregateInputType = {
    id?: true
    userId?: true
    achievmentId?: true
  }

  export type UserAchievmentSumAggregateInputType = {
    id?: true
    userId?: true
    achievmentId?: true
  }

  export type UserAchievmentMinAggregateInputType = {
    id?: true
    userId?: true
    achievmentId?: true
    timestamp?: true
  }

  export type UserAchievmentMaxAggregateInputType = {
    id?: true
    userId?: true
    achievmentId?: true
    timestamp?: true
  }

  export type UserAchievmentCountAggregateInputType = {
    id?: true
    userId?: true
    achievmentId?: true
    timestamp?: true
    _all?: true
  }

  export type UserAchievmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAchievment to aggregate.
     */
    where?: UserAchievmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAchievments to fetch.
     */
    orderBy?: UserAchievmentOrderByWithRelationInput | UserAchievmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserAchievmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAchievments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAchievments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAchievments
    **/
    _count?: true | UserAchievmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAchievmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserAchievmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAchievmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAchievmentMaxAggregateInputType
  }

  export type GetUserAchievmentAggregateType<T extends UserAchievmentAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAchievment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAchievment[P]>
      : GetScalarType<T[P], AggregateUserAchievment[P]>
  }




  export type UserAchievmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAchievmentWhereInput
    orderBy?: UserAchievmentOrderByWithAggregationInput | UserAchievmentOrderByWithAggregationInput[]
    by: UserAchievmentScalarFieldEnum[] | UserAchievmentScalarFieldEnum
    having?: UserAchievmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAchievmentCountAggregateInputType | true
    _avg?: UserAchievmentAvgAggregateInputType
    _sum?: UserAchievmentSumAggregateInputType
    _min?: UserAchievmentMinAggregateInputType
    _max?: UserAchievmentMaxAggregateInputType
  }

  export type UserAchievmentGroupByOutputType = {
    id: number
    userId: number
    achievmentId: number
    timestamp: Date
    _count: UserAchievmentCountAggregateOutputType | null
    _avg: UserAchievmentAvgAggregateOutputType | null
    _sum: UserAchievmentSumAggregateOutputType | null
    _min: UserAchievmentMinAggregateOutputType | null
    _max: UserAchievmentMaxAggregateOutputType | null
  }

  type GetUserAchievmentGroupByPayload<T extends UserAchievmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserAchievmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAchievmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAchievmentGroupByOutputType[P]>
            : GetScalarType<T[P], UserAchievmentGroupByOutputType[P]>
        }
      >
    >


  export type UserAchievmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    achievmentId?: boolean
    timestamp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    achievment?: boolean | AchievmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAchievment"]>

  export type UserAchievmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    achievmentId?: boolean
    timestamp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    achievment?: boolean | AchievmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAchievment"]>

  export type UserAchievmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    achievmentId?: boolean
    timestamp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    achievment?: boolean | AchievmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAchievment"]>

  export type UserAchievmentSelectScalar = {
    id?: boolean
    userId?: boolean
    achievmentId?: boolean
    timestamp?: boolean
  }

  export type UserAchievmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "achievmentId" | "timestamp", ExtArgs["result"]["userAchievment"]>
  export type UserAchievmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    achievment?: boolean | AchievmentDefaultArgs<ExtArgs>
  }
  export type UserAchievmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    achievment?: boolean | AchievmentDefaultArgs<ExtArgs>
  }
  export type UserAchievmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    achievment?: boolean | AchievmentDefaultArgs<ExtArgs>
  }

  export type $UserAchievmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserAchievment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      achievment: Prisma.$AchievmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      achievmentId: number
      timestamp: Date
    }, ExtArgs["result"]["userAchievment"]>
    composites: {}
  }

  type UserAchievmentGetPayload<S extends boolean | null | undefined | UserAchievmentDefaultArgs> = $Result.GetResult<Prisma.$UserAchievmentPayload, S>

  type UserAchievmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserAchievmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserAchievmentCountAggregateInputType | true
    }

  export interface UserAchievmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserAchievment'], meta: { name: 'UserAchievment' } }
    /**
     * Find zero or one UserAchievment that matches the filter.
     * @param {UserAchievmentFindUniqueArgs} args - Arguments to find a UserAchievment
     * @example
     * // Get one UserAchievment
     * const userAchievment = await prisma.userAchievment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserAchievmentFindUniqueArgs>(args: SelectSubset<T, UserAchievmentFindUniqueArgs<ExtArgs>>): Prisma__UserAchievmentClient<$Result.GetResult<Prisma.$UserAchievmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserAchievment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserAchievmentFindUniqueOrThrowArgs} args - Arguments to find a UserAchievment
     * @example
     * // Get one UserAchievment
     * const userAchievment = await prisma.userAchievment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserAchievmentFindUniqueOrThrowArgs>(args: SelectSubset<T, UserAchievmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserAchievmentClient<$Result.GetResult<Prisma.$UserAchievmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAchievment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievmentFindFirstArgs} args - Arguments to find a UserAchievment
     * @example
     * // Get one UserAchievment
     * const userAchievment = await prisma.userAchievment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserAchievmentFindFirstArgs>(args?: SelectSubset<T, UserAchievmentFindFirstArgs<ExtArgs>>): Prisma__UserAchievmentClient<$Result.GetResult<Prisma.$UserAchievmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAchievment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievmentFindFirstOrThrowArgs} args - Arguments to find a UserAchievment
     * @example
     * // Get one UserAchievment
     * const userAchievment = await prisma.userAchievment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserAchievmentFindFirstOrThrowArgs>(args?: SelectSubset<T, UserAchievmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserAchievmentClient<$Result.GetResult<Prisma.$UserAchievmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserAchievments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAchievments
     * const userAchievments = await prisma.userAchievment.findMany()
     * 
     * // Get first 10 UserAchievments
     * const userAchievments = await prisma.userAchievment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userAchievmentWithIdOnly = await prisma.userAchievment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserAchievmentFindManyArgs>(args?: SelectSubset<T, UserAchievmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAchievmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserAchievment.
     * @param {UserAchievmentCreateArgs} args - Arguments to create a UserAchievment.
     * @example
     * // Create one UserAchievment
     * const UserAchievment = await prisma.userAchievment.create({
     *   data: {
     *     // ... data to create a UserAchievment
     *   }
     * })
     * 
     */
    create<T extends UserAchievmentCreateArgs>(args: SelectSubset<T, UserAchievmentCreateArgs<ExtArgs>>): Prisma__UserAchievmentClient<$Result.GetResult<Prisma.$UserAchievmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserAchievments.
     * @param {UserAchievmentCreateManyArgs} args - Arguments to create many UserAchievments.
     * @example
     * // Create many UserAchievments
     * const userAchievment = await prisma.userAchievment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserAchievmentCreateManyArgs>(args?: SelectSubset<T, UserAchievmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserAchievments and returns the data saved in the database.
     * @param {UserAchievmentCreateManyAndReturnArgs} args - Arguments to create many UserAchievments.
     * @example
     * // Create many UserAchievments
     * const userAchievment = await prisma.userAchievment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserAchievments and only return the `id`
     * const userAchievmentWithIdOnly = await prisma.userAchievment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserAchievmentCreateManyAndReturnArgs>(args?: SelectSubset<T, UserAchievmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAchievmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserAchievment.
     * @param {UserAchievmentDeleteArgs} args - Arguments to delete one UserAchievment.
     * @example
     * // Delete one UserAchievment
     * const UserAchievment = await prisma.userAchievment.delete({
     *   where: {
     *     // ... filter to delete one UserAchievment
     *   }
     * })
     * 
     */
    delete<T extends UserAchievmentDeleteArgs>(args: SelectSubset<T, UserAchievmentDeleteArgs<ExtArgs>>): Prisma__UserAchievmentClient<$Result.GetResult<Prisma.$UserAchievmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserAchievment.
     * @param {UserAchievmentUpdateArgs} args - Arguments to update one UserAchievment.
     * @example
     * // Update one UserAchievment
     * const userAchievment = await prisma.userAchievment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserAchievmentUpdateArgs>(args: SelectSubset<T, UserAchievmentUpdateArgs<ExtArgs>>): Prisma__UserAchievmentClient<$Result.GetResult<Prisma.$UserAchievmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserAchievments.
     * @param {UserAchievmentDeleteManyArgs} args - Arguments to filter UserAchievments to delete.
     * @example
     * // Delete a few UserAchievments
     * const { count } = await prisma.userAchievment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserAchievmentDeleteManyArgs>(args?: SelectSubset<T, UserAchievmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAchievments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAchievments
     * const userAchievment = await prisma.userAchievment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserAchievmentUpdateManyArgs>(args: SelectSubset<T, UserAchievmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAchievments and returns the data updated in the database.
     * @param {UserAchievmentUpdateManyAndReturnArgs} args - Arguments to update many UserAchievments.
     * @example
     * // Update many UserAchievments
     * const userAchievment = await prisma.userAchievment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserAchievments and only return the `id`
     * const userAchievmentWithIdOnly = await prisma.userAchievment.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserAchievmentUpdateManyAndReturnArgs>(args: SelectSubset<T, UserAchievmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAchievmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserAchievment.
     * @param {UserAchievmentUpsertArgs} args - Arguments to update or create a UserAchievment.
     * @example
     * // Update or create a UserAchievment
     * const userAchievment = await prisma.userAchievment.upsert({
     *   create: {
     *     // ... data to create a UserAchievment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAchievment we want to update
     *   }
     * })
     */
    upsert<T extends UserAchievmentUpsertArgs>(args: SelectSubset<T, UserAchievmentUpsertArgs<ExtArgs>>): Prisma__UserAchievmentClient<$Result.GetResult<Prisma.$UserAchievmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserAchievments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievmentCountArgs} args - Arguments to filter UserAchievments to count.
     * @example
     * // Count the number of UserAchievments
     * const count = await prisma.userAchievment.count({
     *   where: {
     *     // ... the filter for the UserAchievments we want to count
     *   }
     * })
    **/
    count<T extends UserAchievmentCountArgs>(
      args?: Subset<T, UserAchievmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAchievmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAchievment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAchievmentAggregateArgs>(args: Subset<T, UserAchievmentAggregateArgs>): Prisma.PrismaPromise<GetUserAchievmentAggregateType<T>>

    /**
     * Group by UserAchievment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievmentGroupByArgs} args - Group by arguments.
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
      T extends UserAchievmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAchievmentGroupByArgs['orderBy'] }
        : { orderBy?: UserAchievmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserAchievmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAchievmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserAchievment model
   */
  readonly fields: UserAchievmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAchievment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserAchievmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    achievment<T extends AchievmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AchievmentDefaultArgs<ExtArgs>>): Prisma__AchievmentClient<$Result.GetResult<Prisma.$AchievmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserAchievment model
   */
  interface UserAchievmentFieldRefs {
    readonly id: FieldRef<"UserAchievment", 'Int'>
    readonly userId: FieldRef<"UserAchievment", 'Int'>
    readonly achievmentId: FieldRef<"UserAchievment", 'Int'>
    readonly timestamp: FieldRef<"UserAchievment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserAchievment findUnique
   */
  export type UserAchievmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievment
     */
    select?: UserAchievmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievment
     */
    omit?: UserAchievmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievmentInclude<ExtArgs> | null
    /**
     * Filter, which UserAchievment to fetch.
     */
    where: UserAchievmentWhereUniqueInput
  }

  /**
   * UserAchievment findUniqueOrThrow
   */
  export type UserAchievmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievment
     */
    select?: UserAchievmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievment
     */
    omit?: UserAchievmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievmentInclude<ExtArgs> | null
    /**
     * Filter, which UserAchievment to fetch.
     */
    where: UserAchievmentWhereUniqueInput
  }

  /**
   * UserAchievment findFirst
   */
  export type UserAchievmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievment
     */
    select?: UserAchievmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievment
     */
    omit?: UserAchievmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievmentInclude<ExtArgs> | null
    /**
     * Filter, which UserAchievment to fetch.
     */
    where?: UserAchievmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAchievments to fetch.
     */
    orderBy?: UserAchievmentOrderByWithRelationInput | UserAchievmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAchievments.
     */
    cursor?: UserAchievmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAchievments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAchievments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAchievments.
     */
    distinct?: UserAchievmentScalarFieldEnum | UserAchievmentScalarFieldEnum[]
  }

  /**
   * UserAchievment findFirstOrThrow
   */
  export type UserAchievmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievment
     */
    select?: UserAchievmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievment
     */
    omit?: UserAchievmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievmentInclude<ExtArgs> | null
    /**
     * Filter, which UserAchievment to fetch.
     */
    where?: UserAchievmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAchievments to fetch.
     */
    orderBy?: UserAchievmentOrderByWithRelationInput | UserAchievmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAchievments.
     */
    cursor?: UserAchievmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAchievments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAchievments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAchievments.
     */
    distinct?: UserAchievmentScalarFieldEnum | UserAchievmentScalarFieldEnum[]
  }

  /**
   * UserAchievment findMany
   */
  export type UserAchievmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievment
     */
    select?: UserAchievmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievment
     */
    omit?: UserAchievmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievmentInclude<ExtArgs> | null
    /**
     * Filter, which UserAchievments to fetch.
     */
    where?: UserAchievmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAchievments to fetch.
     */
    orderBy?: UserAchievmentOrderByWithRelationInput | UserAchievmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAchievments.
     */
    cursor?: UserAchievmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAchievments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAchievments.
     */
    skip?: number
    distinct?: UserAchievmentScalarFieldEnum | UserAchievmentScalarFieldEnum[]
  }

  /**
   * UserAchievment create
   */
  export type UserAchievmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievment
     */
    select?: UserAchievmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievment
     */
    omit?: UserAchievmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievmentInclude<ExtArgs> | null
    /**
     * The data needed to create a UserAchievment.
     */
    data: XOR<UserAchievmentCreateInput, UserAchievmentUncheckedCreateInput>
  }

  /**
   * UserAchievment createMany
   */
  export type UserAchievmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserAchievments.
     */
    data: UserAchievmentCreateManyInput | UserAchievmentCreateManyInput[]
  }

  /**
   * UserAchievment createManyAndReturn
   */
  export type UserAchievmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievment
     */
    select?: UserAchievmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievment
     */
    omit?: UserAchievmentOmit<ExtArgs> | null
    /**
     * The data used to create many UserAchievments.
     */
    data: UserAchievmentCreateManyInput | UserAchievmentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAchievment update
   */
  export type UserAchievmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievment
     */
    select?: UserAchievmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievment
     */
    omit?: UserAchievmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievmentInclude<ExtArgs> | null
    /**
     * The data needed to update a UserAchievment.
     */
    data: XOR<UserAchievmentUpdateInput, UserAchievmentUncheckedUpdateInput>
    /**
     * Choose, which UserAchievment to update.
     */
    where: UserAchievmentWhereUniqueInput
  }

  /**
   * UserAchievment updateMany
   */
  export type UserAchievmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserAchievments.
     */
    data: XOR<UserAchievmentUpdateManyMutationInput, UserAchievmentUncheckedUpdateManyInput>
    /**
     * Filter which UserAchievments to update
     */
    where?: UserAchievmentWhereInput
    /**
     * Limit how many UserAchievments to update.
     */
    limit?: number
  }

  /**
   * UserAchievment updateManyAndReturn
   */
  export type UserAchievmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievment
     */
    select?: UserAchievmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievment
     */
    omit?: UserAchievmentOmit<ExtArgs> | null
    /**
     * The data used to update UserAchievments.
     */
    data: XOR<UserAchievmentUpdateManyMutationInput, UserAchievmentUncheckedUpdateManyInput>
    /**
     * Filter which UserAchievments to update
     */
    where?: UserAchievmentWhereInput
    /**
     * Limit how many UserAchievments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAchievment upsert
   */
  export type UserAchievmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievment
     */
    select?: UserAchievmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievment
     */
    omit?: UserAchievmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievmentInclude<ExtArgs> | null
    /**
     * The filter to search for the UserAchievment to update in case it exists.
     */
    where: UserAchievmentWhereUniqueInput
    /**
     * In case the UserAchievment found by the `where` argument doesn't exist, create a new UserAchievment with this data.
     */
    create: XOR<UserAchievmentCreateInput, UserAchievmentUncheckedCreateInput>
    /**
     * In case the UserAchievment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserAchievmentUpdateInput, UserAchievmentUncheckedUpdateInput>
  }

  /**
   * UserAchievment delete
   */
  export type UserAchievmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievment
     */
    select?: UserAchievmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievment
     */
    omit?: UserAchievmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievmentInclude<ExtArgs> | null
    /**
     * Filter which UserAchievment to delete.
     */
    where: UserAchievmentWhereUniqueInput
  }

  /**
   * UserAchievment deleteMany
   */
  export type UserAchievmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAchievments to delete
     */
    where?: UserAchievmentWhereInput
    /**
     * Limit how many UserAchievments to delete.
     */
    limit?: number
  }

  /**
   * UserAchievment without action
   */
  export type UserAchievmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievment
     */
    select?: UserAchievmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievment
     */
    omit?: UserAchievmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievmentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    surname: 'surname',
    password: 'password',
    access: 'access',
    card_type: 'card_type',
    age: 'age',
    gender: 'gender',
    height: 'height',
    weight: 'weight'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ExerciseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    calories: 'calories',
    description: 'description'
  };

  export type ExerciseScalarFieldEnum = (typeof ExerciseScalarFieldEnum)[keyof typeof ExerciseScalarFieldEnum]


  export const WorkoutScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    description: 'description',
    userId: 'userId'
  };

  export type WorkoutScalarFieldEnum = (typeof WorkoutScalarFieldEnum)[keyof typeof WorkoutScalarFieldEnum]


  export const WorkoutExerciseScalarFieldEnum: {
    id: 'id',
    workoutId: 'workoutId',
    exerciseId: 'exerciseId',
    repetitions: 'repetitions',
    distance: 'distance'
  };

  export type WorkoutExerciseScalarFieldEnum = (typeof WorkoutExerciseScalarFieldEnum)[keyof typeof WorkoutExerciseScalarFieldEnum]


  export const ProgramScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    userId: 'userId'
  };

  export type ProgramScalarFieldEnum = (typeof ProgramScalarFieldEnum)[keyof typeof ProgramScalarFieldEnum]


  export const ProgramWorkoutScalarFieldEnum: {
    id: 'id',
    programId: 'programId',
    workoutId: 'workoutId',
    weekDay: 'weekDay'
  };

  export type ProgramWorkoutScalarFieldEnum = (typeof ProgramWorkoutScalarFieldEnum)[keyof typeof ProgramWorkoutScalarFieldEnum]


  export const UserProgramScalarFieldEnum: {
    id: 'id',
    programId: 'programId',
    userId: 'userId'
  };

  export type UserProgramScalarFieldEnum = (typeof UserProgramScalarFieldEnum)[keyof typeof UserProgramScalarFieldEnum]


  export const LogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    workoutId: 'workoutId',
    calories: 'calories',
    timestamp: 'timestamp'
  };

  export type LogScalarFieldEnum = (typeof LogScalarFieldEnum)[keyof typeof LogScalarFieldEnum]


  export const StatisticScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    totalCalories: 'totalCalories',
    totalWorkouts: 'totalWorkouts',
    favoriteWorkout: 'favoriteWorkout',
    lastActivity: 'lastActivity'
  };

  export type StatisticScalarFieldEnum = (typeof StatisticScalarFieldEnum)[keyof typeof StatisticScalarFieldEnum]


  export const AchievmentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    type: 'type',
    condition: 'condition'
  };

  export type AchievmentScalarFieldEnum = (typeof AchievmentScalarFieldEnum)[keyof typeof AchievmentScalarFieldEnum]


  export const UserAchievmentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    achievmentId: 'achievmentId',
    timestamp: 'timestamp'
  };

  export type UserAchievmentScalarFieldEnum = (typeof UserAchievmentScalarFieldEnum)[keyof typeof UserAchievmentScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'ExerciseType'
   */
  export type EnumExerciseTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExerciseType'>
    


  /**
   * Reference to a field of type 'WeekDay'
   */
  export type EnumWeekDayFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WeekDay'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    surname?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    access?: StringFilter<"User"> | string
    card_type?: StringFilter<"User"> | string
    age?: IntNullableFilter<"User"> | number | null
    gender?: EnumGenderNullableFilter<"User"> | $Enums.Gender | null
    height?: FloatNullableFilter<"User"> | number | null
    weight?: FloatNullableFilter<"User"> | number | null
    programs?: UserProgramListRelationFilter
    ownPrograms?: ProgramListRelationFilter
    ownTrainings?: WorkoutListRelationFilter
    logs?: LogListRelationFilter
    stats?: XOR<StatisticNullableScalarRelationFilter, StatisticWhereInput> | null
    achievments?: UserAchievmentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    password?: SortOrder
    access?: SortOrder
    card_type?: SortOrder
    age?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    programs?: UserProgramOrderByRelationAggregateInput
    ownPrograms?: ProgramOrderByRelationAggregateInput
    ownTrainings?: WorkoutOrderByRelationAggregateInput
    logs?: LogOrderByRelationAggregateInput
    stats?: StatisticOrderByWithRelationInput
    achievments?: UserAchievmentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    surname?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    access?: StringFilter<"User"> | string
    card_type?: StringFilter<"User"> | string
    age?: IntNullableFilter<"User"> | number | null
    gender?: EnumGenderNullableFilter<"User"> | $Enums.Gender | null
    height?: FloatNullableFilter<"User"> | number | null
    weight?: FloatNullableFilter<"User"> | number | null
    programs?: UserProgramListRelationFilter
    ownPrograms?: ProgramListRelationFilter
    ownTrainings?: WorkoutListRelationFilter
    logs?: LogListRelationFilter
    stats?: XOR<StatisticNullableScalarRelationFilter, StatisticWhereInput> | null
    achievments?: UserAchievmentListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    password?: SortOrder
    access?: SortOrder
    card_type?: SortOrder
    age?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    surname?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    access?: StringWithAggregatesFilter<"User"> | string
    card_type?: StringWithAggregatesFilter<"User"> | string
    age?: IntNullableWithAggregatesFilter<"User"> | number | null
    gender?: EnumGenderNullableWithAggregatesFilter<"User"> | $Enums.Gender | null
    height?: FloatNullableWithAggregatesFilter<"User"> | number | null
    weight?: FloatNullableWithAggregatesFilter<"User"> | number | null
  }

  export type ExerciseWhereInput = {
    AND?: ExerciseWhereInput | ExerciseWhereInput[]
    OR?: ExerciseWhereInput[]
    NOT?: ExerciseWhereInput | ExerciseWhereInput[]
    id?: IntFilter<"Exercise"> | number
    name?: StringFilter<"Exercise"> | string
    type?: EnumExerciseTypeFilter<"Exercise"> | $Enums.ExerciseType
    calories?: StringFilter<"Exercise"> | string
    description?: StringNullableFilter<"Exercise"> | string | null
    workoutExercises?: WorkoutExerciseListRelationFilter
  }

  export type ExerciseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    calories?: SortOrder
    description?: SortOrderInput | SortOrder
    workoutExercises?: WorkoutExerciseOrderByRelationAggregateInput
  }

  export type ExerciseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExerciseWhereInput | ExerciseWhereInput[]
    OR?: ExerciseWhereInput[]
    NOT?: ExerciseWhereInput | ExerciseWhereInput[]
    name?: StringFilter<"Exercise"> | string
    type?: EnumExerciseTypeFilter<"Exercise"> | $Enums.ExerciseType
    calories?: StringFilter<"Exercise"> | string
    description?: StringNullableFilter<"Exercise"> | string | null
    workoutExercises?: WorkoutExerciseListRelationFilter
  }, "id">

  export type ExerciseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    calories?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: ExerciseCountOrderByAggregateInput
    _avg?: ExerciseAvgOrderByAggregateInput
    _max?: ExerciseMaxOrderByAggregateInput
    _min?: ExerciseMinOrderByAggregateInput
    _sum?: ExerciseSumOrderByAggregateInput
  }

  export type ExerciseScalarWhereWithAggregatesInput = {
    AND?: ExerciseScalarWhereWithAggregatesInput | ExerciseScalarWhereWithAggregatesInput[]
    OR?: ExerciseScalarWhereWithAggregatesInput[]
    NOT?: ExerciseScalarWhereWithAggregatesInput | ExerciseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Exercise"> | number
    name?: StringWithAggregatesFilter<"Exercise"> | string
    type?: EnumExerciseTypeWithAggregatesFilter<"Exercise"> | $Enums.ExerciseType
    calories?: StringWithAggregatesFilter<"Exercise"> | string
    description?: StringNullableWithAggregatesFilter<"Exercise"> | string | null
  }

  export type WorkoutWhereInput = {
    AND?: WorkoutWhereInput | WorkoutWhereInput[]
    OR?: WorkoutWhereInput[]
    NOT?: WorkoutWhereInput | WorkoutWhereInput[]
    id?: IntFilter<"Workout"> | number
    name?: StringFilter<"Workout"> | string
    type?: EnumExerciseTypeFilter<"Workout"> | $Enums.ExerciseType
    description?: StringNullableFilter<"Workout"> | string | null
    userId?: IntNullableFilter<"Workout"> | number | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    workoutExercises?: WorkoutExerciseListRelationFilter
    programWorkouts?: ProgramWorkoutListRelationFilter
    logs?: LogListRelationFilter
  }

  export type WorkoutOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    workoutExercises?: WorkoutExerciseOrderByRelationAggregateInput
    programWorkouts?: ProgramWorkoutOrderByRelationAggregateInput
    logs?: LogOrderByRelationAggregateInput
  }

  export type WorkoutWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WorkoutWhereInput | WorkoutWhereInput[]
    OR?: WorkoutWhereInput[]
    NOT?: WorkoutWhereInput | WorkoutWhereInput[]
    name?: StringFilter<"Workout"> | string
    type?: EnumExerciseTypeFilter<"Workout"> | $Enums.ExerciseType
    description?: StringNullableFilter<"Workout"> | string | null
    userId?: IntNullableFilter<"Workout"> | number | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    workoutExercises?: WorkoutExerciseListRelationFilter
    programWorkouts?: ProgramWorkoutListRelationFilter
    logs?: LogListRelationFilter
  }, "id">

  export type WorkoutOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: WorkoutCountOrderByAggregateInput
    _avg?: WorkoutAvgOrderByAggregateInput
    _max?: WorkoutMaxOrderByAggregateInput
    _min?: WorkoutMinOrderByAggregateInput
    _sum?: WorkoutSumOrderByAggregateInput
  }

  export type WorkoutScalarWhereWithAggregatesInput = {
    AND?: WorkoutScalarWhereWithAggregatesInput | WorkoutScalarWhereWithAggregatesInput[]
    OR?: WorkoutScalarWhereWithAggregatesInput[]
    NOT?: WorkoutScalarWhereWithAggregatesInput | WorkoutScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Workout"> | number
    name?: StringWithAggregatesFilter<"Workout"> | string
    type?: EnumExerciseTypeWithAggregatesFilter<"Workout"> | $Enums.ExerciseType
    description?: StringNullableWithAggregatesFilter<"Workout"> | string | null
    userId?: IntNullableWithAggregatesFilter<"Workout"> | number | null
  }

  export type WorkoutExerciseWhereInput = {
    AND?: WorkoutExerciseWhereInput | WorkoutExerciseWhereInput[]
    OR?: WorkoutExerciseWhereInput[]
    NOT?: WorkoutExerciseWhereInput | WorkoutExerciseWhereInput[]
    id?: IntFilter<"WorkoutExercise"> | number
    workoutId?: IntFilter<"WorkoutExercise"> | number
    exerciseId?: IntFilter<"WorkoutExercise"> | number
    repetitions?: IntNullableFilter<"WorkoutExercise"> | number | null
    distance?: IntNullableFilter<"WorkoutExercise"> | number | null
    workout?: XOR<WorkoutScalarRelationFilter, WorkoutWhereInput>
    exercise?: XOR<ExerciseScalarRelationFilter, ExerciseWhereInput>
  }

  export type WorkoutExerciseOrderByWithRelationInput = {
    id?: SortOrder
    workoutId?: SortOrder
    exerciseId?: SortOrder
    repetitions?: SortOrderInput | SortOrder
    distance?: SortOrderInput | SortOrder
    workout?: WorkoutOrderByWithRelationInput
    exercise?: ExerciseOrderByWithRelationInput
  }

  export type WorkoutExerciseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    workoutId_exerciseId?: WorkoutExerciseWorkoutIdExerciseIdCompoundUniqueInput
    AND?: WorkoutExerciseWhereInput | WorkoutExerciseWhereInput[]
    OR?: WorkoutExerciseWhereInput[]
    NOT?: WorkoutExerciseWhereInput | WorkoutExerciseWhereInput[]
    workoutId?: IntFilter<"WorkoutExercise"> | number
    exerciseId?: IntFilter<"WorkoutExercise"> | number
    repetitions?: IntNullableFilter<"WorkoutExercise"> | number | null
    distance?: IntNullableFilter<"WorkoutExercise"> | number | null
    workout?: XOR<WorkoutScalarRelationFilter, WorkoutWhereInput>
    exercise?: XOR<ExerciseScalarRelationFilter, ExerciseWhereInput>
  }, "id" | "workoutId_exerciseId">

  export type WorkoutExerciseOrderByWithAggregationInput = {
    id?: SortOrder
    workoutId?: SortOrder
    exerciseId?: SortOrder
    repetitions?: SortOrderInput | SortOrder
    distance?: SortOrderInput | SortOrder
    _count?: WorkoutExerciseCountOrderByAggregateInput
    _avg?: WorkoutExerciseAvgOrderByAggregateInput
    _max?: WorkoutExerciseMaxOrderByAggregateInput
    _min?: WorkoutExerciseMinOrderByAggregateInput
    _sum?: WorkoutExerciseSumOrderByAggregateInput
  }

  export type WorkoutExerciseScalarWhereWithAggregatesInput = {
    AND?: WorkoutExerciseScalarWhereWithAggregatesInput | WorkoutExerciseScalarWhereWithAggregatesInput[]
    OR?: WorkoutExerciseScalarWhereWithAggregatesInput[]
    NOT?: WorkoutExerciseScalarWhereWithAggregatesInput | WorkoutExerciseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WorkoutExercise"> | number
    workoutId?: IntWithAggregatesFilter<"WorkoutExercise"> | number
    exerciseId?: IntWithAggregatesFilter<"WorkoutExercise"> | number
    repetitions?: IntNullableWithAggregatesFilter<"WorkoutExercise"> | number | null
    distance?: IntNullableWithAggregatesFilter<"WorkoutExercise"> | number | null
  }

  export type ProgramWhereInput = {
    AND?: ProgramWhereInput | ProgramWhereInput[]
    OR?: ProgramWhereInput[]
    NOT?: ProgramWhereInput | ProgramWhereInput[]
    id?: IntFilter<"Program"> | number
    name?: StringFilter<"Program"> | string
    description?: StringNullableFilter<"Program"> | string | null
    userId?: IntNullableFilter<"Program"> | number | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    programWorkouts?: ProgramWorkoutListRelationFilter
    users?: UserProgramListRelationFilter
  }

  export type ProgramOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    programWorkouts?: ProgramWorkoutOrderByRelationAggregateInput
    users?: UserProgramOrderByRelationAggregateInput
  }

  export type ProgramWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProgramWhereInput | ProgramWhereInput[]
    OR?: ProgramWhereInput[]
    NOT?: ProgramWhereInput | ProgramWhereInput[]
    name?: StringFilter<"Program"> | string
    description?: StringNullableFilter<"Program"> | string | null
    userId?: IntNullableFilter<"Program"> | number | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    programWorkouts?: ProgramWorkoutListRelationFilter
    users?: UserProgramListRelationFilter
  }, "id">

  export type ProgramOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: ProgramCountOrderByAggregateInput
    _avg?: ProgramAvgOrderByAggregateInput
    _max?: ProgramMaxOrderByAggregateInput
    _min?: ProgramMinOrderByAggregateInput
    _sum?: ProgramSumOrderByAggregateInput
  }

  export type ProgramScalarWhereWithAggregatesInput = {
    AND?: ProgramScalarWhereWithAggregatesInput | ProgramScalarWhereWithAggregatesInput[]
    OR?: ProgramScalarWhereWithAggregatesInput[]
    NOT?: ProgramScalarWhereWithAggregatesInput | ProgramScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Program"> | number
    name?: StringWithAggregatesFilter<"Program"> | string
    description?: StringNullableWithAggregatesFilter<"Program"> | string | null
    userId?: IntNullableWithAggregatesFilter<"Program"> | number | null
  }

  export type ProgramWorkoutWhereInput = {
    AND?: ProgramWorkoutWhereInput | ProgramWorkoutWhereInput[]
    OR?: ProgramWorkoutWhereInput[]
    NOT?: ProgramWorkoutWhereInput | ProgramWorkoutWhereInput[]
    id?: IntFilter<"ProgramWorkout"> | number
    programId?: IntFilter<"ProgramWorkout"> | number
    workoutId?: IntFilter<"ProgramWorkout"> | number
    weekDay?: EnumWeekDayFilter<"ProgramWorkout"> | $Enums.WeekDay
    program?: XOR<ProgramScalarRelationFilter, ProgramWhereInput>
    workout?: XOR<WorkoutScalarRelationFilter, WorkoutWhereInput>
  }

  export type ProgramWorkoutOrderByWithRelationInput = {
    id?: SortOrder
    programId?: SortOrder
    workoutId?: SortOrder
    weekDay?: SortOrder
    program?: ProgramOrderByWithRelationInput
    workout?: WorkoutOrderByWithRelationInput
  }

  export type ProgramWorkoutWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    programId_workoutId?: ProgramWorkoutProgramIdWorkoutIdCompoundUniqueInput
    AND?: ProgramWorkoutWhereInput | ProgramWorkoutWhereInput[]
    OR?: ProgramWorkoutWhereInput[]
    NOT?: ProgramWorkoutWhereInput | ProgramWorkoutWhereInput[]
    programId?: IntFilter<"ProgramWorkout"> | number
    workoutId?: IntFilter<"ProgramWorkout"> | number
    weekDay?: EnumWeekDayFilter<"ProgramWorkout"> | $Enums.WeekDay
    program?: XOR<ProgramScalarRelationFilter, ProgramWhereInput>
    workout?: XOR<WorkoutScalarRelationFilter, WorkoutWhereInput>
  }, "id" | "programId_workoutId">

  export type ProgramWorkoutOrderByWithAggregationInput = {
    id?: SortOrder
    programId?: SortOrder
    workoutId?: SortOrder
    weekDay?: SortOrder
    _count?: ProgramWorkoutCountOrderByAggregateInput
    _avg?: ProgramWorkoutAvgOrderByAggregateInput
    _max?: ProgramWorkoutMaxOrderByAggregateInput
    _min?: ProgramWorkoutMinOrderByAggregateInput
    _sum?: ProgramWorkoutSumOrderByAggregateInput
  }

  export type ProgramWorkoutScalarWhereWithAggregatesInput = {
    AND?: ProgramWorkoutScalarWhereWithAggregatesInput | ProgramWorkoutScalarWhereWithAggregatesInput[]
    OR?: ProgramWorkoutScalarWhereWithAggregatesInput[]
    NOT?: ProgramWorkoutScalarWhereWithAggregatesInput | ProgramWorkoutScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProgramWorkout"> | number
    programId?: IntWithAggregatesFilter<"ProgramWorkout"> | number
    workoutId?: IntWithAggregatesFilter<"ProgramWorkout"> | number
    weekDay?: EnumWeekDayWithAggregatesFilter<"ProgramWorkout"> | $Enums.WeekDay
  }

  export type UserProgramWhereInput = {
    AND?: UserProgramWhereInput | UserProgramWhereInput[]
    OR?: UserProgramWhereInput[]
    NOT?: UserProgramWhereInput | UserProgramWhereInput[]
    id?: IntFilter<"UserProgram"> | number
    programId?: IntFilter<"UserProgram"> | number
    userId?: IntFilter<"UserProgram"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    program?: XOR<ProgramScalarRelationFilter, ProgramWhereInput>
  }

  export type UserProgramOrderByWithRelationInput = {
    id?: SortOrder
    programId?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    program?: ProgramOrderByWithRelationInput
  }

  export type UserProgramWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_programId?: UserProgramUserIdProgramIdCompoundUniqueInput
    AND?: UserProgramWhereInput | UserProgramWhereInput[]
    OR?: UserProgramWhereInput[]
    NOT?: UserProgramWhereInput | UserProgramWhereInput[]
    programId?: IntFilter<"UserProgram"> | number
    userId?: IntFilter<"UserProgram"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    program?: XOR<ProgramScalarRelationFilter, ProgramWhereInput>
  }, "id" | "userId_programId">

  export type UserProgramOrderByWithAggregationInput = {
    id?: SortOrder
    programId?: SortOrder
    userId?: SortOrder
    _count?: UserProgramCountOrderByAggregateInput
    _avg?: UserProgramAvgOrderByAggregateInput
    _max?: UserProgramMaxOrderByAggregateInput
    _min?: UserProgramMinOrderByAggregateInput
    _sum?: UserProgramSumOrderByAggregateInput
  }

  export type UserProgramScalarWhereWithAggregatesInput = {
    AND?: UserProgramScalarWhereWithAggregatesInput | UserProgramScalarWhereWithAggregatesInput[]
    OR?: UserProgramScalarWhereWithAggregatesInput[]
    NOT?: UserProgramScalarWhereWithAggregatesInput | UserProgramScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserProgram"> | number
    programId?: IntWithAggregatesFilter<"UserProgram"> | number
    userId?: IntWithAggregatesFilter<"UserProgram"> | number
  }

  export type LogWhereInput = {
    AND?: LogWhereInput | LogWhereInput[]
    OR?: LogWhereInput[]
    NOT?: LogWhereInput | LogWhereInput[]
    id?: IntFilter<"Log"> | number
    userId?: IntFilter<"Log"> | number
    workoutId?: IntFilter<"Log"> | number
    calories?: FloatNullableFilter<"Log"> | number | null
    timestamp?: DateTimeFilter<"Log"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    workout?: XOR<WorkoutScalarRelationFilter, WorkoutWhereInput>
  }

  export type LogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    workoutId?: SortOrder
    calories?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    user?: UserOrderByWithRelationInput
    workout?: WorkoutOrderByWithRelationInput
  }

  export type LogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LogWhereInput | LogWhereInput[]
    OR?: LogWhereInput[]
    NOT?: LogWhereInput | LogWhereInput[]
    userId?: IntFilter<"Log"> | number
    workoutId?: IntFilter<"Log"> | number
    calories?: FloatNullableFilter<"Log"> | number | null
    timestamp?: DateTimeFilter<"Log"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    workout?: XOR<WorkoutScalarRelationFilter, WorkoutWhereInput>
  }, "id">

  export type LogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    workoutId?: SortOrder
    calories?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    _count?: LogCountOrderByAggregateInput
    _avg?: LogAvgOrderByAggregateInput
    _max?: LogMaxOrderByAggregateInput
    _min?: LogMinOrderByAggregateInput
    _sum?: LogSumOrderByAggregateInput
  }

  export type LogScalarWhereWithAggregatesInput = {
    AND?: LogScalarWhereWithAggregatesInput | LogScalarWhereWithAggregatesInput[]
    OR?: LogScalarWhereWithAggregatesInput[]
    NOT?: LogScalarWhereWithAggregatesInput | LogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Log"> | number
    userId?: IntWithAggregatesFilter<"Log"> | number
    workoutId?: IntWithAggregatesFilter<"Log"> | number
    calories?: FloatNullableWithAggregatesFilter<"Log"> | number | null
    timestamp?: DateTimeWithAggregatesFilter<"Log"> | Date | string
  }

  export type StatisticWhereInput = {
    AND?: StatisticWhereInput | StatisticWhereInput[]
    OR?: StatisticWhereInput[]
    NOT?: StatisticWhereInput | StatisticWhereInput[]
    id?: IntFilter<"Statistic"> | number
    userId?: IntFilter<"Statistic"> | number
    totalCalories?: IntFilter<"Statistic"> | number
    totalWorkouts?: IntFilter<"Statistic"> | number
    favoriteWorkout?: StringNullableFilter<"Statistic"> | string | null
    lastActivity?: DateTimeFilter<"Statistic"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type StatisticOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    totalCalories?: SortOrder
    totalWorkouts?: SortOrder
    favoriteWorkout?: SortOrderInput | SortOrder
    lastActivity?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type StatisticWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: StatisticWhereInput | StatisticWhereInput[]
    OR?: StatisticWhereInput[]
    NOT?: StatisticWhereInput | StatisticWhereInput[]
    totalCalories?: IntFilter<"Statistic"> | number
    totalWorkouts?: IntFilter<"Statistic"> | number
    favoriteWorkout?: StringNullableFilter<"Statistic"> | string | null
    lastActivity?: DateTimeFilter<"Statistic"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type StatisticOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    totalCalories?: SortOrder
    totalWorkouts?: SortOrder
    favoriteWorkout?: SortOrderInput | SortOrder
    lastActivity?: SortOrder
    _count?: StatisticCountOrderByAggregateInput
    _avg?: StatisticAvgOrderByAggregateInput
    _max?: StatisticMaxOrderByAggregateInput
    _min?: StatisticMinOrderByAggregateInput
    _sum?: StatisticSumOrderByAggregateInput
  }

  export type StatisticScalarWhereWithAggregatesInput = {
    AND?: StatisticScalarWhereWithAggregatesInput | StatisticScalarWhereWithAggregatesInput[]
    OR?: StatisticScalarWhereWithAggregatesInput[]
    NOT?: StatisticScalarWhereWithAggregatesInput | StatisticScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Statistic"> | number
    userId?: IntWithAggregatesFilter<"Statistic"> | number
    totalCalories?: IntWithAggregatesFilter<"Statistic"> | number
    totalWorkouts?: IntWithAggregatesFilter<"Statistic"> | number
    favoriteWorkout?: StringNullableWithAggregatesFilter<"Statistic"> | string | null
    lastActivity?: DateTimeWithAggregatesFilter<"Statistic"> | Date | string
  }

  export type AchievmentWhereInput = {
    AND?: AchievmentWhereInput | AchievmentWhereInput[]
    OR?: AchievmentWhereInput[]
    NOT?: AchievmentWhereInput | AchievmentWhereInput[]
    id?: IntFilter<"Achievment"> | number
    name?: StringFilter<"Achievment"> | string
    description?: StringFilter<"Achievment"> | string
    type?: StringFilter<"Achievment"> | string
    condition?: IntFilter<"Achievment"> | number
    users?: UserAchievmentListRelationFilter
  }

  export type AchievmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    condition?: SortOrder
    users?: UserAchievmentOrderByRelationAggregateInput
  }

  export type AchievmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AchievmentWhereInput | AchievmentWhereInput[]
    OR?: AchievmentWhereInput[]
    NOT?: AchievmentWhereInput | AchievmentWhereInput[]
    name?: StringFilter<"Achievment"> | string
    description?: StringFilter<"Achievment"> | string
    type?: StringFilter<"Achievment"> | string
    condition?: IntFilter<"Achievment"> | number
    users?: UserAchievmentListRelationFilter
  }, "id">

  export type AchievmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    condition?: SortOrder
    _count?: AchievmentCountOrderByAggregateInput
    _avg?: AchievmentAvgOrderByAggregateInput
    _max?: AchievmentMaxOrderByAggregateInput
    _min?: AchievmentMinOrderByAggregateInput
    _sum?: AchievmentSumOrderByAggregateInput
  }

  export type AchievmentScalarWhereWithAggregatesInput = {
    AND?: AchievmentScalarWhereWithAggregatesInput | AchievmentScalarWhereWithAggregatesInput[]
    OR?: AchievmentScalarWhereWithAggregatesInput[]
    NOT?: AchievmentScalarWhereWithAggregatesInput | AchievmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Achievment"> | number
    name?: StringWithAggregatesFilter<"Achievment"> | string
    description?: StringWithAggregatesFilter<"Achievment"> | string
    type?: StringWithAggregatesFilter<"Achievment"> | string
    condition?: IntWithAggregatesFilter<"Achievment"> | number
  }

  export type UserAchievmentWhereInput = {
    AND?: UserAchievmentWhereInput | UserAchievmentWhereInput[]
    OR?: UserAchievmentWhereInput[]
    NOT?: UserAchievmentWhereInput | UserAchievmentWhereInput[]
    id?: IntFilter<"UserAchievment"> | number
    userId?: IntFilter<"UserAchievment"> | number
    achievmentId?: IntFilter<"UserAchievment"> | number
    timestamp?: DateTimeFilter<"UserAchievment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    achievment?: XOR<AchievmentScalarRelationFilter, AchievmentWhereInput>
  }

  export type UserAchievmentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    achievmentId?: SortOrder
    timestamp?: SortOrder
    user?: UserOrderByWithRelationInput
    achievment?: AchievmentOrderByWithRelationInput
  }

  export type UserAchievmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_achievmentId?: UserAchievmentUserIdAchievmentIdCompoundUniqueInput
    AND?: UserAchievmentWhereInput | UserAchievmentWhereInput[]
    OR?: UserAchievmentWhereInput[]
    NOT?: UserAchievmentWhereInput | UserAchievmentWhereInput[]
    userId?: IntFilter<"UserAchievment"> | number
    achievmentId?: IntFilter<"UserAchievment"> | number
    timestamp?: DateTimeFilter<"UserAchievment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    achievment?: XOR<AchievmentScalarRelationFilter, AchievmentWhereInput>
  }, "id" | "userId_achievmentId">

  export type UserAchievmentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    achievmentId?: SortOrder
    timestamp?: SortOrder
    _count?: UserAchievmentCountOrderByAggregateInput
    _avg?: UserAchievmentAvgOrderByAggregateInput
    _max?: UserAchievmentMaxOrderByAggregateInput
    _min?: UserAchievmentMinOrderByAggregateInput
    _sum?: UserAchievmentSumOrderByAggregateInput
  }

  export type UserAchievmentScalarWhereWithAggregatesInput = {
    AND?: UserAchievmentScalarWhereWithAggregatesInput | UserAchievmentScalarWhereWithAggregatesInput[]
    OR?: UserAchievmentScalarWhereWithAggregatesInput[]
    NOT?: UserAchievmentScalarWhereWithAggregatesInput | UserAchievmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserAchievment"> | number
    userId?: IntWithAggregatesFilter<"UserAchievment"> | number
    achievmentId?: IntWithAggregatesFilter<"UserAchievment"> | number
    timestamp?: DateTimeWithAggregatesFilter<"UserAchievment"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    name: string
    surname: string
    password: string
    access: string
    card_type: string
    age?: number | null
    gender?: $Enums.Gender | null
    height?: number | null
    weight?: number | null
    programs?: UserProgramCreateNestedManyWithoutUserInput
    ownPrograms?: ProgramCreateNestedManyWithoutUserInput
    ownTrainings?: WorkoutCreateNestedManyWithoutUserInput
    logs?: LogCreateNestedManyWithoutUserInput
    stats?: StatisticCreateNestedOneWithoutUserInput
    achievments?: UserAchievmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name: string
    surname: string
    password: string
    access: string
    card_type: string
    age?: number | null
    gender?: $Enums.Gender | null
    height?: number | null
    weight?: number | null
    programs?: UserProgramUncheckedCreateNestedManyWithoutUserInput
    ownPrograms?: ProgramUncheckedCreateNestedManyWithoutUserInput
    ownTrainings?: WorkoutUncheckedCreateNestedManyWithoutUserInput
    logs?: LogUncheckedCreateNestedManyWithoutUserInput
    stats?: StatisticUncheckedCreateNestedOneWithoutUserInput
    achievments?: UserAchievmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    access?: StringFieldUpdateOperationsInput | string
    card_type?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    programs?: UserProgramUpdateManyWithoutUserNestedInput
    ownPrograms?: ProgramUpdateManyWithoutUserNestedInput
    ownTrainings?: WorkoutUpdateManyWithoutUserNestedInput
    logs?: LogUpdateManyWithoutUserNestedInput
    stats?: StatisticUpdateOneWithoutUserNestedInput
    achievments?: UserAchievmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    access?: StringFieldUpdateOperationsInput | string
    card_type?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    programs?: UserProgramUncheckedUpdateManyWithoutUserNestedInput
    ownPrograms?: ProgramUncheckedUpdateManyWithoutUserNestedInput
    ownTrainings?: WorkoutUncheckedUpdateManyWithoutUserNestedInput
    logs?: LogUncheckedUpdateManyWithoutUserNestedInput
    stats?: StatisticUncheckedUpdateOneWithoutUserNestedInput
    achievments?: UserAchievmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name: string
    surname: string
    password: string
    access: string
    card_type: string
    age?: number | null
    gender?: $Enums.Gender | null
    height?: number | null
    weight?: number | null
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    access?: StringFieldUpdateOperationsInput | string
    card_type?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    access?: StringFieldUpdateOperationsInput | string
    card_type?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ExerciseCreateInput = {
    name: string
    type: $Enums.ExerciseType
    calories: string
    description?: string | null
    workoutExercises?: WorkoutExerciseCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUncheckedCreateInput = {
    id?: number
    name: string
    type: $Enums.ExerciseType
    calories: string
    description?: string | null
    workoutExercises?: WorkoutExerciseUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    calories?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    workoutExercises?: WorkoutExerciseUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    calories?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    workoutExercises?: WorkoutExerciseUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseCreateManyInput = {
    id?: number
    name: string
    type: $Enums.ExerciseType
    calories: string
    description?: string | null
  }

  export type ExerciseUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    calories?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExerciseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    calories?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorkoutCreateInput = {
    name: string
    type: $Enums.ExerciseType
    description?: string | null
    user?: UserCreateNestedOneWithoutOwnTrainingsInput
    workoutExercises?: WorkoutExerciseCreateNestedManyWithoutWorkoutInput
    programWorkouts?: ProgramWorkoutCreateNestedManyWithoutWorkoutInput
    logs?: LogCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutUncheckedCreateInput = {
    id?: number
    name: string
    type: $Enums.ExerciseType
    description?: string | null
    userId?: number | null
    workoutExercises?: WorkoutExerciseUncheckedCreateNestedManyWithoutWorkoutInput
    programWorkouts?: ProgramWorkoutUncheckedCreateNestedManyWithoutWorkoutInput
    logs?: LogUncheckedCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneWithoutOwnTrainingsNestedInput
    workoutExercises?: WorkoutExerciseUpdateManyWithoutWorkoutNestedInput
    programWorkouts?: ProgramWorkoutUpdateManyWithoutWorkoutNestedInput
    logs?: LogUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    workoutExercises?: WorkoutExerciseUncheckedUpdateManyWithoutWorkoutNestedInput
    programWorkouts?: ProgramWorkoutUncheckedUpdateManyWithoutWorkoutNestedInput
    logs?: LogUncheckedUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutCreateManyInput = {
    id?: number
    name: string
    type: $Enums.ExerciseType
    description?: string | null
    userId?: number | null
  }

  export type WorkoutUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorkoutUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WorkoutExerciseCreateInput = {
    repetitions?: number | null
    distance?: number | null
    workout: WorkoutCreateNestedOneWithoutWorkoutExercisesInput
    exercise: ExerciseCreateNestedOneWithoutWorkoutExercisesInput
  }

  export type WorkoutExerciseUncheckedCreateInput = {
    id?: number
    workoutId: number
    exerciseId: number
    repetitions?: number | null
    distance?: number | null
  }

  export type WorkoutExerciseUpdateInput = {
    repetitions?: NullableIntFieldUpdateOperationsInput | number | null
    distance?: NullableIntFieldUpdateOperationsInput | number | null
    workout?: WorkoutUpdateOneRequiredWithoutWorkoutExercisesNestedInput
    exercise?: ExerciseUpdateOneRequiredWithoutWorkoutExercisesNestedInput
  }

  export type WorkoutExerciseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    workoutId?: IntFieldUpdateOperationsInput | number
    exerciseId?: IntFieldUpdateOperationsInput | number
    repetitions?: NullableIntFieldUpdateOperationsInput | number | null
    distance?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WorkoutExerciseCreateManyInput = {
    id?: number
    workoutId: number
    exerciseId: number
    repetitions?: number | null
    distance?: number | null
  }

  export type WorkoutExerciseUpdateManyMutationInput = {
    repetitions?: NullableIntFieldUpdateOperationsInput | number | null
    distance?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WorkoutExerciseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    workoutId?: IntFieldUpdateOperationsInput | number
    exerciseId?: IntFieldUpdateOperationsInput | number
    repetitions?: NullableIntFieldUpdateOperationsInput | number | null
    distance?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProgramCreateInput = {
    name: string
    description?: string | null
    user?: UserCreateNestedOneWithoutOwnProgramsInput
    programWorkouts?: ProgramWorkoutCreateNestedManyWithoutProgramInput
    users?: UserProgramCreateNestedManyWithoutProgramInput
  }

  export type ProgramUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    userId?: number | null
    programWorkouts?: ProgramWorkoutUncheckedCreateNestedManyWithoutProgramInput
    users?: UserProgramUncheckedCreateNestedManyWithoutProgramInput
  }

  export type ProgramUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneWithoutOwnProgramsNestedInput
    programWorkouts?: ProgramWorkoutUpdateManyWithoutProgramNestedInput
    users?: UserProgramUpdateManyWithoutProgramNestedInput
  }

  export type ProgramUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    programWorkouts?: ProgramWorkoutUncheckedUpdateManyWithoutProgramNestedInput
    users?: UserProgramUncheckedUpdateManyWithoutProgramNestedInput
  }

  export type ProgramCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    userId?: number | null
  }

  export type ProgramUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProgramUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProgramWorkoutCreateInput = {
    weekDay: $Enums.WeekDay
    program: ProgramCreateNestedOneWithoutProgramWorkoutsInput
    workout: WorkoutCreateNestedOneWithoutProgramWorkoutsInput
  }

  export type ProgramWorkoutUncheckedCreateInput = {
    id?: number
    programId: number
    workoutId: number
    weekDay: $Enums.WeekDay
  }

  export type ProgramWorkoutUpdateInput = {
    weekDay?: EnumWeekDayFieldUpdateOperationsInput | $Enums.WeekDay
    program?: ProgramUpdateOneRequiredWithoutProgramWorkoutsNestedInput
    workout?: WorkoutUpdateOneRequiredWithoutProgramWorkoutsNestedInput
  }

  export type ProgramWorkoutUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    programId?: IntFieldUpdateOperationsInput | number
    workoutId?: IntFieldUpdateOperationsInput | number
    weekDay?: EnumWeekDayFieldUpdateOperationsInput | $Enums.WeekDay
  }

  export type ProgramWorkoutCreateManyInput = {
    id?: number
    programId: number
    workoutId: number
    weekDay: $Enums.WeekDay
  }

  export type ProgramWorkoutUpdateManyMutationInput = {
    weekDay?: EnumWeekDayFieldUpdateOperationsInput | $Enums.WeekDay
  }

  export type ProgramWorkoutUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    programId?: IntFieldUpdateOperationsInput | number
    workoutId?: IntFieldUpdateOperationsInput | number
    weekDay?: EnumWeekDayFieldUpdateOperationsInput | $Enums.WeekDay
  }

  export type UserProgramCreateInput = {
    user: UserCreateNestedOneWithoutProgramsInput
    program: ProgramCreateNestedOneWithoutUsersInput
  }

  export type UserProgramUncheckedCreateInput = {
    id?: number
    programId: number
    userId: number
  }

  export type UserProgramUpdateInput = {
    user?: UserUpdateOneRequiredWithoutProgramsNestedInput
    program?: ProgramUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserProgramUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    programId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserProgramCreateManyInput = {
    id?: number
    programId: number
    userId: number
  }

  export type UserProgramUpdateManyMutationInput = {

  }

  export type UserProgramUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    programId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type LogCreateInput = {
    calories?: number | null
    timestamp?: Date | string
    user: UserCreateNestedOneWithoutLogsInput
    workout: WorkoutCreateNestedOneWithoutLogsInput
  }

  export type LogUncheckedCreateInput = {
    id?: number
    userId: number
    workoutId: number
    calories?: number | null
    timestamp?: Date | string
  }

  export type LogUpdateInput = {
    calories?: NullableFloatFieldUpdateOperationsInput | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLogsNestedInput
    workout?: WorkoutUpdateOneRequiredWithoutLogsNestedInput
  }

  export type LogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    workoutId?: IntFieldUpdateOperationsInput | number
    calories?: NullableFloatFieldUpdateOperationsInput | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogCreateManyInput = {
    id?: number
    userId: number
    workoutId: number
    calories?: number | null
    timestamp?: Date | string
  }

  export type LogUpdateManyMutationInput = {
    calories?: NullableFloatFieldUpdateOperationsInput | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    workoutId?: IntFieldUpdateOperationsInput | number
    calories?: NullableFloatFieldUpdateOperationsInput | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatisticCreateInput = {
    totalCalories?: number
    totalWorkouts?: number
    favoriteWorkout?: string | null
    lastActivity?: Date | string
    user: UserCreateNestedOneWithoutStatsInput
  }

  export type StatisticUncheckedCreateInput = {
    id?: number
    userId: number
    totalCalories?: number
    totalWorkouts?: number
    favoriteWorkout?: string | null
    lastActivity?: Date | string
  }

  export type StatisticUpdateInput = {
    totalCalories?: IntFieldUpdateOperationsInput | number
    totalWorkouts?: IntFieldUpdateOperationsInput | number
    favoriteWorkout?: NullableStringFieldUpdateOperationsInput | string | null
    lastActivity?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStatsNestedInput
  }

  export type StatisticUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    totalCalories?: IntFieldUpdateOperationsInput | number
    totalWorkouts?: IntFieldUpdateOperationsInput | number
    favoriteWorkout?: NullableStringFieldUpdateOperationsInput | string | null
    lastActivity?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatisticCreateManyInput = {
    id?: number
    userId: number
    totalCalories?: number
    totalWorkouts?: number
    favoriteWorkout?: string | null
    lastActivity?: Date | string
  }

  export type StatisticUpdateManyMutationInput = {
    totalCalories?: IntFieldUpdateOperationsInput | number
    totalWorkouts?: IntFieldUpdateOperationsInput | number
    favoriteWorkout?: NullableStringFieldUpdateOperationsInput | string | null
    lastActivity?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatisticUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    totalCalories?: IntFieldUpdateOperationsInput | number
    totalWorkouts?: IntFieldUpdateOperationsInput | number
    favoriteWorkout?: NullableStringFieldUpdateOperationsInput | string | null
    lastActivity?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AchievmentCreateInput = {
    name: string
    description: string
    type: string
    condition: number
    users?: UserAchievmentCreateNestedManyWithoutAchievmentInput
  }

  export type AchievmentUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    type: string
    condition: number
    users?: UserAchievmentUncheckedCreateNestedManyWithoutAchievmentInput
  }

  export type AchievmentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    condition?: IntFieldUpdateOperationsInput | number
    users?: UserAchievmentUpdateManyWithoutAchievmentNestedInput
  }

  export type AchievmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    condition?: IntFieldUpdateOperationsInput | number
    users?: UserAchievmentUncheckedUpdateManyWithoutAchievmentNestedInput
  }

  export type AchievmentCreateManyInput = {
    id?: number
    name: string
    description: string
    type: string
    condition: number
  }

  export type AchievmentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    condition?: IntFieldUpdateOperationsInput | number
  }

  export type AchievmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    condition?: IntFieldUpdateOperationsInput | number
  }

  export type UserAchievmentCreateInput = {
    timestamp?: Date | string
    user: UserCreateNestedOneWithoutAchievmentsInput
    achievment: AchievmentCreateNestedOneWithoutUsersInput
  }

  export type UserAchievmentUncheckedCreateInput = {
    id?: number
    userId: number
    achievmentId: number
    timestamp?: Date | string
  }

  export type UserAchievmentUpdateInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAchievmentsNestedInput
    achievment?: AchievmentUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserAchievmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    achievmentId?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAchievmentCreateManyInput = {
    id?: number
    userId: number
    achievmentId: number
    timestamp?: Date | string
  }

  export type UserAchievmentUpdateManyMutationInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAchievmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    achievmentId?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
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
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | null
    notIn?: $Enums.Gender[] | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UserProgramListRelationFilter = {
    every?: UserProgramWhereInput
    some?: UserProgramWhereInput
    none?: UserProgramWhereInput
  }

  export type ProgramListRelationFilter = {
    every?: ProgramWhereInput
    some?: ProgramWhereInput
    none?: ProgramWhereInput
  }

  export type WorkoutListRelationFilter = {
    every?: WorkoutWhereInput
    some?: WorkoutWhereInput
    none?: WorkoutWhereInput
  }

  export type LogListRelationFilter = {
    every?: LogWhereInput
    some?: LogWhereInput
    none?: LogWhereInput
  }

  export type StatisticNullableScalarRelationFilter = {
    is?: StatisticWhereInput | null
    isNot?: StatisticWhereInput | null
  }

  export type UserAchievmentListRelationFilter = {
    every?: UserAchievmentWhereInput
    some?: UserAchievmentWhereInput
    none?: UserAchievmentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserProgramOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProgramOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkoutOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserAchievmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    password?: SortOrder
    access?: SortOrder
    card_type?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    height?: SortOrder
    weight?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
    height?: SortOrder
    weight?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    password?: SortOrder
    access?: SortOrder
    card_type?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    height?: SortOrder
    weight?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    password?: SortOrder
    access?: SortOrder
    card_type?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    height?: SortOrder
    weight?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
    height?: SortOrder
    weight?: SortOrder
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | null
    notIn?: $Enums.Gender[] | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumExerciseTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ExerciseType | EnumExerciseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ExerciseType[]
    notIn?: $Enums.ExerciseType[]
    not?: NestedEnumExerciseTypeFilter<$PrismaModel> | $Enums.ExerciseType
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type WorkoutExerciseListRelationFilter = {
    every?: WorkoutExerciseWhereInput
    some?: WorkoutExerciseWhereInput
    none?: WorkoutExerciseWhereInput
  }

  export type WorkoutExerciseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExerciseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    calories?: SortOrder
    description?: SortOrder
  }

  export type ExerciseAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ExerciseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    calories?: SortOrder
    description?: SortOrder
  }

  export type ExerciseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    calories?: SortOrder
    description?: SortOrder
  }

  export type ExerciseSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumExerciseTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExerciseType | EnumExerciseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ExerciseType[]
    notIn?: $Enums.ExerciseType[]
    not?: NestedEnumExerciseTypeWithAggregatesFilter<$PrismaModel> | $Enums.ExerciseType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExerciseTypeFilter<$PrismaModel>
    _max?: NestedEnumExerciseTypeFilter<$PrismaModel>
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ProgramWorkoutListRelationFilter = {
    every?: ProgramWorkoutWhereInput
    some?: ProgramWorkoutWhereInput
    none?: ProgramWorkoutWhereInput
  }

  export type ProgramWorkoutOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkoutCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    userId?: SortOrder
  }

  export type WorkoutAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type WorkoutMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    userId?: SortOrder
  }

  export type WorkoutMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    userId?: SortOrder
  }

  export type WorkoutSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type WorkoutScalarRelationFilter = {
    is?: WorkoutWhereInput
    isNot?: WorkoutWhereInput
  }

  export type ExerciseScalarRelationFilter = {
    is?: ExerciseWhereInput
    isNot?: ExerciseWhereInput
  }

  export type WorkoutExerciseWorkoutIdExerciseIdCompoundUniqueInput = {
    workoutId: number
    exerciseId: number
  }

  export type WorkoutExerciseCountOrderByAggregateInput = {
    id?: SortOrder
    workoutId?: SortOrder
    exerciseId?: SortOrder
    repetitions?: SortOrder
    distance?: SortOrder
  }

  export type WorkoutExerciseAvgOrderByAggregateInput = {
    id?: SortOrder
    workoutId?: SortOrder
    exerciseId?: SortOrder
    repetitions?: SortOrder
    distance?: SortOrder
  }

  export type WorkoutExerciseMaxOrderByAggregateInput = {
    id?: SortOrder
    workoutId?: SortOrder
    exerciseId?: SortOrder
    repetitions?: SortOrder
    distance?: SortOrder
  }

  export type WorkoutExerciseMinOrderByAggregateInput = {
    id?: SortOrder
    workoutId?: SortOrder
    exerciseId?: SortOrder
    repetitions?: SortOrder
    distance?: SortOrder
  }

  export type WorkoutExerciseSumOrderByAggregateInput = {
    id?: SortOrder
    workoutId?: SortOrder
    exerciseId?: SortOrder
    repetitions?: SortOrder
    distance?: SortOrder
  }

  export type ProgramCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    userId?: SortOrder
  }

  export type ProgramAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ProgramMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    userId?: SortOrder
  }

  export type ProgramMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    userId?: SortOrder
  }

  export type ProgramSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumWeekDayFilter<$PrismaModel = never> = {
    equals?: $Enums.WeekDay | EnumWeekDayFieldRefInput<$PrismaModel>
    in?: $Enums.WeekDay[]
    notIn?: $Enums.WeekDay[]
    not?: NestedEnumWeekDayFilter<$PrismaModel> | $Enums.WeekDay
  }

  export type ProgramScalarRelationFilter = {
    is?: ProgramWhereInput
    isNot?: ProgramWhereInput
  }

  export type ProgramWorkoutProgramIdWorkoutIdCompoundUniqueInput = {
    programId: number
    workoutId: number
  }

  export type ProgramWorkoutCountOrderByAggregateInput = {
    id?: SortOrder
    programId?: SortOrder
    workoutId?: SortOrder
    weekDay?: SortOrder
  }

  export type ProgramWorkoutAvgOrderByAggregateInput = {
    id?: SortOrder
    programId?: SortOrder
    workoutId?: SortOrder
  }

  export type ProgramWorkoutMaxOrderByAggregateInput = {
    id?: SortOrder
    programId?: SortOrder
    workoutId?: SortOrder
    weekDay?: SortOrder
  }

  export type ProgramWorkoutMinOrderByAggregateInput = {
    id?: SortOrder
    programId?: SortOrder
    workoutId?: SortOrder
    weekDay?: SortOrder
  }

  export type ProgramWorkoutSumOrderByAggregateInput = {
    id?: SortOrder
    programId?: SortOrder
    workoutId?: SortOrder
  }

  export type EnumWeekDayWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WeekDay | EnumWeekDayFieldRefInput<$PrismaModel>
    in?: $Enums.WeekDay[]
    notIn?: $Enums.WeekDay[]
    not?: NestedEnumWeekDayWithAggregatesFilter<$PrismaModel> | $Enums.WeekDay
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWeekDayFilter<$PrismaModel>
    _max?: NestedEnumWeekDayFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserProgramUserIdProgramIdCompoundUniqueInput = {
    userId: number
    programId: number
  }

  export type UserProgramCountOrderByAggregateInput = {
    id?: SortOrder
    programId?: SortOrder
    userId?: SortOrder
  }

  export type UserProgramAvgOrderByAggregateInput = {
    id?: SortOrder
    programId?: SortOrder
    userId?: SortOrder
  }

  export type UserProgramMaxOrderByAggregateInput = {
    id?: SortOrder
    programId?: SortOrder
    userId?: SortOrder
  }

  export type UserProgramMinOrderByAggregateInput = {
    id?: SortOrder
    programId?: SortOrder
    userId?: SortOrder
  }

  export type UserProgramSumOrderByAggregateInput = {
    id?: SortOrder
    programId?: SortOrder
    userId?: SortOrder
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

  export type LogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    workoutId?: SortOrder
    calories?: SortOrder
    timestamp?: SortOrder
  }

  export type LogAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    workoutId?: SortOrder
    calories?: SortOrder
  }

  export type LogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    workoutId?: SortOrder
    calories?: SortOrder
    timestamp?: SortOrder
  }

  export type LogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    workoutId?: SortOrder
    calories?: SortOrder
    timestamp?: SortOrder
  }

  export type LogSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    workoutId?: SortOrder
    calories?: SortOrder
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

  export type StatisticCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalCalories?: SortOrder
    totalWorkouts?: SortOrder
    favoriteWorkout?: SortOrder
    lastActivity?: SortOrder
  }

  export type StatisticAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalCalories?: SortOrder
    totalWorkouts?: SortOrder
  }

  export type StatisticMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalCalories?: SortOrder
    totalWorkouts?: SortOrder
    favoriteWorkout?: SortOrder
    lastActivity?: SortOrder
  }

  export type StatisticMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalCalories?: SortOrder
    totalWorkouts?: SortOrder
    favoriteWorkout?: SortOrder
    lastActivity?: SortOrder
  }

  export type StatisticSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalCalories?: SortOrder
    totalWorkouts?: SortOrder
  }

  export type AchievmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    condition?: SortOrder
  }

  export type AchievmentAvgOrderByAggregateInput = {
    id?: SortOrder
    condition?: SortOrder
  }

  export type AchievmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    condition?: SortOrder
  }

  export type AchievmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    condition?: SortOrder
  }

  export type AchievmentSumOrderByAggregateInput = {
    id?: SortOrder
    condition?: SortOrder
  }

  export type AchievmentScalarRelationFilter = {
    is?: AchievmentWhereInput
    isNot?: AchievmentWhereInput
  }

  export type UserAchievmentUserIdAchievmentIdCompoundUniqueInput = {
    userId: number
    achievmentId: number
  }

  export type UserAchievmentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    achievmentId?: SortOrder
    timestamp?: SortOrder
  }

  export type UserAchievmentAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    achievmentId?: SortOrder
  }

  export type UserAchievmentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    achievmentId?: SortOrder
    timestamp?: SortOrder
  }

  export type UserAchievmentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    achievmentId?: SortOrder
    timestamp?: SortOrder
  }

  export type UserAchievmentSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    achievmentId?: SortOrder
  }

  export type UserProgramCreateNestedManyWithoutUserInput = {
    create?: XOR<UserProgramCreateWithoutUserInput, UserProgramUncheckedCreateWithoutUserInput> | UserProgramCreateWithoutUserInput[] | UserProgramUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserProgramCreateOrConnectWithoutUserInput | UserProgramCreateOrConnectWithoutUserInput[]
    createMany?: UserProgramCreateManyUserInputEnvelope
    connect?: UserProgramWhereUniqueInput | UserProgramWhereUniqueInput[]
  }

  export type ProgramCreateNestedManyWithoutUserInput = {
    create?: XOR<ProgramCreateWithoutUserInput, ProgramUncheckedCreateWithoutUserInput> | ProgramCreateWithoutUserInput[] | ProgramUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgramCreateOrConnectWithoutUserInput | ProgramCreateOrConnectWithoutUserInput[]
    createMany?: ProgramCreateManyUserInputEnvelope
    connect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
  }

  export type WorkoutCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkoutCreateWithoutUserInput, WorkoutUncheckedCreateWithoutUserInput> | WorkoutCreateWithoutUserInput[] | WorkoutUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutCreateOrConnectWithoutUserInput | WorkoutCreateOrConnectWithoutUserInput[]
    createMany?: WorkoutCreateManyUserInputEnvelope
    connect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
  }

  export type LogCreateNestedManyWithoutUserInput = {
    create?: XOR<LogCreateWithoutUserInput, LogUncheckedCreateWithoutUserInput> | LogCreateWithoutUserInput[] | LogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LogCreateOrConnectWithoutUserInput | LogCreateOrConnectWithoutUserInput[]
    createMany?: LogCreateManyUserInputEnvelope
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
  }

  export type StatisticCreateNestedOneWithoutUserInput = {
    create?: XOR<StatisticCreateWithoutUserInput, StatisticUncheckedCreateWithoutUserInput>
    connectOrCreate?: StatisticCreateOrConnectWithoutUserInput
    connect?: StatisticWhereUniqueInput
  }

  export type UserAchievmentCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAchievmentCreateWithoutUserInput, UserAchievmentUncheckedCreateWithoutUserInput> | UserAchievmentCreateWithoutUserInput[] | UserAchievmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAchievmentCreateOrConnectWithoutUserInput | UserAchievmentCreateOrConnectWithoutUserInput[]
    createMany?: UserAchievmentCreateManyUserInputEnvelope
    connect?: UserAchievmentWhereUniqueInput | UserAchievmentWhereUniqueInput[]
  }

  export type UserProgramUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserProgramCreateWithoutUserInput, UserProgramUncheckedCreateWithoutUserInput> | UserProgramCreateWithoutUserInput[] | UserProgramUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserProgramCreateOrConnectWithoutUserInput | UserProgramCreateOrConnectWithoutUserInput[]
    createMany?: UserProgramCreateManyUserInputEnvelope
    connect?: UserProgramWhereUniqueInput | UserProgramWhereUniqueInput[]
  }

  export type ProgramUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProgramCreateWithoutUserInput, ProgramUncheckedCreateWithoutUserInput> | ProgramCreateWithoutUserInput[] | ProgramUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgramCreateOrConnectWithoutUserInput | ProgramCreateOrConnectWithoutUserInput[]
    createMany?: ProgramCreateManyUserInputEnvelope
    connect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
  }

  export type WorkoutUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkoutCreateWithoutUserInput, WorkoutUncheckedCreateWithoutUserInput> | WorkoutCreateWithoutUserInput[] | WorkoutUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutCreateOrConnectWithoutUserInput | WorkoutCreateOrConnectWithoutUserInput[]
    createMany?: WorkoutCreateManyUserInputEnvelope
    connect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
  }

  export type LogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LogCreateWithoutUserInput, LogUncheckedCreateWithoutUserInput> | LogCreateWithoutUserInput[] | LogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LogCreateOrConnectWithoutUserInput | LogCreateOrConnectWithoutUserInput[]
    createMany?: LogCreateManyUserInputEnvelope
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
  }

  export type StatisticUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<StatisticCreateWithoutUserInput, StatisticUncheckedCreateWithoutUserInput>
    connectOrCreate?: StatisticCreateOrConnectWithoutUserInput
    connect?: StatisticWhereUniqueInput
  }

  export type UserAchievmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAchievmentCreateWithoutUserInput, UserAchievmentUncheckedCreateWithoutUserInput> | UserAchievmentCreateWithoutUserInput[] | UserAchievmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAchievmentCreateOrConnectWithoutUserInput | UserAchievmentCreateOrConnectWithoutUserInput[]
    createMany?: UserAchievmentCreateManyUserInputEnvelope
    connect?: UserAchievmentWhereUniqueInput | UserAchievmentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserProgramUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserProgramCreateWithoutUserInput, UserProgramUncheckedCreateWithoutUserInput> | UserProgramCreateWithoutUserInput[] | UserProgramUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserProgramCreateOrConnectWithoutUserInput | UserProgramCreateOrConnectWithoutUserInput[]
    upsert?: UserProgramUpsertWithWhereUniqueWithoutUserInput | UserProgramUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserProgramCreateManyUserInputEnvelope
    set?: UserProgramWhereUniqueInput | UserProgramWhereUniqueInput[]
    disconnect?: UserProgramWhereUniqueInput | UserProgramWhereUniqueInput[]
    delete?: UserProgramWhereUniqueInput | UserProgramWhereUniqueInput[]
    connect?: UserProgramWhereUniqueInput | UserProgramWhereUniqueInput[]
    update?: UserProgramUpdateWithWhereUniqueWithoutUserInput | UserProgramUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserProgramUpdateManyWithWhereWithoutUserInput | UserProgramUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserProgramScalarWhereInput | UserProgramScalarWhereInput[]
  }

  export type ProgramUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProgramCreateWithoutUserInput, ProgramUncheckedCreateWithoutUserInput> | ProgramCreateWithoutUserInput[] | ProgramUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgramCreateOrConnectWithoutUserInput | ProgramCreateOrConnectWithoutUserInput[]
    upsert?: ProgramUpsertWithWhereUniqueWithoutUserInput | ProgramUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProgramCreateManyUserInputEnvelope
    set?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    disconnect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    delete?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    connect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    update?: ProgramUpdateWithWhereUniqueWithoutUserInput | ProgramUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProgramUpdateManyWithWhereWithoutUserInput | ProgramUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProgramScalarWhereInput | ProgramScalarWhereInput[]
  }

  export type WorkoutUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkoutCreateWithoutUserInput, WorkoutUncheckedCreateWithoutUserInput> | WorkoutCreateWithoutUserInput[] | WorkoutUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutCreateOrConnectWithoutUserInput | WorkoutCreateOrConnectWithoutUserInput[]
    upsert?: WorkoutUpsertWithWhereUniqueWithoutUserInput | WorkoutUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkoutCreateManyUserInputEnvelope
    set?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    disconnect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    delete?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    connect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    update?: WorkoutUpdateWithWhereUniqueWithoutUserInput | WorkoutUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkoutUpdateManyWithWhereWithoutUserInput | WorkoutUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkoutScalarWhereInput | WorkoutScalarWhereInput[]
  }

  export type LogUpdateManyWithoutUserNestedInput = {
    create?: XOR<LogCreateWithoutUserInput, LogUncheckedCreateWithoutUserInput> | LogCreateWithoutUserInput[] | LogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LogCreateOrConnectWithoutUserInput | LogCreateOrConnectWithoutUserInput[]
    upsert?: LogUpsertWithWhereUniqueWithoutUserInput | LogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LogCreateManyUserInputEnvelope
    set?: LogWhereUniqueInput | LogWhereUniqueInput[]
    disconnect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    delete?: LogWhereUniqueInput | LogWhereUniqueInput[]
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    update?: LogUpdateWithWhereUniqueWithoutUserInput | LogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LogUpdateManyWithWhereWithoutUserInput | LogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LogScalarWhereInput | LogScalarWhereInput[]
  }

  export type StatisticUpdateOneWithoutUserNestedInput = {
    create?: XOR<StatisticCreateWithoutUserInput, StatisticUncheckedCreateWithoutUserInput>
    connectOrCreate?: StatisticCreateOrConnectWithoutUserInput
    upsert?: StatisticUpsertWithoutUserInput
    disconnect?: StatisticWhereInput | boolean
    delete?: StatisticWhereInput | boolean
    connect?: StatisticWhereUniqueInput
    update?: XOR<XOR<StatisticUpdateToOneWithWhereWithoutUserInput, StatisticUpdateWithoutUserInput>, StatisticUncheckedUpdateWithoutUserInput>
  }

  export type UserAchievmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAchievmentCreateWithoutUserInput, UserAchievmentUncheckedCreateWithoutUserInput> | UserAchievmentCreateWithoutUserInput[] | UserAchievmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAchievmentCreateOrConnectWithoutUserInput | UserAchievmentCreateOrConnectWithoutUserInput[]
    upsert?: UserAchievmentUpsertWithWhereUniqueWithoutUserInput | UserAchievmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAchievmentCreateManyUserInputEnvelope
    set?: UserAchievmentWhereUniqueInput | UserAchievmentWhereUniqueInput[]
    disconnect?: UserAchievmentWhereUniqueInput | UserAchievmentWhereUniqueInput[]
    delete?: UserAchievmentWhereUniqueInput | UserAchievmentWhereUniqueInput[]
    connect?: UserAchievmentWhereUniqueInput | UserAchievmentWhereUniqueInput[]
    update?: UserAchievmentUpdateWithWhereUniqueWithoutUserInput | UserAchievmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAchievmentUpdateManyWithWhereWithoutUserInput | UserAchievmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAchievmentScalarWhereInput | UserAchievmentScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserProgramUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserProgramCreateWithoutUserInput, UserProgramUncheckedCreateWithoutUserInput> | UserProgramCreateWithoutUserInput[] | UserProgramUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserProgramCreateOrConnectWithoutUserInput | UserProgramCreateOrConnectWithoutUserInput[]
    upsert?: UserProgramUpsertWithWhereUniqueWithoutUserInput | UserProgramUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserProgramCreateManyUserInputEnvelope
    set?: UserProgramWhereUniqueInput | UserProgramWhereUniqueInput[]
    disconnect?: UserProgramWhereUniqueInput | UserProgramWhereUniqueInput[]
    delete?: UserProgramWhereUniqueInput | UserProgramWhereUniqueInput[]
    connect?: UserProgramWhereUniqueInput | UserProgramWhereUniqueInput[]
    update?: UserProgramUpdateWithWhereUniqueWithoutUserInput | UserProgramUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserProgramUpdateManyWithWhereWithoutUserInput | UserProgramUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserProgramScalarWhereInput | UserProgramScalarWhereInput[]
  }

  export type ProgramUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProgramCreateWithoutUserInput, ProgramUncheckedCreateWithoutUserInput> | ProgramCreateWithoutUserInput[] | ProgramUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgramCreateOrConnectWithoutUserInput | ProgramCreateOrConnectWithoutUserInput[]
    upsert?: ProgramUpsertWithWhereUniqueWithoutUserInput | ProgramUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProgramCreateManyUserInputEnvelope
    set?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    disconnect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    delete?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    connect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    update?: ProgramUpdateWithWhereUniqueWithoutUserInput | ProgramUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProgramUpdateManyWithWhereWithoutUserInput | ProgramUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProgramScalarWhereInput | ProgramScalarWhereInput[]
  }

  export type WorkoutUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkoutCreateWithoutUserInput, WorkoutUncheckedCreateWithoutUserInput> | WorkoutCreateWithoutUserInput[] | WorkoutUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutCreateOrConnectWithoutUserInput | WorkoutCreateOrConnectWithoutUserInput[]
    upsert?: WorkoutUpsertWithWhereUniqueWithoutUserInput | WorkoutUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkoutCreateManyUserInputEnvelope
    set?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    disconnect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    delete?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    connect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    update?: WorkoutUpdateWithWhereUniqueWithoutUserInput | WorkoutUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkoutUpdateManyWithWhereWithoutUserInput | WorkoutUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkoutScalarWhereInput | WorkoutScalarWhereInput[]
  }

  export type LogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LogCreateWithoutUserInput, LogUncheckedCreateWithoutUserInput> | LogCreateWithoutUserInput[] | LogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LogCreateOrConnectWithoutUserInput | LogCreateOrConnectWithoutUserInput[]
    upsert?: LogUpsertWithWhereUniqueWithoutUserInput | LogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LogCreateManyUserInputEnvelope
    set?: LogWhereUniqueInput | LogWhereUniqueInput[]
    disconnect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    delete?: LogWhereUniqueInput | LogWhereUniqueInput[]
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    update?: LogUpdateWithWhereUniqueWithoutUserInput | LogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LogUpdateManyWithWhereWithoutUserInput | LogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LogScalarWhereInput | LogScalarWhereInput[]
  }

  export type StatisticUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<StatisticCreateWithoutUserInput, StatisticUncheckedCreateWithoutUserInput>
    connectOrCreate?: StatisticCreateOrConnectWithoutUserInput
    upsert?: StatisticUpsertWithoutUserInput
    disconnect?: StatisticWhereInput | boolean
    delete?: StatisticWhereInput | boolean
    connect?: StatisticWhereUniqueInput
    update?: XOR<XOR<StatisticUpdateToOneWithWhereWithoutUserInput, StatisticUpdateWithoutUserInput>, StatisticUncheckedUpdateWithoutUserInput>
  }

  export type UserAchievmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAchievmentCreateWithoutUserInput, UserAchievmentUncheckedCreateWithoutUserInput> | UserAchievmentCreateWithoutUserInput[] | UserAchievmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAchievmentCreateOrConnectWithoutUserInput | UserAchievmentCreateOrConnectWithoutUserInput[]
    upsert?: UserAchievmentUpsertWithWhereUniqueWithoutUserInput | UserAchievmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAchievmentCreateManyUserInputEnvelope
    set?: UserAchievmentWhereUniqueInput | UserAchievmentWhereUniqueInput[]
    disconnect?: UserAchievmentWhereUniqueInput | UserAchievmentWhereUniqueInput[]
    delete?: UserAchievmentWhereUniqueInput | UserAchievmentWhereUniqueInput[]
    connect?: UserAchievmentWhereUniqueInput | UserAchievmentWhereUniqueInput[]
    update?: UserAchievmentUpdateWithWhereUniqueWithoutUserInput | UserAchievmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAchievmentUpdateManyWithWhereWithoutUserInput | UserAchievmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAchievmentScalarWhereInput | UserAchievmentScalarWhereInput[]
  }

  export type WorkoutExerciseCreateNestedManyWithoutExerciseInput = {
    create?: XOR<WorkoutExerciseCreateWithoutExerciseInput, WorkoutExerciseUncheckedCreateWithoutExerciseInput> | WorkoutExerciseCreateWithoutExerciseInput[] | WorkoutExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: WorkoutExerciseCreateOrConnectWithoutExerciseInput | WorkoutExerciseCreateOrConnectWithoutExerciseInput[]
    createMany?: WorkoutExerciseCreateManyExerciseInputEnvelope
    connect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
  }

  export type WorkoutExerciseUncheckedCreateNestedManyWithoutExerciseInput = {
    create?: XOR<WorkoutExerciseCreateWithoutExerciseInput, WorkoutExerciseUncheckedCreateWithoutExerciseInput> | WorkoutExerciseCreateWithoutExerciseInput[] | WorkoutExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: WorkoutExerciseCreateOrConnectWithoutExerciseInput | WorkoutExerciseCreateOrConnectWithoutExerciseInput[]
    createMany?: WorkoutExerciseCreateManyExerciseInputEnvelope
    connect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
  }

  export type EnumExerciseTypeFieldUpdateOperationsInput = {
    set?: $Enums.ExerciseType
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type WorkoutExerciseUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<WorkoutExerciseCreateWithoutExerciseInput, WorkoutExerciseUncheckedCreateWithoutExerciseInput> | WorkoutExerciseCreateWithoutExerciseInput[] | WorkoutExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: WorkoutExerciseCreateOrConnectWithoutExerciseInput | WorkoutExerciseCreateOrConnectWithoutExerciseInput[]
    upsert?: WorkoutExerciseUpsertWithWhereUniqueWithoutExerciseInput | WorkoutExerciseUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: WorkoutExerciseCreateManyExerciseInputEnvelope
    set?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    disconnect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    delete?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    connect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    update?: WorkoutExerciseUpdateWithWhereUniqueWithoutExerciseInput | WorkoutExerciseUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: WorkoutExerciseUpdateManyWithWhereWithoutExerciseInput | WorkoutExerciseUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: WorkoutExerciseScalarWhereInput | WorkoutExerciseScalarWhereInput[]
  }

  export type WorkoutExerciseUncheckedUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<WorkoutExerciseCreateWithoutExerciseInput, WorkoutExerciseUncheckedCreateWithoutExerciseInput> | WorkoutExerciseCreateWithoutExerciseInput[] | WorkoutExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: WorkoutExerciseCreateOrConnectWithoutExerciseInput | WorkoutExerciseCreateOrConnectWithoutExerciseInput[]
    upsert?: WorkoutExerciseUpsertWithWhereUniqueWithoutExerciseInput | WorkoutExerciseUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: WorkoutExerciseCreateManyExerciseInputEnvelope
    set?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    disconnect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    delete?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    connect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    update?: WorkoutExerciseUpdateWithWhereUniqueWithoutExerciseInput | WorkoutExerciseUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: WorkoutExerciseUpdateManyWithWhereWithoutExerciseInput | WorkoutExerciseUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: WorkoutExerciseScalarWhereInput | WorkoutExerciseScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOwnTrainingsInput = {
    create?: XOR<UserCreateWithoutOwnTrainingsInput, UserUncheckedCreateWithoutOwnTrainingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnTrainingsInput
    connect?: UserWhereUniqueInput
  }

  export type WorkoutExerciseCreateNestedManyWithoutWorkoutInput = {
    create?: XOR<WorkoutExerciseCreateWithoutWorkoutInput, WorkoutExerciseUncheckedCreateWithoutWorkoutInput> | WorkoutExerciseCreateWithoutWorkoutInput[] | WorkoutExerciseUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: WorkoutExerciseCreateOrConnectWithoutWorkoutInput | WorkoutExerciseCreateOrConnectWithoutWorkoutInput[]
    createMany?: WorkoutExerciseCreateManyWorkoutInputEnvelope
    connect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
  }

  export type ProgramWorkoutCreateNestedManyWithoutWorkoutInput = {
    create?: XOR<ProgramWorkoutCreateWithoutWorkoutInput, ProgramWorkoutUncheckedCreateWithoutWorkoutInput> | ProgramWorkoutCreateWithoutWorkoutInput[] | ProgramWorkoutUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: ProgramWorkoutCreateOrConnectWithoutWorkoutInput | ProgramWorkoutCreateOrConnectWithoutWorkoutInput[]
    createMany?: ProgramWorkoutCreateManyWorkoutInputEnvelope
    connect?: ProgramWorkoutWhereUniqueInput | ProgramWorkoutWhereUniqueInput[]
  }

  export type LogCreateNestedManyWithoutWorkoutInput = {
    create?: XOR<LogCreateWithoutWorkoutInput, LogUncheckedCreateWithoutWorkoutInput> | LogCreateWithoutWorkoutInput[] | LogUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: LogCreateOrConnectWithoutWorkoutInput | LogCreateOrConnectWithoutWorkoutInput[]
    createMany?: LogCreateManyWorkoutInputEnvelope
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
  }

  export type WorkoutExerciseUncheckedCreateNestedManyWithoutWorkoutInput = {
    create?: XOR<WorkoutExerciseCreateWithoutWorkoutInput, WorkoutExerciseUncheckedCreateWithoutWorkoutInput> | WorkoutExerciseCreateWithoutWorkoutInput[] | WorkoutExerciseUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: WorkoutExerciseCreateOrConnectWithoutWorkoutInput | WorkoutExerciseCreateOrConnectWithoutWorkoutInput[]
    createMany?: WorkoutExerciseCreateManyWorkoutInputEnvelope
    connect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
  }

  export type ProgramWorkoutUncheckedCreateNestedManyWithoutWorkoutInput = {
    create?: XOR<ProgramWorkoutCreateWithoutWorkoutInput, ProgramWorkoutUncheckedCreateWithoutWorkoutInput> | ProgramWorkoutCreateWithoutWorkoutInput[] | ProgramWorkoutUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: ProgramWorkoutCreateOrConnectWithoutWorkoutInput | ProgramWorkoutCreateOrConnectWithoutWorkoutInput[]
    createMany?: ProgramWorkoutCreateManyWorkoutInputEnvelope
    connect?: ProgramWorkoutWhereUniqueInput | ProgramWorkoutWhereUniqueInput[]
  }

  export type LogUncheckedCreateNestedManyWithoutWorkoutInput = {
    create?: XOR<LogCreateWithoutWorkoutInput, LogUncheckedCreateWithoutWorkoutInput> | LogCreateWithoutWorkoutInput[] | LogUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: LogCreateOrConnectWithoutWorkoutInput | LogCreateOrConnectWithoutWorkoutInput[]
    createMany?: LogCreateManyWorkoutInputEnvelope
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutOwnTrainingsNestedInput = {
    create?: XOR<UserCreateWithoutOwnTrainingsInput, UserUncheckedCreateWithoutOwnTrainingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnTrainingsInput
    upsert?: UserUpsertWithoutOwnTrainingsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOwnTrainingsInput, UserUpdateWithoutOwnTrainingsInput>, UserUncheckedUpdateWithoutOwnTrainingsInput>
  }

  export type WorkoutExerciseUpdateManyWithoutWorkoutNestedInput = {
    create?: XOR<WorkoutExerciseCreateWithoutWorkoutInput, WorkoutExerciseUncheckedCreateWithoutWorkoutInput> | WorkoutExerciseCreateWithoutWorkoutInput[] | WorkoutExerciseUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: WorkoutExerciseCreateOrConnectWithoutWorkoutInput | WorkoutExerciseCreateOrConnectWithoutWorkoutInput[]
    upsert?: WorkoutExerciseUpsertWithWhereUniqueWithoutWorkoutInput | WorkoutExerciseUpsertWithWhereUniqueWithoutWorkoutInput[]
    createMany?: WorkoutExerciseCreateManyWorkoutInputEnvelope
    set?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    disconnect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    delete?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    connect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    update?: WorkoutExerciseUpdateWithWhereUniqueWithoutWorkoutInput | WorkoutExerciseUpdateWithWhereUniqueWithoutWorkoutInput[]
    updateMany?: WorkoutExerciseUpdateManyWithWhereWithoutWorkoutInput | WorkoutExerciseUpdateManyWithWhereWithoutWorkoutInput[]
    deleteMany?: WorkoutExerciseScalarWhereInput | WorkoutExerciseScalarWhereInput[]
  }

  export type ProgramWorkoutUpdateManyWithoutWorkoutNestedInput = {
    create?: XOR<ProgramWorkoutCreateWithoutWorkoutInput, ProgramWorkoutUncheckedCreateWithoutWorkoutInput> | ProgramWorkoutCreateWithoutWorkoutInput[] | ProgramWorkoutUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: ProgramWorkoutCreateOrConnectWithoutWorkoutInput | ProgramWorkoutCreateOrConnectWithoutWorkoutInput[]
    upsert?: ProgramWorkoutUpsertWithWhereUniqueWithoutWorkoutInput | ProgramWorkoutUpsertWithWhereUniqueWithoutWorkoutInput[]
    createMany?: ProgramWorkoutCreateManyWorkoutInputEnvelope
    set?: ProgramWorkoutWhereUniqueInput | ProgramWorkoutWhereUniqueInput[]
    disconnect?: ProgramWorkoutWhereUniqueInput | ProgramWorkoutWhereUniqueInput[]
    delete?: ProgramWorkoutWhereUniqueInput | ProgramWorkoutWhereUniqueInput[]
    connect?: ProgramWorkoutWhereUniqueInput | ProgramWorkoutWhereUniqueInput[]
    update?: ProgramWorkoutUpdateWithWhereUniqueWithoutWorkoutInput | ProgramWorkoutUpdateWithWhereUniqueWithoutWorkoutInput[]
    updateMany?: ProgramWorkoutUpdateManyWithWhereWithoutWorkoutInput | ProgramWorkoutUpdateManyWithWhereWithoutWorkoutInput[]
    deleteMany?: ProgramWorkoutScalarWhereInput | ProgramWorkoutScalarWhereInput[]
  }

  export type LogUpdateManyWithoutWorkoutNestedInput = {
    create?: XOR<LogCreateWithoutWorkoutInput, LogUncheckedCreateWithoutWorkoutInput> | LogCreateWithoutWorkoutInput[] | LogUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: LogCreateOrConnectWithoutWorkoutInput | LogCreateOrConnectWithoutWorkoutInput[]
    upsert?: LogUpsertWithWhereUniqueWithoutWorkoutInput | LogUpsertWithWhereUniqueWithoutWorkoutInput[]
    createMany?: LogCreateManyWorkoutInputEnvelope
    set?: LogWhereUniqueInput | LogWhereUniqueInput[]
    disconnect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    delete?: LogWhereUniqueInput | LogWhereUniqueInput[]
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    update?: LogUpdateWithWhereUniqueWithoutWorkoutInput | LogUpdateWithWhereUniqueWithoutWorkoutInput[]
    updateMany?: LogUpdateManyWithWhereWithoutWorkoutInput | LogUpdateManyWithWhereWithoutWorkoutInput[]
    deleteMany?: LogScalarWhereInput | LogScalarWhereInput[]
  }

  export type WorkoutExerciseUncheckedUpdateManyWithoutWorkoutNestedInput = {
    create?: XOR<WorkoutExerciseCreateWithoutWorkoutInput, WorkoutExerciseUncheckedCreateWithoutWorkoutInput> | WorkoutExerciseCreateWithoutWorkoutInput[] | WorkoutExerciseUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: WorkoutExerciseCreateOrConnectWithoutWorkoutInput | WorkoutExerciseCreateOrConnectWithoutWorkoutInput[]
    upsert?: WorkoutExerciseUpsertWithWhereUniqueWithoutWorkoutInput | WorkoutExerciseUpsertWithWhereUniqueWithoutWorkoutInput[]
    createMany?: WorkoutExerciseCreateManyWorkoutInputEnvelope
    set?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    disconnect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    delete?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    connect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    update?: WorkoutExerciseUpdateWithWhereUniqueWithoutWorkoutInput | WorkoutExerciseUpdateWithWhereUniqueWithoutWorkoutInput[]
    updateMany?: WorkoutExerciseUpdateManyWithWhereWithoutWorkoutInput | WorkoutExerciseUpdateManyWithWhereWithoutWorkoutInput[]
    deleteMany?: WorkoutExerciseScalarWhereInput | WorkoutExerciseScalarWhereInput[]
  }

  export type ProgramWorkoutUncheckedUpdateManyWithoutWorkoutNestedInput = {
    create?: XOR<ProgramWorkoutCreateWithoutWorkoutInput, ProgramWorkoutUncheckedCreateWithoutWorkoutInput> | ProgramWorkoutCreateWithoutWorkoutInput[] | ProgramWorkoutUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: ProgramWorkoutCreateOrConnectWithoutWorkoutInput | ProgramWorkoutCreateOrConnectWithoutWorkoutInput[]
    upsert?: ProgramWorkoutUpsertWithWhereUniqueWithoutWorkoutInput | ProgramWorkoutUpsertWithWhereUniqueWithoutWorkoutInput[]
    createMany?: ProgramWorkoutCreateManyWorkoutInputEnvelope
    set?: ProgramWorkoutWhereUniqueInput | ProgramWorkoutWhereUniqueInput[]
    disconnect?: ProgramWorkoutWhereUniqueInput | ProgramWorkoutWhereUniqueInput[]
    delete?: ProgramWorkoutWhereUniqueInput | ProgramWorkoutWhereUniqueInput[]
    connect?: ProgramWorkoutWhereUniqueInput | ProgramWorkoutWhereUniqueInput[]
    update?: ProgramWorkoutUpdateWithWhereUniqueWithoutWorkoutInput | ProgramWorkoutUpdateWithWhereUniqueWithoutWorkoutInput[]
    updateMany?: ProgramWorkoutUpdateManyWithWhereWithoutWorkoutInput | ProgramWorkoutUpdateManyWithWhereWithoutWorkoutInput[]
    deleteMany?: ProgramWorkoutScalarWhereInput | ProgramWorkoutScalarWhereInput[]
  }

  export type LogUncheckedUpdateManyWithoutWorkoutNestedInput = {
    create?: XOR<LogCreateWithoutWorkoutInput, LogUncheckedCreateWithoutWorkoutInput> | LogCreateWithoutWorkoutInput[] | LogUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: LogCreateOrConnectWithoutWorkoutInput | LogCreateOrConnectWithoutWorkoutInput[]
    upsert?: LogUpsertWithWhereUniqueWithoutWorkoutInput | LogUpsertWithWhereUniqueWithoutWorkoutInput[]
    createMany?: LogCreateManyWorkoutInputEnvelope
    set?: LogWhereUniqueInput | LogWhereUniqueInput[]
    disconnect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    delete?: LogWhereUniqueInput | LogWhereUniqueInput[]
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    update?: LogUpdateWithWhereUniqueWithoutWorkoutInput | LogUpdateWithWhereUniqueWithoutWorkoutInput[]
    updateMany?: LogUpdateManyWithWhereWithoutWorkoutInput | LogUpdateManyWithWhereWithoutWorkoutInput[]
    deleteMany?: LogScalarWhereInput | LogScalarWhereInput[]
  }

  export type WorkoutCreateNestedOneWithoutWorkoutExercisesInput = {
    create?: XOR<WorkoutCreateWithoutWorkoutExercisesInput, WorkoutUncheckedCreateWithoutWorkoutExercisesInput>
    connectOrCreate?: WorkoutCreateOrConnectWithoutWorkoutExercisesInput
    connect?: WorkoutWhereUniqueInput
  }

  export type ExerciseCreateNestedOneWithoutWorkoutExercisesInput = {
    create?: XOR<ExerciseCreateWithoutWorkoutExercisesInput, ExerciseUncheckedCreateWithoutWorkoutExercisesInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutWorkoutExercisesInput
    connect?: ExerciseWhereUniqueInput
  }

  export type WorkoutUpdateOneRequiredWithoutWorkoutExercisesNestedInput = {
    create?: XOR<WorkoutCreateWithoutWorkoutExercisesInput, WorkoutUncheckedCreateWithoutWorkoutExercisesInput>
    connectOrCreate?: WorkoutCreateOrConnectWithoutWorkoutExercisesInput
    upsert?: WorkoutUpsertWithoutWorkoutExercisesInput
    connect?: WorkoutWhereUniqueInput
    update?: XOR<XOR<WorkoutUpdateToOneWithWhereWithoutWorkoutExercisesInput, WorkoutUpdateWithoutWorkoutExercisesInput>, WorkoutUncheckedUpdateWithoutWorkoutExercisesInput>
  }

  export type ExerciseUpdateOneRequiredWithoutWorkoutExercisesNestedInput = {
    create?: XOR<ExerciseCreateWithoutWorkoutExercisesInput, ExerciseUncheckedCreateWithoutWorkoutExercisesInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutWorkoutExercisesInput
    upsert?: ExerciseUpsertWithoutWorkoutExercisesInput
    connect?: ExerciseWhereUniqueInput
    update?: XOR<XOR<ExerciseUpdateToOneWithWhereWithoutWorkoutExercisesInput, ExerciseUpdateWithoutWorkoutExercisesInput>, ExerciseUncheckedUpdateWithoutWorkoutExercisesInput>
  }

  export type UserCreateNestedOneWithoutOwnProgramsInput = {
    create?: XOR<UserCreateWithoutOwnProgramsInput, UserUncheckedCreateWithoutOwnProgramsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnProgramsInput
    connect?: UserWhereUniqueInput
  }

  export type ProgramWorkoutCreateNestedManyWithoutProgramInput = {
    create?: XOR<ProgramWorkoutCreateWithoutProgramInput, ProgramWorkoutUncheckedCreateWithoutProgramInput> | ProgramWorkoutCreateWithoutProgramInput[] | ProgramWorkoutUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: ProgramWorkoutCreateOrConnectWithoutProgramInput | ProgramWorkoutCreateOrConnectWithoutProgramInput[]
    createMany?: ProgramWorkoutCreateManyProgramInputEnvelope
    connect?: ProgramWorkoutWhereUniqueInput | ProgramWorkoutWhereUniqueInput[]
  }

  export type UserProgramCreateNestedManyWithoutProgramInput = {
    create?: XOR<UserProgramCreateWithoutProgramInput, UserProgramUncheckedCreateWithoutProgramInput> | UserProgramCreateWithoutProgramInput[] | UserProgramUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: UserProgramCreateOrConnectWithoutProgramInput | UserProgramCreateOrConnectWithoutProgramInput[]
    createMany?: UserProgramCreateManyProgramInputEnvelope
    connect?: UserProgramWhereUniqueInput | UserProgramWhereUniqueInput[]
  }

  export type ProgramWorkoutUncheckedCreateNestedManyWithoutProgramInput = {
    create?: XOR<ProgramWorkoutCreateWithoutProgramInput, ProgramWorkoutUncheckedCreateWithoutProgramInput> | ProgramWorkoutCreateWithoutProgramInput[] | ProgramWorkoutUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: ProgramWorkoutCreateOrConnectWithoutProgramInput | ProgramWorkoutCreateOrConnectWithoutProgramInput[]
    createMany?: ProgramWorkoutCreateManyProgramInputEnvelope
    connect?: ProgramWorkoutWhereUniqueInput | ProgramWorkoutWhereUniqueInput[]
  }

  export type UserProgramUncheckedCreateNestedManyWithoutProgramInput = {
    create?: XOR<UserProgramCreateWithoutProgramInput, UserProgramUncheckedCreateWithoutProgramInput> | UserProgramCreateWithoutProgramInput[] | UserProgramUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: UserProgramCreateOrConnectWithoutProgramInput | UserProgramCreateOrConnectWithoutProgramInput[]
    createMany?: UserProgramCreateManyProgramInputEnvelope
    connect?: UserProgramWhereUniqueInput | UserProgramWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutOwnProgramsNestedInput = {
    create?: XOR<UserCreateWithoutOwnProgramsInput, UserUncheckedCreateWithoutOwnProgramsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnProgramsInput
    upsert?: UserUpsertWithoutOwnProgramsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOwnProgramsInput, UserUpdateWithoutOwnProgramsInput>, UserUncheckedUpdateWithoutOwnProgramsInput>
  }

  export type ProgramWorkoutUpdateManyWithoutProgramNestedInput = {
    create?: XOR<ProgramWorkoutCreateWithoutProgramInput, ProgramWorkoutUncheckedCreateWithoutProgramInput> | ProgramWorkoutCreateWithoutProgramInput[] | ProgramWorkoutUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: ProgramWorkoutCreateOrConnectWithoutProgramInput | ProgramWorkoutCreateOrConnectWithoutProgramInput[]
    upsert?: ProgramWorkoutUpsertWithWhereUniqueWithoutProgramInput | ProgramWorkoutUpsertWithWhereUniqueWithoutProgramInput[]
    createMany?: ProgramWorkoutCreateManyProgramInputEnvelope
    set?: ProgramWorkoutWhereUniqueInput | ProgramWorkoutWhereUniqueInput[]
    disconnect?: ProgramWorkoutWhereUniqueInput | ProgramWorkoutWhereUniqueInput[]
    delete?: ProgramWorkoutWhereUniqueInput | ProgramWorkoutWhereUniqueInput[]
    connect?: ProgramWorkoutWhereUniqueInput | ProgramWorkoutWhereUniqueInput[]
    update?: ProgramWorkoutUpdateWithWhereUniqueWithoutProgramInput | ProgramWorkoutUpdateWithWhereUniqueWithoutProgramInput[]
    updateMany?: ProgramWorkoutUpdateManyWithWhereWithoutProgramInput | ProgramWorkoutUpdateManyWithWhereWithoutProgramInput[]
    deleteMany?: ProgramWorkoutScalarWhereInput | ProgramWorkoutScalarWhereInput[]
  }

  export type UserProgramUpdateManyWithoutProgramNestedInput = {
    create?: XOR<UserProgramCreateWithoutProgramInput, UserProgramUncheckedCreateWithoutProgramInput> | UserProgramCreateWithoutProgramInput[] | UserProgramUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: UserProgramCreateOrConnectWithoutProgramInput | UserProgramCreateOrConnectWithoutProgramInput[]
    upsert?: UserProgramUpsertWithWhereUniqueWithoutProgramInput | UserProgramUpsertWithWhereUniqueWithoutProgramInput[]
    createMany?: UserProgramCreateManyProgramInputEnvelope
    set?: UserProgramWhereUniqueInput | UserProgramWhereUniqueInput[]
    disconnect?: UserProgramWhereUniqueInput | UserProgramWhereUniqueInput[]
    delete?: UserProgramWhereUniqueInput | UserProgramWhereUniqueInput[]
    connect?: UserProgramWhereUniqueInput | UserProgramWhereUniqueInput[]
    update?: UserProgramUpdateWithWhereUniqueWithoutProgramInput | UserProgramUpdateWithWhereUniqueWithoutProgramInput[]
    updateMany?: UserProgramUpdateManyWithWhereWithoutProgramInput | UserProgramUpdateManyWithWhereWithoutProgramInput[]
    deleteMany?: UserProgramScalarWhereInput | UserProgramScalarWhereInput[]
  }

  export type ProgramWorkoutUncheckedUpdateManyWithoutProgramNestedInput = {
    create?: XOR<ProgramWorkoutCreateWithoutProgramInput, ProgramWorkoutUncheckedCreateWithoutProgramInput> | ProgramWorkoutCreateWithoutProgramInput[] | ProgramWorkoutUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: ProgramWorkoutCreateOrConnectWithoutProgramInput | ProgramWorkoutCreateOrConnectWithoutProgramInput[]
    upsert?: ProgramWorkoutUpsertWithWhereUniqueWithoutProgramInput | ProgramWorkoutUpsertWithWhereUniqueWithoutProgramInput[]
    createMany?: ProgramWorkoutCreateManyProgramInputEnvelope
    set?: ProgramWorkoutWhereUniqueInput | ProgramWorkoutWhereUniqueInput[]
    disconnect?: ProgramWorkoutWhereUniqueInput | ProgramWorkoutWhereUniqueInput[]
    delete?: ProgramWorkoutWhereUniqueInput | ProgramWorkoutWhereUniqueInput[]
    connect?: ProgramWorkoutWhereUniqueInput | ProgramWorkoutWhereUniqueInput[]
    update?: ProgramWorkoutUpdateWithWhereUniqueWithoutProgramInput | ProgramWorkoutUpdateWithWhereUniqueWithoutProgramInput[]
    updateMany?: ProgramWorkoutUpdateManyWithWhereWithoutProgramInput | ProgramWorkoutUpdateManyWithWhereWithoutProgramInput[]
    deleteMany?: ProgramWorkoutScalarWhereInput | ProgramWorkoutScalarWhereInput[]
  }

  export type UserProgramUncheckedUpdateManyWithoutProgramNestedInput = {
    create?: XOR<UserProgramCreateWithoutProgramInput, UserProgramUncheckedCreateWithoutProgramInput> | UserProgramCreateWithoutProgramInput[] | UserProgramUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: UserProgramCreateOrConnectWithoutProgramInput | UserProgramCreateOrConnectWithoutProgramInput[]
    upsert?: UserProgramUpsertWithWhereUniqueWithoutProgramInput | UserProgramUpsertWithWhereUniqueWithoutProgramInput[]
    createMany?: UserProgramCreateManyProgramInputEnvelope
    set?: UserProgramWhereUniqueInput | UserProgramWhereUniqueInput[]
    disconnect?: UserProgramWhereUniqueInput | UserProgramWhereUniqueInput[]
    delete?: UserProgramWhereUniqueInput | UserProgramWhereUniqueInput[]
    connect?: UserProgramWhereUniqueInput | UserProgramWhereUniqueInput[]
    update?: UserProgramUpdateWithWhereUniqueWithoutProgramInput | UserProgramUpdateWithWhereUniqueWithoutProgramInput[]
    updateMany?: UserProgramUpdateManyWithWhereWithoutProgramInput | UserProgramUpdateManyWithWhereWithoutProgramInput[]
    deleteMany?: UserProgramScalarWhereInput | UserProgramScalarWhereInput[]
  }

  export type ProgramCreateNestedOneWithoutProgramWorkoutsInput = {
    create?: XOR<ProgramCreateWithoutProgramWorkoutsInput, ProgramUncheckedCreateWithoutProgramWorkoutsInput>
    connectOrCreate?: ProgramCreateOrConnectWithoutProgramWorkoutsInput
    connect?: ProgramWhereUniqueInput
  }

  export type WorkoutCreateNestedOneWithoutProgramWorkoutsInput = {
    create?: XOR<WorkoutCreateWithoutProgramWorkoutsInput, WorkoutUncheckedCreateWithoutProgramWorkoutsInput>
    connectOrCreate?: WorkoutCreateOrConnectWithoutProgramWorkoutsInput
    connect?: WorkoutWhereUniqueInput
  }

  export type EnumWeekDayFieldUpdateOperationsInput = {
    set?: $Enums.WeekDay
  }

  export type ProgramUpdateOneRequiredWithoutProgramWorkoutsNestedInput = {
    create?: XOR<ProgramCreateWithoutProgramWorkoutsInput, ProgramUncheckedCreateWithoutProgramWorkoutsInput>
    connectOrCreate?: ProgramCreateOrConnectWithoutProgramWorkoutsInput
    upsert?: ProgramUpsertWithoutProgramWorkoutsInput
    connect?: ProgramWhereUniqueInput
    update?: XOR<XOR<ProgramUpdateToOneWithWhereWithoutProgramWorkoutsInput, ProgramUpdateWithoutProgramWorkoutsInput>, ProgramUncheckedUpdateWithoutProgramWorkoutsInput>
  }

  export type WorkoutUpdateOneRequiredWithoutProgramWorkoutsNestedInput = {
    create?: XOR<WorkoutCreateWithoutProgramWorkoutsInput, WorkoutUncheckedCreateWithoutProgramWorkoutsInput>
    connectOrCreate?: WorkoutCreateOrConnectWithoutProgramWorkoutsInput
    upsert?: WorkoutUpsertWithoutProgramWorkoutsInput
    connect?: WorkoutWhereUniqueInput
    update?: XOR<XOR<WorkoutUpdateToOneWithWhereWithoutProgramWorkoutsInput, WorkoutUpdateWithoutProgramWorkoutsInput>, WorkoutUncheckedUpdateWithoutProgramWorkoutsInput>
  }

  export type UserCreateNestedOneWithoutProgramsInput = {
    create?: XOR<UserCreateWithoutProgramsInput, UserUncheckedCreateWithoutProgramsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProgramsInput
    connect?: UserWhereUniqueInput
  }

  export type ProgramCreateNestedOneWithoutUsersInput = {
    create?: XOR<ProgramCreateWithoutUsersInput, ProgramUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ProgramCreateOrConnectWithoutUsersInput
    connect?: ProgramWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProgramsNestedInput = {
    create?: XOR<UserCreateWithoutProgramsInput, UserUncheckedCreateWithoutProgramsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProgramsInput
    upsert?: UserUpsertWithoutProgramsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProgramsInput, UserUpdateWithoutProgramsInput>, UserUncheckedUpdateWithoutProgramsInput>
  }

  export type ProgramUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<ProgramCreateWithoutUsersInput, ProgramUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ProgramCreateOrConnectWithoutUsersInput
    upsert?: ProgramUpsertWithoutUsersInput
    connect?: ProgramWhereUniqueInput
    update?: XOR<XOR<ProgramUpdateToOneWithWhereWithoutUsersInput, ProgramUpdateWithoutUsersInput>, ProgramUncheckedUpdateWithoutUsersInput>
  }

  export type UserCreateNestedOneWithoutLogsInput = {
    create?: XOR<UserCreateWithoutLogsInput, UserUncheckedCreateWithoutLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLogsInput
    connect?: UserWhereUniqueInput
  }

  export type WorkoutCreateNestedOneWithoutLogsInput = {
    create?: XOR<WorkoutCreateWithoutLogsInput, WorkoutUncheckedCreateWithoutLogsInput>
    connectOrCreate?: WorkoutCreateOrConnectWithoutLogsInput
    connect?: WorkoutWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<UserCreateWithoutLogsInput, UserUncheckedCreateWithoutLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLogsInput
    upsert?: UserUpsertWithoutLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLogsInput, UserUpdateWithoutLogsInput>, UserUncheckedUpdateWithoutLogsInput>
  }

  export type WorkoutUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<WorkoutCreateWithoutLogsInput, WorkoutUncheckedCreateWithoutLogsInput>
    connectOrCreate?: WorkoutCreateOrConnectWithoutLogsInput
    upsert?: WorkoutUpsertWithoutLogsInput
    connect?: WorkoutWhereUniqueInput
    update?: XOR<XOR<WorkoutUpdateToOneWithWhereWithoutLogsInput, WorkoutUpdateWithoutLogsInput>, WorkoutUncheckedUpdateWithoutLogsInput>
  }

  export type UserCreateNestedOneWithoutStatsInput = {
    create?: XOR<UserCreateWithoutStatsInput, UserUncheckedCreateWithoutStatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStatsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutStatsNestedInput = {
    create?: XOR<UserCreateWithoutStatsInput, UserUncheckedCreateWithoutStatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStatsInput
    upsert?: UserUpsertWithoutStatsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStatsInput, UserUpdateWithoutStatsInput>, UserUncheckedUpdateWithoutStatsInput>
  }

  export type UserAchievmentCreateNestedManyWithoutAchievmentInput = {
    create?: XOR<UserAchievmentCreateWithoutAchievmentInput, UserAchievmentUncheckedCreateWithoutAchievmentInput> | UserAchievmentCreateWithoutAchievmentInput[] | UserAchievmentUncheckedCreateWithoutAchievmentInput[]
    connectOrCreate?: UserAchievmentCreateOrConnectWithoutAchievmentInput | UserAchievmentCreateOrConnectWithoutAchievmentInput[]
    createMany?: UserAchievmentCreateManyAchievmentInputEnvelope
    connect?: UserAchievmentWhereUniqueInput | UserAchievmentWhereUniqueInput[]
  }

  export type UserAchievmentUncheckedCreateNestedManyWithoutAchievmentInput = {
    create?: XOR<UserAchievmentCreateWithoutAchievmentInput, UserAchievmentUncheckedCreateWithoutAchievmentInput> | UserAchievmentCreateWithoutAchievmentInput[] | UserAchievmentUncheckedCreateWithoutAchievmentInput[]
    connectOrCreate?: UserAchievmentCreateOrConnectWithoutAchievmentInput | UserAchievmentCreateOrConnectWithoutAchievmentInput[]
    createMany?: UserAchievmentCreateManyAchievmentInputEnvelope
    connect?: UserAchievmentWhereUniqueInput | UserAchievmentWhereUniqueInput[]
  }

  export type UserAchievmentUpdateManyWithoutAchievmentNestedInput = {
    create?: XOR<UserAchievmentCreateWithoutAchievmentInput, UserAchievmentUncheckedCreateWithoutAchievmentInput> | UserAchievmentCreateWithoutAchievmentInput[] | UserAchievmentUncheckedCreateWithoutAchievmentInput[]
    connectOrCreate?: UserAchievmentCreateOrConnectWithoutAchievmentInput | UserAchievmentCreateOrConnectWithoutAchievmentInput[]
    upsert?: UserAchievmentUpsertWithWhereUniqueWithoutAchievmentInput | UserAchievmentUpsertWithWhereUniqueWithoutAchievmentInput[]
    createMany?: UserAchievmentCreateManyAchievmentInputEnvelope
    set?: UserAchievmentWhereUniqueInput | UserAchievmentWhereUniqueInput[]
    disconnect?: UserAchievmentWhereUniqueInput | UserAchievmentWhereUniqueInput[]
    delete?: UserAchievmentWhereUniqueInput | UserAchievmentWhereUniqueInput[]
    connect?: UserAchievmentWhereUniqueInput | UserAchievmentWhereUniqueInput[]
    update?: UserAchievmentUpdateWithWhereUniqueWithoutAchievmentInput | UserAchievmentUpdateWithWhereUniqueWithoutAchievmentInput[]
    updateMany?: UserAchievmentUpdateManyWithWhereWithoutAchievmentInput | UserAchievmentUpdateManyWithWhereWithoutAchievmentInput[]
    deleteMany?: UserAchievmentScalarWhereInput | UserAchievmentScalarWhereInput[]
  }

  export type UserAchievmentUncheckedUpdateManyWithoutAchievmentNestedInput = {
    create?: XOR<UserAchievmentCreateWithoutAchievmentInput, UserAchievmentUncheckedCreateWithoutAchievmentInput> | UserAchievmentCreateWithoutAchievmentInput[] | UserAchievmentUncheckedCreateWithoutAchievmentInput[]
    connectOrCreate?: UserAchievmentCreateOrConnectWithoutAchievmentInput | UserAchievmentCreateOrConnectWithoutAchievmentInput[]
    upsert?: UserAchievmentUpsertWithWhereUniqueWithoutAchievmentInput | UserAchievmentUpsertWithWhereUniqueWithoutAchievmentInput[]
    createMany?: UserAchievmentCreateManyAchievmentInputEnvelope
    set?: UserAchievmentWhereUniqueInput | UserAchievmentWhereUniqueInput[]
    disconnect?: UserAchievmentWhereUniqueInput | UserAchievmentWhereUniqueInput[]
    delete?: UserAchievmentWhereUniqueInput | UserAchievmentWhereUniqueInput[]
    connect?: UserAchievmentWhereUniqueInput | UserAchievmentWhereUniqueInput[]
    update?: UserAchievmentUpdateWithWhereUniqueWithoutAchievmentInput | UserAchievmentUpdateWithWhereUniqueWithoutAchievmentInput[]
    updateMany?: UserAchievmentUpdateManyWithWhereWithoutAchievmentInput | UserAchievmentUpdateManyWithWhereWithoutAchievmentInput[]
    deleteMany?: UserAchievmentScalarWhereInput | UserAchievmentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAchievmentsInput = {
    create?: XOR<UserCreateWithoutAchievmentsInput, UserUncheckedCreateWithoutAchievmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAchievmentsInput
    connect?: UserWhereUniqueInput
  }

  export type AchievmentCreateNestedOneWithoutUsersInput = {
    create?: XOR<AchievmentCreateWithoutUsersInput, AchievmentUncheckedCreateWithoutUsersInput>
    connectOrCreate?: AchievmentCreateOrConnectWithoutUsersInput
    connect?: AchievmentWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAchievmentsNestedInput = {
    create?: XOR<UserCreateWithoutAchievmentsInput, UserUncheckedCreateWithoutAchievmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAchievmentsInput
    upsert?: UserUpsertWithoutAchievmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAchievmentsInput, UserUpdateWithoutAchievmentsInput>, UserUncheckedUpdateWithoutAchievmentsInput>
  }

  export type AchievmentUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<AchievmentCreateWithoutUsersInput, AchievmentUncheckedCreateWithoutUsersInput>
    connectOrCreate?: AchievmentCreateOrConnectWithoutUsersInput
    upsert?: AchievmentUpsertWithoutUsersInput
    connect?: AchievmentWhereUniqueInput
    update?: XOR<XOR<AchievmentUpdateToOneWithWhereWithoutUsersInput, AchievmentUpdateWithoutUsersInput>, AchievmentUncheckedUpdateWithoutUsersInput>
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
    not?: NestedStringFilter<$PrismaModel> | string
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

  export type NestedEnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | null
    notIn?: $Enums.Gender[] | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | null
    notIn?: $Enums.Gender[] | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumExerciseTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ExerciseType | EnumExerciseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ExerciseType[]
    notIn?: $Enums.ExerciseType[]
    not?: NestedEnumExerciseTypeFilter<$PrismaModel> | $Enums.ExerciseType
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumExerciseTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExerciseType | EnumExerciseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ExerciseType[]
    notIn?: $Enums.ExerciseType[]
    not?: NestedEnumExerciseTypeWithAggregatesFilter<$PrismaModel> | $Enums.ExerciseType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExerciseTypeFilter<$PrismaModel>
    _max?: NestedEnumExerciseTypeFilter<$PrismaModel>
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumWeekDayFilter<$PrismaModel = never> = {
    equals?: $Enums.WeekDay | EnumWeekDayFieldRefInput<$PrismaModel>
    in?: $Enums.WeekDay[]
    notIn?: $Enums.WeekDay[]
    not?: NestedEnumWeekDayFilter<$PrismaModel> | $Enums.WeekDay
  }

  export type NestedEnumWeekDayWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WeekDay | EnumWeekDayFieldRefInput<$PrismaModel>
    in?: $Enums.WeekDay[]
    notIn?: $Enums.WeekDay[]
    not?: NestedEnumWeekDayWithAggregatesFilter<$PrismaModel> | $Enums.WeekDay
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWeekDayFilter<$PrismaModel>
    _max?: NestedEnumWeekDayFilter<$PrismaModel>
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

  export type UserProgramCreateWithoutUserInput = {
    program: ProgramCreateNestedOneWithoutUsersInput
  }

  export type UserProgramUncheckedCreateWithoutUserInput = {
    id?: number
    programId: number
  }

  export type UserProgramCreateOrConnectWithoutUserInput = {
    where: UserProgramWhereUniqueInput
    create: XOR<UserProgramCreateWithoutUserInput, UserProgramUncheckedCreateWithoutUserInput>
  }

  export type UserProgramCreateManyUserInputEnvelope = {
    data: UserProgramCreateManyUserInput | UserProgramCreateManyUserInput[]
  }

  export type ProgramCreateWithoutUserInput = {
    name: string
    description?: string | null
    programWorkouts?: ProgramWorkoutCreateNestedManyWithoutProgramInput
    users?: UserProgramCreateNestedManyWithoutProgramInput
  }

  export type ProgramUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    description?: string | null
    programWorkouts?: ProgramWorkoutUncheckedCreateNestedManyWithoutProgramInput
    users?: UserProgramUncheckedCreateNestedManyWithoutProgramInput
  }

  export type ProgramCreateOrConnectWithoutUserInput = {
    where: ProgramWhereUniqueInput
    create: XOR<ProgramCreateWithoutUserInput, ProgramUncheckedCreateWithoutUserInput>
  }

  export type ProgramCreateManyUserInputEnvelope = {
    data: ProgramCreateManyUserInput | ProgramCreateManyUserInput[]
  }

  export type WorkoutCreateWithoutUserInput = {
    name: string
    type: $Enums.ExerciseType
    description?: string | null
    workoutExercises?: WorkoutExerciseCreateNestedManyWithoutWorkoutInput
    programWorkouts?: ProgramWorkoutCreateNestedManyWithoutWorkoutInput
    logs?: LogCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    type: $Enums.ExerciseType
    description?: string | null
    workoutExercises?: WorkoutExerciseUncheckedCreateNestedManyWithoutWorkoutInput
    programWorkouts?: ProgramWorkoutUncheckedCreateNestedManyWithoutWorkoutInput
    logs?: LogUncheckedCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutCreateOrConnectWithoutUserInput = {
    where: WorkoutWhereUniqueInput
    create: XOR<WorkoutCreateWithoutUserInput, WorkoutUncheckedCreateWithoutUserInput>
  }

  export type WorkoutCreateManyUserInputEnvelope = {
    data: WorkoutCreateManyUserInput | WorkoutCreateManyUserInput[]
  }

  export type LogCreateWithoutUserInput = {
    calories?: number | null
    timestamp?: Date | string
    workout: WorkoutCreateNestedOneWithoutLogsInput
  }

  export type LogUncheckedCreateWithoutUserInput = {
    id?: number
    workoutId: number
    calories?: number | null
    timestamp?: Date | string
  }

  export type LogCreateOrConnectWithoutUserInput = {
    where: LogWhereUniqueInput
    create: XOR<LogCreateWithoutUserInput, LogUncheckedCreateWithoutUserInput>
  }

  export type LogCreateManyUserInputEnvelope = {
    data: LogCreateManyUserInput | LogCreateManyUserInput[]
  }

  export type StatisticCreateWithoutUserInput = {
    totalCalories?: number
    totalWorkouts?: number
    favoriteWorkout?: string | null
    lastActivity?: Date | string
  }

  export type StatisticUncheckedCreateWithoutUserInput = {
    id?: number
    totalCalories?: number
    totalWorkouts?: number
    favoriteWorkout?: string | null
    lastActivity?: Date | string
  }

  export type StatisticCreateOrConnectWithoutUserInput = {
    where: StatisticWhereUniqueInput
    create: XOR<StatisticCreateWithoutUserInput, StatisticUncheckedCreateWithoutUserInput>
  }

  export type UserAchievmentCreateWithoutUserInput = {
    timestamp?: Date | string
    achievment: AchievmentCreateNestedOneWithoutUsersInput
  }

  export type UserAchievmentUncheckedCreateWithoutUserInput = {
    id?: number
    achievmentId: number
    timestamp?: Date | string
  }

  export type UserAchievmentCreateOrConnectWithoutUserInput = {
    where: UserAchievmentWhereUniqueInput
    create: XOR<UserAchievmentCreateWithoutUserInput, UserAchievmentUncheckedCreateWithoutUserInput>
  }

  export type UserAchievmentCreateManyUserInputEnvelope = {
    data: UserAchievmentCreateManyUserInput | UserAchievmentCreateManyUserInput[]
  }

  export type UserProgramUpsertWithWhereUniqueWithoutUserInput = {
    where: UserProgramWhereUniqueInput
    update: XOR<UserProgramUpdateWithoutUserInput, UserProgramUncheckedUpdateWithoutUserInput>
    create: XOR<UserProgramCreateWithoutUserInput, UserProgramUncheckedCreateWithoutUserInput>
  }

  export type UserProgramUpdateWithWhereUniqueWithoutUserInput = {
    where: UserProgramWhereUniqueInput
    data: XOR<UserProgramUpdateWithoutUserInput, UserProgramUncheckedUpdateWithoutUserInput>
  }

  export type UserProgramUpdateManyWithWhereWithoutUserInput = {
    where: UserProgramScalarWhereInput
    data: XOR<UserProgramUpdateManyMutationInput, UserProgramUncheckedUpdateManyWithoutUserInput>
  }

  export type UserProgramScalarWhereInput = {
    AND?: UserProgramScalarWhereInput | UserProgramScalarWhereInput[]
    OR?: UserProgramScalarWhereInput[]
    NOT?: UserProgramScalarWhereInput | UserProgramScalarWhereInput[]
    id?: IntFilter<"UserProgram"> | number
    programId?: IntFilter<"UserProgram"> | number
    userId?: IntFilter<"UserProgram"> | number
  }

  export type ProgramUpsertWithWhereUniqueWithoutUserInput = {
    where: ProgramWhereUniqueInput
    update: XOR<ProgramUpdateWithoutUserInput, ProgramUncheckedUpdateWithoutUserInput>
    create: XOR<ProgramCreateWithoutUserInput, ProgramUncheckedCreateWithoutUserInput>
  }

  export type ProgramUpdateWithWhereUniqueWithoutUserInput = {
    where: ProgramWhereUniqueInput
    data: XOR<ProgramUpdateWithoutUserInput, ProgramUncheckedUpdateWithoutUserInput>
  }

  export type ProgramUpdateManyWithWhereWithoutUserInput = {
    where: ProgramScalarWhereInput
    data: XOR<ProgramUpdateManyMutationInput, ProgramUncheckedUpdateManyWithoutUserInput>
  }

  export type ProgramScalarWhereInput = {
    AND?: ProgramScalarWhereInput | ProgramScalarWhereInput[]
    OR?: ProgramScalarWhereInput[]
    NOT?: ProgramScalarWhereInput | ProgramScalarWhereInput[]
    id?: IntFilter<"Program"> | number
    name?: StringFilter<"Program"> | string
    description?: StringNullableFilter<"Program"> | string | null
    userId?: IntNullableFilter<"Program"> | number | null
  }

  export type WorkoutUpsertWithWhereUniqueWithoutUserInput = {
    where: WorkoutWhereUniqueInput
    update: XOR<WorkoutUpdateWithoutUserInput, WorkoutUncheckedUpdateWithoutUserInput>
    create: XOR<WorkoutCreateWithoutUserInput, WorkoutUncheckedCreateWithoutUserInput>
  }

  export type WorkoutUpdateWithWhereUniqueWithoutUserInput = {
    where: WorkoutWhereUniqueInput
    data: XOR<WorkoutUpdateWithoutUserInput, WorkoutUncheckedUpdateWithoutUserInput>
  }

  export type WorkoutUpdateManyWithWhereWithoutUserInput = {
    where: WorkoutScalarWhereInput
    data: XOR<WorkoutUpdateManyMutationInput, WorkoutUncheckedUpdateManyWithoutUserInput>
  }

  export type WorkoutScalarWhereInput = {
    AND?: WorkoutScalarWhereInput | WorkoutScalarWhereInput[]
    OR?: WorkoutScalarWhereInput[]
    NOT?: WorkoutScalarWhereInput | WorkoutScalarWhereInput[]
    id?: IntFilter<"Workout"> | number
    name?: StringFilter<"Workout"> | string
    type?: EnumExerciseTypeFilter<"Workout"> | $Enums.ExerciseType
    description?: StringNullableFilter<"Workout"> | string | null
    userId?: IntNullableFilter<"Workout"> | number | null
  }

  export type LogUpsertWithWhereUniqueWithoutUserInput = {
    where: LogWhereUniqueInput
    update: XOR<LogUpdateWithoutUserInput, LogUncheckedUpdateWithoutUserInput>
    create: XOR<LogCreateWithoutUserInput, LogUncheckedCreateWithoutUserInput>
  }

  export type LogUpdateWithWhereUniqueWithoutUserInput = {
    where: LogWhereUniqueInput
    data: XOR<LogUpdateWithoutUserInput, LogUncheckedUpdateWithoutUserInput>
  }

  export type LogUpdateManyWithWhereWithoutUserInput = {
    where: LogScalarWhereInput
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyWithoutUserInput>
  }

  export type LogScalarWhereInput = {
    AND?: LogScalarWhereInput | LogScalarWhereInput[]
    OR?: LogScalarWhereInput[]
    NOT?: LogScalarWhereInput | LogScalarWhereInput[]
    id?: IntFilter<"Log"> | number
    userId?: IntFilter<"Log"> | number
    workoutId?: IntFilter<"Log"> | number
    calories?: FloatNullableFilter<"Log"> | number | null
    timestamp?: DateTimeFilter<"Log"> | Date | string
  }

  export type StatisticUpsertWithoutUserInput = {
    update: XOR<StatisticUpdateWithoutUserInput, StatisticUncheckedUpdateWithoutUserInput>
    create: XOR<StatisticCreateWithoutUserInput, StatisticUncheckedCreateWithoutUserInput>
    where?: StatisticWhereInput
  }

  export type StatisticUpdateToOneWithWhereWithoutUserInput = {
    where?: StatisticWhereInput
    data: XOR<StatisticUpdateWithoutUserInput, StatisticUncheckedUpdateWithoutUserInput>
  }

  export type StatisticUpdateWithoutUserInput = {
    totalCalories?: IntFieldUpdateOperationsInput | number
    totalWorkouts?: IntFieldUpdateOperationsInput | number
    favoriteWorkout?: NullableStringFieldUpdateOperationsInput | string | null
    lastActivity?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatisticUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalCalories?: IntFieldUpdateOperationsInput | number
    totalWorkouts?: IntFieldUpdateOperationsInput | number
    favoriteWorkout?: NullableStringFieldUpdateOperationsInput | string | null
    lastActivity?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAchievmentUpsertWithWhereUniqueWithoutUserInput = {
    where: UserAchievmentWhereUniqueInput
    update: XOR<UserAchievmentUpdateWithoutUserInput, UserAchievmentUncheckedUpdateWithoutUserInput>
    create: XOR<UserAchievmentCreateWithoutUserInput, UserAchievmentUncheckedCreateWithoutUserInput>
  }

  export type UserAchievmentUpdateWithWhereUniqueWithoutUserInput = {
    where: UserAchievmentWhereUniqueInput
    data: XOR<UserAchievmentUpdateWithoutUserInput, UserAchievmentUncheckedUpdateWithoutUserInput>
  }

  export type UserAchievmentUpdateManyWithWhereWithoutUserInput = {
    where: UserAchievmentScalarWhereInput
    data: XOR<UserAchievmentUpdateManyMutationInput, UserAchievmentUncheckedUpdateManyWithoutUserInput>
  }

  export type UserAchievmentScalarWhereInput = {
    AND?: UserAchievmentScalarWhereInput | UserAchievmentScalarWhereInput[]
    OR?: UserAchievmentScalarWhereInput[]
    NOT?: UserAchievmentScalarWhereInput | UserAchievmentScalarWhereInput[]
    id?: IntFilter<"UserAchievment"> | number
    userId?: IntFilter<"UserAchievment"> | number
    achievmentId?: IntFilter<"UserAchievment"> | number
    timestamp?: DateTimeFilter<"UserAchievment"> | Date | string
  }

  export type WorkoutExerciseCreateWithoutExerciseInput = {
    repetitions?: number | null
    distance?: number | null
    workout: WorkoutCreateNestedOneWithoutWorkoutExercisesInput
  }

  export type WorkoutExerciseUncheckedCreateWithoutExerciseInput = {
    id?: number
    workoutId: number
    repetitions?: number | null
    distance?: number | null
  }

  export type WorkoutExerciseCreateOrConnectWithoutExerciseInput = {
    where: WorkoutExerciseWhereUniqueInput
    create: XOR<WorkoutExerciseCreateWithoutExerciseInput, WorkoutExerciseUncheckedCreateWithoutExerciseInput>
  }

  export type WorkoutExerciseCreateManyExerciseInputEnvelope = {
    data: WorkoutExerciseCreateManyExerciseInput | WorkoutExerciseCreateManyExerciseInput[]
  }

  export type WorkoutExerciseUpsertWithWhereUniqueWithoutExerciseInput = {
    where: WorkoutExerciseWhereUniqueInput
    update: XOR<WorkoutExerciseUpdateWithoutExerciseInput, WorkoutExerciseUncheckedUpdateWithoutExerciseInput>
    create: XOR<WorkoutExerciseCreateWithoutExerciseInput, WorkoutExerciseUncheckedCreateWithoutExerciseInput>
  }

  export type WorkoutExerciseUpdateWithWhereUniqueWithoutExerciseInput = {
    where: WorkoutExerciseWhereUniqueInput
    data: XOR<WorkoutExerciseUpdateWithoutExerciseInput, WorkoutExerciseUncheckedUpdateWithoutExerciseInput>
  }

  export type WorkoutExerciseUpdateManyWithWhereWithoutExerciseInput = {
    where: WorkoutExerciseScalarWhereInput
    data: XOR<WorkoutExerciseUpdateManyMutationInput, WorkoutExerciseUncheckedUpdateManyWithoutExerciseInput>
  }

  export type WorkoutExerciseScalarWhereInput = {
    AND?: WorkoutExerciseScalarWhereInput | WorkoutExerciseScalarWhereInput[]
    OR?: WorkoutExerciseScalarWhereInput[]
    NOT?: WorkoutExerciseScalarWhereInput | WorkoutExerciseScalarWhereInput[]
    id?: IntFilter<"WorkoutExercise"> | number
    workoutId?: IntFilter<"WorkoutExercise"> | number
    exerciseId?: IntFilter<"WorkoutExercise"> | number
    repetitions?: IntNullableFilter<"WorkoutExercise"> | number | null
    distance?: IntNullableFilter<"WorkoutExercise"> | number | null
  }

  export type UserCreateWithoutOwnTrainingsInput = {
    email: string
    name: string
    surname: string
    password: string
    access: string
    card_type: string
    age?: number | null
    gender?: $Enums.Gender | null
    height?: number | null
    weight?: number | null
    programs?: UserProgramCreateNestedManyWithoutUserInput
    ownPrograms?: ProgramCreateNestedManyWithoutUserInput
    logs?: LogCreateNestedManyWithoutUserInput
    stats?: StatisticCreateNestedOneWithoutUserInput
    achievments?: UserAchievmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOwnTrainingsInput = {
    id?: number
    email: string
    name: string
    surname: string
    password: string
    access: string
    card_type: string
    age?: number | null
    gender?: $Enums.Gender | null
    height?: number | null
    weight?: number | null
    programs?: UserProgramUncheckedCreateNestedManyWithoutUserInput
    ownPrograms?: ProgramUncheckedCreateNestedManyWithoutUserInput
    logs?: LogUncheckedCreateNestedManyWithoutUserInput
    stats?: StatisticUncheckedCreateNestedOneWithoutUserInput
    achievments?: UserAchievmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOwnTrainingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnTrainingsInput, UserUncheckedCreateWithoutOwnTrainingsInput>
  }

  export type WorkoutExerciseCreateWithoutWorkoutInput = {
    repetitions?: number | null
    distance?: number | null
    exercise: ExerciseCreateNestedOneWithoutWorkoutExercisesInput
  }

  export type WorkoutExerciseUncheckedCreateWithoutWorkoutInput = {
    id?: number
    exerciseId: number
    repetitions?: number | null
    distance?: number | null
  }

  export type WorkoutExerciseCreateOrConnectWithoutWorkoutInput = {
    where: WorkoutExerciseWhereUniqueInput
    create: XOR<WorkoutExerciseCreateWithoutWorkoutInput, WorkoutExerciseUncheckedCreateWithoutWorkoutInput>
  }

  export type WorkoutExerciseCreateManyWorkoutInputEnvelope = {
    data: WorkoutExerciseCreateManyWorkoutInput | WorkoutExerciseCreateManyWorkoutInput[]
  }

  export type ProgramWorkoutCreateWithoutWorkoutInput = {
    weekDay: $Enums.WeekDay
    program: ProgramCreateNestedOneWithoutProgramWorkoutsInput
  }

  export type ProgramWorkoutUncheckedCreateWithoutWorkoutInput = {
    id?: number
    programId: number
    weekDay: $Enums.WeekDay
  }

  export type ProgramWorkoutCreateOrConnectWithoutWorkoutInput = {
    where: ProgramWorkoutWhereUniqueInput
    create: XOR<ProgramWorkoutCreateWithoutWorkoutInput, ProgramWorkoutUncheckedCreateWithoutWorkoutInput>
  }

  export type ProgramWorkoutCreateManyWorkoutInputEnvelope = {
    data: ProgramWorkoutCreateManyWorkoutInput | ProgramWorkoutCreateManyWorkoutInput[]
  }

  export type LogCreateWithoutWorkoutInput = {
    calories?: number | null
    timestamp?: Date | string
    user: UserCreateNestedOneWithoutLogsInput
  }

  export type LogUncheckedCreateWithoutWorkoutInput = {
    id?: number
    userId: number
    calories?: number | null
    timestamp?: Date | string
  }

  export type LogCreateOrConnectWithoutWorkoutInput = {
    where: LogWhereUniqueInput
    create: XOR<LogCreateWithoutWorkoutInput, LogUncheckedCreateWithoutWorkoutInput>
  }

  export type LogCreateManyWorkoutInputEnvelope = {
    data: LogCreateManyWorkoutInput | LogCreateManyWorkoutInput[]
  }

  export type UserUpsertWithoutOwnTrainingsInput = {
    update: XOR<UserUpdateWithoutOwnTrainingsInput, UserUncheckedUpdateWithoutOwnTrainingsInput>
    create: XOR<UserCreateWithoutOwnTrainingsInput, UserUncheckedCreateWithoutOwnTrainingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOwnTrainingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOwnTrainingsInput, UserUncheckedUpdateWithoutOwnTrainingsInput>
  }

  export type UserUpdateWithoutOwnTrainingsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    access?: StringFieldUpdateOperationsInput | string
    card_type?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    programs?: UserProgramUpdateManyWithoutUserNestedInput
    ownPrograms?: ProgramUpdateManyWithoutUserNestedInput
    logs?: LogUpdateManyWithoutUserNestedInput
    stats?: StatisticUpdateOneWithoutUserNestedInput
    achievments?: UserAchievmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnTrainingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    access?: StringFieldUpdateOperationsInput | string
    card_type?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    programs?: UserProgramUncheckedUpdateManyWithoutUserNestedInput
    ownPrograms?: ProgramUncheckedUpdateManyWithoutUserNestedInput
    logs?: LogUncheckedUpdateManyWithoutUserNestedInput
    stats?: StatisticUncheckedUpdateOneWithoutUserNestedInput
    achievments?: UserAchievmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorkoutExerciseUpsertWithWhereUniqueWithoutWorkoutInput = {
    where: WorkoutExerciseWhereUniqueInput
    update: XOR<WorkoutExerciseUpdateWithoutWorkoutInput, WorkoutExerciseUncheckedUpdateWithoutWorkoutInput>
    create: XOR<WorkoutExerciseCreateWithoutWorkoutInput, WorkoutExerciseUncheckedCreateWithoutWorkoutInput>
  }

  export type WorkoutExerciseUpdateWithWhereUniqueWithoutWorkoutInput = {
    where: WorkoutExerciseWhereUniqueInput
    data: XOR<WorkoutExerciseUpdateWithoutWorkoutInput, WorkoutExerciseUncheckedUpdateWithoutWorkoutInput>
  }

  export type WorkoutExerciseUpdateManyWithWhereWithoutWorkoutInput = {
    where: WorkoutExerciseScalarWhereInput
    data: XOR<WorkoutExerciseUpdateManyMutationInput, WorkoutExerciseUncheckedUpdateManyWithoutWorkoutInput>
  }

  export type ProgramWorkoutUpsertWithWhereUniqueWithoutWorkoutInput = {
    where: ProgramWorkoutWhereUniqueInput
    update: XOR<ProgramWorkoutUpdateWithoutWorkoutInput, ProgramWorkoutUncheckedUpdateWithoutWorkoutInput>
    create: XOR<ProgramWorkoutCreateWithoutWorkoutInput, ProgramWorkoutUncheckedCreateWithoutWorkoutInput>
  }

  export type ProgramWorkoutUpdateWithWhereUniqueWithoutWorkoutInput = {
    where: ProgramWorkoutWhereUniqueInput
    data: XOR<ProgramWorkoutUpdateWithoutWorkoutInput, ProgramWorkoutUncheckedUpdateWithoutWorkoutInput>
  }

  export type ProgramWorkoutUpdateManyWithWhereWithoutWorkoutInput = {
    where: ProgramWorkoutScalarWhereInput
    data: XOR<ProgramWorkoutUpdateManyMutationInput, ProgramWorkoutUncheckedUpdateManyWithoutWorkoutInput>
  }

  export type ProgramWorkoutScalarWhereInput = {
    AND?: ProgramWorkoutScalarWhereInput | ProgramWorkoutScalarWhereInput[]
    OR?: ProgramWorkoutScalarWhereInput[]
    NOT?: ProgramWorkoutScalarWhereInput | ProgramWorkoutScalarWhereInput[]
    id?: IntFilter<"ProgramWorkout"> | number
    programId?: IntFilter<"ProgramWorkout"> | number
    workoutId?: IntFilter<"ProgramWorkout"> | number
    weekDay?: EnumWeekDayFilter<"ProgramWorkout"> | $Enums.WeekDay
  }

  export type LogUpsertWithWhereUniqueWithoutWorkoutInput = {
    where: LogWhereUniqueInput
    update: XOR<LogUpdateWithoutWorkoutInput, LogUncheckedUpdateWithoutWorkoutInput>
    create: XOR<LogCreateWithoutWorkoutInput, LogUncheckedCreateWithoutWorkoutInput>
  }

  export type LogUpdateWithWhereUniqueWithoutWorkoutInput = {
    where: LogWhereUniqueInput
    data: XOR<LogUpdateWithoutWorkoutInput, LogUncheckedUpdateWithoutWorkoutInput>
  }

  export type LogUpdateManyWithWhereWithoutWorkoutInput = {
    where: LogScalarWhereInput
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyWithoutWorkoutInput>
  }

  export type WorkoutCreateWithoutWorkoutExercisesInput = {
    name: string
    type: $Enums.ExerciseType
    description?: string | null
    user?: UserCreateNestedOneWithoutOwnTrainingsInput
    programWorkouts?: ProgramWorkoutCreateNestedManyWithoutWorkoutInput
    logs?: LogCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutUncheckedCreateWithoutWorkoutExercisesInput = {
    id?: number
    name: string
    type: $Enums.ExerciseType
    description?: string | null
    userId?: number | null
    programWorkouts?: ProgramWorkoutUncheckedCreateNestedManyWithoutWorkoutInput
    logs?: LogUncheckedCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutCreateOrConnectWithoutWorkoutExercisesInput = {
    where: WorkoutWhereUniqueInput
    create: XOR<WorkoutCreateWithoutWorkoutExercisesInput, WorkoutUncheckedCreateWithoutWorkoutExercisesInput>
  }

  export type ExerciseCreateWithoutWorkoutExercisesInput = {
    name: string
    type: $Enums.ExerciseType
    calories: string
    description?: string | null
  }

  export type ExerciseUncheckedCreateWithoutWorkoutExercisesInput = {
    id?: number
    name: string
    type: $Enums.ExerciseType
    calories: string
    description?: string | null
  }

  export type ExerciseCreateOrConnectWithoutWorkoutExercisesInput = {
    where: ExerciseWhereUniqueInput
    create: XOR<ExerciseCreateWithoutWorkoutExercisesInput, ExerciseUncheckedCreateWithoutWorkoutExercisesInput>
  }

  export type WorkoutUpsertWithoutWorkoutExercisesInput = {
    update: XOR<WorkoutUpdateWithoutWorkoutExercisesInput, WorkoutUncheckedUpdateWithoutWorkoutExercisesInput>
    create: XOR<WorkoutCreateWithoutWorkoutExercisesInput, WorkoutUncheckedCreateWithoutWorkoutExercisesInput>
    where?: WorkoutWhereInput
  }

  export type WorkoutUpdateToOneWithWhereWithoutWorkoutExercisesInput = {
    where?: WorkoutWhereInput
    data: XOR<WorkoutUpdateWithoutWorkoutExercisesInput, WorkoutUncheckedUpdateWithoutWorkoutExercisesInput>
  }

  export type WorkoutUpdateWithoutWorkoutExercisesInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneWithoutOwnTrainingsNestedInput
    programWorkouts?: ProgramWorkoutUpdateManyWithoutWorkoutNestedInput
    logs?: LogUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutUncheckedUpdateWithoutWorkoutExercisesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    programWorkouts?: ProgramWorkoutUncheckedUpdateManyWithoutWorkoutNestedInput
    logs?: LogUncheckedUpdateManyWithoutWorkoutNestedInput
  }

  export type ExerciseUpsertWithoutWorkoutExercisesInput = {
    update: XOR<ExerciseUpdateWithoutWorkoutExercisesInput, ExerciseUncheckedUpdateWithoutWorkoutExercisesInput>
    create: XOR<ExerciseCreateWithoutWorkoutExercisesInput, ExerciseUncheckedCreateWithoutWorkoutExercisesInput>
    where?: ExerciseWhereInput
  }

  export type ExerciseUpdateToOneWithWhereWithoutWorkoutExercisesInput = {
    where?: ExerciseWhereInput
    data: XOR<ExerciseUpdateWithoutWorkoutExercisesInput, ExerciseUncheckedUpdateWithoutWorkoutExercisesInput>
  }

  export type ExerciseUpdateWithoutWorkoutExercisesInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    calories?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExerciseUncheckedUpdateWithoutWorkoutExercisesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    calories?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateWithoutOwnProgramsInput = {
    email: string
    name: string
    surname: string
    password: string
    access: string
    card_type: string
    age?: number | null
    gender?: $Enums.Gender | null
    height?: number | null
    weight?: number | null
    programs?: UserProgramCreateNestedManyWithoutUserInput
    ownTrainings?: WorkoutCreateNestedManyWithoutUserInput
    logs?: LogCreateNestedManyWithoutUserInput
    stats?: StatisticCreateNestedOneWithoutUserInput
    achievments?: UserAchievmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOwnProgramsInput = {
    id?: number
    email: string
    name: string
    surname: string
    password: string
    access: string
    card_type: string
    age?: number | null
    gender?: $Enums.Gender | null
    height?: number | null
    weight?: number | null
    programs?: UserProgramUncheckedCreateNestedManyWithoutUserInput
    ownTrainings?: WorkoutUncheckedCreateNestedManyWithoutUserInput
    logs?: LogUncheckedCreateNestedManyWithoutUserInput
    stats?: StatisticUncheckedCreateNestedOneWithoutUserInput
    achievments?: UserAchievmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOwnProgramsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnProgramsInput, UserUncheckedCreateWithoutOwnProgramsInput>
  }

  export type ProgramWorkoutCreateWithoutProgramInput = {
    weekDay: $Enums.WeekDay
    workout: WorkoutCreateNestedOneWithoutProgramWorkoutsInput
  }

  export type ProgramWorkoutUncheckedCreateWithoutProgramInput = {
    id?: number
    workoutId: number
    weekDay: $Enums.WeekDay
  }

  export type ProgramWorkoutCreateOrConnectWithoutProgramInput = {
    where: ProgramWorkoutWhereUniqueInput
    create: XOR<ProgramWorkoutCreateWithoutProgramInput, ProgramWorkoutUncheckedCreateWithoutProgramInput>
  }

  export type ProgramWorkoutCreateManyProgramInputEnvelope = {
    data: ProgramWorkoutCreateManyProgramInput | ProgramWorkoutCreateManyProgramInput[]
  }

  export type UserProgramCreateWithoutProgramInput = {
    user: UserCreateNestedOneWithoutProgramsInput
  }

  export type UserProgramUncheckedCreateWithoutProgramInput = {
    id?: number
    userId: number
  }

  export type UserProgramCreateOrConnectWithoutProgramInput = {
    where: UserProgramWhereUniqueInput
    create: XOR<UserProgramCreateWithoutProgramInput, UserProgramUncheckedCreateWithoutProgramInput>
  }

  export type UserProgramCreateManyProgramInputEnvelope = {
    data: UserProgramCreateManyProgramInput | UserProgramCreateManyProgramInput[]
  }

  export type UserUpsertWithoutOwnProgramsInput = {
    update: XOR<UserUpdateWithoutOwnProgramsInput, UserUncheckedUpdateWithoutOwnProgramsInput>
    create: XOR<UserCreateWithoutOwnProgramsInput, UserUncheckedCreateWithoutOwnProgramsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOwnProgramsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOwnProgramsInput, UserUncheckedUpdateWithoutOwnProgramsInput>
  }

  export type UserUpdateWithoutOwnProgramsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    access?: StringFieldUpdateOperationsInput | string
    card_type?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    programs?: UserProgramUpdateManyWithoutUserNestedInput
    ownTrainings?: WorkoutUpdateManyWithoutUserNestedInput
    logs?: LogUpdateManyWithoutUserNestedInput
    stats?: StatisticUpdateOneWithoutUserNestedInput
    achievments?: UserAchievmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnProgramsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    access?: StringFieldUpdateOperationsInput | string
    card_type?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    programs?: UserProgramUncheckedUpdateManyWithoutUserNestedInput
    ownTrainings?: WorkoutUncheckedUpdateManyWithoutUserNestedInput
    logs?: LogUncheckedUpdateManyWithoutUserNestedInput
    stats?: StatisticUncheckedUpdateOneWithoutUserNestedInput
    achievments?: UserAchievmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProgramWorkoutUpsertWithWhereUniqueWithoutProgramInput = {
    where: ProgramWorkoutWhereUniqueInput
    update: XOR<ProgramWorkoutUpdateWithoutProgramInput, ProgramWorkoutUncheckedUpdateWithoutProgramInput>
    create: XOR<ProgramWorkoutCreateWithoutProgramInput, ProgramWorkoutUncheckedCreateWithoutProgramInput>
  }

  export type ProgramWorkoutUpdateWithWhereUniqueWithoutProgramInput = {
    where: ProgramWorkoutWhereUniqueInput
    data: XOR<ProgramWorkoutUpdateWithoutProgramInput, ProgramWorkoutUncheckedUpdateWithoutProgramInput>
  }

  export type ProgramWorkoutUpdateManyWithWhereWithoutProgramInput = {
    where: ProgramWorkoutScalarWhereInput
    data: XOR<ProgramWorkoutUpdateManyMutationInput, ProgramWorkoutUncheckedUpdateManyWithoutProgramInput>
  }

  export type UserProgramUpsertWithWhereUniqueWithoutProgramInput = {
    where: UserProgramWhereUniqueInput
    update: XOR<UserProgramUpdateWithoutProgramInput, UserProgramUncheckedUpdateWithoutProgramInput>
    create: XOR<UserProgramCreateWithoutProgramInput, UserProgramUncheckedCreateWithoutProgramInput>
  }

  export type UserProgramUpdateWithWhereUniqueWithoutProgramInput = {
    where: UserProgramWhereUniqueInput
    data: XOR<UserProgramUpdateWithoutProgramInput, UserProgramUncheckedUpdateWithoutProgramInput>
  }

  export type UserProgramUpdateManyWithWhereWithoutProgramInput = {
    where: UserProgramScalarWhereInput
    data: XOR<UserProgramUpdateManyMutationInput, UserProgramUncheckedUpdateManyWithoutProgramInput>
  }

  export type ProgramCreateWithoutProgramWorkoutsInput = {
    name: string
    description?: string | null
    user?: UserCreateNestedOneWithoutOwnProgramsInput
    users?: UserProgramCreateNestedManyWithoutProgramInput
  }

  export type ProgramUncheckedCreateWithoutProgramWorkoutsInput = {
    id?: number
    name: string
    description?: string | null
    userId?: number | null
    users?: UserProgramUncheckedCreateNestedManyWithoutProgramInput
  }

  export type ProgramCreateOrConnectWithoutProgramWorkoutsInput = {
    where: ProgramWhereUniqueInput
    create: XOR<ProgramCreateWithoutProgramWorkoutsInput, ProgramUncheckedCreateWithoutProgramWorkoutsInput>
  }

  export type WorkoutCreateWithoutProgramWorkoutsInput = {
    name: string
    type: $Enums.ExerciseType
    description?: string | null
    user?: UserCreateNestedOneWithoutOwnTrainingsInput
    workoutExercises?: WorkoutExerciseCreateNestedManyWithoutWorkoutInput
    logs?: LogCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutUncheckedCreateWithoutProgramWorkoutsInput = {
    id?: number
    name: string
    type: $Enums.ExerciseType
    description?: string | null
    userId?: number | null
    workoutExercises?: WorkoutExerciseUncheckedCreateNestedManyWithoutWorkoutInput
    logs?: LogUncheckedCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutCreateOrConnectWithoutProgramWorkoutsInput = {
    where: WorkoutWhereUniqueInput
    create: XOR<WorkoutCreateWithoutProgramWorkoutsInput, WorkoutUncheckedCreateWithoutProgramWorkoutsInput>
  }

  export type ProgramUpsertWithoutProgramWorkoutsInput = {
    update: XOR<ProgramUpdateWithoutProgramWorkoutsInput, ProgramUncheckedUpdateWithoutProgramWorkoutsInput>
    create: XOR<ProgramCreateWithoutProgramWorkoutsInput, ProgramUncheckedCreateWithoutProgramWorkoutsInput>
    where?: ProgramWhereInput
  }

  export type ProgramUpdateToOneWithWhereWithoutProgramWorkoutsInput = {
    where?: ProgramWhereInput
    data: XOR<ProgramUpdateWithoutProgramWorkoutsInput, ProgramUncheckedUpdateWithoutProgramWorkoutsInput>
  }

  export type ProgramUpdateWithoutProgramWorkoutsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneWithoutOwnProgramsNestedInput
    users?: UserProgramUpdateManyWithoutProgramNestedInput
  }

  export type ProgramUncheckedUpdateWithoutProgramWorkoutsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    users?: UserProgramUncheckedUpdateManyWithoutProgramNestedInput
  }

  export type WorkoutUpsertWithoutProgramWorkoutsInput = {
    update: XOR<WorkoutUpdateWithoutProgramWorkoutsInput, WorkoutUncheckedUpdateWithoutProgramWorkoutsInput>
    create: XOR<WorkoutCreateWithoutProgramWorkoutsInput, WorkoutUncheckedCreateWithoutProgramWorkoutsInput>
    where?: WorkoutWhereInput
  }

  export type WorkoutUpdateToOneWithWhereWithoutProgramWorkoutsInput = {
    where?: WorkoutWhereInput
    data: XOR<WorkoutUpdateWithoutProgramWorkoutsInput, WorkoutUncheckedUpdateWithoutProgramWorkoutsInput>
  }

  export type WorkoutUpdateWithoutProgramWorkoutsInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneWithoutOwnTrainingsNestedInput
    workoutExercises?: WorkoutExerciseUpdateManyWithoutWorkoutNestedInput
    logs?: LogUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutUncheckedUpdateWithoutProgramWorkoutsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    workoutExercises?: WorkoutExerciseUncheckedUpdateManyWithoutWorkoutNestedInput
    logs?: LogUncheckedUpdateManyWithoutWorkoutNestedInput
  }

  export type UserCreateWithoutProgramsInput = {
    email: string
    name: string
    surname: string
    password: string
    access: string
    card_type: string
    age?: number | null
    gender?: $Enums.Gender | null
    height?: number | null
    weight?: number | null
    ownPrograms?: ProgramCreateNestedManyWithoutUserInput
    ownTrainings?: WorkoutCreateNestedManyWithoutUserInput
    logs?: LogCreateNestedManyWithoutUserInput
    stats?: StatisticCreateNestedOneWithoutUserInput
    achievments?: UserAchievmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProgramsInput = {
    id?: number
    email: string
    name: string
    surname: string
    password: string
    access: string
    card_type: string
    age?: number | null
    gender?: $Enums.Gender | null
    height?: number | null
    weight?: number | null
    ownPrograms?: ProgramUncheckedCreateNestedManyWithoutUserInput
    ownTrainings?: WorkoutUncheckedCreateNestedManyWithoutUserInput
    logs?: LogUncheckedCreateNestedManyWithoutUserInput
    stats?: StatisticUncheckedCreateNestedOneWithoutUserInput
    achievments?: UserAchievmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProgramsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProgramsInput, UserUncheckedCreateWithoutProgramsInput>
  }

  export type ProgramCreateWithoutUsersInput = {
    name: string
    description?: string | null
    user?: UserCreateNestedOneWithoutOwnProgramsInput
    programWorkouts?: ProgramWorkoutCreateNestedManyWithoutProgramInput
  }

  export type ProgramUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    description?: string | null
    userId?: number | null
    programWorkouts?: ProgramWorkoutUncheckedCreateNestedManyWithoutProgramInput
  }

  export type ProgramCreateOrConnectWithoutUsersInput = {
    where: ProgramWhereUniqueInput
    create: XOR<ProgramCreateWithoutUsersInput, ProgramUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutProgramsInput = {
    update: XOR<UserUpdateWithoutProgramsInput, UserUncheckedUpdateWithoutProgramsInput>
    create: XOR<UserCreateWithoutProgramsInput, UserUncheckedCreateWithoutProgramsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProgramsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProgramsInput, UserUncheckedUpdateWithoutProgramsInput>
  }

  export type UserUpdateWithoutProgramsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    access?: StringFieldUpdateOperationsInput | string
    card_type?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    ownPrograms?: ProgramUpdateManyWithoutUserNestedInput
    ownTrainings?: WorkoutUpdateManyWithoutUserNestedInput
    logs?: LogUpdateManyWithoutUserNestedInput
    stats?: StatisticUpdateOneWithoutUserNestedInput
    achievments?: UserAchievmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProgramsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    access?: StringFieldUpdateOperationsInput | string
    card_type?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    ownPrograms?: ProgramUncheckedUpdateManyWithoutUserNestedInput
    ownTrainings?: WorkoutUncheckedUpdateManyWithoutUserNestedInput
    logs?: LogUncheckedUpdateManyWithoutUserNestedInput
    stats?: StatisticUncheckedUpdateOneWithoutUserNestedInput
    achievments?: UserAchievmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProgramUpsertWithoutUsersInput = {
    update: XOR<ProgramUpdateWithoutUsersInput, ProgramUncheckedUpdateWithoutUsersInput>
    create: XOR<ProgramCreateWithoutUsersInput, ProgramUncheckedCreateWithoutUsersInput>
    where?: ProgramWhereInput
  }

  export type ProgramUpdateToOneWithWhereWithoutUsersInput = {
    where?: ProgramWhereInput
    data: XOR<ProgramUpdateWithoutUsersInput, ProgramUncheckedUpdateWithoutUsersInput>
  }

  export type ProgramUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneWithoutOwnProgramsNestedInput
    programWorkouts?: ProgramWorkoutUpdateManyWithoutProgramNestedInput
  }

  export type ProgramUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    programWorkouts?: ProgramWorkoutUncheckedUpdateManyWithoutProgramNestedInput
  }

  export type UserCreateWithoutLogsInput = {
    email: string
    name: string
    surname: string
    password: string
    access: string
    card_type: string
    age?: number | null
    gender?: $Enums.Gender | null
    height?: number | null
    weight?: number | null
    programs?: UserProgramCreateNestedManyWithoutUserInput
    ownPrograms?: ProgramCreateNestedManyWithoutUserInput
    ownTrainings?: WorkoutCreateNestedManyWithoutUserInput
    stats?: StatisticCreateNestedOneWithoutUserInput
    achievments?: UserAchievmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLogsInput = {
    id?: number
    email: string
    name: string
    surname: string
    password: string
    access: string
    card_type: string
    age?: number | null
    gender?: $Enums.Gender | null
    height?: number | null
    weight?: number | null
    programs?: UserProgramUncheckedCreateNestedManyWithoutUserInput
    ownPrograms?: ProgramUncheckedCreateNestedManyWithoutUserInput
    ownTrainings?: WorkoutUncheckedCreateNestedManyWithoutUserInput
    stats?: StatisticUncheckedCreateNestedOneWithoutUserInput
    achievments?: UserAchievmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLogsInput, UserUncheckedCreateWithoutLogsInput>
  }

  export type WorkoutCreateWithoutLogsInput = {
    name: string
    type: $Enums.ExerciseType
    description?: string | null
    user?: UserCreateNestedOneWithoutOwnTrainingsInput
    workoutExercises?: WorkoutExerciseCreateNestedManyWithoutWorkoutInput
    programWorkouts?: ProgramWorkoutCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutUncheckedCreateWithoutLogsInput = {
    id?: number
    name: string
    type: $Enums.ExerciseType
    description?: string | null
    userId?: number | null
    workoutExercises?: WorkoutExerciseUncheckedCreateNestedManyWithoutWorkoutInput
    programWorkouts?: ProgramWorkoutUncheckedCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutCreateOrConnectWithoutLogsInput = {
    where: WorkoutWhereUniqueInput
    create: XOR<WorkoutCreateWithoutLogsInput, WorkoutUncheckedCreateWithoutLogsInput>
  }

  export type UserUpsertWithoutLogsInput = {
    update: XOR<UserUpdateWithoutLogsInput, UserUncheckedUpdateWithoutLogsInput>
    create: XOR<UserCreateWithoutLogsInput, UserUncheckedCreateWithoutLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLogsInput, UserUncheckedUpdateWithoutLogsInput>
  }

  export type UserUpdateWithoutLogsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    access?: StringFieldUpdateOperationsInput | string
    card_type?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    programs?: UserProgramUpdateManyWithoutUserNestedInput
    ownPrograms?: ProgramUpdateManyWithoutUserNestedInput
    ownTrainings?: WorkoutUpdateManyWithoutUserNestedInput
    stats?: StatisticUpdateOneWithoutUserNestedInput
    achievments?: UserAchievmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    access?: StringFieldUpdateOperationsInput | string
    card_type?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    programs?: UserProgramUncheckedUpdateManyWithoutUserNestedInput
    ownPrograms?: ProgramUncheckedUpdateManyWithoutUserNestedInput
    ownTrainings?: WorkoutUncheckedUpdateManyWithoutUserNestedInput
    stats?: StatisticUncheckedUpdateOneWithoutUserNestedInput
    achievments?: UserAchievmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorkoutUpsertWithoutLogsInput = {
    update: XOR<WorkoutUpdateWithoutLogsInput, WorkoutUncheckedUpdateWithoutLogsInput>
    create: XOR<WorkoutCreateWithoutLogsInput, WorkoutUncheckedCreateWithoutLogsInput>
    where?: WorkoutWhereInput
  }

  export type WorkoutUpdateToOneWithWhereWithoutLogsInput = {
    where?: WorkoutWhereInput
    data: XOR<WorkoutUpdateWithoutLogsInput, WorkoutUncheckedUpdateWithoutLogsInput>
  }

  export type WorkoutUpdateWithoutLogsInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneWithoutOwnTrainingsNestedInput
    workoutExercises?: WorkoutExerciseUpdateManyWithoutWorkoutNestedInput
    programWorkouts?: ProgramWorkoutUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutUncheckedUpdateWithoutLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    workoutExercises?: WorkoutExerciseUncheckedUpdateManyWithoutWorkoutNestedInput
    programWorkouts?: ProgramWorkoutUncheckedUpdateManyWithoutWorkoutNestedInput
  }

  export type UserCreateWithoutStatsInput = {
    email: string
    name: string
    surname: string
    password: string
    access: string
    card_type: string
    age?: number | null
    gender?: $Enums.Gender | null
    height?: number | null
    weight?: number | null
    programs?: UserProgramCreateNestedManyWithoutUserInput
    ownPrograms?: ProgramCreateNestedManyWithoutUserInput
    ownTrainings?: WorkoutCreateNestedManyWithoutUserInput
    logs?: LogCreateNestedManyWithoutUserInput
    achievments?: UserAchievmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStatsInput = {
    id?: number
    email: string
    name: string
    surname: string
    password: string
    access: string
    card_type: string
    age?: number | null
    gender?: $Enums.Gender | null
    height?: number | null
    weight?: number | null
    programs?: UserProgramUncheckedCreateNestedManyWithoutUserInput
    ownPrograms?: ProgramUncheckedCreateNestedManyWithoutUserInput
    ownTrainings?: WorkoutUncheckedCreateNestedManyWithoutUserInput
    logs?: LogUncheckedCreateNestedManyWithoutUserInput
    achievments?: UserAchievmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStatsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStatsInput, UserUncheckedCreateWithoutStatsInput>
  }

  export type UserUpsertWithoutStatsInput = {
    update: XOR<UserUpdateWithoutStatsInput, UserUncheckedUpdateWithoutStatsInput>
    create: XOR<UserCreateWithoutStatsInput, UserUncheckedCreateWithoutStatsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStatsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStatsInput, UserUncheckedUpdateWithoutStatsInput>
  }

  export type UserUpdateWithoutStatsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    access?: StringFieldUpdateOperationsInput | string
    card_type?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    programs?: UserProgramUpdateManyWithoutUserNestedInput
    ownPrograms?: ProgramUpdateManyWithoutUserNestedInput
    ownTrainings?: WorkoutUpdateManyWithoutUserNestedInput
    logs?: LogUpdateManyWithoutUserNestedInput
    achievments?: UserAchievmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    access?: StringFieldUpdateOperationsInput | string
    card_type?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    programs?: UserProgramUncheckedUpdateManyWithoutUserNestedInput
    ownPrograms?: ProgramUncheckedUpdateManyWithoutUserNestedInput
    ownTrainings?: WorkoutUncheckedUpdateManyWithoutUserNestedInput
    logs?: LogUncheckedUpdateManyWithoutUserNestedInput
    achievments?: UserAchievmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserAchievmentCreateWithoutAchievmentInput = {
    timestamp?: Date | string
    user: UserCreateNestedOneWithoutAchievmentsInput
  }

  export type UserAchievmentUncheckedCreateWithoutAchievmentInput = {
    id?: number
    userId: number
    timestamp?: Date | string
  }

  export type UserAchievmentCreateOrConnectWithoutAchievmentInput = {
    where: UserAchievmentWhereUniqueInput
    create: XOR<UserAchievmentCreateWithoutAchievmentInput, UserAchievmentUncheckedCreateWithoutAchievmentInput>
  }

  export type UserAchievmentCreateManyAchievmentInputEnvelope = {
    data: UserAchievmentCreateManyAchievmentInput | UserAchievmentCreateManyAchievmentInput[]
  }

  export type UserAchievmentUpsertWithWhereUniqueWithoutAchievmentInput = {
    where: UserAchievmentWhereUniqueInput
    update: XOR<UserAchievmentUpdateWithoutAchievmentInput, UserAchievmentUncheckedUpdateWithoutAchievmentInput>
    create: XOR<UserAchievmentCreateWithoutAchievmentInput, UserAchievmentUncheckedCreateWithoutAchievmentInput>
  }

  export type UserAchievmentUpdateWithWhereUniqueWithoutAchievmentInput = {
    where: UserAchievmentWhereUniqueInput
    data: XOR<UserAchievmentUpdateWithoutAchievmentInput, UserAchievmentUncheckedUpdateWithoutAchievmentInput>
  }

  export type UserAchievmentUpdateManyWithWhereWithoutAchievmentInput = {
    where: UserAchievmentScalarWhereInput
    data: XOR<UserAchievmentUpdateManyMutationInput, UserAchievmentUncheckedUpdateManyWithoutAchievmentInput>
  }

  export type UserCreateWithoutAchievmentsInput = {
    email: string
    name: string
    surname: string
    password: string
    access: string
    card_type: string
    age?: number | null
    gender?: $Enums.Gender | null
    height?: number | null
    weight?: number | null
    programs?: UserProgramCreateNestedManyWithoutUserInput
    ownPrograms?: ProgramCreateNestedManyWithoutUserInput
    ownTrainings?: WorkoutCreateNestedManyWithoutUserInput
    logs?: LogCreateNestedManyWithoutUserInput
    stats?: StatisticCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAchievmentsInput = {
    id?: number
    email: string
    name: string
    surname: string
    password: string
    access: string
    card_type: string
    age?: number | null
    gender?: $Enums.Gender | null
    height?: number | null
    weight?: number | null
    programs?: UserProgramUncheckedCreateNestedManyWithoutUserInput
    ownPrograms?: ProgramUncheckedCreateNestedManyWithoutUserInput
    ownTrainings?: WorkoutUncheckedCreateNestedManyWithoutUserInput
    logs?: LogUncheckedCreateNestedManyWithoutUserInput
    stats?: StatisticUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAchievmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAchievmentsInput, UserUncheckedCreateWithoutAchievmentsInput>
  }

  export type AchievmentCreateWithoutUsersInput = {
    name: string
    description: string
    type: string
    condition: number
  }

  export type AchievmentUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    description: string
    type: string
    condition: number
  }

  export type AchievmentCreateOrConnectWithoutUsersInput = {
    where: AchievmentWhereUniqueInput
    create: XOR<AchievmentCreateWithoutUsersInput, AchievmentUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutAchievmentsInput = {
    update: XOR<UserUpdateWithoutAchievmentsInput, UserUncheckedUpdateWithoutAchievmentsInput>
    create: XOR<UserCreateWithoutAchievmentsInput, UserUncheckedCreateWithoutAchievmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAchievmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAchievmentsInput, UserUncheckedUpdateWithoutAchievmentsInput>
  }

  export type UserUpdateWithoutAchievmentsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    access?: StringFieldUpdateOperationsInput | string
    card_type?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    programs?: UserProgramUpdateManyWithoutUserNestedInput
    ownPrograms?: ProgramUpdateManyWithoutUserNestedInput
    ownTrainings?: WorkoutUpdateManyWithoutUserNestedInput
    logs?: LogUpdateManyWithoutUserNestedInput
    stats?: StatisticUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAchievmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    access?: StringFieldUpdateOperationsInput | string
    card_type?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    programs?: UserProgramUncheckedUpdateManyWithoutUserNestedInput
    ownPrograms?: ProgramUncheckedUpdateManyWithoutUserNestedInput
    ownTrainings?: WorkoutUncheckedUpdateManyWithoutUserNestedInput
    logs?: LogUncheckedUpdateManyWithoutUserNestedInput
    stats?: StatisticUncheckedUpdateOneWithoutUserNestedInput
  }

  export type AchievmentUpsertWithoutUsersInput = {
    update: XOR<AchievmentUpdateWithoutUsersInput, AchievmentUncheckedUpdateWithoutUsersInput>
    create: XOR<AchievmentCreateWithoutUsersInput, AchievmentUncheckedCreateWithoutUsersInput>
    where?: AchievmentWhereInput
  }

  export type AchievmentUpdateToOneWithWhereWithoutUsersInput = {
    where?: AchievmentWhereInput
    data: XOR<AchievmentUpdateWithoutUsersInput, AchievmentUncheckedUpdateWithoutUsersInput>
  }

  export type AchievmentUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    condition?: IntFieldUpdateOperationsInput | number
  }

  export type AchievmentUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    condition?: IntFieldUpdateOperationsInput | number
  }

  export type UserProgramCreateManyUserInput = {
    id?: number
    programId: number
  }

  export type ProgramCreateManyUserInput = {
    id?: number
    name: string
    description?: string | null
  }

  export type WorkoutCreateManyUserInput = {
    id?: number
    name: string
    type: $Enums.ExerciseType
    description?: string | null
  }

  export type LogCreateManyUserInput = {
    id?: number
    workoutId: number
    calories?: number | null
    timestamp?: Date | string
  }

  export type UserAchievmentCreateManyUserInput = {
    id?: number
    achievmentId: number
    timestamp?: Date | string
  }

  export type UserProgramUpdateWithoutUserInput = {
    program?: ProgramUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserProgramUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    programId?: IntFieldUpdateOperationsInput | number
  }

  export type UserProgramUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    programId?: IntFieldUpdateOperationsInput | number
  }

  export type ProgramUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    programWorkouts?: ProgramWorkoutUpdateManyWithoutProgramNestedInput
    users?: UserProgramUpdateManyWithoutProgramNestedInput
  }

  export type ProgramUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    programWorkouts?: ProgramWorkoutUncheckedUpdateManyWithoutProgramNestedInput
    users?: UserProgramUncheckedUpdateManyWithoutProgramNestedInput
  }

  export type ProgramUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorkoutUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    workoutExercises?: WorkoutExerciseUpdateManyWithoutWorkoutNestedInput
    programWorkouts?: ProgramWorkoutUpdateManyWithoutWorkoutNestedInput
    logs?: LogUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    workoutExercises?: WorkoutExerciseUncheckedUpdateManyWithoutWorkoutNestedInput
    programWorkouts?: ProgramWorkoutUncheckedUpdateManyWithoutWorkoutNestedInput
    logs?: LogUncheckedUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumExerciseTypeFieldUpdateOperationsInput | $Enums.ExerciseType
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LogUpdateWithoutUserInput = {
    calories?: NullableFloatFieldUpdateOperationsInput | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    workout?: WorkoutUpdateOneRequiredWithoutLogsNestedInput
  }

  export type LogUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    workoutId?: IntFieldUpdateOperationsInput | number
    calories?: NullableFloatFieldUpdateOperationsInput | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    workoutId?: IntFieldUpdateOperationsInput | number
    calories?: NullableFloatFieldUpdateOperationsInput | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAchievmentUpdateWithoutUserInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    achievment?: AchievmentUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserAchievmentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    achievmentId?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAchievmentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    achievmentId?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutExerciseCreateManyExerciseInput = {
    id?: number
    workoutId: number
    repetitions?: number | null
    distance?: number | null
  }

  export type WorkoutExerciseUpdateWithoutExerciseInput = {
    repetitions?: NullableIntFieldUpdateOperationsInput | number | null
    distance?: NullableIntFieldUpdateOperationsInput | number | null
    workout?: WorkoutUpdateOneRequiredWithoutWorkoutExercisesNestedInput
  }

  export type WorkoutExerciseUncheckedUpdateWithoutExerciseInput = {
    id?: IntFieldUpdateOperationsInput | number
    workoutId?: IntFieldUpdateOperationsInput | number
    repetitions?: NullableIntFieldUpdateOperationsInput | number | null
    distance?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WorkoutExerciseUncheckedUpdateManyWithoutExerciseInput = {
    id?: IntFieldUpdateOperationsInput | number
    workoutId?: IntFieldUpdateOperationsInput | number
    repetitions?: NullableIntFieldUpdateOperationsInput | number | null
    distance?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WorkoutExerciseCreateManyWorkoutInput = {
    id?: number
    exerciseId: number
    repetitions?: number | null
    distance?: number | null
  }

  export type ProgramWorkoutCreateManyWorkoutInput = {
    id?: number
    programId: number
    weekDay: $Enums.WeekDay
  }

  export type LogCreateManyWorkoutInput = {
    id?: number
    userId: number
    calories?: number | null
    timestamp?: Date | string
  }

  export type WorkoutExerciseUpdateWithoutWorkoutInput = {
    repetitions?: NullableIntFieldUpdateOperationsInput | number | null
    distance?: NullableIntFieldUpdateOperationsInput | number | null
    exercise?: ExerciseUpdateOneRequiredWithoutWorkoutExercisesNestedInput
  }

  export type WorkoutExerciseUncheckedUpdateWithoutWorkoutInput = {
    id?: IntFieldUpdateOperationsInput | number
    exerciseId?: IntFieldUpdateOperationsInput | number
    repetitions?: NullableIntFieldUpdateOperationsInput | number | null
    distance?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WorkoutExerciseUncheckedUpdateManyWithoutWorkoutInput = {
    id?: IntFieldUpdateOperationsInput | number
    exerciseId?: IntFieldUpdateOperationsInput | number
    repetitions?: NullableIntFieldUpdateOperationsInput | number | null
    distance?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProgramWorkoutUpdateWithoutWorkoutInput = {
    weekDay?: EnumWeekDayFieldUpdateOperationsInput | $Enums.WeekDay
    program?: ProgramUpdateOneRequiredWithoutProgramWorkoutsNestedInput
  }

  export type ProgramWorkoutUncheckedUpdateWithoutWorkoutInput = {
    id?: IntFieldUpdateOperationsInput | number
    programId?: IntFieldUpdateOperationsInput | number
    weekDay?: EnumWeekDayFieldUpdateOperationsInput | $Enums.WeekDay
  }

  export type ProgramWorkoutUncheckedUpdateManyWithoutWorkoutInput = {
    id?: IntFieldUpdateOperationsInput | number
    programId?: IntFieldUpdateOperationsInput | number
    weekDay?: EnumWeekDayFieldUpdateOperationsInput | $Enums.WeekDay
  }

  export type LogUpdateWithoutWorkoutInput = {
    calories?: NullableFloatFieldUpdateOperationsInput | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLogsNestedInput
  }

  export type LogUncheckedUpdateWithoutWorkoutInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    calories?: NullableFloatFieldUpdateOperationsInput | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogUncheckedUpdateManyWithoutWorkoutInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    calories?: NullableFloatFieldUpdateOperationsInput | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramWorkoutCreateManyProgramInput = {
    id?: number
    workoutId: number
    weekDay: $Enums.WeekDay
  }

  export type UserProgramCreateManyProgramInput = {
    id?: number
    userId: number
  }

  export type ProgramWorkoutUpdateWithoutProgramInput = {
    weekDay?: EnumWeekDayFieldUpdateOperationsInput | $Enums.WeekDay
    workout?: WorkoutUpdateOneRequiredWithoutProgramWorkoutsNestedInput
  }

  export type ProgramWorkoutUncheckedUpdateWithoutProgramInput = {
    id?: IntFieldUpdateOperationsInput | number
    workoutId?: IntFieldUpdateOperationsInput | number
    weekDay?: EnumWeekDayFieldUpdateOperationsInput | $Enums.WeekDay
  }

  export type ProgramWorkoutUncheckedUpdateManyWithoutProgramInput = {
    id?: IntFieldUpdateOperationsInput | number
    workoutId?: IntFieldUpdateOperationsInput | number
    weekDay?: EnumWeekDayFieldUpdateOperationsInput | $Enums.WeekDay
  }

  export type UserProgramUpdateWithoutProgramInput = {
    user?: UserUpdateOneRequiredWithoutProgramsNestedInput
  }

  export type UserProgramUncheckedUpdateWithoutProgramInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserProgramUncheckedUpdateManyWithoutProgramInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserAchievmentCreateManyAchievmentInput = {
    id?: number
    userId: number
    timestamp?: Date | string
  }

  export type UserAchievmentUpdateWithoutAchievmentInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAchievmentsNestedInput
  }

  export type UserAchievmentUncheckedUpdateWithoutAchievmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAchievmentUncheckedUpdateManyWithoutAchievmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
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