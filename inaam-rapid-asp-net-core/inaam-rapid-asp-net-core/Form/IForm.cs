using System;
using System.Collections.Generic;
using System.Text;

namespace inaam_rapid_asp_net_core.Form
{
    public interface IForm
    {
        public List<FormItem> FormItems { get; set; }
    }
}
