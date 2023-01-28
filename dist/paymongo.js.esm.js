import axios from 'axios';
import create from 'zustand/vanilla';

function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return exports;
  };
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function (method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function () {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function (record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

var config = {
  BASE_URL: "https://api.paymongo.com/v1"
};

var store = /*#__PURE__*/create(function (set) {
  return {
    secretKey: "",
    setSecretKey: function setSecretKey(secretKey) {
      return set(function (state) {
        return _extends({}, state, {
          secretKey: secretKey
        });
      });
    }
  };
});

var baseUrl = config.BASE_URL;
var axiosInstance = /*#__PURE__*/axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*"
  },
  responseType: "json"
});
store.subscribe(function (state) {
  axiosInstance.defaults.auth = {
    username: state.secretKey,
    password: ""
  };
});

/**
 * @module attachIntent
 * @property {string} intentId - Id of PaymentIntent.
 * @property {string} methodId - Id of PaymentMethod to attach to the PaymentIntent
 * @property {string} clientKey - Client key of the PaymentIntent if the key used is a public API key.
 * @property {string} returnUrl - An optional value for card payment method but required for paymaya. The URL to redirect your customer back to after they authenticate or cancel their payment. This parameter is only used for redirect-based payment methods.
 * @returns {AttachPaymentIntentResponse} - The payment intent data.
 *
 * @example
 * ```js
 * import PaymongoClient from "paymongo.js";
 *
 * const main = async () => {
 *  const client = PaymongoClient("sk_test_key");
 *  data = await client.intent.attach({
 *    intentId: intent.data.id,
 *    methodId: method.data.id,
 *  });
 *  return data
 * }
 * ```
 */
