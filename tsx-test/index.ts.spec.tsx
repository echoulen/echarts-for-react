import * as React from "react";
import {shallow} from "enzyme";
import ReactEcharts from "../lib/index";
import option from "../__tests__/option"

test("test echarts-for-react's index.d.ts.", () => {
    let component = shallow(
        <ReactEcharts
            option={option}
            className="echarts-for-react"
        />
    );
    expect(component.exists()).toBe(true);

    expect(component.find('div').length).toBe(1);

    expect(component.hasClass('echarts-for-react')).toBe(true);

    expect(component.type()).toEqual('div');
    // default props
    expect(component.instance().props.option).toEqual(option);
    expect(component.instance().props.style).toEqual({height: '300px'});
    expect(component.instance().props.className).toEqual('echarts-for-react');
    expect(component.instance().props.notMerge).toEqual(false);
    expect(component.instance().props.lazyUpdate).toEqual(false);
    expect(component.instance().props.theme).toEqual(null);
    expect(typeof component.instance().props.onChartReady).toEqual('function');
    expect(component.instance().props.showLoading).toEqual(false);
    expect(component.instance().props.onEvents).toEqual({});


    const testFunc = () => {};
    // not default props
    component = shallow(
        <ReactEcharts
            option={option}
            style={{ width: 100 }}
            notMerge
            lazyUpdate
            theme="test_theme"
            onChartReady={testFunc}
            showLoading
            onEvents={{ onClick: testFunc }}
            className="echarts-for-react"
        />
    );

    expect(component.instance().props.option).toEqual(option);
    expect(component.instance().props.style).toEqual({width: 100});
    expect(component.instance().props.className).toEqual('echarts-for-react');
    expect(component.instance().props.notMerge).toEqual(true);
    expect(component.instance().props.lazyUpdate).toEqual(true);
    expect(component.instance().props.theme).toEqual('test_theme');
    expect(component.instance().props.onChartReady).toEqual(testFunc);
    expect(component.instance().props.showLoading).toEqual(true);
    expect(component.instance().props.onEvents).toEqual({ onClick: testFunc });
});
