import React from 'react';

const Body = (props)=>
{

    return (
        <div class="content">
            <div class="content-inside">
                {props.content} content over here!
            </div>
        </div>
    )
}
export default Body;