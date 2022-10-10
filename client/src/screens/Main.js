import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ItemLink from "../components/ItemLink";

function Main({ setItem, setTitle }) {
    return (
        <div class="main-page">
            <div class="topics">
                <h1 class="topics-header">Topics</h1>
                <ul class="topics-list">
                    <li class="topics-item"><span class="caret">Derivatives</span>
                        <ul>
                            <ItemLink
                                setItem={setItem}
                                setTitle={setTitle}
                                title="Slope of Tangent Line"
                                urlName="tangent-line-slope"
                            />
                            <ItemLink
                                setItem={setItem}
                                setTitle={setTitle}
                                title="Definition of the Derivative"
                                urlName="tangent-line-slope"
                            />
                        </ul>
                    </li>
                    <li class="topics-item"><span class="caret">Integrals</span>
                        <ul>
                            <ItemLink
                                setItem={setItem}
                                setTitle={setTitle}
                                title="Area Under the Curve"
                                urlName="tangent-line-slope"
                            />
                            <ItemLink setItem={setItem}
                                setTitle={setTitle}
                                title="Negative and Positive Area"
                                urlName="tangent-line-slope"
                            />
                            <ItemLink setItem={setItem}
                                setTitle={setTitle}
                                title="Polar Area"
                                urlName="tangent-line-slope"
                            />
                            <ItemLink setItem={setItem}
                                setTitle={setTitle}
                                title="Arc Length of a Function"
                                urlName="tangent-line-slope"
                            />
                        </ul>
                    </li>
                    <li class="topics-item"><span class="caret">3D Volumes and Vectors</span>
                        <ul>
                            <ItemLink setItem={setItem}
                                setTitle={setTitle}
                                title="Graph of square root rotated about x-axis"
                                urlName="tangent-line-slope"
                            />
                            <ItemLink setItem={setItem}
                                setTitle={setTitle}
                                title="3D Vectors"
                                urlName="tangent-line-slope"
                            />
                        </ul>
                    </li>
                    <li class="topics-item"><span class="caret">Differential Equations</span>
                        <ul>
                            <ItemLink setItem={setItem}
                                setTitle={setTitle}
                                title="Euler's Method"
                                urlName="tangent-line-slope"
                            />
                        </ul>
                    </li>
                </ul>
            </div>
        </div >
    );
}

export default Main;