var attachIntent = /*#__PURE__*/function () {
  var _ref2 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
    var intentId, methodId, clientKey, returnUrl, data, res, error;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          intentId = _ref.intentId, methodId = _ref.methodId, clientKey = _ref.clientKey, returnUrl = _ref.returnUrl;
          data = {
            attributes: {
              payment_method: methodId
            }
          };
          if (clientKey) data.attributes.client_key = clientKey;
          if (returnUrl) data.attributes.return_url = returnUrl;
          _context.prev = 4;
          _context.next = 7;
          return axiosInstance.post("/payment_intents/" + intentId + "/attach", {
            data: data
          });
        case 7:
          res = _context.sent;
          return _context.abrupt("return", res.data);
        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](4);
          error = _context.t0;
          throw error.response.data;
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[4, 11]]);
  }));
  return function attachIntent(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var defaultProps = {
  amount: 0,
  paymentMethodAllowed: ["card", "paymaya"],
  currency: "PHP",
  request3DS: "any"
};
/**
 * @module createIntent
 * @property {number} amount - Amount to be collected by the PaymentIntent. A positive integer with minimum amount of 10000. 10000 is the smallest unit in cents. If you want to receive an amount of 100.00, the value that you should pass is 10000. If you want to receive an amount of 1500.50, the value that you should pass is 150050.
 * @property {PaymentType} paymentMethodAllowed - The list of payment method types that the PaymentIntent is allowed to use. Possible values are card and paymaya for now.
 * @property {string} request3DS - This is the only current option for card payment method. Depending on the value, this option decides whether the card must require 3DS authentication or adjust depending on the default 3D Secure configuration of the card. Possible values are either any or automatic. any requires 3D Secure authentication if supported while automatic uses the default 3D Secure configuration of the card.
 * @property {string} currency - Three-letter ISO currency code, in uppercase. PHP is the only supported currency as of the moment.
 * @property {string} description - Description of the payment intent. The value saved here will also be saved to the Payments resource that will be generated on attach PaymentMethod to PaymentIntent endpoint.
 * @property {string} statementDescriptor - You can use this value as the complete description that appears on your customers’ statements. Your account's business name is the default value if not passed. The characters accepted are alphanumeric, , . - ) ( @ + &, and space.
 * @property {MetaData} metadata - A set of key-value pairs that you can attach to the resource. This can be useful for storing additional information about the object in a structured format. Only string values are accepted
 * @returns {PaymentIntentResponse} - The payment intent data.
 *
 * @example
 * ```js
 * import PaymongoClient from "paymongo.js";
 *
 * const main = async () => {
 *  const client = PaymongoClient("sk_test_key");
 *  const data = await client.intent.create({
 *    amount: 10000,
 *    metadata: {
 *      order_id: "abc123",
 *    },
 *  });
 *  return data
 * }
 * ```
 */
var createIntent = /*#__PURE__*/function () {
  var _ref2 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
    var _ref$amount, amount, _ref$currency, currency, _ref$paymentMethodAll, paymentMethodAllowed, _ref$request3DS, request3DS, description, statementDescriptor, metadata, data, res, error;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _ref$amount = _ref.amount, amount = _ref$amount === void 0 ? defaultProps.amount : _ref$amount, _ref$currency = _ref.currency, currency = _ref$currency === void 0 ? defaultProps.currency : _ref$currency, _ref$paymentMethodAll = _ref.paymentMethodAllowed, paymentMethodAllowed = _ref$paymentMethodAll === void 0 ? defaultProps.paymentMethodAllowed : _ref$paymentMethodAll, _ref$request3DS = _ref.request3DS, request3DS = _ref$request3DS === void 0 ? defaultProps.request3DS : _ref$request3DS, description = _ref.description, statementDescriptor = _ref.statementDescriptor, metadata = _ref.metadata;
          data = {
            attributes: {
              amount: amount,
              payment_method_allowed: paymentMethodAllowed,
              payment_method_options: {
                card: {
                  request_three_d_secure: request3DS
                }
              },
              currency: currency
            }
          };
          if (description) data.attributes.description = description;
          if (statementDescriptor) data.attributes.statement_descriptor = statementDescriptor;
          if (metadata) data.attributes.metadata = metadata;
          _context.prev = 5;
          _context.next = 8;
          return axiosInstance.post("/payment_intents", {
            data: data
          });
        case 8:
          res = _context.sent;
          return _context.abrupt("return", res.data);
        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](5);
          error = _context.t0;
          throw error.response.data;
        case 16:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[5, 12]]);
  }));
  return function createIntent(_x) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * @module retrieveIntent
 * @property {string} id - Id of the PaymentIntent.
 * @property {string} clientKey - Client key of the PaymentIntent if the key used is a public key.
 * @returns {PaymentIntentResponse} - The payment intent data.
 *
 * @example
 * ```js
 * import PaymongoClient from "paymongo.js";
 *
 * const main = async () => {
 *  const client = PaymongoClient("sk_test_key");
 *  data = await client.intent.retrieve({
 *    id: "pi_key",
 *  });
 *  return data
 * }
 * ```
 */
var retrieveIntent = /*#__PURE__*/function () {
  var _ref2 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
    var intentId, clientKey, url, res, error;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          intentId = _ref.intentId, clientKey = _ref.clientKey;
          _context.prev = 1;
          url = "/payment_intents/" + intentId;
          if (clientKey) url = url + "?client_key=" + clientKey;
          _context.next = 6;
          return axiosInstance.get(url);
        case 6:
          res = _context.sent;
          return _context.abrupt("return", res.data);
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](1);
          error = _context.t0;
          throw error.response.data;
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 10]]);
  }));
  return function retrieveIntent(_x) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * @module createPaymentMethod
 * @property {PaymentMethodDetails} details - The details of the payment method.
 * @property {string} type - The type of payment method. The possible values are card and paymaya for now.
 * @property {PaymentMethodBilling} billing - The billing details
 * @property {MetaData} metadata - A set of key-value pairs that you can attach to the resource. This can be useful for storing additional information about the object in a structured format. Only string values are accepted.
 * @returns {PaymentMethodResponse} - The payment method data.
 *
 * @example
 * ```js
 * import PaymongoClient from "paymongo.js";
 *
 * const main = async () => {
 *  const client = PaymongoClient("sk_test_key");
 *  const data = await client.method.create({
 *    details: {
 *      cardNumber: "4343434343434345",
 *      expMonth: 3,
 *      expYear: 2023,
 *      cvc: "321",
 *    },
 *    type: "card",
 *  });
 *  return data
 * }
 * ```
 */
