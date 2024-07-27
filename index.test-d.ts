import { expectType, expectError } from "tsd";
import getBundleName from "./index.js";

expectType<string | null>(getBundleName("com.apple.Safari"));
expectError(getBundleName("123"));
