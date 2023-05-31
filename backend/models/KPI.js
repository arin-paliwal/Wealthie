import mongoose from "mongoose";
import { loadType } from "mongoose-currency";
const Schema = mongoose.Schema;
loadType(mongoose);
const monthSchema = new Schema(
    {
        month: String,
        revenue: {
            type: mongoose.Types.Currency,
            currency: "INR",
            get: (v) => v / 100, // divide currency by 100 bcz it is always available in multiples of 100
        },
        expenses: {
            type: mongoose.Types.Currency,
            currency: "INR",
            get: (v) => v / 100, // divide currency by 100 bcz it is always available in multiples of 100
        },
        operationalExpenses: {
            type: mongoose.Types.Currency,
            currency: "INR",
            get: (v) => v / 100, // divide currency by 100 bcz it is always available in multiples of 100
        },
        NonOperationalExpenses: {
            type: mongoose.Types.Currency,
            currency: "INR",
            get: (v) => v / 100, // divide currency by 100 bcz it is always available in multiples of 100
        },
    },
    { toJSON: { getters: true } }
);
const daySchema = new Schema(
    {
        date: String,
        revenue: {
            type: mongoose.Types.Currency,
            currency: "INR",
            get: (v) => v / 100, // divide currency by 100 bcz it is always available in multiples of 100
        },
        expenses: {
            type: mongoose.Types.Currency,
            currency: "INR",
            get: (v) => v / 100, // divide currency by 100 bcz it is always available in multiples of 100
        },
    },
    { toJSON: { getters: true } }
);
const KPISchema = new Schema(
    {
        totalProfit: {
            type: mongoose.Types.Currency,
            currency: "INR",
            get: (v) => v / 100, // divide currency by 100 bcz it is always available in multiples of 100
        },
        totalRevenue: {
            type: mongoose.Types.Currency,
            currency: "INR",
            get: (v) => v / 100, // divide currency by 100 bcz it is always available in multiples of 100
        },
        totalExpenses: {
            type: mongoose.Types.Currency,
            currency: "INR",
            get: (v) => v / 100, // divide currency by 100 bcz it is always available in multiples of 100
        },
        expensesByCategory: {
            type: Map,
            of: {
                type: mongoose.Types.Currency,
                currency: "INR",
                get: (v) => v / 100, // divide currency by 100 bcz it is always available in multiples of 100
            },
        },
        monthlyData: [monthSchema],
        dailyData: [daySchema],
    },
    {
        timestamps: true,
        toJSON: { getters: true },
    }
);
const KPI = mongoose.model("KPI", KPISchema);
export default KPI;