var createMethod = /*#__PURE__*/function () {
  var _ref2 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
    var details, type, billing, metadata, data, res, error;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          details = _ref.details, type = _ref.type, billing = _ref.billing, metadata = _ref.metadata;
          data = {
            attributes: {
              details: {
                card_number: details.cardNumber,
                exp_month: details.expMonth,
                exp_year: details.expYear,
                cvc: details.cvc
              },
              type: type
            }
          };
          if (billing) data.attributes.billing = billing;
          if (metadata) data.attributes.metadata = metadata;
          _context.prev = 4;
          _context.next = 7;
          return axiosInstance.post("/payment_methods", {
            data: data
          });
        case 7:
          res = _context.sent;
          return _context.abrupt("return", res.data);
        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](4);
          error = _context.t0;
          throw error.response.data;
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[4, 11]]);
  }));
  return function createMethod(_x) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * @module retrievePaymentMethod
 * @property {string} id - The id of the payment method.
 * @returns {PaymentMethodResponse} - The payment method data.
 *
 * @example
 * ```js
 * import PaymongoClient from "paymongo.js";
 *
 * const main = async () => {
 *  const client = PaymongoClient("sk_test_key");
 *  data = await client.method.retrieve("pm_key");
 *  return data
 * }
 * ```
 */
var retrieveMethod = /*#__PURE__*/function () {
  var _ref = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(methodId) {
    var res, error;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return axiosInstance.get("/payment_methods/" + methodId);
        case 3:
          res = _context.sent;
          return _context.abrupt("return", res.data);
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          error = _context.t0;
          throw error.response.data;
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function retrieveMethod(_x) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * @module createWebhook
 * @property {string} url - The destination URL of the events that happened from your account. Please make sure that the URL is publicly accessible in order for you to receive the event.
 * @property {string[]} events - The list of events to be sent to this webhook. Possible values in the meantime are source.chargeable, payment.paid and payment.failed.
 * @returns {PaymentWebhookResponse} - The payment webhook data.  *
 * @example
 * ```js
 * import PaymongoClient from "paymongo.js";
 *
 * const main = async () => {
 *  const client = PaymongoClient("sk_test_key");
 *  const webhook = await client.webhook.create({
 *    events: ["payment.failed", "payment.paid", "source.chargeable"],
 *    url: "https://example.com/webhook",
 *  });
 *  return webhook;
 * }
 * ```
 */
var createWebhook = /*#__PURE__*/function () {
  var _ref2 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
    var url, events, data, response, error;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          url = _ref.url, events = _ref.events;
          data = {
            attributes: {
              url: url,
              events: events
            }
          };
          _context.prev = 2;
          _context.next = 5;
          return axiosInstance.post("/webhooks", {
            data: data
          });
        case 5:
          response = _context.sent;
          return _context.abrupt("return", response.data);
        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](2);
          error = _context.t0;
          throw error.response.data;
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 9]]);
  }));
  return function createWebhook(_x) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * @module disableWebhook
 * @property {string} webhookId - The webhook id
 * @returns {PaymentWebhookResponse} - The payment webhook data.
 *
 * @example
 * ```js
 * import PaymongoClient from "paymongo.js";
 *
 * const main = async () => {
 *  const client = PaymongoClient("sk_test_key");
 *  const webhook = await client.webhook.disable("webhook_id");
 *  return webhook;
 * }
 * ```
 */
var disableWebhook = /*#__PURE__*/function () {
  var _ref = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(webhookId) {
    var response, error;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return axiosInstance.post("/webhooks/" + webhookId + "/disable");
        case 3:
          response = _context.sent;
          return _context.abrupt("return", response.data);
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          error = _context.t0;
          throw error.response.data;
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function disableWebhook(_x) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * @module enableWebhook
 * @property {string} webhookId - The webhook id
 * @returns {PaymentWebhookResponse} - The payment webhook data.
 *
 * @example
 * ```js
 * import PaymongoClient from "paymongo.js";
 *
 * const main = async () => {
 *  const client = PaymongoClient("sk_test_key");
 *  const webhook = await client.webhook.enable("webhook_id");
 *  return webhook;
 * }
 * ```
 */
var enableWebhook = /*#__PURE__*/function () {
  var _ref = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(webhookId) {
    var response, error;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return axiosInstance.post("/webhooks/" + webhookId + "/enable");
        case 3:
          response = _context.sent;
          return _context.abrupt("return", response.data);
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          error = _context.t0;
          throw error.response.data;
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function enableWebhook(_x) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * @module listWebhook
 * @returns {PaymentWebhookResponse[]} - The list of payment webhooks.
 *
 * @example
 * ```js
 * import PaymongoClient from "paymongo.js";
 *
 * const main = async () => {
 *  const client = PaymongoClient("sk_test_key");
 *  const webhooks = await client.webhook.list();
 *  return webhooks;
 * }
 * ```
 */
var listWebhooks = /*#__PURE__*/function () {
  var _ref = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var response, error;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return axiosInstance.get("/webhooks");
        case 3:
          response = _context.sent;
          return _context.abrupt("return", response.data);
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          error = _context.t0;
          throw error.response.data;
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function listWebhooks() {
    return _ref.apply(this, arguments);
  };
}();

/**
 * @module retrieveWebhook
 * @property {string} webhookId - The webhook id
 * @returns {PaymentWebhookResponse} - The payment webhook data.
 *
 * @example
 * ```js
 * import PaymongoClient from "paymongo.js";
 *
 * const main = async () => {
 *  const client = PaymongoClient("sk_test_key");
 *  const webhook = await client.webhook.retrieve("webhook_id");
 *  return webhook;
 * }
 * ```
 */
var retrieveWebhook = /*#__PURE__*/function () {
  var _ref = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(webhookId) {
    var response, error;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return axiosInstance.get("/webhooks/" + webhookId);
        case 3:
          response = _context.sent;
          return _context.abrupt("return", response.data);
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          error = _context.t0;
          throw error.response.data;
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function retrieveWebhook(_x) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * @module updateWebhook
 * @property {string} webhookId - The ID of the webhook to update.
 * @property {string} url - The webhook url
 * @property {string[]} events - The webhook events ("source.chargeable" | "payment.paid" | "payment.failed")
 * @returns {PaymentWebhookResponse} - The payment webhook data.
 *
 * @example
 * ```js
 * import PaymongoClient from "paymongo.js";
 *
 * const main = async () => {
 *  const client = PaymongoClient("sk_test_key");
 *  const webhook = await client.webhook.update({
 *    webhookId: "webhook_id",
 *    events: ["payment.failed", "payment.paid", "source.chargeable"],
 *    url: "https://example.com/webhook",
 *  });
 *  return webhook;
 * }
 * ```
 */
var updateWebhook = /*#__PURE__*/function () {
  var _ref2 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
    var webhookId, url, events, data, response, error;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          webhookId = _ref.webhookId, url = _ref.url, events = _ref.events;
          data = {
            attributes: {
              url: url,
              events: events
            }
          };
          _context.prev = 2;
          _context.next = 5;
          return axiosInstance.put("/webhooks/" + webhookId, {
            data: data
          });
        case 5:
          response = _context.sent;
          return _context.abrupt("return", response.data);
        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](2);
          error = _context.t0;
          throw error.response.data;
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 9]]);
  }));
  return function updateWebhook(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var defaultProps$1 = {
  amount: 0,
  type: "gcash",
  currency: "PHP"
};
/**
 * @module createSource
 * @property {number} amount - Amount to be authorized by the source. A positive integer with minimum amount of 10000. 10000 is the smallest unit in cents. If you want to receive an amount of 100.00, the value that you should pass is 10000. If you want to receive an amount of 1500.50, the value that you should pass is 150050. Take note that whenever you create a payment from a chargeable source, the source amount should match the Payment that you will create.
 * @property {RedirectType} redirect - redirect url for success and failed payment.
 * @property {SourceType} type - The type of source. Possible values are gcash and grab_pay.
 * @property {CurrencyType} currency - Three-letter ISO currency code, in uppercase. PHP is the only supported currency as of the moment.
 * @property {BillingProps} billing - billing information of the payment source.
 * @returns {CreateSourceResponse} - The response of the create source request.
 *
 * @example
 * ```js
 * import PaymongoClient from "paymongo.js";
 *
 * const main = async () => {
 *  const client = PaymongoClient("pk_test_key");
 *  const data = await client.source.create({
 *    amount: 10000,
 *    redirect: {
 *      success: `http://localhost:3000/payments/success`,
 *      failed: `http://localhost:3000/payments/error`,
 *    },
 *    type: "gcash",
 *    currency: "PHP",
 *  });
 *
 *  return data
 * }
 * ```
 */
var createSource = /*#__PURE__*/function () {
  var _ref2 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
    var _ref$amount, amount, _ref$type, type, _ref$currency, currency, redirect, billing, data, response, error;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _ref$amount = _ref.amount, amount = _ref$amount === void 0 ? defaultProps$1.amount : _ref$amount, _ref$type = _ref.type, type = _ref$type === void 0 ? defaultProps$1.type : _ref$type, _ref$currency = _ref.currency, currency = _ref$currency === void 0 ? defaultProps$1.currency : _ref$currency, redirect = _ref.redirect, billing = _ref.billing;
          data = {
            attributes: {
              amount: amount,
              redirect: redirect,
              type: type,
              currency: currency
            }
          };
          if (billing) data.attributes.billing = billing;
          _context.prev = 3;
          _context.next = 6;
          return axiosInstance.post("/sources", {
            data: data
          });
        case 6:
          response = _context.sent;
          return _context.abrupt("return", response.data);
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](3);
          error = _context.t0;
          throw error.response.data;
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[3, 10]]);
  }));
  return function createSource(_x) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * @module retrieveSource
 * @property {string} sourceId - The id of the payment source.
 * @returns {RetrieveSourceResponse} - The payment source data.
 *
 * @example
 * ```js
 * import PaymongoClient from "paymongo.js";
 *
 * const main = async () => {
 *  const client = PaymongoClient("pk_test_key");
 *  data = await client.source.retrieve("source_id");
 *  return data
 * }
 * ```
 */
var retrieveSource = /*#__PURE__*/function () {
  var _ref = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(sourceId) {
    var res, error;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return axiosInstance.get("/sources/" + sourceId);
        case 3:
          res = _context.sent;
          return _context.abrupt("return", res.data);
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          error = _context.t0;
          throw error.response.data;
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function retrieveSource(_x) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * @module archiveLink
 * @property {string} linkId - ID of the link to archive.
 * @returns {PaymentLinkResponse} - The payment intent data.
 *
 * @example
 * ```js
 * import PaymongoClient from "paymongo.js";
 *
 * const main = async () => {
 *  const client = PaymongoClient("sk_test_key");
 *  data = await client.link.archive("link_id");
 *  return data
 * }
 * ```
 */
var archiveLink = /*#__PURE__*/function () {
  var _ref = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(linkId) {
    var res, error;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return axiosInstance.post("/links/" + linkId + "/archive");
        case 3:
          res = _context.sent;
          return _context.abrupt("return", res.data);
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          error = _context.t0;
          throw error.response.data;
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function archiveLink(_x) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * @module createLink
 * @property {number} amount - The expected amount that the link should receive. A positive integer with a minimum amount of 100. 100 is the smallest unit in cents. If you want the link to receive an amount of 1.00, the value that you should pass is 100. If you want the link to receive an amount of 1500.50, the value that you should pass is 150050.
 * @property {string} description - Describes the purpose of the link. The value is also displayed when you access the link from a browser.
 * @property {string} remarks - (optional) Additional information about the link but for internal use. The value is not displayed if a customer accessed the PayMongo link from the browser.
 * @returns {PaymentLinkResponse} - The payment intent data.
 *
 * @example
 * ```js
 * import PaymongoClient from "paymongo.js";
 *
 * const main = async () => {
 *  const client = PaymongoClient("sk_test_key");
 *  const data = await client.link.create({
 *    amount: 10000,
 *    description: "Payment for order 123",
 *  });
 *  return data
 * }
 * ```
 */
var createLink = /*#__PURE__*/function () {
  var _ref2 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
    var amount, description, remarks, data, res, error;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          amount = _ref.amount, description = _ref.description, remarks = _ref.remarks;
          data = {
            attributes: {
              amount: amount,
              description: description
            }
          };
          if (remarks) data.attributes.remarks = remarks;
          _context.prev = 3;
          _context.next = 6;
          return axiosInstance.post("/links", {
            data: data
          });
        case 6:
          res = _context.sent;
          return _context.abrupt("return", res.data);
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](3);
          error = _context.t0;
          throw error.response.data;
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[3, 10]]);
  }));
  return function createLink(_x) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * @module retrieveFromRefLink
 * @property {string} refId - The unique identifier of the PayMongo link checkout URL.
 * @returns {RetrieveFromRefResponse} - The payment intent data.
 *
 * @example
 * ```js
 * import PaymongoClient from "paymongo.js";
 *
 * const main = async () => {
 *  const client = PaymongoClient("sk_test_key");
 *  data = await client.link.retrieveFromRef("ref_id");
 *  return data
 * }
 * ```
 */
var retrieveFromRefLink = /*#__PURE__*/function () {
  var _ref = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(refId) {
    var res, error;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return axiosInstance.get("/links?reference_number=" + refId);
        case 3:
          res = _context.sent;
          return _context.abrupt("return", res.data);
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          error = _context.t0;
          throw error.response.data;
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function retrieveFromRefLink(_x) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * @module retrieveLink
 * @property {string} linkId - The id of the payment link.
 * @returns {PaymentLinkResponse} - The payment intent data.
 *
 * @example
 * ```js
 * import PaymongoClient from "paymongo.js";
 *
 * const main = async () => {
 *  const client = PaymongoClient("sk_test_key");
 *  data = await client.link.retrieve("link_id");
 *  return data
 * }
 * ```
 */
var retrieveLink = /*#__PURE__*/function () {
  var _ref = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(linkId) {
    var res, error;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return axiosInstance.get("/links/" + linkId);
        case 3:
          res = _context.sent;
          return _context.abrupt("return", res.data);
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          error = _context.t0;
          throw error.response.data;
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function retrieveLink(_x) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * @module unarchiveLink
 * @property {string} linkId - ID of the link to archive.
 * @returns {PaymentLinkResponse} - The payment intent data.
 *
 * @example
 * ```js
 * import PaymongoClient from "paymongo.js";
 *
 * const main = async () => {
 *  const client = PaymongoClient("sk_test_key");
 *  data = await client.link.unarchive("link_id");
 *  return data
 * }
 * ```
 */
var unarchiveLink = /*#__PURE__*/function () {
  var _ref = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(linkId) {
    var res, error;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return axiosInstance.post("/links/" + linkId + "/unarchive");
        case 3:
          res = _context.sent;
          return _context.abrupt("return", res.data);
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          error = _context.t0;
          throw error.response.data;
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function unarchiveLink(_x) {
    return _ref.apply(this, arguments);
  };
}();

var defaultProps$2 = {
  amount: 0,
  currency: "PHP"
};
/**
 * @module createPayment
 * @property {number} amount - Amount of the Payment. A positive integer with minimum amount of 10000. 10000 is the smallest unit in cents. If you want to receive an amount of 100.00, the value that you should pass is 10000. If you want to receive an amount of 1500.50, the value that you should pass is 150050. The amount is also considered as the gross amount.
 * @property {string} currency - Three-letter ISO currency code, in uppercase. PHP is the only supported currency as of the moment.
 * @property {string} description - The description of the payment.
 * @property {string} statement_descriptor - You can use this value as the complete description that appears on your customers’ statements. Your account's business name is the default value if not passed. The characters accepted are alphanumeric, , . - ) ( @ + &, and space.
 * @property {object} source - The source of the payment.
 * @property {string} source.id - The id of the source.
 * @property {string} source.type - Type of a Source resource. Possible value is source
 * @returns {CreatePaymentResponse} - The payment data.
 *
 * @example
 * ```js
 * import PaymongoClient from "paymongo.js";
 *
 * const main = async () => {
 *  const client = PaymongoClient("pk_test_key");
 *  const data = await client.payment.create({
 *    amount: 10000,
 *    currency: "PHP",
 *    source: {
 *      id: "src_utfBfBav5fzXuJiJMDs7J6ye",
 *      type: "source",
 *   },
 *    statement_descriptor: "Test Payment",
            description: "Test Payment"
 *  });
 *  return data
 * }
 * ```
 */
var createPayment = /*#__PURE__*/function () {
  var _ref2 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
    var _ref$amount, amount, _ref$currency, currency, source, description, statement_descriptor, data, res, error;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _ref$amount = _ref.amount, amount = _ref$amount === void 0 ? defaultProps$2.amount : _ref$amount, _ref$currency = _ref.currency, currency = _ref$currency === void 0 ? defaultProps$2.currency : _ref$currency, source = _ref.source, description = _ref.description, statement_descriptor = _ref.statement_descriptor;
          data = {
            attributes: {
              amount: amount,
              currency: currency,
              source: source
            }
          };
          if (description) data.attributes.description = description;
          if (statement_descriptor) data.attributes.statement_descriptor = statement_descriptor;
          _context.prev = 4;
          _context.next = 7;
          return axiosInstance.post("/payments", {
            data: data
          });
        case 7:
          res = _context.sent;
          return _context.abrupt("return", res.data);
        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](4);
          error = _context.t0;
          throw error.response.data;
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[4, 11]]);
  }));
  return function createPayment(_x) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * @module retrievePayment
 * @property {string} paymentId - The id of the payment.
 * @returns {PaymentResponse} - The payment data.
 *
 * @example
 * ```js
 * import PaymongoClient from "paymongo.js";
 *
 * const main = async () => {
 *  const client = PaymongoClient("pk_test_key");
 *  data = await client.payment.retrieve("payment_id");
 *  return data
 * }
 * ```
 */
var retrievePayment = /*#__PURE__*/function () {
  var _ref = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(paymentId) {
    var res, error;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return axiosInstance.get("/payments/" + paymentId);
        case 3:
          res = _context.sent;
          return _context.abrupt("return", res.data);
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          error = _context.t0;
          throw error.response.data;
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function retrievePayment(_x) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * @module listPayments
 * @returns {ListPaymentResponse} - The list of payment webhooks.
 *
 * @example
 * ```js
 * import PaymongoClient from "paymongo.js";
 *
 * const main = async () => {
 *  const client = PaymongoClient("sk_test_key");
 *  const webhooks = await client.payment.list();
 *  return webhooks;
 * }
 * ```
 */
var listPayments = /*#__PURE__*/function () {
  var _ref = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var response, error;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return axiosInstance.get("/payments");
        case 3:
          response = _context.sent;
          return _context.abrupt("return", response.data);
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          error = _context.t0;
          throw error.response.data;
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function listPayments() {
    return _ref.apply(this, arguments);
  };
}();

/**
 * @module PaymongoClient
 * @param secretKey - The secret key of your Paymongo account.
 * @returns {PaymongoClient} - The Paymongo client.
 *
 * @example
 * ```js
 * import PaymongoClient from "paymongo.js";
 *
 * const main = async () => {
 *  const client = PaymongoClient("sk_test_key");
 *  return client;
 * }
 * ```
 * @returns
 */
var PaymongoClient = function PaymongoClient(secretKey) {
  store.setState(function (state) {
    return _extends({}, state, {
      secretKey: secretKey
    });
  });
  return {
    intent: {
      attach: attachIntent,
      create: createIntent,
      retrieve: retrieveIntent
    },
    method: {
      create: createMethod,
      retrieve: retrieveMethod
    },
    webhook: {
      create: createWebhook,
      disable: disableWebhook,
      enable: enableWebhook,
      list: listWebhooks,
      retrieve: retrieveWebhook,
      update: updateWebhook
    },
    source: {
      create: createSource,
      retrieve: retrieveSource
    },
    link: {
      archive: archiveLink,
      create: createLink,
      retrieveFromRef: retrieveFromRefLink,
      retrieve: retrieveLink,
      unarchive: unarchiveLink
    },
    payment: {
      create: createPayment,
      retrieve: retrievePayment,
      list: listPayments
    }
  };
};

export default PaymongoClient;
//# sourceMappingURL=paymongo.js.esm.js.map
